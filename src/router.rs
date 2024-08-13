use yew::prelude::*;
use yew_router::prelude::*;

use crate::components::{discord::Discord, home::Home, layout::Layout, notfound::NotFound};

#[derive(PartialEq, Clone, Routable)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/discord-bot")]
    Discord,
    #[not_found]
    #[at("/404")]
    NotFound,
}

#[function_component(App)]
pub fn app() -> Html {
    html!(
        <>
            <BrowserRouter>
                <Switch<Route> render = {switch} />
            </BrowserRouter>
        </>
    )
}

pub fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html!(<Layout><Home /></Layout>),
        Route::Discord => html!(<Layout><Discord /></Layout>),
        Route::NotFound => html!(<Layout><NotFound /></Layout>),
    }
}
