use wasm_bindgen::JsValue;
use wasm_bindgen_futures::spawn_local;
use yew::{function_component, html, use_effect, Html};

use crate::utils::fetch_all_users::fetch_all_users;

// TODO: Finish

#[function_component(Social)]
pub fn social() -> Html {
    use_effect(move || {
        spawn_local(async move {
            let data = fetch_all_users().await;
            match data {
                Ok(data) => {
                    web_sys::console::log_1(&JsValue::from_str(&data));
                }
                Err(err) => web_sys::console::error_1(&JsValue::from(err)),
            }
        })
    });

    html!(
        <div class="w-full h-full flex flex-col items-center justify-center">
            <h1>{"Ugly social page"}</h1>
        </div>
    )
}
