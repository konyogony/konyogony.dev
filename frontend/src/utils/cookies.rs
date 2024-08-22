use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/js/cookies.js")]
extern "C" {
    pub fn setCookie(name: &str, value: &str, days: i32);
    pub fn getCookie(name: &str) -> JsValue;
    pub fn eraseCookie(name: &str);
}
