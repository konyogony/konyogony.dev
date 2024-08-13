use crate::router::Route;
use yew::{function_component, html, Html};
use yew_router::prelude::*;

#[function_component(Home)]
pub fn home() -> Html {
    html!(
        <div class="h-full w-full bg-gray-700 flex flex-col justify-center items-center">
            <h1>{"Home"}</h1>
            <Link<Route> to={Route::Login}>{ "login page" }</Link<Route>>
        </div>
    )
}
