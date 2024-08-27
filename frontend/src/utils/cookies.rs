use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/js/cookies.js")]
extern "C" {
    fn setCookie(name: &str, value: &str, days: i32);
    fn getCookie(name: &str) -> JsValue;
    fn eraseCookie(name: &str);
}

pub fn set_cookie(name: &str, value: &str, days: i32) {
    unsafe { setCookie(name, value, days) }
}
pub fn get_cookie(name: &str) -> JsValue {
    unsafe { getCookie(name) }
}
pub fn erase_cookie(name: &str) {
    unsafe { eraseCookie(name) }
}
