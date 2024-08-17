use reqwest::Client;

pub async fn fetch_jwt(code: &str) -> Result<String, String> {
    let client = Client::new();
    let response = client
        .get("http://localhost:5001/login/")
        .query(&[("code", code)])
        .send()
        .await
        .map_err(|e| format!("Failed to send request: {}", e))?;

    if !response.status().is_success() {
        return Err(format!("Login request failed: {}", response.status()));
    }

    let cookies_header = response
        .headers()
        .get("Set-Cookie")
        .and_then(|header| header.to_str().ok())
        .ok_or_else(|| "No cookies found in response".to_string())?;

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
        .ok_or_else(|| "Session token not found in cookies".to_string())?;

    Ok(session_token)
}
