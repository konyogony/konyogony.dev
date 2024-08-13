use yew::{function_component, html, Callback, Html, MouseEvent};
use yew_router::hooks::use_navigator;

use crate::router::Route;

#[function_component(Navbar)]
pub fn navbar() -> Html {
    let title_home = {
        let navigator = use_navigator().unwrap();
        let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::Home));
        html! {
        <button {onclick} class="flex text-xl tracking-tighter font-bold flex-row gap-1 items-center">
            {"konyogony.dev"}
        </button>
        }
    };

    let home_nav = {
        let navigator = use_navigator().unwrap();
        let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::Home));
        html! { <button {onclick}>{"Home"}</button> }
    };

    html! {
        <div class="w-full bg-gray-500/20 flex flex-row items-center px-64 py-2.5 gap-1 text-xl font-semibold backdrop-blur-sm border-b border-white/5 sticky top-0">
            {title_home}
            <div class="ml-auto flex flex-row gap-1 items-center text-base font-medium text-gray-300 hover:text-gray-200">
                {home_nav}
            </div>
        </div>
    }
}
