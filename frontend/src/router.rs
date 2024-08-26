use crate::auth_context::{AuthContextProvider, AuthContextProviderComponent};
use crate::components::{
    about::About, discord::Discord, extras::Extras, home::Home, layout::Layout, login::Login,
    login_fail::LoginFail, login_success::LoginSuccess, logout::Logout, notesapp::NotesApp,
    notfound::NotFound, privacy_policy::PrivacyPolicy, social::Social,
    social_redirect::SocialRedirect, tos::TOS, wait::Wait,
};
use yew::prelude::*;
use yew_router::prelude::*;

#[derive(PartialEq, Clone, Routable)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/social")]
    Social,
    #[at("/social/:provider")]
    SocialRedirect { provider: String },
    #[at("/discord-bot")]
    Discord,
    #[at("/oauth/github")]
    Wait,
    #[at("/notes-app")]
    NotesApp,
    #[at("/about")]
    About,
    #[at("/extras")]
    Extras,
    #[at("/login")]
    Login,
    #[at("/logout")]
    Logout,
    #[at("/login/success")]
    LoginSuccess,
    #[at("/login/error")]
    LoginFail,
    #[at("/terms-of-service")]
    TOS,
    #[at("/privacy-policy")]
    PrivacyPolicy,
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
        Route::Social => html!(<Social />),
        Route::SocialRedirect { provider } => {
            let redirect_url = match provider.as_str() {
                "github" => "https://github.com/kony-ogony/".to_string(),
                "discord" => "https://discordlookup.com/user/564472732071493633/".to_string(),
                "spotify" => "https://open.spotify.com/user/xeq03n90tcwkg4tegzdxggvzd/".to_string(),
                "steam" => "https://steamcommunity.com/id/kony_ogony/".to_string(),

                _ => "/404".to_string(),
            };
            html!(<SocialRedirect redirect_url={redirect_url} />)
        }
        Route::Logout => html!(<Logout />),
        Route::Wait => html!(<Wait />),
        Route::TOS => html!(<TOS />),
        Route::Extras => html!(<Extras />),
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
    if auth_context.context.jwt.is_some() {
        // TODO
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
    if auth_context.context.jwt.is_some() {
        // TODO
        props.component.clone()
    } else {
        html!(<Redirect<Route> to={Route::Login}/>)
    }
}
