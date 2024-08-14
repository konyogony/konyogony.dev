use crate::{auth_context::AuthContextProvider, router::Route};
use yew::{function_component, html, use_context, Html};
use yew_router::prelude::*;

#[function_component(Home)]
pub fn home() -> Html {
    // let auth_context = use_context::<AuthContextProvider>()
    //     .expect("AuthContextProvider must be used within an AuthContextProviderComponent");
    html!(
        <div class="h-full w-full bg-gray-700 flex flex-col items-center">
            <div class="w-full h-[200rem] bg-red-900">
                {"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
            </div>
        </div>
    )
}
