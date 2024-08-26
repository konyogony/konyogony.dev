use crate::{components::wait::Wait, utils::redirect::redirect_to};
use yew::{function_component, html, use_effect, Html, Properties};

#[derive(PartialEq, Properties, Clone, Debug)]
pub struct Props {
    pub redirect_url: String,
}

#[function_component(SocialRedirect)]
pub fn social_redirect(props: &Props) -> Html {
    let url = props.redirect_url.clone();
    use_effect(move || redirect_to(url));
    html!(
        <Wait />
    )
}
