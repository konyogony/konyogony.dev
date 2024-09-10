use crate::router::Route;
use std::rc::Rc;
use yew::{function_component, html, use_state, Callback, Html, MouseEvent};
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
    let shrinking = use_state(|| false);
    let current_route = use_route::<Route>();
    let navigator = use_navigator().unwrap();

    let shrinking_clone = Rc::new(shrinking.clone());
    let onclick: Callback<MouseEvent> = Callback::from(move |_| {
        (*shrinking_clone).set(true);
        let shrinking_clone = shrinking_clone.clone();
        wasm_bindgen_futures::spawn_local(async move {
            gloo::timers::future::TimeoutFuture::new(300).await;
            (*shrinking_clone).set(false);
        });
        navigator.push(&Route::Home)
    });
    let class = if matches!(current_route, Some(Route::Home)) {
        " text-blue-700 bg-blue-600/15 "
    } else {
        " text-gray-200 hover:bg-gray-600/80 "
    };
    let animation_class = if *shrinking {
        " shrink-animation "
    } else {
        " "
    };
    html! {
        <button {onclick} class={format!("px-3 py-2 transition-all duration-150 rounded-full {} {}", class, animation_class )}>
            { "Home" }
        </button>
    }
}

#[function_component(AboutNav)]
pub fn about_nav() -> Html {
    let shrinking = use_state(|| false);
    let current_route = use_route::<Route>();
    let navigator = use_navigator().unwrap();

    let shrinking_clone = Rc::new(shrinking.clone());
    let onclick: Callback<MouseEvent> = Callback::from(move |_| {
        (*shrinking_clone).set(true);
        let shrinking_clone = shrinking_clone.clone();
        wasm_bindgen_futures::spawn_local(async move {
            gloo::timers::future::TimeoutFuture::new(300).await;
            (*shrinking_clone).set(false);
        });
        navigator.push(&Route::About)
    });

    let class = if matches!(current_route, Some(Route::About)) {
        "text-blue-700 bg-blue-600/15"
    } else {
        "text-gray-200 hover:bg-gray-600/80"
    };
    let animation_class = if *shrinking { "shrink-animation" } else { "" };

    html! {
        <button
            {onclick}
            class={format!("px-3 py-2 transition-all duration-150 rounded-full {} {}", class, animation_class)}
        >
            { "About" }
        </button>
    }
}

#[function_component(DiscordNav)]
pub fn discord_nav() -> Html {
    let shrinking = use_state(|| false);
    let current_route = use_route::<Route>();
    let navigator = use_navigator().unwrap();

    let shrinking_clone = Rc::new(shrinking.clone());
    let onclick: Callback<MouseEvent> = Callback::from(move |_| {
        (*shrinking_clone).set(true);
        let shrinking_clone = shrinking_clone.clone();
        wasm_bindgen_futures::spawn_local(async move {
            gloo::timers::future::TimeoutFuture::new(300).await;
            (*shrinking_clone).set(false);
        });
        navigator.push(&Route::Discord)
    });

    let class = if matches!(current_route, Some(Route::Discord)) {
        "text-blue-700 bg-blue-600/15"
    } else {
        "text-gray-200 hover:bg-gray-600/80"
    };
    let animation_class = if *shrinking { "shrink-animation" } else { "" };

    html! {
        <button
            {onclick}
            class={format!("px-3 py-2 transition-all duration-150 rounded-full {} {}", class, animation_class)}
        >
            { "Discord" }
        </button>
    }
}

#[function_component(NotesNav)]
pub fn notes_nav() -> Html {
    let shrinking = use_state(|| false);
    let current_route = use_route::<Route>();
    let navigator = use_navigator().unwrap();

    let shrinking_clone = Rc::new(shrinking.clone());
    let onclick: Callback<MouseEvent> = Callback::from(move |_| {
        (*shrinking_clone).set(true);
        let shrinking_clone = shrinking_clone.clone();
        wasm_bindgen_futures::spawn_local(async move {
            gloo::timers::future::TimeoutFuture::new(300).await;
            (*shrinking_clone).set(false);
        });
        navigator.push(&Route::NotesApp)
    });

    let class = if matches!(current_route, Some(Route::NotesApp)) {
        "text-blue-700 bg-blue-600/15"
    } else {
        "text-gray-200 hover:bg-gray-600/80"
    };
    let animation_class = if *shrinking { "shrink-animation" } else { "" };

    html! {
        <button
            {onclick}
            class={format!("px-3 py-2 transition-all duration-150 rounded-full {} {}", class, animation_class)}
        >
            { "Notes" }
        </button>
    }
}
