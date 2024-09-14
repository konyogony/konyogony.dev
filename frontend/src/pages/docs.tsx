import { getFromBackend } from '@/lib/fetchBackend';
import { compile, evaluate } from '@mdx-js/mdx';
import { MDXProvider } from '@mdx-js/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as runtime from 'react/jsx-runtime';

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);

    const location = useLocation();
    const path =
        location.pathname.replace('/docs', '').length === 0 ? 'index' : location.pathname.replace('/docs/', '');

    useEffect(() => {
        const getDocs = async () => {
            const data = await getFromBackend(`/get-docs/${path}`);
            if (data) {
                try {
                    const mdxModule = await evaluate(data, {
                        ...(runtime as any),
                        useMDXComponents: () => ({}),
                    });
                    setContent(() => (mdxModule.default as React.FC) ?? null);
                } catch (error) {
                    console.error('Error compiling MDX:', error);
                }
            }
        };
        getDocs();
    }, [path]);

    return (
        <>
            {Content ? (
                <MDXProvider>
                    <Content />
                </MDXProvider>
            ) : (
                <p>Error occurred, check the console. It is likely that this element doesn't exist</p>
            )}
        </>
    );
};
