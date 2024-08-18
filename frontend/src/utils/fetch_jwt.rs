use reqwest::Client;
use wasm_bindgen::prelude::*;
use web_sys::console;

pub async fn fetch_jwt(code: &str) -> Result<String, JsValue> {
    let client = Client::new();
    let response = client
        .get("https://localhost:5001/login/")
        .query(&[("code", code)])
        .send()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to send request: {}", e)))?;

    if !response.status().is_success() {
        return Err(JsValue::from_str(&format!(
            "Login request failed: {}",
            response.status()
        )));
    }

    let cookies_header = response
        .headers()
        .get("Set-Cookie")
        .and_then(|header| header.to_str().ok())
        .ok_or_else(|| JsValue::from_str("No cookies found in response"))?
        .to_string();

    let body_text = response
        .text()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to read response body: {}", e)))?;
    console::log_1(&JsValue::from_str(&body_text));

    let session_token = cookies_header
        .split("; ")
        .find_map(|cookie| {
            let mut parts = cookie.splitn(2, '=');
            let key = parts.next()?;
            let value = parts.next()?;
            if key == "session_token" {
                Some(value.to_string())
            } else {
                None
            }
        })
        .ok_or_else(|| JsValue::from_str("Session token not found in cookies"))?;

    Ok(session_token)
}
