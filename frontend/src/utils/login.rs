use serde_json::Value;
use wasm_bindgen::JsValue;
use web_sys::console;

use crate::utils::{
    create_or_update_user::{create_or_update_user, User},
    fetch_jwt::fetch_jwt,
    get_access_token::get_access_token,
    get_current_time::get_current_time,
    get_user_data::get_user_data,
};

pub struct LoginSucess {
    pub user: User,
    pub jwt: String,
}

pub async fn login_fn(code: &str) -> Result<LoginSucess, JsValue> {
    let response = match get_access_token(code).await {
        Ok(response) => response,
        Err(e) => {
            return Err(JsValue::from_str(&format!(
                "Failed to get access token: {:?}",
                e
            )))
        }
    };

    let parsed_json: Value = match serde_json::from_str(response.as_str()) {
        Ok(parsed_json) => parsed_json,
        Err(e) => {
            return Err(JsValue::from_str(&format!(
                "Failed to parse access token response: {}",
                e
            )))
        }
    };

    let access_token = match parsed_json["access_token"].as_str() {
        Some(access_token) => access_token,
        None => return Err(JsValue::from_str("Access token not found")),
    };

    let user_data = match get_user_data(access_token.to_string().clone()).await {
        Ok(user_data) => user_data,
        Err(e) => {
            return Err(JsValue::from_str(&format!(
                "Failed to get user data: {:?}",
                e
            )))
        }
    };

    let user_data = User {
        access_token: access_token.to_string(),
        _id: user_data["id"].to_string(),
        login: user_data["login"].to_string(),
        avatar_url: user_data["avatar_url"]
            .to_string()
            .trim_matches('"')
            .to_string(),
        last_active: get_current_time() as u64,
        url: user_data["url"].to_string().trim_matches('"').to_string(),
        html_url: user_data["html_url"]
            .to_string()
            .trim_matches('"')
            .to_string(),
        followers_url: user_data["followers_url"]
            .to_string()
            .trim_matches('"')
            .to_string(),
        organizations_url: user_data["organizations_url"]
            .to_string()
            .trim_matches('"')
            .to_string(),
        repos_url: user_data["repos_url"]
            .to_string()
            .trim_matches('"')
            .to_string(),
        name: user_data["name"].as_str().unwrap_or("").to_string(),
        location: user_data["location"].as_str().unwrap_or("").to_string(),
        bio: user_data["bio"].as_str().unwrap_or("").to_string(),
        email: user_data["email"].as_str().unwrap_or("").to_string(),
        public_repos: user_data["public_repos"].as_u64().unwrap_or(0),
        followers: user_data["followers"].as_u64().unwrap_or(0),
        following: user_data["following"].as_u64().unwrap_or(0),
        created_at: user_data["created_at"].as_str().unwrap_or("").to_string(),
        updated_at: user_data["updated_at"].as_str().unwrap_or("").to_string(),
    };

    match create_or_update_user(&user_data).await {
        Ok(_) => (),
        Err(e) => {
            return Err(JsValue::from_str(&format!(
                "Failed to create or update user: {:?}",
                e
            )))
        }
    }

    let jwt = match fetch_jwt(&user_data._id).await {
        Ok(jwt) => jwt,
        Err(e) => return Err(JsValue::from_str(&format!("Failed to fetch jwt: {:?}", e))),
    };
    Ok(LoginSucess {
        user: user_data,
        jwt: jwt,
    })
}
