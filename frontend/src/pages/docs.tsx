import { MDXProvider } from '@mdx-js/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NotFound } from './notfound';

// IMPORTANT: If you change this code pages starts loading x20 times slower!

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const path = location.pathname.replace('/docs/', '').replace('/docs', '') || 'index';

    const mdxFiles = import.meta.glob('../docs/**/*.mdx');

    useEffect(() => {
        setLoading(true);
        const importFile = mdxFiles[`../docs/${path}.mdx`];
        if (importFile)
            importFile()
                .then((module) => setContent(() => (module as { default: React.FC }).default))
                .catch((err) => console.error('Error loading MDX file:', err));
        setLoading(false);
    }, [path]);

    return (
        <>
            {loading ? (
                <div className='flex h-screen w-full items-center justify-center'>loading...</div>
            ) : Content ? (
                <MDXProvider>
                    <Content />
                </MDXProvider>
            ) : (
                <NotFound />
            )}
        </>
    );
};
