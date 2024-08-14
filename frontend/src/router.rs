use crate::auth_context::{AuthContextProvider, AuthContextProviderComponent};
use crate::components::{
    about::About, discord::Discord, home::Home, layout::Layout, login::Login,
    login_fail::LoginFail, login_success::LoginSuccess, notesapp::NotesApp, notfound::NotFound,
    wait::Wait,
};
use yew::prelude::*;
use yew_router::prelude::*;

#[derive(PartialEq, Clone, Routable)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/discord-bot")]
    Discord,
    #[at("/oauth/github")]
    Wait,
    #[at("/notes-app")]
    NotesApp,
    #[at("/about")]
    About,
    #[at("/login")]
    Login,
    #[at("/login/success")]
    LoginSuccess,
    #[at("/login/fail")]
    LoginFail,
    #[not_found]
    #[at("/404")]
    NotFound,
}

#[function_component(MyApplication)]
pub fn my_app() -> Html {
    html!(
        <BrowserRouter>
            <AuthContextProviderComponent>
                <Layout>
                    <Switch<Route> render={switch} />
                </Layout>
            </AuthContextProviderComponent>
        </BrowserRouter>
    )
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html!(<Home />),
        Route::Discord => html!(<ProtectedRoute component={html!(<Discord />)} />),
        Route::NotesApp => html!(<ProtectedRoute component={html!(<NotesApp />)} />),
        Route::About => html!(<About />),
        Route::Wait => html!(<Wait />),
        Route::Login => html!(<Login />),
        Route::LoginSuccess => html!(<LoginSuccess />),
        Route::LoginFail => html!(<LoginFail />),
        Route::NotFound => html!(<NotFound />),
    }
}

#[derive(Properties, PartialEq)]
struct ProtectedRouteProps {
    component: Html,
}

#[function_component(ProtectedRoute)]
fn protected_route(props: &ProtectedRouteProps) -> Html {
    let auth_context = use_context::<AuthContextProvider>().unwrap();
    if *auth_context.context.is_authenticated {
        props.component.clone()
    } else {
        html!(<Redirect<Route> to={Route::Login}/>)
    }
}
