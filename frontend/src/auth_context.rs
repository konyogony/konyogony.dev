use gloo::net::http::Request;
use serde_json::Value;
use wasm_bindgen_futures::spawn_local;
use yew::prelude::*;

#[derive(Clone, PartialEq)]
pub struct AuthContext {
    pub is_authenticated: UseStateHandle<bool>,
    pub login: Callback<MouseEvent>,
    pub logout: Callback<MouseEvent>,
    pub access_token: UseStateHandle<Option<String>>,
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
        access_token: UseStateHandle<Option<String>>,
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

#[function_component(AuthContextProviderComponent)]
pub fn auth_provider(props: &Props) -> Html {
    let is_authenticated = use_state(|| false);
    let access_token = use_state(|| None);

    let login = {
        Callback::from(move |_event: MouseEvent| {
            let client_id = "Ov23ctbBV9xqBs2EruxY";
            let redirect_uri = "http://localhost:5000/oauth/github";
            let auth_url = format!(
                "https://github.com/login/oauth/authorize?client_id={}&redirect_uri={}",
                client_id, redirect_uri
            );
            if let Err(e) = web_sys::window().unwrap().location().set_href(&auth_url) {
                web_sys::console::error_1(&format!("Failed to redirect: {:?}", e).into());
            }
        })
    };

    let logout = {
        let is_authenticated = is_authenticated.clone();
        let access_token = access_token.clone();
        Callback::from(move |_event: MouseEvent| {
            is_authenticated.set(false);
            access_token.set(None);
        })
    };

    // Handle the OAuth2 callback
    {
        let is_authenticated = is_authenticated.clone();
        let access_token = access_token.clone();
        let url = web_sys::window().unwrap().location().href().unwrap();
        if url.contains("code=") {
            let code = url.split("code=").nth(1).unwrap_or("");
            let token_url = format!("http://localhost:5000/oauth/github?code={}", code);

            let fetch_token = async move {
                match Request::get(&token_url).send().await {
                    Ok(response) => {
                        if response.status() == 200 {
                            match response.json::<Value>().await {
                                Ok(response_json) => {
                                    if let Some(token) = response_json.get("access_token") {
                                        access_token.set(Some(token.as_str().unwrap().to_string()));
                                        is_authenticated.set(true);
                                        web_sys::window()
                                            .unwrap()
                                            .location()
                                            .set_href("/")
                                            .unwrap();
                                    } else {
                                        log::error!("Access token not found in response");
                                    }
                                }
                                Err(e) => log::error!("Failed to parse JSON response: {:?}", e),
                            }
                        } else {
                            log::error!("Failed to fetch token, status: {}", response.status());
                        }
                    }
                    Err(e) => log::error!("Failed to fetch token: {:?}", e),
                }
            };
            spawn_local(fetch_token);
        }
    }

    let auth_context = AuthContextProvider::new(is_authenticated, login, logout, access_token);

    html!(
        <ContextProvider<AuthContextProvider> context={auth_context}>
            { for props.children.iter() }
        </ContextProvider<AuthContextProvider>>
    )
}

#[derive(Properties, PartialEq)]
pub struct Props {
    #[prop_or_default]
    pub children: Children,
}
