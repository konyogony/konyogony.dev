use serde::Deserialize;

#[derive(Deserialize)]
struct JwtValidationResponse {
    valid: bool,
}

pub async fn validate_jwt(session_token: &str) -> bool {
    let token_url = format!(
        "https://127.0.0.1:5001/validateJwt/?token={}",
        session_token
    );
    match reqwest::get(&token_url).await {
        Ok(response) => {
            let body = response.text().await.unwrap_or_default();
            let json: Result<JwtValidationResponse, _> = serde_json::from_str(&body);
            json.map_or(false, |res| res.valid)
        }
        Err(_) => false,
    }
}
