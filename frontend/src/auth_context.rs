use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::spawn_local;
use web_sys::window;
use yew::prelude::*;

use crate::utils::fetch_jwt::fetch_jwt;
use crate::utils::redirect::redirect_to;
use crate::utils::validate_jwt::validate_jwt;

#[wasm_bindgen(module = "/js/cookies.js")]
extern "C" {
    fn setCookie(name: &str, value: &str, days: i32);
    fn getCookie(name: &str) -> JsValue;
    fn eraseCookie(name: &str);
}

#[derive(Clone, PartialEq)]
pub struct AuthContext {
    pub login: Callback<MouseEvent>,
    pub logout: Callback<MouseEvent>,
    pub session_token: UseStateHandle<Option<String>>,
}

#[derive(Clone, PartialEq)]
pub struct AuthContextProvider {
    pub context: AuthContext,
}

impl AuthContextProvider {
    pub fn new(
        login: Callback<MouseEvent>,
        logout: Callback<MouseEvent>,
        session_token: UseStateHandle<Option<String>>,
    ) -> Self {
        Self {
            context: AuthContext {
                login,
                logout,
                session_token,
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
    let session_token = use_state(|| {
        let cookie_value = getCookie("session_token");
        cookie_value.as_string().map_or(None, |v| Some(v))
    });

    let login = {
        Callback::from(move |_| {
            let auth_url =
                "https://github.com/login/oauth/authorize?client_id=Ov23ctbBV9xqBs2EruxY";
            if let Err(e) = window().unwrap().location().set_href(&auth_url) {
                redirect_to("/login/error".to_string());
                web_sys::console::error_1(&format!("Failed to redirect: {:?}", e).into());
            }
        })
    };

    let logout = {
        let session_token = session_token.clone();
        Callback::from(move |_| {
            session_token.set(None);
            eraseCookie("session_token");

            let closure = Closure::wrap(Box::new(move || {
                redirect_to("/".to_string());
            }) as Box<dyn FnMut()>);

            let window = web_sys::window().unwrap();
            window
                .set_timeout_with_callback_and_timeout_and_arguments_0(
                    closure.as_ref().unchecked_ref(),
                    0,
                )
                .unwrap();

            closure.forget();
        })
    };
    let session_token_clone = session_token.clone();
    use_effect(move || {
        let session_token_clone = session_token_clone.clone(); // Clone handle for use in async block
        let path = window().unwrap().location().pathname().unwrap();
        if path == "/oauth/github" {
            let url = window().unwrap().location().href().unwrap();
            if url.contains("?code=") {
                let code = url.split("?code=").nth(1).unwrap_or("");
                spawn_local(async move {
                    let url = url.clone();
                    let session_token = fetch_jwt(url.split("?code=").nth(1).unwrap_or("")).await;
                    match session_token {
                        Ok(session_token) => {
                            session_token_clone.set(session_token.into());
                        }
                        Err(e) => {
                            redirect_to("/login/error".to_string());
                            web_sys::console::error_1(&JsValue::from(e));
                        }
                    }
                })
            }
        }
        || ()
    });

    let session_token_clone = session_token.clone();
    use_effect(move || {
        let session_token_clone = session_token_clone.clone(); // Clone handle for use in async block
        spawn_local(async move {
            if let Some(token) = session_token_clone.as_ref() {
                if !validate_jwt(token).await {
                    session_token_clone.set(None); // Update original state handle
                    eraseCookie("session_token");
                }
            }
        });
        || ()
    });

    html!(
        <ContextProvider<AuthContextProvider> context={AuthContextProvider::new(login, logout, session_token)}>
            { props.children.clone() }
        </ContextProvider<AuthContextProvider>>
    )
}
