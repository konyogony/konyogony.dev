use crate::auth_context::AuthContextProvider;
use yew::{function_component, html, use_context, Html};
use yew_icons::{Icon, IconId};

#[function_component(Footer)]
pub fn footer() -> Html {
    html!(
        <div class="h-fit w-full bg-gray-800 flex flex-col flex-shrink-0 px-[15%] py-8">
            {"a"}
        </div>
    )
}
