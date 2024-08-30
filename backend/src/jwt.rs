use actix_web::{get, web, HttpResponse, Responder};
use chrono::{Duration, Utc};
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};
use std::env;

#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    sub: String,
    iat: usize,
    exp: usize,
}

#[derive(Deserialize)]
struct GenerateProps {
    id: String,
}

#[get("/generate-jwt")]
pub async fn generate_jwt(query: web::Query<GenerateProps>) -> impl Responder {
    let key = match env::var("ENCRYPTION_KEY") {
        Ok(val) => val,
        Err(_) => return HttpResponse::InternalServerError().json("ENCRYPTION_KEY not set"),
    };

    let now = Utc::now();
    let exp = now + Duration::hours(12);

    let claims = Claims {
        sub: query.id.clone(),
        iat: now.timestamp() as usize,
        exp: exp.timestamp() as usize,
    };

    match encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(key.as_bytes()),
    ) {
        Ok(jwt) => HttpResponse::Ok().json(jwt),
        Err(_) => HttpResponse::InternalServerError().json("Failed to generate token"),
    }
}

#[derive(Deserialize)]
struct ValidateProps {
    token: String,
}

#[get("/validate-jwt")]
pub async fn validate_jwt(query: web::Query<ValidateProps>) -> impl Responder {
    let key = match env::var("ENCRYPTION_KEY") {
        Ok(val) => val,
        Err(_) => return HttpResponse::InternalServerError().json("ENCRYPTION_KEY not set"),
    };

    match decode::<Claims>(
        &query.token,
        &DecodingKey::from_secret(key.as_ref()),
        &Validation::default(),
    ) {
        Ok(_) => HttpResponse::Ok().json("jwt=valid"),
        Err(_) => HttpResponse::Ok().json("jwt=invalid"),
    }
}
