use reqwest::Client;
use serde::Deserialize;
use wasm_bindgen::JsValue;

#[derive(Deserialize)]
struct ValidateResponse {
    status: String,
    claims: Option<Claims>,
}

#[derive(Deserialize)]
struct Claims {
    sub: String,
    iat: usize,
    exp: usize,
}

pub async fn validate_jwt(session_token: &String) -> Result<bool, JsValue> {
    let client = Client::new();
    let response = client
        .get(format!(
            "https://localhost:5001/validate-jwt?token={}",
            session_token
        ))
        .send()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to execute request: {}", e)))?
        .json::<ValidateResponse>()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to parse response JSON: {}", e)))?;

    match response.status.as_str() {
        "valid" => Ok(true),
        _ => Ok(false),
    }
}
