mod router;
use router::MyApplication;
mod auth_context;
mod components;
mod utils;

fn main() {
    yew::Renderer::<MyApplication>::new().render();
}
