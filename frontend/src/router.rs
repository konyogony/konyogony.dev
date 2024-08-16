use crate::auth_context::{AuthContextProvider, AuthContextProviderComponent};
use crate::components::{
    about::About, discord::Discord, home::Home, layout::Layout, login::Login,
    login_fail::LoginFail, login_success::LoginSuccess, logout::Logout, notesapp::NotesApp,
    notfound::NotFound, privacy_policy::PrivacyPolicy, tos::TOS, wait::Wait,
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
    #[at("/logout")]
    Logout,
    #[at("/login/success")]
    LoginSuccess,
    #[at("/login/fail")]
    LoginFail,
    #[at("/termsofservice")]
    TOS,
    #[at("/privacypolicy")]
    PrivacyPolicy,
    // #[at("/admin")]
    // Admin,
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
        Route::Logout => html!(<Logout />),
        Route::Wait => html!(<Wait />),
        Route::TOS => html!(<TOS />),
        Route::PrivacyPolicy => html!(<PrivacyPolicy />),
        Route::Login => {
            html!(<AuthDependantRoute authenticated_component={html!(<Redirect<Route> to={Route::Logout}/>)} not_authenticated_component={html!(<Login />)}/>)
        }
        Route::LoginSuccess => html!(<LoginSuccess />),
        Route::LoginFail => html!(<LoginFail />),
        Route::NotFound => html!(<NotFound />),
    }
}

#[derive(Properties, PartialEq)]
struct AuthDependantProps {
    authenticated_component: Html,
    not_authenticated_component: Html,
}

#[function_component(AuthDependantRoute)]
fn auth_dependant(props: &AuthDependantProps) -> Html {
    let auth_context = use_context::<AuthContextProvider>().unwrap();
    if *auth_context.context.is_authenticated {
        props.authenticated_component.clone()
    } else {
        props.not_authenticated_component.clone()
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
