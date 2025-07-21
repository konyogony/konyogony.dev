use actix_web::{App, HttpResponse, HttpServer, Responder, get, main, post, web};
use serde::Deserialize;

#[derive(Deserialize, Debug)]
struct Disk {
    name: String,
    used: u64,
    available: u64,
    use_percentage: String,
}

#[derive(Deserialize, Debug)]
struct Stats {
    disk: Disk,
}

#[post("/put-stats")]
async fn put_stats(stats: web::Json<Stats>) -> impl Responder {
    println!("{:#?}", stats);
    return HttpResponse::Ok();
}

#[get("/get-stats")]
async fn get_stats() -> impl Responder {
    return HttpResponse::Ok();
}

#[main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(get_stats).service(put_stats))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}
