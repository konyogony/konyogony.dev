use gloo::events::EventListener;
use wasm_bindgen::JsCast;
use web_sys::HtmlElement;
use yew::{function_component, html, use_effect, use_node_ref, use_state, Html};

#[function_component(Extras)]
pub fn extras() -> Html {
    // +rep ChatGPT
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
                        let scroll_position = container.scroll_top();

                        let a_top = a.offset_top() - 5 as i32;
                        let b_top = b.offset_top() - 5 as i32;
                        let c_top = c.offset_top() - 5 as i32;

                        let last_scrolled = if scroll_position >= c_top {
                            "c"
                        } else if scroll_position >= b_top {
                            "b"
                        } else if scroll_position >= a_top {
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
        <div
            ref={container_ref.clone()}
            class="h-full overflow-auto px-[20%] w-full pt-16 flex flex-row items-start gap-8">

            <div class="w-4/5 h-[1000rem] p-2 bg-red-900 grid grid-col-1">
                <span id="a" ref={a_ref.clone()} class="block h-[50rem]">{"Section A"}</span>
                <span id="b" ref={b_ref.clone()} class="block h-[50rem]">{"Section B"}</span>
                <span id="c" ref={c_ref.clone()} class="block h-[50rem]">{"Section C"}</span>
            </div>
            <div class="w-1/5 sticky font-medium text-base h-fit top-0 flex flex-col">
                <span class="text-lg text-gray-200 font-semibold">{"Content on this page"}</span>
                <a href="#a" class={format!("text-base font-normal {}", if *current_viewing == "a" {"text-blue-600"} else {"hover:text-gray-300 text-gray-200"})}>{"Link Aa"}</a>
                <a href="#b" class={format!("text-base font-normal {}", if *current_viewing == "b" {"text-blue-600"} else {"hover:text-gray-300 text-gray-200"})}>{"Link Bb"}</a>
                <a href="#c" class={format!("text-base font-normal {}", if *current_viewing == "c" {"text-blue-600"} else {"hover:text-gray-300 text-gray-200"})}>{"Link Cc"}</a>
            </div>
        </div>
    )
}
