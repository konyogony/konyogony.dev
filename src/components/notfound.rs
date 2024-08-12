use yew::{function_component, html, Callback, Html, MouseEvent};
use yew_router::hooks::use_navigator;

use crate::Route;

#[function_component(NotFound)]
pub fn notfound() -> Html {
    let navigator = use_navigator().unwrap();

    let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::Home));
    html!(
        <div class="h-full w-full bg-gray-700 flex flex-col justify-center items-center">
            <span class="text-[12rem] font-bold -mt-32">{"404"}</span>
            <span class="text-xl -mt-8">{"Oops! Page not found."}</span>
            <button {onclick} class="bg-gray-600 rounded-lg mt-2 py-1.5 px-4 border border-white/5 hover:bg-gray-500 flex flex-row gap-1 items-center">{"Go back to home"} <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg></button>
        </div>
    )
}
