import { CodeWrapper } from '@/components/custom/codeWrapper';
import { HashTag } from '@/components/custom/wiki';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { capitalize } from '@/lib/capitalize';
import { cn } from '@/lib/utils';
import { MDXProvider } from '@mdx-js/react';
import { FiChevronLeft, FiChevronRight, FiEdit2, FiLoader } from '@vertisanpro/react-icons/fi';
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, NavLink, useLocation } from 'react-router-dom';
import { NotFound } from './notfound';

const WikiLink = ({ name, url, line = false }: { name: string; url: string; line?: boolean }) => {
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
    const location = useLocation();
    useEffect(() => {
        if (children.some((w) => w.path === location.pathname)) {
            isSetOpened(true);
        }
    }, [children, location]);
    return (
        <>
            {name === '' ? (
                <div className={'flex w-full flex-col items-start transition-all duration-300'}>
                    {children.map((w, i) => (
                        <WikiLink key={i} name={w.name} url={w.path} />
                    ))}
                </div>
            ) : (
                <>
                    <button
                        onClick={() => isSetOpened(!isOpened)}
                        className={cn(
                            'flex w-full flex-row items-center py-2 pb-2.5 text-sm font-normal transition-all duration-300 hover:text-zinc-200',
                            isOpened ? 'font-semibold text-zinc-50' : 'text-zinc-400',
                        )}
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
            )}
        </>
    );
};

const components = {
    h1: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
        return (
            <h1 className={cn('group text-4xl', className)} {...props} id={id}>
                {children} <HashTag id={id ?? ''} />
            </h1>
        );
    },
    h2: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
        return (
            <h2 className={cn('group text-2xl', className)} {...props} id={id}>
                {children} <HashTag id={id ?? ''} variant='h2' />
            </h2>
        );
    },
    h3: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
        return (
            <h3 className={cn('group text-xl', className)} {...props} id={id}>
                {children} <HashTag id={id ?? ''} variant='h3' />
            </h3>
        );
    },
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
        const codeElement = children as React.ReactElement<{ className: string; children: ReactNode }>;
        const language = codeElement.props.className?.replace('language-', '') || '';
        return (
            <CodeWrapper language={language} {...props}>
                {codeElement.props.children}
            </CodeWrapper>
        );
    },
};

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);
    const [loading, setLoading] = useState(true);
    const [breadcrumb, setBreadcrumb] = useState<string[]>([]);
    const [structure, setStructure] = useState<FileInfo[] | null>(null);
    const [folders, setFolders] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [headings, setHeadings] = useState<(string | null)[]>([]);

    const location = useLocation();
    const contentRef = useRef<HTMLDivElement>(null);

    const path = useMemo(
        () => location.pathname.replace('/docs/', '').replace('/docs', '') || 'index',
        [location.pathname],
    );

    const mdxFiles = useMemo(() => import.meta.glob('../docs/**/*.mdx'), [path]);

    const breadcrumbElements = useMemo(
        () =>
            breadcrumb.map((b, i) => (
                <React.Fragment key={i}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{b}</BreadcrumbPage>
                    </BreadcrumbItem>
                </React.Fragment>
            )),
        [breadcrumb],
    );

    const customSort = (a: FileInfo, b: FileInfo) =>
        a.folder === '/' ? -1 : b.folder === '/' ? 1 : a.folder.localeCompare(b.folder) || a.name.localeCompare(b.name);

    useEffect(() => {
        setLoading(true);
        const importFile = mdxFiles[`../docs/${path}.mdx`];
        if (importFile) {
            importFile()
                .then((module) => {
                    setContent(() => (module as { default: React.FC }).default);
                    setBreadcrumb(path.split('/').map((p) => capitalize(p.replaceAll('-', ' '))));
                })
                .catch((err) => console.error('Error loading MDX file:', err))
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setContent(null);
            setBreadcrumb([]);
            setLoading(false);
        }
    }, [path, mdxFiles]);

    useEffect(() => {
        const fileArray = Object.entries(mdxFiles).map(([filePath, _]) => {
            const pathParts = filePath.split('/');
            const name = pathParts[pathParts.length - 1].replace('.mdx', '');
            const folder = pathParts.slice(0, -1).join('/').replace('../docs/', '').replace('../docs', '');
            const path = `/docs${folder === '' ? '' : '/' + folder}/${name}`;
            return { name, folder, path };
        });

        const folderSet = new Set(fileArray.map((file) => file.folder));

        setStructure(fileArray.sort(customSort));
        setFolders(Array.from(folderSet).sort((a, b) => a.localeCompare(b)));
    }, [mdxFiles]);

    useEffect(() => {
        const [file, folder] = path.split('/').reverse();
        setCurrentIndex(
            structure?.findIndex((f) => (folder ? f.name === file && f.folder === folder : f.name === file)) || 0,
        );
    }, [location.pathname, structure]);

    useEffect(() => {
        const headings = contentRef.current?.querySelectorAll('h1, h2, h3');
        setHeadings(headings ? Array.from(headings).map((h) => h.textContent) : []);
    }, [location.pathname, Content]);

    console.log(headings);

    return (
        <div className='my-20 flex w-full flex-row justify-center gap-10 overflow-x-clip'>
            <div className='sticky top-24 flex w-fit min-w-[15vh] max-w-[25%] flex-shrink-0 flex-col items-start'>
                <span className='-ml-1 py-2 text-sm font-bold text-zinc-50'>Documentation</span>
                {folders ? (
                    folders.map((v, i) => (
                        <WikiFolder
                            key={i}
                            name={v}
                            children={structure ? structure.filter((w) => w.folder === v) : []}
                        />
                    ))
                ) : (
                    <span className='-ml-1 text-sm font-medium text-zinc-300'>
                        An error occured, check the console.
                    </span>
                )}
            </div>
            <div className='prose prose-invert flex min-w-[35%] flex-shrink-0 flex-col items-start prose-headings:mb-0 prose-headings:w-full prose-headings:border-b prose-headings:pb-1 prose-h1:border-white/15 prose-h2:border-white/10 prose-h3:border-white/5 prose-a:decoration-dotted'>
                <Breadcrumb className='not-prose flex w-full'>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={'/'}>Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={'/docs'}>Docs</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {breadcrumbElements}
                    </BreadcrumbList>
                </Breadcrumb>
                <div className='my-4 flex w-full flex-col' ref={contentRef}>
                    {loading ? (
                        <div className='flex h-screen w-full flex-row items-center justify-center gap-2 lg:opacity-0'>
                            <FiLoader className='animate-spin-slow' size={16} />
                            Loading, please wait...
                        </div>
                    ) : Content ? (
                        <MDXProvider components={components}>
                            <Content />
                        </MDXProvider>
                    ) : (
                        <Navigate to={'/404'} />
                    )}
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
            <div className='hidden w-fit min-w-[20vh] max-w-[25%] flex-shrink-0 flex-col items-end lg:flex'>
                <span className='-ml-1 py-2 text-sm font-bold text-zinc-50'>On this page</span>
                {headings.map((v, i) => (
                    <a
                        key={i}
                        href={`#${v?.trim().toLocaleLowerCase().replaceAll(' ', '-') || v}`}
                        className='py-1 text-sm font-light text-zinc-400 hover:text-zinc-200'
                    >
                        {v}
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
