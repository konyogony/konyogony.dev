use chrono::Local;
use gloo::events::EventListener;
use web_sys::HtmlElement;
use yew::{function_component, html, use_effect, use_node_ref, use_state, Html};

#[function_component(Extras)]
pub fn extras() -> Html {
    let local_now = Local::now();
    let formatted = local_now.format("%Y-%m-%d %H:%M:%S").to_string();

    // -rep Chatgpt
    // TODO: Fix
    let container_ref = use_node_ref();
    let a_ref = use_node_ref();
    let b_ref = use_node_ref();
    let c_ref = use_node_ref();

    let current_viewing = use_state(|| String::from("None"));

    {
        let current_viewing = current_viewing.clone();
        let container_ref = container_ref.clone();
        let a_ref = a_ref.clone();
        let b_ref = b_ref.clone();
        let c_ref = c_ref.clone();

        use_effect(move || {
            let listener = EventListener::new(
                &container_ref
                    .cast::<HtmlElement>()
                    .expect("Container element should exist"),
                "scroll",
                move |_event| {
                    if let (Some(container), Some(a), Some(b), Some(c)) = (
                        container_ref.cast::<HtmlElement>(),
                        a_ref.cast::<HtmlElement>(),
                        b_ref.cast::<HtmlElement>(),
                        c_ref.cast::<HtmlElement>(),
                    ) {
                        let scroll_position = container.scroll_top() as f64;

                        let a_offset = a.offset_top() as f64;
                        let b_offset = b.offset_top() as f64;
                        let c_offset = c.offset_top() as f64;

                        let last_scrolled = if scroll_position >= c_offset {
                            "c"
                        } else if scroll_position >= b_offset {
                            "b"
                        } else if scroll_position >= a_offset {
                            "a"
                        } else {
                            "None"
                        };

                        current_viewing.set(last_scrolled.to_string());
                    }
                },
            );

            move || drop(listener)
        });
    }

    html!(
        <div class="min-h-screen px-[20%] w-full pt-24 flex flex-col items-center gap-8 bg-gradient-to-b from-gray-700 to-gray-800">
            <div ref={container_ref.clone()} class="w-full h-full flex flex-row items-start gap-8">
                <div class="w-4/5 flex flex-col h-fit gap-8 flex-shrink-0">
                    <div class="flex flex-col gap-1 mb-4 w-full border-b border-white/15 pb-1">
                        <span class="font-bold text-6xl">{"Extras"}</span>
                        <div class="flex flex-row gap-1 items-end">
                            <span class="text-lg font-semibold text-gray-400 flex flex-row gap-1">
                                {"On this page you can find some extra useful content."}
                            </span>
                            <span class="ml-auto text-sm text-gray-400">{format!("Last updated: {}", formatted)}</span>
                        </div>
                    </div>
                    <span id="a" ref={a_ref.clone()} class="block h-[100rem]">{"Section A"}</span>
                    <span id="b" ref={b_ref.clone()} class="block h-[100rem]">{"Section B"}</span>
                    <span id="c" ref={c_ref.clone()} class="block h-[100rem]">{"Section C"}</span>
                </div>
                <div class="w-1/5 sticky font-medium text-base h-fit top-24 p-4 rounded-md border border-white/5 shadow-sm flex flex-col backdrop-blur-lg flex-shrink-0">
                    <span class="text-base text-gray-200 font-semibold mb-2">{"Content on this page"}</span>
                    <a href="#a" class={format!("text-sm w-fit {}", if *current_viewing == "a" {"text-blue-600"} else {"hover:text-gray-300 text-gray-400"})}>{"Link Aa"}</a>
                    <a href="#b" class={format!("text-sm w-fit {}", if *current_viewing == "b" {"text-blue-600"} else {"hover:text-gray-300 text-gray-400"})}>{"Link Bb"}</a>
                    <a href="#c" class={format!("text-sm w-fit {}", if *current_viewing == "c" {"text-blue-600"} else {"hover:text-gray-300 text-gray-400"})}>{"Link Cc"}</a>
                    <span>{format!("Current viewing: {}", *current_viewing)}</span>
                </div>
            </div>
        </div>
    )
}
