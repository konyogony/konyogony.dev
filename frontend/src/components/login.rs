use crate::auth_context::AuthContextProvider;
use yew::{function_component, html, use_context, Html};
use yew_icons::{Icon, IconId};

#[function_component(Login)]
pub fn login() -> Html {
    let auth_context = use_context::<AuthContextProvider>().expect("Context not found");

    let on_login = auth_context.context.login.clone();
    html!(
        <div class="h-full w-full bg-gray-700 flex flex-col justify-center items-center">
            <div class="border border-white/5 px-16 py-8 rounded-lg bg-gray-600 flex flex-col gap-2 items-center">
                <span class="text-3xl font-bold mb-8">{"Login"}</span>
                <button class="flex h-fit w-fit items-center rounded-lg border border-white/5 px-5 py-1.5 text-base font-normal gap-2 bg-gray-500/80 hover:bg-gray-500" onclick={on_login}>
                    {"Login with github"}
                    <Icon icon_id={IconId::BootstrapGithub} class="size-4"/>
                </button>
            </div>
        </div>
    )
}
