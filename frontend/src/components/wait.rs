use crate::router::Route;
use yew::{function_component, html, use_context, Html};
use yew_router::prelude::*;

#[function_component(Wait)]
pub fn wait() -> Html {
    html!(
        <div class="h-full w-full bg-gray-700 flex flex-col justify-center items-center">
            <div class="border border-white/5 px-16 py-8 rounded-lg bg-gray-600 flex flex-col gap-2 items-center">
                <span class="text-3xl font-bold mb-8">{"Hang on a minute. You will be redirected..."}</span>
                <Link<Route> to={Route::Home}>{ "Go back to home" }</Link<Route>>
            </div>
        </div>
    )
}
