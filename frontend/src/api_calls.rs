use crate::utils::util::{log_error, Props};
use gloo::net::http::Request;
use serde_json::Value;

// Define an async function that fetches the access token from the server.
pub async fn fetch_access_token(url: &str) -> Option<String> {
    match Request::get(url).send().await {
        Ok(response) => {
            if response.status() != 200 {
                log_error(Props {
                    message: format!("Failed to fetch token, status: {}", response.status())
                        .to_string(),
                    redirect_url: Some("/login/error".to_string()),
                });
                return None;
            }
            match response.json::<Value>().await {
                Ok(response_json) => {
                    if let Some(token) = response_json.get("access_token").and_then(|v| v.as_str())
                    {
                        Some(token.to_string())
                    } else {
                        log_error(Props {
                            message: "Access token not found in response".to_string(),
                            redirect_url: Some("/login/error".to_string()),
                        });
                        None
                    }
                }
                Err(e) => {
                    log_error(Props {
                        message: format!("Failed to parse JSON response: {:?}", e).to_string(),
                        redirect_url: Some("/login/error".to_string()),
                    });
                    None
                }
            }
        }
        Err(e) => {
            log_error(Props {
                message: format!("Failed to fetch token: {:?}", e).to_string(),
                redirect_url: Some("/login/error".to_string()),
            });
            None
        }
    }
}
