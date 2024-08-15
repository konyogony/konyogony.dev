use crate::components::footer::Footer;
use crate::{auth_context::AuthContextProvider, router::Route};
use yew::{function_component, html, use_context, Callback, Html, MouseEvent};
use yew_icons::{Icon, IconId};
use yew_router::prelude::*;

#[function_component(Home)]
pub fn home() -> Html {
    // let auth_context = use_context::<AuthContextProvider>()
    //     .expect("AuthContextProvider must be used within an AuthContextProviderComponent");

    let navigator = use_navigator().unwrap();
    let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::About));

    html!(
        <div class="h-full w-full bg-gradient-to-bl from-[#181a20] to-[#2b303b] flex flex-col items-center">
            <div class="w-full h-[45%] flex flex-shrink-0 flex-row px-[15%] gap-2 border-b border-white/5 relative">
                // <div class="absolute rounded-full size-[12rem] blur-2xl inset-0 bg-indigo-800 blur-animation" />
                <div class="flex flex-col w-1/2 h-full gap-2 flex-shrink-0 justify-center">
                    <span class="relative w-fit text-6xl font-bold z-20 px-1 py-0.5">
                        <span class="z-10">{"Hey there!"}</span>
                        <div class="absolute w-full h-full inset-0 rotate-[0.5deg] bg-indigo-800 -z-10" />
                    </span>
                    <div class="flex flex-row gap-1 text-2xl font-semibold">
                        <span>{"I go by"}</span>
                        <span class="bg-blue-600 text-transparent bg-clip-text">{"kony"}</span>
                        <span>{"and I am a junior developer."}</span>
                    </div>
                    <span class="text-lg leading-6 font-medium text-gray-300 flex flex-wrap gap-x-1 whitespace-normal">
                        <span class="w-fit flex-shrink-0">{"I'm an aspiring developer "}</span>
                        <span class="w-fit flex-shrink-0">{"with hands-on experience in "}</span>
                        <span class="w-fit flex-shrink-0 bg-blue-500/80 text-transparent bg-clip-text">{"UI/UX design, "}</span>
                        <span class="w-fit flex-shrink-0">{"building websites, "}</span>
                        <span class="w-fit flex-shrink-0">{"and creating apps with "}</span>
                        <span class="w-fit flex-shrink-0">{"React/Electron."}</span>
                        <span class="w-fit flex-shrink-0">{" My skill set includes strong proficiency in "}</span>
                        <span class="w-fit flex-shrink-0 bg-blue-500/80 text-transparent bg-clip-text">{"TypeScript,"}</span>
                        <span class="w-fit flex-shrink-0">{" and I'm currently expanding my expertise by learning "}</span>
                        <span class="w-fit flex-shrink-0 bg-blue-500/80 text-transparent bg-clip-text">{"Rust,"}</span>
                        <span class="w-fit flex-shrink-0">{" with a focus on "}</span>
                        <span class="w-fit flex-shrink-0 ">{"Yew/Tauri."}</span>
                    </span>
                    <button {onclick} class="flex items-center w-fit rounded-full border border-white/5 px-4 py-2 text-base font-normal mt-2 gap-1 bg-gray-500/80 hover:bg-gray-500">
                        <span>{"Learn more"}</span>
                        <Icon icon_id={IconId::FeatherChevronRight} class="size-4"/>
                    </button>
                </div>
                <div class="w-1/2 h-full flex flex-col gap-1 justify-center items-center">
                    <div class="flex flex-row gap-4 items-center text-lg font-semibold">
                        // <svg xmlns="http://www.w3.org/1999/xlink" width="200" height="200" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-sm me-0 w-10 h-10 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="#58C4DC"></circle><g stroke="#58C4DC" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5" stroke="#58C4DC" fill="none"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)" stroke="#58C4DC" fill="none"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)" stroke="#58C4DC" fill="none"></ellipse></g></svg>
                        // <Icon icon_id={IconId::BootstrapPlusLg} class="size-4 text-white"/>
                    </div>
                </div>
            </div>
            <div class="w-full h-full flex-shrink-0 flex flex-col bg-[#181a20]">
                {"a"}
            </div>
            <Footer />
        </div>
    )
}
