use reqwest::Client;

pub async fn fetch_jwt(code: &str) -> Result<String, String> {
    let client = Client::new();
    let response = client
        .get("http://localhost:5001/login/")
        .query(&[("code", code)])
        .send()
        .await
        .map_err(|e| format!("Failed to send request: {}", e))?;

    if response.status().is_success() {
        let cookies = response.headers().get("Set-Cookie");
        if let Some(cookies) = cookies {
            let cookies = cookies.to_str().unwrap();
            let cookies: Vec<&str> = cookies.split("; ").collect();
            for cookie in cookies {
                let (key, value) = cookie.split_once("=").unwrap();
                if key == "session_token" {
                    return Ok(value.to_string());
                }
            }
            Err("Session token not found in cookies".to_string())
        } else {
            Err("No cookies found in response".to_string())
        }
    } else {
        Err(format!("Login request failed: {}", response.status()))
    }
}
