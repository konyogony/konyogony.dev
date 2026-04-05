use actix_cors::Cors;
use actix_governor::{Governor, GovernorConfigBuilder};
use actix_web::{App, HttpRequest, HttpResponse, HttpServer, Responder, get, main, post, web};
use actix_web_lab::sse;
use serde::{Deserialize, Serialize};
use std::sync::RwLock;
use std::time::Duration;
use tokio::sync::broadcast;

#[derive(Clone, Deserialize, Debug, Serialize)]
struct Disk {
    name: String,
    used: u64,
    available: u64,
    use_percentage: String,
}

#[derive(Clone, Deserialize, Debug, Serialize)]
struct Uptime {
    current_time: String,
    uptime: String,
}

#[derive(Clone, Deserialize, Debug, Serialize)]
struct Ram {
    current: u64,
    max: u64,
    use_percentage: String,
}

#[derive(Clone, Deserialize, Debug, Serialize)]
struct Spotify {
    title: String,
    artist: String,
}

#[derive(Clone, Deserialize, Debug, Serialize)]
struct Stats {
    disk: Disk,
    uptime: Uptime,
    ram: Ram,
    uname: String,
    package_num: String,
    cpu_temp: String,
    spotify: Spotify,
}

struct AppState {
    current_stats: RwLock<Option<Stats>>,
    tx: broadcast::Sender<Stats>,
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
        return HttpResponse::Unauthorized().body("Unauthorized api route");
    }

    let stats_inner = stats.into_inner();

    if let Ok(mut current) = state.current_stats.write() {
        *current = Some(stats_inner.clone());
    }

    let _ = state.tx.send(stats_inner);

    HttpResponse::Ok().body("Uploaded new stats successfully!")
}

#[get("/get-stats")]
async fn get_stats(state: web::Data<AppState>) -> impl Responder {
    if let Ok(current) = state.current_stats.read() {
        if let Some(stats) = &*current {
            return HttpResponse::Ok().json(stats);
        }
    }
    HttpResponse::NotFound().body("No stats available yet")
}

#[get("/stream-stats")]
async fn stream_stats(state: web::Data<AppState>) -> impl Responder {
    let mut rx = state.tx.subscribe();

    let (tx, client_rx) = tokio::sync::mpsc::channel::<sse::Event>(10);

    if let Ok(current) = state.current_stats.read() {
        if let Some(stats) = &*current {
            if let Ok(json_str) = serde_json::to_string(stats) {
                let _ = tx.try_send(sse::Event::Data(sse::Data::new(json_str)));
            }
        }
    }

    tokio::spawn(async move {
        while let Ok(stats) = rx.recv().await {
            let json_str = serde_json::to_string(&stats).unwrap_or_default();
            if tx
                .send(sse::Event::Data(sse::Data::new(json_str)))
                .await
                .is_err()
            {
                break;
            }
        }
    });

    sse::Sse::from_infallible_receiver(client_rx)
        .with_keep_alive(Duration::from_secs(15))
        .with_retry_duration(Duration::from_secs(5))
}

#[main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();

    let dev = std::env::var("DEV").unwrap_or_default() == "1";
    let port: u16 = std::env::var("PORT").unwrap_or_else(|_| "8115".to_string()).parse().unwrap_or(8115);

    let governor_conf = GovernorConfigBuilder::default()
        .requests_per_second(4)
        .burst_size(4)
        .finish()
        .unwrap();

    let (tx, _) = broadcast::channel(16);
    let app_state = web::Data::new(AppState {
        current_stats: RwLock::new(None),
        tx,
    });

    HttpServer::new(move || {
        let cors = if dev {
            Cors::permissive()
        } else {
            Cors::default()
                .allowed_origin("https://hypr.konyogony.dev")
                .allowed_methods(vec!["GET", "POST", "OPTIONS"])
                .allowed_headers(vec![actix_web::http::header::CONTENT_TYPE])
                .max_age(3600)
        };

        App::new()
            .app_data(app_state.clone())
            .wrap(Governor::new(&governor_conf))
            .wrap(cors)
            .service(get_stats)
            .service(put_stats)
            .service(stream_stats)
    })
    .bind(("0.0.0.0", port))?
    .run()
    .await
}
