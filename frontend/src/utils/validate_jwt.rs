use reqwest::Client;
use serde::{Deserialize, Serialize};
use wasm_bindgen::JsValue;
use web_sys::console;

#[derive(Deserialize, Serialize)]
struct ValidateResponse {
    status: String,
    claims: Option<Claims>,
}

#[derive(Deserialize, Serialize)]
struct Claims {
    sub: String,
    iat: usize,
    exp: usize,
}

pub async fn validate_jwt(session_token: &String) -> Result<bool, JsValue> {
    let client = Client::new();
    let response = client
        .post("https://localhost:5001/validate-jwt")
        .json(&serde_json::json!({ "token": session_token }))
        .send()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to execute request: {}", e)))?
        .json::<ValidateResponse>()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to parse response JSON: {}", e)))?;
    
    let json = serde_json::to_string(&response).unwrap();
    console::log_1(&JsValue::from_str(&json));
    
    match response.status.as_str() {
        "valid" => Ok(true),
        _ => Ok(false),
    }
}
