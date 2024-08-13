use web_sys::window;

pub fn open_link(url: &str) {
    if let Some(window) = window() {
        let _ = window.open_with_url(url);
    }
}
