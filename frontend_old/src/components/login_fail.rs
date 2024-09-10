use crate::router::Route;
use yew::{function_component, html, Html};
use yew_router::prelude::*;

#[function_component(LoginFail)]
pub fn login_fail() -> Html {
    html!(
        <div class="h-full w-full bg-gray-700 flex flex-col justify-center items-center">
            <div class="border border-white/5 px-16 py-8 rounded-lg bg-gray-600 flex flex-col gap-2 items-center">
                <span class="text-3xl font-bold">{"Whoops! Something went wrong..."}</span>
                <span class="mb-8 flex flex-col">{"Try again later and if the issure persists contact the administrator."}</span>
                <Link<Route> to={Route::Login}>{ "Try again" }</Link<Route>>
                <Link<Route> to={Route::Home}>{ "Go back to home" }</Link<Route>>
            </div>
        </div>
    )
}
