use std::collections::HashMap;
use std::time::SystemTime;
use std::time::UNIX_EPOCH;

use serde_json::Value;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::spawn_local;
use web_sys::window;
use yew::prelude::*;

use crate::utils::create_or_update_user::create_or_update_user;
use crate::utils::create_or_update_user::User;
use crate::utils::fetch_all_users::fetch_all_users;
use crate::utils::fetch_jwt::fetch_jwt;
use crate::utils::get_access_token::get_access_token;
use crate::utils::get_current_time::get_current_time;
use crate::utils::get_user_data::get_user_data;
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
                spawn_local(async move {
                    let url = url.clone();
                    // let session_token = fetch_jwt(url.split("?code=").nth(1).unwrap()).await;
                    let access_token = get_access_token(url.split("?code=").nth(1).unwrap()).await;
                    match access_token {
                        Ok(access_token) => {
                            // session_token_clone.set(session_token.into());
                            web_sys::console::log_1(&JsValue::from(&access_token));
                            let parsed_json: Value = serde_json::from_str(&access_token).unwrap();

                            let access_token = parsed_json["access_token"]
                                .as_str()
                                .ok_or("Access token not found");
                            match access_token {
                                Ok(access_token) => {
                                    let user_data = get_user_data(access_token.to_string()).await;
                                    match user_data {
                                        Ok(user_data) => {
                                            web_sys::console::log_1(&JsValue::from(
                                                &user_data.to_string(),
                                            ));
                                            let user: User = User {
                                                access_token: access_token.to_string(),
                                                id: user_data["id"].to_string(),
                                                login: user_data["login"].to_string(),
                                                avatar_url: user_data["avatar_url"].to_string(),
                                                last_active: get_current_time() as u64,
                                                url: user_data["url"].to_string(),
                                                html_url: user_data["html_url"].to_string(),
                                                followers_url: user_data["followers_url"]
                                                    .to_string(),
                                                organizations_url: user_data["organizations_url"]
                                                    .to_string(),
                                                repos_url: user_data["repos_url"].to_string(),
                                                // TODO: FINISH THIS
                                            };
                                            let response = create_or_update_user(user).await;
                                            match response {
                                                Ok(_) => {
                                                    web_sys::console::log_1(&JsValue::from(
                                                        "User created or updated successfully",
                                                    ));
                                                    // let response = fetch_all_users().await;
                                                    // match response {
                                                    //     Ok(users) => web_sys::console::log_1(
                                                    //         &JsValue::from(&users.to_string()),
                                                    //     ),
                                                    //     Err(e) => {
                                                    //         web_sys::console::error_1(
                                                    //             &JsValue::from(e),
                                                    //         );
                                                    //     }
                                                    // }
                                                }
                                                Err(e) => {
                                                    web_sys::console::error_1(&JsValue::from(e));
                                                }
                                            }
                                        }
                                        Err(e) => {
                                            web_sys::console::error_1(&JsValue::from(e));
                                        }
                                    }
                                }
                                Err(e) => {
                                    web_sys::console::error_1(&JsValue::from(e));
                                }
                            }
                        }
                        Err(e) => {
                            // redirect_to("/login/error".to_string());
                            web_sys::console::error_1(&JsValue::from(e));
                        }
                    }
                })
            }
        }
        || ()
    });

    // let session_token_clone = session_token.clone();
    // use_effect(move || {
    //     let session_token_clone = session_token_clone.clone(); // Clone handle for use in async block
    //     spawn_local(async move {
    //         if let Some(token) = session_token_clone.as_ref() {
    //             if !validate_jwt(token).await {
    //                 session_token_clone.set(None); // Update original state handle
    //                 eraseCookie("session_token");
    //             }
    //         }
    //     });
    //     || ()
    // });

    html!(
        <ContextProvider<AuthContextProvider> context={AuthContextProvider::new(login, logout, session_token)}>
            { props.children.clone() }
        </ContextProvider<AuthContextProvider>>
    )
}
