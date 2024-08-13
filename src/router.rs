use yew::prelude::*;
use yew_router::prelude::*;

use crate::components::{
    about::About, discord::Discord, home::Home, layout::Layout, notesapp::NotesApp,
    notfound::NotFound,
};

#[derive(PartialEq, Clone, Routable)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/discord-bot")]
    Discord,
    #[at("/notes-app")]
    NotesApp,
    #[at("/about")]
    About,
    #[not_found]
    #[at("/404")]
    NotFound,
}

#[function_component(App)]
pub fn app() -> Html {
    html!(
        <>
            <BrowserRouter>
                <Layout>
                    <Switch<Route> render = {switch} />
                </Layout>
            </BrowserRouter>
        </>
    )
}

pub fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html!(<Home />),
        Route::Discord => html!(<Discord />),
        Route::NotesApp => html!(<NotesApp />),
        Route::About => html!(<About />),
        Route::NotFound => html!(<NotFound />),
    }
}
