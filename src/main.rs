use yew::{function_component, html, Html};
use yew_router::{BrowserRouter, Routable, Switch};

mod components;
use components::home::Home;

#[derive(PartialEq, Clone, Routable)]
enum Route {
    #[at("/")]
    Home,
    #[at("/hello")]
    Hello,
    #[at("/world")]
    World,
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

#[function_component(Hello)]
fn hello() -> Html {
    html!(
        <>
            <h1>{"Hello"}</h1>
        </>
    )
}

#[function_component(World)]
fn world() -> Html {
    html!(
        <>
            <h1>{"World"}</h1>
        </>
    )
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html!(<Home />),
        Route::Hello => html!(<Hello />),
        Route::World => html!(<World />),
    }
}
