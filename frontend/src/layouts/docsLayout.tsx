import { Button } from '@/components/ui/button';
import { capitalize } from '@/lib/capitalize';
import { cn } from '@/lib/utils';
import { FiChevronLeft, FiChevronRight, FiEdit2 } from '@vertisanpro/react-icons/fi';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const WikiLink = ({ name, url, line }: { name: string; url: string; line: boolean }) => {
    return (
        <NavLink
            to={url}
            className={cn(
                'flex w-full py-2 text-sm font-normal text-zinc-400 transition-all duration-300 hover:text-zinc-200 [&.active]:font-semibold [&.active]:text-zinc-50',
                line && 'border-l-[1.5px] border-white/15 pl-4 hover:border-zinc-400 [&.active]:border-zinc-50',
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
                    'ml-1 flex w-full flex-col items-start transition-all duration-300',
                    !isOpened
                        ? 'pointer-events-none max-h-0 opacity-0'
                        : 'pointer-events-auto max-h-[100vh] opacity-100',
                )}
            >
                {children.map((w, i) => (
                    <WikiLink key={i} name={w.name} url={w.path} line={true} />
                ))}
            </div>
        </>
    );
};

export const DocsLayout = ({ children }: { children: JSX.Element }) => {
    const [structure, setStructure] = useState<FileInfo[] | null>(null);
    const [folders, setFolders] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [toc, setToc] = useState<{ id: string; text: string }[] | null>(null);
    const location = useLocation();
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const headings: { id: string; text: string }[] = [];
        if (contentRef.current) {
            contentRef.current
                .querySelectorAll('h1, h2, h3')
                .forEach((h) => headings.push({ id: h.id, text: h.textContent || '' }));
        }
        setToc(headings);
    }, [currentIndex]);

    const customSort = (a: FileInfo, b: FileInfo) => {
        if (a.folder === '/' && b.folder !== '/') return -1;
        if (a.folder !== '/' && b.folder === '/') return 1;
        if (a.folder === b.folder) {
            return a.name.localeCompare(b.name);
        }
        return a.folder.localeCompare(b.folder);
    };

    useEffect(() => {
        const files = import.meta.glob('/src/docs/**/*.mdx', { query: 'url', import: 'default' });
        const fileArray = Object.entries(files).map(([filePath, _]) => {
            const parts = filePath.split('/');
            const name = parts[parts.length - 1].replace('/', '').replace('.mdx', '');
            const folder = parts.slice(0, -1).join('/').replace('src/docs/', '').replace('src/docs', '');
            const path = `/docs${folder}${folder !== '/' ? '/' : ''}${name}`;
            return { name, folder, path };
        });
        1;
        const folderSet = new Set(fileArray.map((file) => file.folder).filter((folder) => folder !== '/'));

        setStructure(fileArray.sort(customSort));
        setFolders(Array.from(folderSet).sort((a, b) => a.localeCompare(b)));
    }, []);

    useEffect(() => {
        const path = location.pathname.replace('/docs/', '').replace('/docs', '') || 'index';
        const [file, folder] = path.split('/').reverse();
        setCurrentIndex(
            structure?.findIndex((f) => (folder ? f.name === file && f.folder === '/' + folder : f.name === file)) || 0,
        );
    }, [location.pathname, structure]);

    console.log(toc);

    return (
        <div className='my-20 flex w-full flex-row justify-center gap-10 overflow-x-clip'>
            <div className='sticky top-24 flex w-fit min-w-[15vh] max-w-[25%] flex-shrink-0 flex-col items-start'>
                <span className='-ml-1 py-2 text-sm font-bold text-zinc-50'>Documentation</span>
                {structure &&
                    structure
                        .filter((v) => v.folder === '/')
                        .map((v, i) => <WikiLink key={i} name={v.name} url={v.path} line={false} />)}
                {folders &&
                    folders.map((v, i) => (
                        <WikiFolder
                            key={i}
                            name={v}
                            children={structure ? structure.filter((w) => w.folder === v) : []}
                        />
                    ))}
            </div>
            <div className='prose prose-invert flex min-w-[35%] flex-shrink-0 flex-col items-start prose-headings:w-full prose-headings:border-b prose-headings:pb-1 prose-h1:my-4 prose-h1:border-white/15 prose-h2:my-2 prose-h2:border-white/10 prose-h3:my-1 prose-h3:border-white/5 prose-a:decoration-dotted'>
                <div className='w-full' ref={contentRef}>
                    {children}
                </div>
                <div className='not-prose flex w-full flex-row items-center'>
                    {structure && structure[currentIndex - 1] && (
                        <Button variant={'outline'} className='mr-auto flex flex-row items-center gap-1' asChild>
                            <Link to={`${structure[currentIndex - 1].path}`}>
                                <FiChevronLeft size={14} />
                                {capitalize(structure[currentIndex - 1].name.replaceAll('-', ' '))}
                            </Link>
                        </Button>
                    )}
                    {structure && structure[currentIndex + 1] && (
                        <Button variant={'outline'} className='ml-auto flex flex-row items-center gap-1' asChild>
                            <Link to={`${structure[currentIndex + 1].path}`}>
                                {capitalize(structure[currentIndex + 1].name.replaceAll('-', ' '))}
                                <FiChevronRight size={14} />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
            <div className='hidden w-fit max-w-[25%] flex-shrink-0 flex-col items-end lg:flex'>
                <span className='-ml-1 py-2 text-sm font-bold text-zinc-50'>On this page</span>
                {toc?.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className='py-1 text-sm font-light text-zinc-300 hover:text-zinc-200'
                    >
                        {item.text}
                    </a>
                ))}
                <a
                    href={`https://github.com/konyogony/konyogony.dev/tree/main/frontend/src/docs${structure?.[currentIndex].folder}${structure?.[currentIndex].folder !== '/' ? '/' : ''}${structure?.[currentIndex].name}.mdx`}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='mt-4 flex flex-row items-center gap-1 text-sm text-gray-400'
                >
                    <FiEdit2 />
                    Edit this page on GitHub
                </a>
            </div>
        </div>
    );
};
