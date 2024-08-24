use reqwest::Client;
use wasm_bindgen::JsValue;

pub async fn fetch_jwt(id: &String) -> Result<String, JsValue> {
    let client = Client::new();

    let response = client
        .get(format!("https://localhost:5001/generate-jwt?id={}", id))
        .send()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to execute request: {}", e)))?
        .text()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to read response text: {}", e)))?;

    let jwt = response
        .strip_prefix("jwt=")
        .unwrap_or(&response)
        .to_string();

    Ok(jwt)
}
