use actix_cors::Cors;
use actix_web::{web, App, HttpServer};
use dotenv::dotenv;
use env_logger;
use jwt::{generate_jwt, validate_jwt};
use openssl::ssl::{SslAcceptor, SslFiletype, SslMethod};
use gh::{get_access_token, get_user_data};
use user::{create_or_update_user, delete_user, fetch_all_users, get_user_by_id, UserRepository};

mod db;
mod jwt;
mod user;
mod gh;

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
                    .allowed_origin("https://localhost")
                    .allowed_origin("https://github.com")
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
