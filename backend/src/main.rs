use actix_web::{post, web, App, HttpResponse, HttpServer, Responder};
use dotenv::dotenv;
use reqwest::Client;
use serde::{Deserialize, Serialize};
use std::env;

#[derive(Deserialize)]
struct OAuthRequest {
    code: String,
}

#[derive(Serialize, Deserialize)]
struct AccessTokenResponse {
    access_token: String,
    token_type: String,
    scope: Option<String>,
}

#[post("/oauth/github")]
async fn github_oauth(oauth_request: web::Query<OAuthRequest>) -> impl Responder {
    let client = Client::new();
    let github_client_id = env::var("GITHUB_CLIENT_ID").expect("GITHUB_CLIENT_ID not set");
    let github_client_secret =
        env::var("GITHUB_CLIENT_SECRET").expect("GITHUB_CLIENT_SECRET not set");

    let code = &oauth_request.code;
    let params = [
        ("client_id", &github_client_id),
        ("client_secret", &github_client_secret),
        ("code", code),
    ];

    let response = client
        .post("https://github.com/login/oauth/access_token")
        .header("Accept", "application/json")
        .header("Content-Type", "application/x-www-form-urlencoded")
        .form(&params)
        .send()
        .await;

    match response {
        Ok(response) => {
            if let Ok(access_token_response) = response.json::<AccessTokenResponse>().await {
                HttpResponse::Ok().json(access_token_response)
            } else {
                HttpResponse::BadRequest().body("Failed to parse access token response")
            }
        }
        Err(e) => HttpResponse::InternalServerError()
            .body(format!("Failed to fetch access token: {:?}", e)),
    }
}

use actix_cors::Cors;
use env_logger;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    env_logger::init(); // Initialize the logger

    HttpServer::new(|| {
        App::new()
            .wrap(
                Cors::default()
                    .allowed_origin("http://localhost:5000")
                    .allowed_methods(vec!["GET", "POST"])
                    .allowed_headers(vec![actix_web::http::header::CONTENT_TYPE])
                    .max_age(3600),
            )
            .service(github_oauth)
    })
    .bind("127.0.0.1:5001")?
    .run()
    .await
}
