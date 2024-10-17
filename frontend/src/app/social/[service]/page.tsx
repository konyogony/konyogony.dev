'use client';

import { useEffect, useState } from 'react';

interface SocialProps {
    params: Promise<{ service: string }>;
}

const SocialRedirect = ({ params }: SocialProps) => {
    const [service, setService] = useState<string | null>(null);

    useEffect(() => {
        params.then(({ service }) => {
            setService(service);
        });
    }, [params]);

    useEffect(() => {
        switch (service) {
            case 'github':
                window.location.href = 'https://github.com/konyogony';
                break;
            case 'steam':
                window.location.href = 'https://steamcommunity.com/id/kony_ogony/';
                break;
            case 'discord':
                window.location.href = 'https://discordlookup.com/user/564472732071493633/';
                break;
            case 'spotify':
                window.location.href = 'https://open.spotify.com/user/xeq03n90tcwkg4tegzdxggvzd/';
                break;
            default:
                window.location.href = 'https://konyogony.dev';
                break;
        }
    }, [service]);

    return null;
};

export default SocialRedirect;
