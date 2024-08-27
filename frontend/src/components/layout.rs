use crate::components::navbar::navbar::Navbar;
use yew::{function_component, html, Html, Properties};

#[derive(Properties, Clone, PartialEq)]
pub struct LayoutProps {
    pub children: Html,
}

#[function_component(Layout)]
pub fn layout(props: &LayoutProps) -> Html {
    let LayoutProps { children } = props;

    html! (
        <div class="h-screen w-full">
            <Navbar />
            {children.clone()}
        </div>
    )
}
