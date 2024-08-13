use wasm_bindgen::{prelude::*, JsCast};
use web_sys::{Event, HtmlElement, Node};
use yew::{function_component, html, use_effect, use_state, Callback, Html, MouseEvent};
use yew_icons::{Icon, IconId};
use yew_router::hooks::{use_navigator, use_route};

use crate::{router::Route, utils::openlink::open_link};

#[function_component(Navbar)]
pub fn navbar() -> Html {
    let current_route = use_route::<Route>();
    let navigator = use_navigator().unwrap();
    let is_open = use_state(|| false);

    let onclick: Callback<MouseEvent> = {
        let is_open = is_open.clone();
        Callback::from(move |_| is_open.set(!*is_open))
    };

    {
        let is_open = is_open.clone();
        use_effect(move || {
            let callback = Closure::wrap(Box::new(move |event: Event| {
                let target = event.target().unwrap();
                let target: HtmlElement = target.dyn_into().unwrap();
                let document = web_sys::window().unwrap().document().unwrap();

                if let Some(dropdown) = document.query_selector(".dropdown-menu").unwrap() {
                    let dropdown: Node = dropdown.dyn_into().unwrap();

                    if !dropdown.contains(Some(&target)) {
                        is_open.set(false);
                    }
                } else {
                    is_open.set(false);
                }
            }) as Box<dyn FnMut(_)>);

            let window = web_sys::window().unwrap();
            window
                .add_event_listener_with_callback("click", callback.as_ref().unchecked_ref())
                .unwrap();

            move || {
                window
                    .remove_event_listener_with_callback("click", callback.as_ref().unchecked_ref())
                    .unwrap();
            }
        });
    }

    let title_home = {
        let navigator = navigator.clone();
        let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::Home));
        html! {
            <button {onclick} class="flex text-[22px] tracking-tighter font-bold flex-row gap-1 items-center">
                {"konyogony.dev"}
            </button>
        }
    };

    let home_nav = {
        let navigator = navigator.clone();
        let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::Home));
        let class = if matches!(current_route, Some(Route::Home)) {
            "text-blue-600"
        } else {
            "text-gray-200 hover:text-blue-500/80 transition-all duration-150"
        };
        html! { <button {onclick} class={class}>{"Home"}</button> }
    };

    let discord_nav = {
        let navigator = navigator.clone();
        let onclick: Callback<MouseEvent> =
            Callback::from(move |_| navigator.push(&Route::Discord));
        let class = if matches!(current_route, Some(Route::Discord)) {
            "text-blue-600"
        } else {
            "text-gray-200 hover:text-blue-500/80 transition-all duration-150"
        };
        html! { <button {onclick} class={class.to_owned() + " text-center w-full h-full"}>{"Discord"}</button> }
    };

    let notes_nav = {
        let navigator = navigator.clone();
        let onclick: Callback<MouseEvent> =
            Callback::from(move |_| navigator.push(&Route::NotesApp));
        let class = if matches!(current_route, Some(Route::NotesApp)) {
            "text-blue-600"
        } else {
            "text-gray-200 hover:text-blue-500/80 transition-all duration-150"
        };
        html! { <button {onclick} class={class.to_owned() + " text-center w-full h-full"}>{"Notes"}</button> }
    };

    html! {
        <div class="w-full bg-gray-500/15 flex z-40 flex-row items-center px-[24rem] py-4 gap-1 backdrop-blur-lg border-b border-white/5 sticky top-0">
            {title_home}
            <div class="ml-auto flex flex-row gap-8 items-center text-base font-semibold">
                {home_nav}
                <div class="relative dropdown-menu">
                    <button {onclick}>{"Projects"}</button>
                    {
                        if *is_open {
                            html! {
                                <div class="absolute z-20 left-1/2 -translate-x-1/2 mt-2 gap-2 min-w-24 bg-gray-500/15 p-2 rounded-md backdrop-blur-xl grid grid-cols-1 border border-white/5">
                                    {discord_nav}
                                    {notes_nav}
                                </div>
                            }
                        } else {
                            html! { <></> }
                        }
                    }
                </div>
                <div class="w-[1.5px] rounded-md h-5 bg-white/5" />
                <Icon icon_id={IconId::BootstrapDiscord} onclick={Callback::from(|_: MouseEvent| {open_link("https://discord.com/users/564472732071493633")})} class="cursor-pointer hover:text-blue-500/80 transition-all duration-150"/>
                <Icon icon_id={IconId::BootstrapGithub} onclick={Callback::from(|_: MouseEvent| {open_link("https://github.com/kony-ogony")})} class="cursor-pointer hover:text-blue-500/80 transition-all duration-150"/>
            </div>
        </div>
    }
}
