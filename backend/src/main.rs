use actix_cors::Cors;
use actix_web::cookie::{Cookie, SameSite};
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use dotenv::dotenv;
use env_logger;
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use openssl::ssl::{SslAcceptor, SslFiletype, SslMethod};
use reqwest::Client;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::env;
use std::time::{SystemTime, UNIX_EPOCH};
use user::{
    create_or_update_user, delete_user, get_all_users, get_user_by_id, User, UserRepository,
};

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

async fn get_user_data(access_token: &str) -> Result<Value, String> {
    let client = Client::new();
    let response = client
        .get("https://api.github.com/user")
        .header("Authorization", format!("Bearer {}", access_token))
        .header("User-Agent", "Actix-Web")
        .send()
        .await
        .map_err(|e| format!("Request error: {}", e))?;

    if response.status().is_success() {
        response
            .json::<Value>()
            .await
            .map_err(|e| format!("JSON parsing error: {}", e))
    } else {
        Err(format!("GitHub API error: {}", response.status()))
    }
}

async fn get_access_token(code: &str) -> Result<String, String> {
    let client = Client::new();
    let github_client_id = env::var("GITHUB_CLIENT_ID").expect("GITHUB_CLIENT_ID not set");
    let github_client_secret =
        env::var("GITHUB_CLIENT_SECRET").expect("GITHUB_CLIENT_SECRET not set");

    let code = code.to_string();

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
                response
                    .json::<AccessTokenResponse>()
                    .await
                    .map(|access_token_response| access_token_response.access_token)
                    .map_err(|e| format!("Failed to parse access token response: {}", e))
            } else {
                Err(format!("GitHub API error: {}", response.status()))
            }
        }
        Err(e) => Err(format!("Failed to get access token: {}", e)),
    }
}

#[get("/login/")]
async fn login(
    oauth_request: web::Query<OAuthRequest>,
    user_repo: web::Data<UserRepository>,
) -> impl Responder {
    let response_access_token = get_access_token(&oauth_request.code).await;
    let token = match response_access_token {
        Ok(token) => token,
        Err(e) => {
            return HttpResponse::BadRequest().body(format!("Failed to get access token: {}", e));
        }
    };

    let response_user_data = get_user_data(&token).await;
    let user_data = match response_user_data {
        Ok(user_data) => user_data,
        Err(e) => {
            return HttpResponse::BadRequest().body(format!("Failed to get user data: {}", e));
        }
    };

    if let (Some(id), Some(login)) = (
        user_data.get("id").and_then(Value::as_u64),
        user_data.get("login").and_then(Value::as_str),
    ) {
        let user = User {
            access_token: token,
            id,
            login: login.to_string(),
            avatar_url: user_data
                .get("avatar_url")
                .and_then(Value::as_str)
                .unwrap_or_default()
                .to_string(),
            last_active: SystemTime::now()
                .duration_since(UNIX_EPOCH)
                .unwrap()
                .as_secs(),
            url: user_data
                .get("url")
                .and_then(Value::as_str)
                .unwrap_or_default()
                .to_string(),
            html_url: user_data
                .get("html_url")
                .and_then(Value::as_str)
                .unwrap_or_default()
                .to_string(),
            followers_url: user_data
                .get("followers_url")
                .and_then(Value::as_str)
                .unwrap_or_default()
                .to_string(),
            organizations_url: user_data
                .get("organizations_url")
                .and_then(Value::as_str)
                .unwrap_or_default()
                .to_string(),
            repos_url: user_data
                .get("repos_url")
                .and_then(Value::as_str)
                .unwrap_or_default()
                .to_string(),
            name: user_data
                .get("name")
                .and_then(Value::as_str)
                .map(String::from),
            location: user_data
                .get("location")
                .and_then(Value::as_str)
                .map(String::from),
            email: user_data
                .get("email")
                .and_then(Value::as_str)
                .map(String::from),
            bio: user_data
                .get("bio")
                .and_then(Value::as_str)
                .map(String::from),
            public_repos: user_data
                .get("public_repos")
                .and_then(Value::as_u64)
                .unwrap_or_default(),
            followers: user_data
                .get("followers")
                .and_then(Value::as_u64)
                .unwrap_or_default(),
            following: user_data
                .get("following")
                .and_then(Value::as_u64)
                .unwrap_or_default(),
            created_at: user_data
                .get("created_at")
                .and_then(Value::as_str)
                .unwrap_or_default()
                .to_string(),
            updated_at: user_data
                .get("updated_at")
                .and_then(Value::as_str)
                .unwrap_or_default()
                .to_string(),
        };
        let user_id = user.id.clone();
        create_or_update_user(user.id, user, user_repo).await;

        let session_token = generate_jwt(user_id);
        match session_token {
            Ok(session_token) => {
                let cookie = Cookie::build("session_token", session_token)
                    .http_only(true)
                    .secure(true)
                    .same_site(SameSite::None)
                    .path("/")
                    .finish();

                HttpResponse::Ok().cookie(cookie).body("Login success!")
            }
            Err(e) => {
                return HttpResponse::BadRequest().body(format!("JWT creation failed: {}", e));
            }
        }
    } else {
        return HttpResponse::BadRequest().body("User data missing from response");
    }
}

