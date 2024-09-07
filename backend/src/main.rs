use actix_cors::Cors;
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use dotenv::dotenv;
use env_logger;
use jwt::{generate_jwt, validate_jwt};
use openssl::ssl::{SslAcceptor, SslFiletype, SslMethod};
use reqwest::Client;
use serde::{Deserialize, Serialize};
use std::env;
use user::{create_or_update_user, delete_user, fetch_all_users, get_user_by_id, UserRepository};

mod db;
mod jwt;
mod user;

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

#[derive(Deserialize)]
struct UserDataRequest {
    access_token: String,
}

#[get("/get-access-token")]
async fn get_access_token(oauth_request: web::Query<OAuthRequest>) -> impl Responder {
    let client = Client::new();
    let github_client_id = env::var("GITHUB_CLIENT_ID").expect("GITHUB_CLIENT_ID not set");
    let github_client_secret =
        env::var("GITHUB_CLIENT_SECRET").expect("GITHUB_CLIENT_SECRET not set");

    let code = &oauth_request.code;

    let params = [
        ("client_id", &github_client_id),
        ("client_secret", &github_client_secret),
        ("code", &code),
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
            if response.status().is_success() {
                HttpResponse::Ok().body(response.text().await.unwrap_or_default())
            } else {
                HttpResponse::BadRequest().body(format!("GitHub API error: {}", response.status()))
            }
        }
        Err(e) => HttpResponse::BadRequest().body(format!("Failed to get access token: {}", e)),
    }
}

#[get("/get-user-data")]
async fn get_user_data(access_token: web::Query<UserDataRequest>) -> impl Responder {
    let client = Client::new();
    let response = client
        .get("https://api.github.com/user")
        .header(
            "Authorization",
            format!("Bearer {}", access_token.access_token),
        )
        .header("User-Agent", "Actix-Web")
        .send()
        .await
        .map_err(|e| format!("Request error: {}", e));

    match response {
        Ok(response) => {
            if response.status().is_success() {
                HttpResponse::Ok().body(response.text().await.unwrap_or_default())
            } else {
                HttpResponse::BadRequest().body(format!("GitHub API error: {}", response.status()))
            }
        }
        Err(e) => HttpResponse::BadRequest().body(format!("Failed to get access token: {}", e)),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    env_logger::init();

    let user_repo = web::Data::new(UserRepository::new().await);

    let mut builder = SslAcceptor::mozilla_intermediate(SslMethod::tls()).unwrap();
    builder
        .set_private_key_file(
            "/home/kony/Documents/GitHub/konyogony.dev/backend/localhost-key.pem",
            SslFiletype::PEM,
        )
        .unwrap();
    builder
        .set_certificate_chain_file(
            "/home/kony/Documents/GitHub/konyogony.dev/backend/localhost.pem",
        )
        .unwrap();
    // This obv will be changed
    HttpServer::new(move || {
        App::new()
            .app_data(user_repo.clone())
            .wrap(
                Cors::default()
                    .allowed_origin("https://localhost") // Later change this to 'konyogony.dev'
                    .allowed_methods(vec!["GET", "POST"])
                    .allowed_headers(vec![
                        actix_web::http::header::CONTENT_TYPE,
                        actix_web::http::header::COOKIE,
                    ])
                    .supports_credentials()
                    .max_age(3600),
            )
            .service(get_access_token)
            .service(get_user_by_id)
            .service(fetch_all_users)
            .service(delete_user)
            .service(get_user_data)
            .service(create_or_update_user)
            .service(generate_jwt)
            .service(validate_jwt)
    })
    .bind_openssl("localhost:5001", builder)?
    .run()
    .await
}
