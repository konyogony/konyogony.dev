import { WikiConfig } from '@/types';

export const wikiConfig: WikiConfig = {
    structure: [
        {
            path: 'about',
            fallback: true,
            visible: true,
        },
        {
            path: 'behind-the-scenes/commit-guidelines',
        },
        // {
        //     path: 'rust',
        //     visible: false,
        // },
        // {
        //     path: 'javascript',
        //     fallback: true,
        // },
        {
            path: 'all-about-arch/installing-arch',
        },
        // {
        //     path: 'libraries/flowbite',
        // },
        // {
        //     path: 'libraries/shadcn',
        // },
        // {
        //     path: 'frameworks/react',
        // },
    ],
    scrollToTriggerButton: 500,
} as const;