#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    sub: u64,
    exp: usize,
}

fn generate_jwt(user_id: u64) -> Result<String, jsonwebtoken::errors::Error> {
    let hours: u64 = 12;
    let key = env::var("ENCRYPTION_KEY").expect("ENCRYPTION_KEY not set");
    let expiration = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .expect("Time went backwards")
        .as_secs()
        + hours * 60 * 60; // 12 Hours

    let claims = Claims {
        sub: user_id,
        exp: expiration as usize,
    };

    Ok(encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(key.as_bytes()),
    )
    .expect("JWT creation failed"))
}

#[derive(Deserialize)]
struct QueryProps {
    token: Option<String>,
}

#[derive(Serialize)]
struct JwtValidationResponse {
    valid: bool,
}

#[get("/validateJwt/")]
async fn check_jwt(query: web::Query<QueryProps>) -> impl Responder {
    match &query.token {
        Some(token) => {
            let validation = Validation::default();
            let key = env::var("ENCRYPTION_KEY").expect("ENCRYPTION_KEY not set");
            let decoded_token = decode::<Claims>(
                token,
                &DecodingKey::from_secret(key.as_bytes()),
                &validation,
            );

            let response = if decoded_token.is_ok() {
                JwtValidationResponse { valid: true }
            } else {
                JwtValidationResponse { valid: false }
            };

            HttpResponse::Ok().json(response)
        }
        None => HttpResponse::BadRequest().json(JwtValidationResponse { valid: false }),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    env_logger::init();

    let user_repo = web::Data::new(UserRepository::new().await);

    let mut builder = SslAcceptor::mozilla_intermediate(SslMethod::tls()).unwrap();
    builder
        .set_private_key_file("/home/kony/localhost-key.pem", SslFiletype::PEM)
        .unwrap();
    builder
        .set_certificate_chain_file("/home/kony/localhost.pem")
        .unwrap();

    HttpServer::new(move || {
        App::new()
            .app_data(user_repo.clone())
            .wrap(
                Cors::default()
                    .allowed_origin("https://localhost:5000") // Later change this to 'konyogony.dev'
                    .allowed_methods(vec!["GET", "POST"])
                    .allowed_headers(vec![
                        actix_web::http::header::CONTENT_TYPE,
                        actix_web::http::header::COOKIE,
                    ])
                    .supports_credentials()
                    .max_age(3600),
            )
            .service(login)
            .service(get_user_by_id)
            .service(get_all_users)
            .service(delete_user)
            .service(check_jwt)
    })
    .bind_openssl("localhost:8443", builder)?
    .run()
    .await
}
