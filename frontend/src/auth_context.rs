use gloo::net::http::Request;
use serde_json::Value;
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::spawn_local;
use web_sys::window;
use yew::prelude::*;

#[wasm_bindgen(module = "/js/cookies.js")]
extern "C" {
    fn setCookie(name: &str, value: &str, days: i32);
    fn getCookie(name: &str) -> JsValue;
    fn eraseCookie(name: &str);
}

#[derive(Clone, PartialEq)]
pub struct AuthContext {
    pub is_authenticated: UseStateHandle<bool>,
    pub login: Callback<MouseEvent>,
    pub logout: Callback<MouseEvent>,
    pub access_token: UseStateHandle<Option<String>>, // Ensure this is Option<String>
}

#[derive(Clone, PartialEq)]
pub struct AuthContextProvider {
    pub context: AuthContext,
}

impl AuthContextProvider {
    pub fn new(
        is_authenticated: UseStateHandle<bool>,
        login: Callback<MouseEvent>,
        logout: Callback<MouseEvent>,
        access_token: UseStateHandle<Option<String>>, // Ensure this is Option<String>
    ) -> Self {
        Self {
            context: AuthContext {
                is_authenticated,
                login,
                logout,
                access_token,
            },
        }
    }
}

#[derive(Properties, PartialEq)]
pub struct Props {
    pub children: Html,
}

#[function_component(AuthContextProviderComponent)]
pub fn auth_provider(props: &Props) -> Html {
    let is_authenticated = use_state(|| {
        let cookie_value = getCookie("is_authenticated");
        cookie_value
            .as_string()
            .unwrap_or_else(|| "false".to_string())
            == "true"
    });

    let access_token = use_state(|| {
        let cookie_value = getCookie("access_token");
        cookie_value.as_string().map_or(None, |v| Some(v))
    });

    let login: Callback<MouseEvent> = {
        Callback::from(move |_| {
            let client_id = "Ov23ctbBV9xqBs2EruxY";
            let auth_url = format!(
                "https://github.com/login/oauth/authorize?client_id={}",
                client_id
            );
            if let Err(e) = window().unwrap().location().set_href(&auth_url) {
                web_sys::console::error_1(&format!("Failed to redirect: {:?}", e).into());
            }
        })
    };

    let logout: Callback<MouseEvent> = {
        let is_authenticated = is_authenticated.clone();
        let access_token = access_token.clone();
        Callback::from(move |_| {
            is_authenticated.set(false);
            access_token.set(None);
            eraseCookie("is_authenticated");
            eraseCookie("access_token");
        })
    };

    {
        let is_authenticated = is_authenticated.clone();
        let access_token = access_token.clone();
        let has_processed = use_state(|| false);

        use_effect(move || {
            let path = window().unwrap().location().pathname().unwrap();

            if path == "/oauth/github" && !*has_processed {
                let url = window().unwrap().location().href().unwrap();
                if url.contains("?code=") {
                    let code = url.split("?code=").nth(1).unwrap_or("");
                    let token_url = format!("http://127.0.0.1:5001/getAccessToken/?code={}", code);
                    let fetch_token = {
                        let access_token = access_token.clone();
                        let is_authenticated = is_authenticated.clone();
                        async move {
                            if let Some(token) = fetch_access_token(&token_url).await {
                                access_token.set(Some(token.clone()));
                                is_authenticated.set(true);
                                setCookie("is_authenticated", "true", 7);
                                setCookie("access_token", &token, 7);
                                redirect_to("/");
                            }
                        }
                    };
                    spawn_local(fetch_token);
                    has_processed.set(true);
                }
            }
            || ()
        });
    }

    html!(
        <ContextProvider<AuthContextProvider> context={AuthContextProvider::new(is_authenticated, login, logout, access_token)}>
            { props.children.clone() }
        </ContextProvider<AuthContextProvider>>
    )
}

async fn fetch_access_token(url: &str) -> Option<String> {
    match Request::get(url).send().await {
        Ok(response) => {
            if response.status() != 200 {
                log_error(format!(
                    "Failed to fetch token, status: {}",
                    response.status()
                ));
                return None;
            }
            match response.json::<Value>().await {
                Ok(response_json) => {
                    if let Some(token) = response_json.get("access_token").and_then(|v| v.as_str())
                    {
                        Some(token.to_string())
                    } else {
                        log_error("Access token not found in response".to_string());
                        None
                    }
                }
                Err(e) => {
                    log_error(format!("Failed to parse JSON response: {:?}", e));
                    None
                }
            }
        }
        Err(e) => {
            log_error(format!("Failed to fetch token: {:?}", e));
            None
        }
    }
}

fn log_error(message: String) {
    log::error!("{}", message);
}

fn redirect_to(url: &str) {
    if let Err(e) = window().unwrap().location().set_href(url) {
        log_error(format!("Failed to redirect: {:?}", e));
    }
}
