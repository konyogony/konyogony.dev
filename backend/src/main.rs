use actix_cors::Cors;
use actix_governor::{Governor, GovernorConfigBuilder};
use actix_web::{App, HttpRequest, HttpResponse, HttpServer, Responder, get, post, web};
use backend::Stats;
use std::sync::Mutex;

struct AppState {
    stats: Mutex<Option<Stats>>,
}

#[post("/put-stats")]
async fn put_stats(
    req: HttpRequest,
    stats: web::Json<Stats>,
    state: web::Data<AppState>,
) -> impl Responder {
    let secret_from_env = std::env::var("API_KEY").unwrap_or_default();
    let header_secret = req.headers().get("x-api-key").and_then(|h| h.to_str().ok());

    if Some(secret_from_env.as_str()) != header_secret {
        return HttpResponse::Unauthorized().finish();
    }

    let mut current = state.stats.lock().unwrap();
    *current = Some(stats.into_inner());

    HttpResponse::Ok().body("Updated")
}

#[get("/get-stats")]
async fn get_stats(state: web::Data<AppState>) -> impl Responder {
    let current = state.stats.lock().unwrap();
    if let Some(stats) = &*current {
        return HttpResponse::Ok().json(stats);
    }
    HttpResponse::NotFound().body("No stats")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();
    let port = std::env::var("PORT")
        .unwrap_or("8115".into())
        .parse()
        .unwrap();
    let dev = std::env::var("DEV").unwrap_or_default() == "1";

    let governor_conf = GovernorConfigBuilder::default()
        .requests_per_second(4)
        .burst_size(4)
        .finish()
        .unwrap();

    let app_state = web::Data::new(AppState {
        stats: Mutex::new(None),
    });

    HttpServer::new(move || {
        let cors = if dev {
            Cors::permissive()
        } else {
            Cors::default()
                .allowed_origin("https://hypr.konyogony.dev")
                .allowed_origin("https://konyogony.dev")
                .allowed_methods(vec!["GET", "POST"])
                .allowed_headers(vec![
                    actix_web::http::header::CONTENT_TYPE,
                    actix_web::http::header::HeaderName::from_static("x-api-key"),
                ])
        };

        App::new()
            .app_data(app_state.clone())
            .wrap(Governor::new(&governor_conf))
            .wrap(cors)
            .service(get_stats)
            .service(put_stats)
    })
    .bind(("0.0.0.0", port))?
    .run()
    .await
}
