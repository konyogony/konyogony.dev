use yew::{function_component, html, Html};
use yew_router::{BrowserRouter, Routable, Switch};

mod components;
use components::discord::Discord;
use components::home::Home;
use components::layout::Layout;
use components::notfound::NotFound;

#[derive(PartialEq, Clone, Routable)]
enum Route {
    #[at("/")]
    Home,
    #[at("/discord-bot")]
    Discord,
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn main() {
    yew::Renderer::<App>::new().render();
}

#[function_component(App)]
fn app() -> Html {
    html!(
        <>
            <BrowserRouter>
                <Switch<Route> render = {switch} />
            </BrowserRouter>
        </>
    )
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html!(<Layout><Home /></Layout>),
        Route::Discord => html!(<Layout><Discord /></Layout>),
        Route::NotFound => html!(<Layout><NotFound /></Layout>),
    }
}
