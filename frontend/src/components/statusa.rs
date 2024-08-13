use crate::{auth_context::AuthContextProvider, router::Route};
use yew::{function_component, html, use_context, Html};
use yew_router::prelude::*;

#[function_component(Status)]
pub fn home() -> Html {
    let auth_context = use_context::<AuthContextProvider>()
        .expect("AuthContextProvider must be used within an AuthContextProviderComponent");

    let status = if *auth_context.context.is_authenticated {
        "Logged In"
    } else {
        "Logged Out"
    };
    html!(
        <div class="h-full w-full bg-gray-700 flex flex-col justify-center items-center">
            <h1>{ status }</h1>
            <Link<Route> to={Route::Login}>{ "login page" }</Link<Route>>
        </div>
    )
}
