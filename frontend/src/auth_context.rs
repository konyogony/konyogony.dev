// This module defines the authentication context and its provider.
// The authentication context stores information about the user's authentication status,
// login and logout callbacks, and the access token.
// The provider component wraps its children with the authentication context and sets up
// the necessary state and callbacks.

use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::spawn_local;
use web_sys::window;
use yew::prelude::*;

use crate::api_calls::fetch_access_token;
use crate::utils::util::redirect_to;
// Import the functions setCookie, getCookie, and eraseCookie from the JavaScript module `cookies.js`.
// These functions are used to store and retrieve cookies.
#[wasm_bindgen(module = "/js/cookies.js")]
extern "C" {
    fn setCookie(name: &str, value: &str, days: i32);
    fn getCookie(name: &str) -> JsValue;
    fn eraseCookie(name: &str);
}

// Define the authentication context struct.
// It contains the user's authentication status, login and logout callbacks, and the access token.
#[derive(Clone, PartialEq)]
pub struct AuthContext {
    pub is_authenticated: UseStateHandle<bool>,
    pub login: Callback<MouseEvent>,
    pub logout: Callback<MouseEvent>,
    pub access_token: UseStateHandle<Option<String>>,
}

// Define the authentication context provider struct.
// It contains the authentication context.
#[derive(Clone, PartialEq)]
pub struct AuthContextProvider {
    pub context: AuthContext,
}

// Implement the new method for the authentication context provider struct.
impl AuthContextProvider {
    // Create a new authentication context provider with the given state handles and callbacks.
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

// Define the properties struct for the authentication context provider component.
#[derive(Properties, PartialEq)]
pub struct Props {
    // The children of the component.
    pub children: Html,
}

// Define the authentication context provider component.
#[function_component(AuthContextProviderComponent)]
pub fn auth_provider(props: &Props) -> Html {
    // Create state handles for the user's authentication status and access token.
    let is_authenticated = use_state(|| {
        // Get the value of the "is_authenticated" cookie and parse it as a bool.
        let cookie_value = getCookie("is_authenticated");
        cookie_value
            .as_string()
            .unwrap_or_else(|| "false".to_string())
            == "true"
    });

    let access_token = use_state(|| {
        // Get the value of the "access_token" cookie.
        let cookie_value = getCookie("access_token");
        cookie_value.as_string().map_or(None, |v| Some(v))
    });

    // Create callbacks for the login and logout buttons.
    let login: Callback<MouseEvent> = {
        Callback::from(move |_| {
            // Redirect the user to the GitHub OAuth login page.
            let auth_url =
                "https://github.com/login/oauth/authorize?client_id=Ov23ctbBV9xqBs2EruxY";
            if let Err(e) = window().unwrap().location().set_href(&auth_url) {
                redirect_to("/login/fail".to_string());
                web_sys::console::error_1(&format!("Failed to redirect: {:?}", e).into());
            }
        })
    };

    let logout: Callback<MouseEvent> = {
        let is_authenticated = is_authenticated.clone();
        let access_token = access_token.clone();
        Callback::from(move |_| {
            // Reset the authentication status and access token.
            is_authenticated.set(false);
            access_token.set(None);
            eraseCookie("is_authenticated");
            eraseCookie("access_token");

            // Redirect the user to the home page after a small delay.
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

    // Set up an effect that checks if the user has been redirected to the OAuth callback URL.
    // If so, fetch the access token from the server and update the authentication status and access token.
    // If not, do nothing.
    // This effect is triggered when the component mounts.

    // Make clones as the value will be moved
    let access_token_clone = access_token.clone();
    let is_authenticated_clone = is_authenticated.clone();

    use_effect(move || {
        let path = window().unwrap().location().pathname().unwrap();
        if path == "/oauth/github" {
            let url = window().unwrap().location().href().unwrap();
            if url.contains("?code=") {
                let code = url.split("?code=").nth(1).unwrap_or("");
                let token_url = format!("http://127.0.0.1:5001/getAccessToken/?code={}", code);
                let fetch_token = {
                    let access_token = access_token_clone.clone();
                    let is_authenticated = is_authenticated_clone.clone();
                    async move {
                        if let Some(token) = fetch_access_token(&token_url).await {
                            access_token.set(Some(token.clone()));
                            is_authenticated.set(true);
                            setCookie("is_authenticated", "true", 7);
                            setCookie("access_token", &token, 7);
                            redirect_to("/login/success".to_string());
                        }
                    }
                };
                spawn_local(fetch_token);
            }
        }
        || ()
    });

    // Return the authentication context provider component, wrapping its children with the context.
    html!(
        <ContextProvider<AuthContextProvider> context={AuthContextProvider::new(is_authenticated, login, logout, access_token)}>
            { props.children.clone() }
        </ContextProvider<AuthContextProvider>>
    )
}
