use reqwest::Client;
use wasm_bindgen::prelude::*;

pub async fn get_access_token(code: &str) -> Result<String, JsValue> {
    let client = Client::new();
    let response = client
        .get("https://localhost:5001/get-access-token")
        .query(&[("code", code)])
        .send()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to send request: {}", e)))?;

    if !response.status().is_success() {
        return Err(JsValue::from_str(&format!(
            "Request failed: {}",
            response.status()
        )));
    }

    let body = response
        .text()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to read response body: {}", e)));

    match body {
        Ok(body) => Ok(body),
        Err(e) => Err(e),
    }
}
