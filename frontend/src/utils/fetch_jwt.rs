use reqwest::Client;
use wasm_bindgen::JsValue;
use web_sys::console;

pub async fn generate_jwt(id: String) -> Result<String, JsValue> {
    let client = Client::new();

    let response = client
        .get(format!("https://localhost:5001/generate-jwt?id={}", id))
        .send()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to execute request: {}", e)))?
        .text()
        .await
        .unwrap();

    let jwt = response
        .strip_prefix("jwt=")
        .unwrap_or(&response)
        .to_string();

    Ok(jwt)
}
