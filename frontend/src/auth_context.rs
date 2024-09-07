use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::spawn_local;
use web_sys::console;
use web_sys::window;
use yew::prelude::*;

use crate::utils::cookies::set_cookie;
use crate::utils::cookies::{erase_cookie, get_cookie};
use crate::utils::log_error::{log_error, LogProps};
use crate::utils::login::login_fn;
use crate::utils::redirect::redirect_to;
#[derive(Clone, PartialEq)]
pub struct AuthContext {
    pub id: UseStateHandle<Option<String>>,
    pub jwt: UseStateHandle<Option<String>>,
    pub login: Callback<MouseEvent>,
    pub logout: Callback<MouseEvent>,
}

#[derive(Clone, PartialEq)]
pub struct AuthContextProvider {
    pub context: AuthContext,
}

impl AuthContextProvider {
    pub fn new(
        id: UseStateHandle<Option<String>>,
        jwt: UseStateHandle<Option<String>>,
        login: Callback<MouseEvent>,
        logout: Callback<MouseEvent>,
    ) -> Self {
        Self {
            context: AuthContext {
                id,
                jwt,
                login,
                logout,
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
    let id = use_state(|| {
        let cookie_value = get_cookie("id");
        cookie_value.as_string().map_or(None, |v| Some(v))
    });

    let jwt = use_state(|| {
        let cookie_value = get_cookie("jwt");
        cookie_value.as_string().map_or(None, |v| Some(v))
    });

    let login_in_progress = use_state(|| false);

    let login = {
        Callback::from(move |_| {
            let auth_url =
                "https://github.com/login/oauth/authorize?client_id=Ov23ctbBV9xqBs2EruxY";
            if let Err(e) = window().unwrap().location().set_href(&auth_url) {
                redirect_to("/login/error".to_string());
                console::error_1(&format!("Failed to redirect: {:?}", e).into());
            }
        })
    };

    let logout = {
        let jwt = jwt.clone();
        let id = id.clone();
        Callback::from(move |_| {
            jwt.set(None);
            id.set(None);
            erase_cookie("jwt");
            erase_cookie("id");
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

    let id_clone = id.clone();
    let jwt_clone = jwt.clone();
    use_effect(move || {
        let path = window().unwrap().location().pathname().unwrap();
        if path == "/oauth/github" {
            let url = window().unwrap().location().href().unwrap();
            if url.contains("?code=") && !*login_in_progress {
                spawn_local(async move {
                    let code = url.split("?code=").nth(1).unwrap();
                    console::log_1(&JsValue::from_str(&code));
                    match login_fn(code).await {
                        Ok(login_success) => {
                            set_cookie("jwt", &login_success.jwt, 14);
                            jwt_clone.set(Some(login_success.jwt));

                            set_cookie("id", &login_success.user._id, 14);
                            id_clone.set(Some(login_success.user._id));

                            if let Some(target) = window()
                                .unwrap()
                                .local_storage()
                                .unwrap()
                                .unwrap()
                                .get_item("redirect_after_login")
                                .unwrap_or_else(|_| None)
                            {
                                redirect_to(target);
                                window()
                                    .unwrap()
                                    .local_storage()
                                    .unwrap()
                                    .unwrap()
                                    .remove_item("redirect_after_login")
                                    .unwrap();
                            } else {
                                redirect_to("/login/success".to_string());
                            }

                            console::log_1(&get_cookie("id").into());
                            console::log_1(&get_cookie("jwt").into());
                        }
                        Err(e) => log_error(LogProps {
                            message: format!("Failed to login: {:?}", e),
                            redirect_url: Some("/login/error".to_string()),
                        }),
                    }
                    login_in_progress.set(false);
                });
            }
        };

        || ()
    });

    html!(
        <ContextProvider<AuthContextProvider> context={AuthContextProvider::new(id, jwt, login, logout)}>
            { props.children.clone() }
        </ContextProvider<AuthContextProvider>>
    )
}
