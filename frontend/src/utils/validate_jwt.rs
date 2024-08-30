use reqwest::Client;
use wasm_bindgen::JsValue;

pub async fn validate_jwt(session_token: &str) -> Result<bool, JsValue> {
    let client = Client::new();

    let response = client
        .get(format!(
            "https://localhost:5001/validate-jwt?token={}",
            session_token
        ))
        .send()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to execute request: {}", e)))?
        .text()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to read response text: {}", e)))?;

    let jwt = response.strip_prefix("jwt=").unwrap_or(&response);
    web_sys::console::log_1(&format!("JWTa: {:?}", jwt).into());
    match jwt {
        "valid" => Ok(true),
        "invalid" => Ok(false),
        _ => Ok(false),
    }
}
