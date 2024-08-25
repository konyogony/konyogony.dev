use gloo::events::EventListener;
use wasm_bindgen::JsCast;
use web_sys::{Element, HtmlElement};
use yew::{function_component, html, use_effect, use_node_ref, use_state, Html};

#[function_component(Extras)]
pub fn extras() -> Html {
    let current_id = use_state(|| "".to_string());
    let container_ref = use_node_ref();

    {
        let current_id = current_id.clone();
        let container_ref = container_ref.clone();

        use_effect(move || {
            let container = container_ref
                .cast::<HtmlElement>()
                .expect("Failed to get container element");

            let on_scroll = move || {
                let sections = ["a", "b", "c"];
                let mut closest_id = "";
                let mut closest_distance = f64::MAX;

                for id in sections.iter() {
                    if let Some(section) = container.query_selector(&format!("#{}", id)).unwrap() {
                        let rect = section.get_bounding_client_rect();
                        let offset = rect.top();

                        let distance = offset.abs();

                        if distance < closest_distance {
                            closest_distance = distance;
                            closest_id = id;
                        }
                    }
                }

                current_id.set(closest_id.to_string());
            };

            let listener = EventListener::new(&container, "scroll", move |_| {
                on_scroll();
            });

            on_scroll();

            move || drop(listener)
        });
    }

    html!(
        <div ref={container_ref} class="h-full overflow-auto px-[20%] w-full pt-16 flex flex-row items-start gap-8">
            <div class="w-4/5 h-[1000rem] p-2 bg-red-900 grid grid-col-1">
                <span id="a" class="block h-[50rem]">{"Section A"}</span>
                <span id="b" class="block h-[50rem]">{"Section B"}</span>
                <span id="c" class="block h-[50rem]">{"Section C"}</span>
            </div>
            <div class="w-1/5 sticky font-medium text-base h-fit top-0 flex flex-col">
                <span class="text-lg text-gray-200 font-semibold">{"Content on this page"}</span>
                <a href="#a" class="hover:text-gray-300">{"Link A"}</a>
                <a href="#b" class="hover:text-gray-300">{"Link B"}</a>
                <a href="#c" class="hover:text-gray-300">{"Link C"}</a>
                <span class="mt-4">{"Currently viewing: "}{&*current_id}</span>
            </div>
        </div>
    )
}
