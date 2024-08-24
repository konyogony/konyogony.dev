use web_sys::window;
use yew::{function_component, html, use_mut_ref, use_node_ref, use_state, Html};

#[function_component(Extras)]
pub fn extras() -> Html {
    let hash: yew::UseStateHandle<Option<str>> = use_state(|| None);

    html!(
        <div class="h-full px-[20%] w-full pt-16 flex flex-row items-start gap-8">
            <div class="w-4/5 h-[1000rem] p-2 bg-red-900 grid grid-col-1">
                <span id="a">{"a"}</span>
                <span id="b">{"b"}</span>
                <span id="c">{"c"}</span>
            </div>
            <div class="w-1/5 sticky font-medium text-base h-fit top-0 flex flex-col">
                <span class="text-lg text-gray-200 font-semibold">{"Content on this page"}</span>
                <a href={"#a"} class={format!("hover:text-gray-300, {}", if hash == Some("a") { "text-blue-700" } else { "text-gray-400" })}>{"Link"}</a>
            </div>
        </div>
    )
}
