use yew::{function_component, html, Callback, Html, MouseEvent};
use yew_router::hooks::use_navigator;

use crate::Route;

#[function_component(Navbar)]
pub fn navbar() -> Html {
    let navigator = use_navigator().unwrap();

    let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::Home));
    html!(
        <div class="w-full bg-gray-500/20 flex flex-row items-center px-4 py-2 gap-1 text-xl font-semibold backdrop-blur-sm border-b border-white/5 sticky top-0">
            <button {onclick} class="flex flex-row gap-1 items-center">
                <img src="https://cdn.discordapp.com/avatars/564472732071493633/ed5da04d0da2fac6832c8116804acf7c.webp?size=1024&format=webp&width=0&height=256" class="size-8"/>
                <span>{"Kony Web"}</span>
            </button>
        </div>
    )
}
