use actix_governor::{Governor, GovernorConfigBuilder};
use actix_web::{App, HttpRequest, HttpResponse, HttpServer, Responder, get, main, post, web};
use serde::{Deserialize, Serialize};
use std::fs::File;
use std::io::Write;

#[derive(Deserialize, Debug, Serialize)]
struct Disk {
    name: String,
    used: u64,
    available: u64,
    use_percentage: String,
}

#[derive(Deserialize, Debug, Serialize)]
struct Uptime {
    current_time: String,
    uptime: String,
}

#[derive(Deserialize, Debug, Serialize)]
struct Ram {
    current: u64,
    max: u64,
    use_percentage: String,
}

#[derive(Deserialize, Debug, Serialize)]
struct Spotify {
    title: String,
    artist: String,
}

#[derive(Deserialize, Debug, Serialize)]
struct Stats {
    disk: Disk,
    uptime: Uptime,
    ram: Ram,
    uname: String,
    package_num: String,
    cpu_temp: String,
    spotify: Spotify,
}

#[post("/put-stats")]
async fn put_stats(req: HttpRequest, stats: web::Json<Stats>) -> impl Responder {
    let secret_from_env = std::env::var("API_KEY").unwrap_or_default();
    let header_secret = req.headers().get("x-api-key").and_then(|h| h.to_str().ok());

    if Some(secret_from_env.as_str()) != header_secret {
        return HttpResponse::Unauthorized().body("Unauthorized api route");
    }

    let json_str = match serde_json::to_string_pretty(&stats) {
        Ok(s) => s,
        Err(e) => {
            return HttpResponse::InternalServerError()
                .body(format!("Failed to serialize stats, error: {e}"));
        }
    };

    let mut file = match File::create("data/stats.json") {
        Ok(f) => f,
        Err(e) => {
            return HttpResponse::InternalServerError()
                .body(format!("Failed to create stats file, error: {e}"));
        }
    };

    if let Err(e) = file.write_all(json_str.as_bytes()) {
        return HttpResponse::InternalServerError()
            .body(format!("Failed to write to output file, error: {e}"));
    }

    HttpResponse::Ok().body("Uploaded new stats succesfully!")
}

#[get("/get-stats")]
async fn get_stats() -> impl Responder {
    match std::fs::read_to_string("data/stats.json") {
        Ok(json_str) => HttpResponse::Ok()
            .content_type("application/json")
            .body(json_str),
        Err(e) => HttpResponse::InternalServerError()
            .body(format!("Failed to read stats file, error: {e}")),
    }
}

#[main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();

    let governor_conf = GovernorConfigBuilder::default()
        .requests_per_second(1)
        .burst_size(2)
        .finish()
        .unwrap();

    HttpServer::new(move || {
        App::new()
            .wrap(Governor::new(&governor_conf))
            .service(get_stats)
            .service(put_stats)
    })
    .bind(("0.0.0.0", 8115))?
    .run()
    .await
}
