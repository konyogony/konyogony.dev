#[derive(Clone, Debug)]
pub struct LogProps {
    pub message: String,
    pub redirect_url: Option<String>,
}

pub fn log_error(props: LogProps) {
    let message = props.message;
    if let Some(redirect_to) = props.redirect_url {
        crate::utils::redirect::redirect_to(redirect_to.to_string());
    }
    log::error!("{}", message);
}
