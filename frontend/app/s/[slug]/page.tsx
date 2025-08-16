import { redirect } from 'next/navigation';

const links: Record<string, string> = {
    spotify: 'https://open.spotify.com/user/xeq03n90tcwkg4tegzdxggvzd?si=280d2b1c44d24e54',
    discord: 'https://discordapp.com/users/564472732071493633',
    steam: 'https://steamcommunity.com/kony_ogony',
    wakatime: 'https://wakatime.com/@konyogony',
};

interface Props {
    params: Promise<{ slug: string }>;
}

const SocialRedirectPage = async ({ params }: Props) => {
    const { slug } = await params;
    const url = links[slug];
    if (url) redirect(url);
    redirect('/');
};

export const generateStaticParams = () => {
    return Object.keys(links).map((slug) => ({ slug }));
};

export default SocialRedirectPage;
