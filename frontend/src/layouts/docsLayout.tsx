import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { capitalize } from '@/lib/capitalize';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const WikiLink = ({ name, url, line }: { name: string; url: string; line: boolean }) => {
    return (
        <NavLink
            to={url}
            className={cn(
                'flex py-2 text-sm font-normal text-zinc-400 transition-all duration-300 hover:text-zinc-200 [&.active]:font-semibold [&.active]:text-indigo-600 [&.active]:hover:!text-zinc-100',
                line && 'border-l-[1.5px] border-white/15 pl-4 [&.active]:border-indigo-600',
            )}
        >
            {capitalize(name.replaceAll('/', '').replaceAll('-', ' '))}
        </NavLink>
    );
};

const WikiFolder = ({ name, children }: { name: string; children: FileInfo[] }) => {
    const [isOpened, isSetOpened] = useState(false);
    return (
        <>
            <button
                onClick={() => isSetOpened(!isOpened)}
                className='flex w-full flex-row items-center py-2 pb-2.5 text-sm font-normal text-zinc-400 transition-all duration-300 hover:text-zinc-100'
            >
                {capitalize(name.replaceAll('/', '').replaceAll('-', ' '))}
                <FiChevronRight size={14} className={cn('ml-auto mt-[1px]', isOpened && 'rotate-90')} />
            </button>
            <div
                className={cn(
                    'ml-1 flex flex-col items-start transition-all duration-300',
                    !isOpened
                        ? 'pointer-events-none max-h-0 opacity-0'
                        : 'pointer-events-auto max-h-[100vh] opacity-100',
                )}
            >
                {children.map((w, i) => (
                    <WikiLink key={i} name={w.name} url={`/docs${w.folder}/${w.name}`} line={true} />
                ))}
            </div>
        </>
    );
};

export const DocsLayout = ({ children }: { children: JSX.Element }) => {
    const [structure, setStructure] = useState<FileInfo[] | null>(null);
    const [folders, setFolders] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const files = import.meta.glob('/src/docs/**/*.mdx', { query: 'url', import: 'default' });
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
        <div className='my-20 flex w-full flex-row justify-center gap-10 overflow-x-clip'>
            <div className='sticky top-24 flex w-fit min-w-[15vh] max-w-[25%] flex-shrink-0 flex-col items-start'>
                <span className='-ml-1 py-2 text-sm font-bold text-zinc-50'>Documentation</span>
                {structure &&
                    structure
                        .filter((v) => v.folder === '/')
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((v, i) => <WikiLink key={i} name={v.name} url={`/docs/${v.name}`} line={false} />)}
                {folders &&
                    folders
                        .sort((a, b) => a.localeCompare(b))
                        .map((v, i) => (
                            <WikiFolder
                                key={i}
                                name={v}
                                children={structure ? structure.filter((w) => w.folder === v) : []}
                            />
                        ))}
            </div>
            <div className='prose prose-invert flex min-w-[35%] flex-shrink-0 flex-col items-start prose-headings:w-full prose-headings:border-b prose-headings:pb-1 prose-h1:my-4 prose-h1:border-white/15 prose-h2:my-2 prose-h2:border-white/10 prose-h3:my-1 prose-h3:border-white/5 prose-a:decoration-dotted'>
                {children}
            </div>
            <div className='hidden w-fit max-w-[25%] flex-shrink-0 flex-col items-end lg:flex'>
                second sidebar
                <a
                    href={`https://github.com/konyogony/konyogony.dev/tree/main/frontend/src/docs/${structure?.[currentIndex].name}.mdx`}
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    Edit this page on GitHub
                </a>
            </div>
        </div>
    );
};
