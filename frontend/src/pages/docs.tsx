import { MDXProvider } from '@mdx-js/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NotFound } from './notfound';

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);
    const [loading, setLoading] = useState(true);

    const options = {};

    const location = useLocation();
    const path =
        location.pathname.replace('/docs', '').length === 0 ? 'index' : location.pathname.replace('/docs/', '');

    const mdxFiles = import.meta.glob('../docs/**/*.mdx');

    useEffect(() => {
        setLoading(true);
        const mdxPath = `../docs/${path}.mdx`;

        const importFile = mdxFiles[mdxPath];
        if (importFile) {
            importFile()
                .then((module) => {
                    setContent(() => (module as { default: React.FC }).default);
                })
                .catch((err) => {
                    console.error('Error loading MDX file:', err);
                    setContent(null);
                });
        } else {
            setContent(null);
        }

        setLoading(false);
    }, [path]);

    return (
        <>
            {loading ? (
                <div className='flex h-screen w-full items-center justify-center'>loading...</div>
            ) : Content ? (
                <MDXProvider {...options}>
                    <Content />
                </MDXProvider>
            ) : (
                <NotFound />
            )}
        </>
    );
};
