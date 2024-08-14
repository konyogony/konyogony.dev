use crate::router::Route;
use yew::{function_component, html, Callback, Html, MouseEvent};
use yew_router::hooks::{use_navigator, use_route};

#[function_component(TitleHome)]
pub fn title_home() -> Html {
    let navigator = use_navigator().unwrap();
    let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::Home));
    html! (
        <button {onclick} class="flex text-[22px] tracking-tighter font-bold flex-row gap-1 items-center hover:text-gray-100 text-gray-200">
            {"konyogony.dev"}
        </button>
    )
}

#[function_component(HomeNav)]
pub fn home_nav() -> Html {
    let current_route = use_route::<Route>();
    let navigator = use_navigator().unwrap();
    let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::Home));
    let class = if matches!(current_route, Some(Route::Home)) {
        "text-blue-700"
    } else {
        "text-gray-200 hover:text-blue-600 transition-all duration-150"
    };
    html! ( <button {onclick} class={class}>{"Home"}</button> )
}

#[function_component(AboutNav)]
pub fn about_nav() -> Html {
    let current_route = use_route::<Route>();
    let navigator = use_navigator().unwrap();
    let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::Home));
    let class = if matches!(current_route, Some(Route::Home)) {
        "text-blue-700"
    } else {
        "text-gray-200 hover:text-blue-600 transition-all duration-150"
    };
    html! ( <button {onclick} class={class}>{"Home"}</button> )
}

#[function_component(DiscordNav)]
pub fn discord_nav() -> Html {
    let current_route = use_route::<Route>();
    let navigator = use_navigator().unwrap();
    let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::Discord));
    let class = if matches!(current_route, Some(Route::Discord)) {
        "text-blue-700"
    } else {
        "text-gray-200 hover:text-blue-600 transition-all duration-150"
    };
    html! ( <button {onclick} class={class.to_owned() + " text-center w-full h-full"}>{"Discord"}</button> )
}

#[function_component(NotesNav)]
pub fn notes_nav() -> Html {
    let current_route = use_route::<Route>();
    let navigator = use_navigator().unwrap();
    let onclick: Callback<MouseEvent> = Callback::from(move |_| navigator.push(&Route::NotesApp));
    let class = if matches!(current_route, Some(Route::NotesApp)) {
        "text-blue-700"
    } else {
        "text-gray-200 hover:text-blue-600 transition-all duration-150"
    };
    html! ( <button {onclick} class={class.to_owned() + " text-center w-full h-full"}>{"Notes"}</button> )
}
