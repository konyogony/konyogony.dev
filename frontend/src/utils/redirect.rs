use web_sys::window;

use super::log_error::{log_error, LogProps};

pub fn redirect_to(url: String) {
    if let Some(win) = window() {
        if let Err(e) = win.location().set_href(&url) {
            log_error(LogProps {
                message: format!("Failed to redirect: {:?}", e),
                redirect_url: None,
            })
        }
    } else {
        log_error(LogProps {
            message: "No window available to perform redirect.".to_string(),
            redirect_url: None,
        });
    }
}
