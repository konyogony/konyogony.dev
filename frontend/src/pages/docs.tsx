import { HashTag } from '@/components/custom/wiki';
import { MDXProvider } from '@mdx-js/react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NotFound } from './notfound';

// IMPORTANT: If you change this code pages starts loading x20 times slower!

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);
    const [loading, setLoading] = useState(true);

    const components = {
        h1: (props: any) => {
            console.log(props.children);
            const headingText = React.Children.toArray(props.children).join('');
            return (
                <h1 {...props} id={headingText}>
                    {props.children} <HashTag id={headingText} />
                </h1>
            );
        },
        h2: (props: any) => {
            const headingText = React.Children.toArray(props.children).join('');
            return (
                <h2 {...props} id={headingText}>
                    {props.children} <HashTag id={headingText} variant='h2' />
                </h2>
            );
        },
        h3: (props: any) => {
            const headingText = React.Children.toArray(props.children).join('');
            return (
                <h3 {...props} id={headingText}>
                    {props.children} <HashTag id={headingText} variant='h3' />
                </h3>
            );
        },
    };

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
                <MDXProvider components={components}>
                    <Content />
                </MDXProvider>
            ) : (
                <NotFound />
            )}
        </>
    );
};
