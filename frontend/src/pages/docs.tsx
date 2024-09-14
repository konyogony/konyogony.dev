import { getFromBackend } from '@/lib/fetchBackend';
import { MDXProvider } from '@mdx-js/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Docs = () => {
    const [Content, setContent] = useState<(() => JSX.Element) | null>(null);

    const path =
        useLocation().pathname.replace('/docs', '').length === 0 ? 'index' : location.pathname.replace('/docs/', ''); // This is so ugly bro

    useEffect(() => {
        const getDocs = async () => {
            const data = await getFromBackend(`/get-docs/${path}`);
            if (data) {
                console.log(data);
            }
        };
        getDocs();
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
