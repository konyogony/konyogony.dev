import { getFromBackend } from '@/lib/fetchBackend';
import { WikiFile } from '@/types';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const wikiLink = (url: string, text: string) => {
    return (
        <NavLink to={url} className={'mx-8 my-2 flex w-fit flex-row items-center text-base'}>
            {text}
        </NavLink>
    );
};

export const DocsLayout = ({ children }: { children: JSX.Element }) => {
    const [structure, setStructure] = useState<WikiFile[] | null>(null);
    useEffect(() => {
        const getStructure = async () => {
            const data = await getFromBackend(`/get-structure`);
            if (data) {
                console.log(data);
            }
        };
        getStructure();
    }, []);
    return (
        <>
            <div className='flex w-full flex-row pt-20'>
                <div className='flex w-1/4 flex-col items-center'></div>
                <div className='wiki w-1/2 items-start'>{children}</div>
                <div className='flex w-1/4 items-end'>second sidebar</div>
            </div>
        </>
    );
};
