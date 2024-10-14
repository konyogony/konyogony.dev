import createMDXPlugin from '@next/mdx';
import remarkGfm from 'remark-gfm';

const mdxConfig = {
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
        providerImportSource: '@mdx-js/react',
    },
};

const withMDX = createMDXPlugin(mdxConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
};

export default withMDX(nextConfig, {
    experimental: {
        mdxRs: true,
    },
});

// This was a pain
