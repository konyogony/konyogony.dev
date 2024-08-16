use crate::components::navbar::nav_items::HomeNav;
use yew::{function_component, html, Html};

#[function_component(Footer)]
pub fn footer() -> Html {
    html!(
        <div class="h-fit w-full bg-gray-900 flex flex-col flex-shrink-0 px-[15%] py-8">
            <div class="grid grid-cols-4">
                <div class="flex flex-col">
                    <HomeNav />
                </div>
            </div>
            <div class="h-[1px] w-full bg-white/5 rounded-lg my-2"/>
            <span class="text-sm font-light text-gray-400">{"Copright © 2024 - All rights reserved."}</span>
        </div>
    )
}
