import { H1 } from '@/components/custom/wiki';
import { MDXProvider } from '@mdx-js/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NotFound } from './notfound';

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);
    const [loading, setLoading] = useState(true);

    const components = {
        H1,
    };

    const location = useLocation();
    const path = location.pathname.replace('/docs/', '').replace('/docs', '') || 'index';

    const mdxFiles = import.meta.glob('../docs/**/*.mdx');

    useEffect(() => {
        setLoading(true);

        const importFile = mdxFiles[`../docs/${path}.mdx`];
        if (!importFile) {
            setLoading(false);
            setContent(null);
            return;
        }

        importFile()
            .then((module) => {
                setContent(() => (module as { default: React.FC }).default);
            })
            .catch((err) => {
                console.error('Error loading MDX file:', err);
                setContent(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [path, mdxFiles]);

    return (
        <MDXProvider components={components}>
            {loading ? (
                <div className='flex h-screen w-full items-center justify-center'>loading...</div>
            ) : Content ? (
                <Content />
            ) : (
                <NotFound />
            )}
        </MDXProvider>
    );
};
