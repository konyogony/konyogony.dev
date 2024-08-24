use wasm_bindgen::prelude::*;

#[wasm_bindgen(raw_module = "../../js/cookies.js")]
extern "C" {
    fn setCookie(name: &str, value: &str, days: i32);
    fn getCookie(name: &str) -> JsValue;
    fn eraseCookie(name: &str);
}

pub fn set_cookie(name: &str, value: &str, days: i32) {
    setCookie(name, value, days)
}
pub fn get_cookie(name: &str) -> JsValue {
    getCookie(name)
}
pub fn erase_cookie(name: &str) {
    eraseCookie(name)
}
