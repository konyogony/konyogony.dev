import { capitalize } from '@/lib/capitalize';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const WikiLink = ({ name, url }: { name: string; url: string }) => {
    return (
        <NavLink
            to={url}
            className={
                'flex w-fit flex-row items-center rounded-md px-8 py-2 text-base hover:bg-zinc-800 [&.active]:bg-zinc-600/60'
            }
        >
            {name}
        </NavLink>
    );
};

const WikiFolder = ({ name, children }: { name: string; children: FileInfo[] }) => {
    const [isOpened, isSetOpened] = useState(false);

    return (
        <>
            <button
                onClick={() => isSetOpened(!isOpened)}
                className='flex w-fit flex-row items-center rounded-md px-8 py-2 text-base hover:bg-zinc-800'
            >
                {name} {!isOpened ? '-' : '+'}
            </button>
            <div
                className={cn(
                    'ml-10 flex-col items-start gap-2 transition-transform duration-300',
                    isOpened ? 'hidden h-0' : 'flex h-fit',
                )}
            >
                {children.map((w, i) => (
                    <WikiLink key={i} name={w.name} url={`/docs${w.folder}/${w.name}`} />
                ))}
            </div>
        </>
    );
};

export const DocsLayout = ({ children }: { children: JSX.Element }) => {
    const [structure, setStructure] = useState<FileInfo[] | null>(null);
    const [folders, setFolders] = useState<string[]>([]);

    useEffect(() => {
        const files = import.meta.glob('/src/docs/**/*', { query: 'url', import: 'default' });
        const fileArray = Object.entries(files).map(([filePath, _]) => {
            const parts = filePath.split('/');
            const name = parts[parts.length - 1].replace('/', '').replace('.mdx', '');
            const folder = parts.slice(0, -1).join('/').replace('src/docs/', '').replace('src/docs', '');

            return { name, folder };
        });
        const folderSet = new Set(fileArray.map((file) => file.folder).filter((folder) => folder !== '/'));

        setStructure(fileArray);
        setFolders(Array.from(folderSet));
    }, []);

    return (
        <div className='mb-20 flex w-full flex-row overflow-x-clip px-[10%] pt-20'>
            <div className='sticky top-0 w-1/4 flex-shrink-0 flex-col items-start gap-2'>
                {structure &&
                    structure
                        .filter((v) => v.folder === '/')
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((v, i) => <WikiLink key={i} name={v.name} url={`/docs/${v.name}`} />)}
                {folders &&
                    folders
                        .sort((a, b) => a.localeCompare(b))
                        .map((v, i) => (
                            <WikiFolder
                                key={i}
                                name={capitalize(v.replaceAll('/', '').replaceAll('-', ' '))}
                                children={structure ? structure.filter((w) => w.folder === v) : []}
                            />
                        ))}
            </div>
            <div className='prose prose-invert flex w-full flex-shrink-0 flex-col items-start prose-headings:w-full prose-headings:border-b prose-headings:pb-1 prose-h1:my-4 prose-h1:border-white/15 prose-h2:my-2 prose-h2:border-white/10 prose-h3:my-1 prose-h3:border-white/5 lg:w-1/2'>
                {children}
                <div className='mt-20 flex flex-row'>last, next</div>
            </div>
            <div className='hidden w-1/4 flex-shrink-0 flex-col items-end lg:flex'>second sidebar</div>
        </div>
    );
};
