use crate::{auth_context::AuthContextProvider, router::Route};
use yew::{function_component, html, use_context, Html};
use yew_router::prelude::*;

#[function_component(Home)]
pub fn home() -> Html {
    let auth_context = use_context::<AuthContextProvider>()
        .expect("AuthContextProvider must be used within an AuthContextProviderComponent");

    let on_logout = auth_context.context.logout.clone();

    let status = if *auth_context.context.is_authenticated {
        "Logged In"
    } else {
        "Logged Out"
    };
    html!(
        <div class="h-full w-full bg-gray-700 flex flex-col justify-center items-center">
            <h1>{"Home"}</h1>
            <h2>{ status }</h2>
            <Link<Route> to={Route::Login}>{ "login page" }</Link<Route>>
            <button onclick={on_logout}>{"logout"}</button>
        </div>
    )
}
