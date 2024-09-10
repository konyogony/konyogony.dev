use crate::components::navbar::nav_items::TitleHome;
use yew::{function_component, html, Html};
// use yew_icons::{Icon, IconId};
// https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-04.  jpg

#[function_component(Footer)]
pub fn footer() -> Html {
    html!(
        <div class="h-fit w-full bg-gray-900 flex flex-col flex-shrink-0 px-[15%] py-8">
            <div class="flex flex-row items-center">
                <div class="flex flex-col">
                    <TitleHome />
                    <span class="text-sm text-gray-400">
                        {"Kony's personal website for future projects and ideas."}
                    </span>
                </div>
            </div>
            <div class="h-[1px] w-full bg-white/5 rounded-lg my-2 mt-4"/>
            <div class="flex flex-row gap-4 mt-2 text-sm text-gray-200 font-semibold items-center">
                <a href={"/privacypolicy"}>{"Privacy Policy"}</a>
                <a href={"/termsofservice"}>{"Terms Of Service"}</a>
                <div class="ml-auto flex flex-row gap-4 items-center">
                    // <a  href={"https://discord.com/users/564472732071493633"}>
                    //     <Icon
                    //         icon_id={IconId::BootstrapDiscord}
                    //         class="cursor-pointer size-4"
                    //     />
                    // </a>
                    // <a href={"https://discord.com/users/564472732071493633"}>
                    //     <Icon
                    //         icon_id={IconId::BootstrapGithub}
                    //         class="cursor-pointer size-4"
                    //     />
                    // </a>
                </div>
            </div>
            <span class="text-sm mt-4 mx-auto font-light text-gray-400">{"Copright © 2024 - All rights reserved."}</span>
        </div>
    )
}
