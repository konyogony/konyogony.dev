use gloo_net::http::Request;
use serde::{Deserialize, Serialize};
use wasm_bindgen::JsValue;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct User {
    pub access_token: String,
    pub login: String,
    pub id: String,
    pub last_active: u64,
    pub avatar_url: String,
    pub url: String,
    pub html_url: String,
    pub followers_url: String,
    pub organizations_url: String,
    pub repos_url: String,
    pub name: String,
    pub location: String,
    pub email: String,
    pub bio: String,
    pub public_repos: u64,
    pub followers: u64,
    pub following: u64,
    pub created_at: String,
    pub updated_at: String,
}

pub async fn create_or_update_user(user: User) -> Result<String, JsValue> {
    let response = Request::post("https://localhost:5001/createOrUpdateUser")
        .json(&user)
        .map_err(|e| JsValue::from_str(&format!("Failed to build request: {}", e)))?
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
