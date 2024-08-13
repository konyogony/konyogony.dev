mod router;
use router::App;
mod components;

fn main() {
    yew::Renderer::<App>::new().render();
}
