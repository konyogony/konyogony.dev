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
            <div className='flex w-full flex-row pt-20'>
                <div className='flex w-1/4 flex-col items-center'></div>
                <div className='wiki w-1/2 items-start'>{children}</div>
                <div className='flex w-1/4 items-end'>second sidebar</div>
            </div>
        </>
    );
};
