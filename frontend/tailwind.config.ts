import typogrophy from '@tailwindcss/typography';
import svgToDataUri from 'mini-svg-data-uri';
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
// import colors from 'tailwindcss/colors';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx,md}'],
    theme: {
        animation: {
            shimmer: 'shimmer 2s linear infinite',
        },
        keyframes: {
            shimmer: {
                from: {
                    backgroundPosition: '0 0',
                },
                to: {
                    backgroundPosition: '-200% 0',
                },
            },
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            marginBottom: '1rem', // mb-4
                            display: 'flex', // flex
                            width: '100%', // w-full
                            flexDirection: 'row', // flex-row
                            alignItems: 'center', // items-center
                            gap: '0.25rem', // gap-1
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // border-b border-white/10
                            padding: '0.5rem', // p-2
                            fontSize: '2.25rem', // text-4xl
                            color: '#f8f9fa', // text-zinc-50
                        },
                        h2: {
                            marginBottom: '1rem', // mb-4
                            display: 'flex', // flex
                            flexDirection: 'row', // flex-row
                            alignItems: 'center', // items-center
                            gap: '0.25rem', // gap-1
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // border-b border-white/10
                            padding: '0.5rem', // p-2
                            fontSize: '1.875rem', // text-3xl
                            color: '#e5e7eb', // text-zinc-100
                        },
                        h3: {
                            marginBottom: '0.25rem', // mb-1
                            fontSize: '1.5rem', // text-2xl
                            color: '#d1d5db', // text-zinc-300
                        },
                        p: {
                            fontSize: '1rem', // text-base
                            color: '#e4e4e7', // text-zinc-200
                        },
                        a: {
                            fontSize: '1rem', // text-base
                            textDecoration: 'underline',
                            textDecorationStyle: 'dotted', // decoration-dotted
                            color: '#e4e4e7', // text-zinc-200
                        },
                        ol: {
                            listStyleType: 'decimal',
                            color: '#e4e4e7', // text-zinc-200 for ordered lists
                        },
                        ul: {
                            listStyleType: 'disc',
                            color: '#e4e4e7', // text-zinc-200 for unordered lists
                        },
                    },
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {},
        },
    },
    plugins: [animate, addVariablesForColors, grid, typogrophy],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme('colors'));
    let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

    addBase({
        ':root': newVars,
    });
}

function grid({ matchUtilities, theme }: any) {
    matchUtilities(
        {
            'bg-grid': (value: any) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                )}")`,
            }),
            'bg-grid-small': (value: any) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                )}")`,
            }),
            'bg-dot': (value: any) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
                )}")`,
            }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
    );
}
