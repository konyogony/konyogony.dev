use yew::{function_component, html, Html};

#[function_component(Wait)]
pub fn wait() -> Html {
    html!(
        <div class="h-full w-full bg-gray-700 flex flex-col justify-center items-center">
            <div class="border border-white/5 px-16 py-8 rounded-lg bg-gray-600 flex flex-col gap-2 items-center">
                <span class="text-3xl font-bold">
                    {"You will be redirected shortly."}
                </span>
                <span>
                    {"This should only take a few seconds..."}
                </span>
            </div>
        </div>
    )
}