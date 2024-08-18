use std::collections::HashMap;

use reqwest::Client;
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
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

pub async fn create_or_update_user(user: HashMap<String, Value>) -> Result<String, JsValue> {
    let user = User {
        access_token: user
            .get("access_token")
            .and_then(Value::as_str)
            .unwrap_or_default()
            .to_string(),
        login: user
            .get("login")
            .and_then(Value::as_str)
            .unwrap_or_default()
            .to_string(),
        id: user.get("id").and_then(Value::as_u64).unwrap_or_default(),
        last_active: user
            .get("last_active")
            .and_then(Value::as_u64)
            .unwrap_or_default(),
        avatar_url: user
            .get("avatar_url")
            .and_then(Value::as_str)
            .unwrap_or_default()
            .to_string(),
        url: user
            .get("url")
            .and_then(Value::as_str)
            .unwrap_or_default()
            .to_string(),
        html_url: user
            .get("html_url")
            .and_then(Value::as_str)
            .unwrap_or_default()
            .to_string(),
        followers_url: user
            .get("followers_url")
            .and_then(Value::as_str)
            .unwrap_or_default()
            .to_string(),
        organizations_url: user
            .get("organizations_url")
            .and_then(Value::as_str)
            .unwrap_or_default()
            .to_string(),
        repos_url: user
            .get("repos_url")
            .and_then(Value::as_str)
            .unwrap_or_default()
            .to_string(),
        name: user.get("name").and_then(Value::as_str).map(String::from),
        location: user
            .get("location")
            .and_then(Value::as_str)
            .map(String::from),
        email: user.get("email").and_then(Value::as_str).map(String::from),
        bio: user.get("bio").and_then(Value::as_str).map(String::from),
        public_repos: user
            .get("public_repos")
            .and_then(Value::as_u64)
            .unwrap_or_default(),
        followers: user
            .get("followers")
            .and_then(Value::as_u64)
            .unwrap_or_default(),
        following: user
            .get("following")
            .and_then(Value::as_u64)
            .unwrap_or_default(),
        created_at: user
            .get("created_at")
            .and_then(Value::as_str)
            .unwrap_or_default()
            .to_string(),
        updated_at: user
            .get("updated_at")
            .and_then(Value::as_str)
            .unwrap_or_default()
            .to_string(),
    };

    let client = Client::new();
    let response = client
        .get("https://localhost:5001/createOrUpdateUser")
        .json(&user)
        .send()
        .await
        .map_err(|e| JsValue::from_str(&format!("Failed to send request: {}", e)))?;

    if !response.status().is_success() {
        return Err(JsValue::from_str(&format!(
            "Create or update user request failed: {}",
            response.status()
        )));
    }

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
