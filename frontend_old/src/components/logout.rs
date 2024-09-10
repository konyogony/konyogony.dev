use crate::{auth_context::AuthContextProvider, router::Route};
use yew::{function_component, html, use_context, Html};
use yew_icons::{Icon, IconId};
use yew_router::prelude::Link;

#[function_component(Logout)]
pub fn logout() -> Html {
    let auth_context = use_context::<AuthContextProvider>().expect("Context not found");
    let on_logout = auth_context.context.logout.clone();
    html!(
        <div class="h-full w-full bg-gray-700 flex flex-col justify-center items-center">
            <div class="border border-white/5 px-16 py-8 rounded-lg bg-gray-600 flex flex-col gap-2 items-center">
                <span class="text-3xl font-bold">{"Logout"}</span>
                <span class="mb-8">{"Are you sure you want to logout?"}</span>
                <Link<Route> to={Route::Home} >
                    <button class="flex h-fit w-fit items-center rounded-lg border border-white/5 px-5 py-1.5 text-base font-normal gap-2 bg-gray-500/80 hover:bg-gray-500">
                        {"Cancel"}
                    </button>
                </Link<Route>>
                <button class="flex h-fit w-fit items-center rounded-lg border border-white/5 px-5 py-1.5 text-base font-normal gap-2 bg-gray-500/80 hover:bg-red-600 transition-all duration-300" onclick={on_logout}>
                    {"Logout"}
                    <Icon icon_id={IconId::LucideLogOut} class="size-4"/>
                </button>
            </div>
        </div>
    )
}
