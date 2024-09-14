import { getFromBackend } from '@/lib/fetchBackend';
import { compile, evaluate } from '@mdx-js/mdx';
import { MDXProvider } from '@mdx-js/react';
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import * as runtime from 'react/jsx-runtime';

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);
    const [loading, setLoading] = useState(true);

    const options = {};

    const location = useLocation();
    const path =
        location.pathname.replace('/docs', '').length === 0 ? 'index' : location.pathname.replace('/docs/', '');

    useEffect(() => {
        (async () => {
            setLoading(true);
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
            setLoading(false);
        })();
    }, [path]);

    return (
        <>
            {loading ? (
                <div className='flex h-screen items-center justify-center'>
                    <div className='animate-spin h-5 w-5 border-b-2 border-gray-900'></div>
                </div>
            ) : Content ? (
                <MDXProvider>
                    <Content />
                </MDXProvider>
            ) : (
                <Navigate to='/404' />
            )}
        </>
    );
};
