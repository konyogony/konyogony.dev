import { fetchBackend } from '@/lib/fetchBackend';
import { getMdx } from '@/lib/getMdx';
import { MDXProvider } from '@mdx-js/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Docs = () => {
    const [Content, setContent] = useState<(() => JSX.Element) | null>(null);

    const location = useLocation();
    const path =
        location.pathname.replace('/docs', '').length === 0 ? 'index' : location.pathname.replace('/docs/', ''); // This is so ugly bro

    useEffect(() => {
        const data = fetchBackend(`/get-docs/${path}`);
        console.log(data);
    }, [path]);

    return (
        <>
            {/* {Content ? (
                <MDXProvider>
                    <Content />
                </MDXProvider>
            ) : (
                <p>Error occured, check the console. It is likely that this element doesnt exist</p>
            )} */}
        </>
    );
};
