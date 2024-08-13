mod router;
use router::App;
mod components;
mod utils;

fn main() {
    yew::Renderer::<App>::new().render();
}
