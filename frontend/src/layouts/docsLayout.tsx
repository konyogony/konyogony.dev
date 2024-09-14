import { getFromBackend } from '@/lib/fetchBackend';
import { useEffect } from 'react';

export const DocsLayout = ({ children }: { children: JSX.Element }) => {
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
            <div className='flex w-full flex-row justify-between'>
                <div className='flex flex-col items-center'></div>
                <div className='wiki'>{children}</div>
                <div>second sidebar</div>
            </div>
        </>
    );
};
