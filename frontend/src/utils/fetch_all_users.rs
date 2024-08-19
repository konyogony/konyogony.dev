use gloo_net::http::Request;
use wasm_bindgen::JsValue;

pub async fn fetch_all_users() -> Result<String, JsValue> {
    let response = Request::post("https://localhost:5001/getAllUsers")
        .send()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to execute request: {}", e)))?;

    if !response.ok() {
        return Err(JsValue::from_str(&format!(
            "Create or update user request failed: {}",
            response.status()
        )));
    }

    response
        .text()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to read response body: {}", e)))
}
