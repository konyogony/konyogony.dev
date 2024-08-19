use reqwest::Client;
use serde::{Deserialize, Serialize};
use wasm_bindgen::JsValue;

#[derive(Serialize, Deserialize)]
pub struct User {
    pub access_token: String,
    pub login: String,
    pub id: u64,
    pub last_active: u64,
    pub avatar_url: String,
    pub url: String,
    pub html_url: String,
    pub followers_url: String,
    pub organizations_url: String,
    pub repos_url: String,
    pub name: Option<String>,
    pub location: Option<String>,
    pub email: Option<String>,
    pub bio: Option<String>,
    pub public_repos: u64,
    pub followers: u64,
    pub following: u64,
    pub created_at: String,
    pub updated_at: String,
}

pub async fn create_or_update_user(user: User) -> Result<String, JsValue> {
    let client = Client::new();
    let request = client
        .get("https://localhost:5001/createOrUpdateUser")
        .json(&user)
        .build()
        .map_err(|e| JsValue::from_str(&format!("Failed to build: {}", e)))?;

    let response = client
        .execute(request)
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to execute: {}", e)));

    match response {
        Ok(response) => {
            if !response.status().is_success() {
                return Err(JsValue::from_str(&format!(
                    "Create or update user request failed: {}",
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
        Err(e) => Err(e),
    }
}
