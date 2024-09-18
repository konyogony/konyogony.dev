import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
        plugins: [
            mdx({
                providerImportSource: '@mdx-js/react',
            }),
            react(),
        ],
        resolve: {
            alias: { '@': '/src' },
        },
        optimizeDeps: {
            include: ['react/jsx-runtime'],
        },
    };
});
