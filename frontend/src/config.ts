import { WikiConfig } from '@/types';

// This is so simple
export const wikiConfig = {
    structure: [
        {
            path: 'typescript',
        },
        {
            path: 'rust',
            visible: false,
        },
        {
            path: 'javascript',
            fallback: true,
        },
        {
            path: 'libraries/flowbite',
        },
        {
            path: 'libraries/shadcn',
        },
        {
            path: 'frameworks/react',
        },
    ],
    scrollToTriggerButton: 500,
} satisfies WikiConfig;
