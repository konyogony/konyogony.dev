use gloo::events::EventListener;
use web_sys::window;
use yew::{function_component, html, use_effect, use_state, Html};
use yew_icons::{Icon, IconId};

use crate::components::navbar::nav_items::{DiscordNav, HomeNav, NotesNav, TitleHome};

#[function_component(Navbar)]
pub fn navbar() -> Html {
    let scroll_pos: yew::UseStateHandle<f64> = use_state(|| 0.0);

    {
        let scroll_pos = scroll_pos.clone();
        use_effect(move || {
            let window = window().expect("no global `window` exists");
            let window_clone = window.clone();

            let listener = EventListener::new(&window, "scroll", move |_event| {
                let scroll_top: f64 = window_clone.scroll_y().unwrap_or_default();
                scroll_pos.set(scroll_top);
            });
            move || drop(listener)
        });
    }

    let bg = if *scroll_pos > 0.0 {
        "bg-gray-500/15 border-white/5 backdrop-blur-lg shadow-xl"
    } else {
        "bg-transparent border-transparent shadow-none"
    };

    html!(
        <nav class={format!("w-full flex z-40 flex-row transition-all duration-700 transform-gpu items-center px-[15%] py-4 gap-1 border-b fixed top-0 left-0 right-0 {}", bg)}>
            <TitleHome />
            <div class="ml-auto flex flex-row gap-4 items-center text-sm font-semibold">
                <HomeNav />
                <div class="w-[1.5px] rounded-md h-5 bg-white/5" />
                <DiscordNav />
                <NotesNav />
                <div class="w-[1.5px] rounded-md h-5 bg-white/5" />
                <div class="flex flex-row gap-4 items-center">
                    <a class="p-2 group rounded-full hover:bg-gray-600/80 transition-all duration-150" href={"https://discord.com/users/564472732071493633"}>
                        <Icon
                            icon_id={IconId::BootstrapDiscord}
                            class="cursor-pointer transition-all duration-150"
                        />
                    </a>
                    <a class="p-2 group rounded-full hover:bg-gray-600/80 transition-all duration-150" href={"https://discord.com/users/564472732071493633"}>
                        <Icon
                            icon_id={IconId::BootstrapGithub}
                            class="cursor-pointer transition-all duration-150"
                        />
                    </a>
                </div>
            </div>
        </nav>
    )
}
