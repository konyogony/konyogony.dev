use reqwest::Client;
use serde_json::Value;
use wasm_bindgen::prelude::*;

pub async fn get_user_data(access_token: String) -> Result<Value, JsValue> {
    let client = Client::new();
    let response = client
        .get("https://localhost:5001/get-user-data")
        .query(&[("access_token", access_token)])
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
        .json::<Value>()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to read response body: {}", e)));

    match body {
        Ok(body) => Ok(body),
        Err(e) => Err(e),
    }
}
