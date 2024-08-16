use web_sys::window;

// pub fn open_link(url: &str) {
//     if let Some(win) = window() {
//         let _ = win.open_with_url(url);
//     }
// }

#[derive(Clone, Debug)]
pub struct Props {
    pub message: String,
    pub redirect_url: Option<String>,
}

pub fn log_error(props: Props) {
    let message = props.message;
    if let Some(redirect_to) = props.redirect_url {
        crate::utils::util::redirect_to(redirect_to);
    }
    log::error!("{}", message);
}

// Define a function that redirects the user to a given URL.
pub fn redirect_to(url: String) {
    if let Some(win) = window() {
        if let Err(e) = win.location().set_href(&url) {
            log_error(Props {
                message: format!("Failed to redirect: {:?}", e),
                redirect_url: None,
            })
        }
    } else {
        log_error(Props {
            message: "No window available to perform redirect.".to_string(),
            redirect_url: None,
        });
    }
}
