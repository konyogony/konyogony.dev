import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const wikiLink = (url: string, text: string, i: number) => {
    return (
        <NavLink
            to={url}
            key={i}
            className={
                'flex w-fit flex-row items-center rounded-md px-8 py-2 text-base hover:bg-zinc-800 [&.active]:bg-zinc-600/60'
            }
        >
            {text}
        </NavLink>
    );
};

export const DocsLayout = ({ children }: { children: JSX.Element }) => {
    const [structure, setStructure] = useState<FileInfo[] | null>(null);

    useEffect(() => {
        const files = import.meta.glob('/src/docs/**/*', { query: 'url', import: 'default' });
        const fileArray: FileInfo[] = [];

        for (const filePath in files) {
            const parts = filePath.split('/');
            const name = parts[parts.length - 1].replace('/', '').replace('.mdx', '');
            const folder = parts.slice(0, -1).join('/').replace('src/docs/', '').replace('src/docs', '');

            fileArray.push({ name, folder });
        }

        setStructure(() => fileArray);
        console.log(structure);
    }, []);

    return (
        <>
            <div className='flex w-full flex-row pt-20'>
                <div className='flex w-1/4 flex-shrink-0 flex-col items-center gap-2'>
                    {structure &&
                        structure.map((v, i) =>
                            wikiLink(`/docs${v.folder}${v.folder === '/' ? '' : '/'}${v.name}`, v.name, i),
                        )}
                </div>
                <div className='wiki w-1/2 flex-shrink-0 items-start'>{children}</div>
                <div className='flex w-1/4 flex-shrink-0 items-end'>second sidebar</div>
            </div>
        </>
    );
};
