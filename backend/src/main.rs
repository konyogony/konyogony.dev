use actix_cors::Cors;
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use dotenv::dotenv;
use env_logger;
use reqwest::Client;
use serde::{Deserialize, Serialize};
use std::env;
use user::UserRepository;

mod db;
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

#[post("/delete/{id}")]
async fn delete_user(id: web::Path<u64>, user_repo: web::Data<UserRepository>) -> impl Responder {
    let id = id.into_inner();
    let res = user_repo.delete(id).await;
    match res {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to delete user: {}", e)),
    }
}

#[post("/getAll")]
async fn get_all_users(user_repo: web::Data<UserRepository>) -> impl Responder {
    let res = user_repo.get_all().await;
    match res {
        Ok(users) => HttpResponse::Ok().json(users),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to get users: {}", e)),
    }
}

async fn update_user(
    id: web::Path<u64>,
    user: web::Json<user::User>,
    user_repo: web::Data<UserRepository>,
) -> impl Responder {
    let id = id.into_inner();
    let res = user_repo.update_user(id, user.into_inner()).await;
    match res {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to update user: {}", e)),
    }
}

async fn create_user(
    user: web::Json<user::User>,
    user_repo: web::Data<UserRepository>,
) -> impl Responder {
    let res = user_repo.create(user.into_inner()).await;
    match res {
        Ok(users) => HttpResponse::Ok().json(users),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to create user: {}", e)),
    }
}

#[post("/getById/{id}")]
async fn get_user_by_id(
    id: web::Path<u64>,
    user_repo: web::Data<UserRepository>,
) -> impl Responder {
    let id = id.into_inner();
    let res = user_repo.get_by_id(id).await;
    match res {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(e) => HttpResponse::InternalServerError().body(format!("Failed to get user: {}", e)),
    }
}

async fn get_user_data(data: web::Data<UserDataRequest>) -> impl Responder {
    let client = Client::new();
    let access_token = &data.access_token;

    let response = client
        .get("https://api.github.com/user")
        .header("Authorization", format!("Bearer {}", access_token))
        .header("User-Agent", "Actix-Web")
        .send()
        .await;

    match response {
        Ok(response) => {
            if response.status().is_success() {
                match response.json::<serde_json::Value>().await {
                    Ok(json_data) => HttpResponse::Ok().json(json_data),
                    Err(_) => HttpResponse::InternalServerError()
                        .body("Failed to parse user data response"),
                }
            } else {
                HttpResponse::BadRequest()
                    .body(format!("GitHub API returned error: {}", response.status()))
            }
        }
        Err(e) => {
            HttpResponse::InternalServerError().body(format!("Failed to fetch user data: {}", e))
        }
    }
}

#[get("/getAccessToken/")]
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

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    env_logger::init();

    // Initialize UserRepository
    let user_repo = web::Data::new(UserRepository::new().await);

    HttpServer::new(move || {
        App::new()
            .app_data(user_repo.clone())
            .wrap(
                Cors::default()
                    .allowed_origin("http://localhost:5000") // Later change this to 'konyogony.dev'
                    .allowed_methods(vec!["GET", "POST"])
                    .allowed_headers(vec![actix_web::http::header::CONTENT_TYPE])
                    .max_age(3600),
            )
            .service(github_oauth)
            .service(get_user_by_id)
            .service(get_all_users)
            .service(delete_user)
    })
    .bind("127.0.0.1:5001")?
    .run()
    .await
}
