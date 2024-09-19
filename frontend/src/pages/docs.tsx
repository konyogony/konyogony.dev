import { components, WikiFolder } from '@/components/custom/wiki';
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
import { FiArrowUp, FiArrowUpRight, FiChevronLeft, FiChevronRight, FiLoader } from '@vertisanpro/react-icons/fi';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NotFound } from './notfound';

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [loading, setLoading] = useState(true);
    const [breadcrumb, setBreadcrumb] = useState<string[]>([]);
    const [structure, setStructure] = useState<FileInfo[] | null>(null);
    const [folders, setFolders] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [headings, setHeadings] = useState<(string | null)[]>([]);
    const [activeHeading, setActiveHeading] = useState<string | null>(null);

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
    }, [path, mdxFiles]);

    useEffect(() => {
        const [file, folder] = path.split('/').reverse();
        setCurrentIndex(
            structure?.findIndex((f) => (folder ? f.name === file && f.folder === folder : f.name === file)) || 0,
        );
    }, [location.pathname, structure]);

    useEffect(() => {
        const headings = contentRef.current?.querySelectorAll('h1, h2');
        setHeadings(headings ? Array.from(headings).map((h) => h.textContent) : []);
    }, [location.pathname, Content]);

    useEffect(() => {
        const handleScroll = () => setScrollHeight(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveHeading(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px', threshold: 0.1 },
        );

        const headingElements = contentRef.current?.querySelectorAll('h1, h2');
        headingElements?.forEach((heading) => observer.observe(heading));

        return () => {
            headingElements?.forEach((heading) => observer.unobserve(heading));
        };
    }, [Content]);

    if (!Content) return <NotFound />;

    return (
        <div className='relative my-20 flex w-full flex-row justify-center gap-10 overflow-x-clip'>
            <div className='sticky left-0 top-0 w-fit min-w-[15vh] max-w-[25%] flex-shrink-0 flex-col items-start'>
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
            <div className='prose prose-zinc prose-invert flex min-w-[35%] flex-shrink-0 flex-col items-start prose-headings:mb-0 prose-headings:w-full prose-headings:border-b prose-headings:border-white/15 prose-headings:pb-1 prose-a:decoration-dotted hover:prose-a:text-blue-500 prose-hr:border-white/20'>
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
                    ) : (
                        <MDXProvider components={components}>
                            <Content />
                        </MDXProvider>
                    )}
                </div>
                {!loading ? (
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
                ) : null}
            </div>
            <div className='sticky hidden w-fit min-w-[20vh] max-w-[25%] flex-shrink-0 flex-col items-end lg:flex'>
                <span className='-ml-1 py-2 text-sm font-bold text-zinc-50'>On this page</span>
                {headings.map((v, i) => (
                    <a
                        key={i}
                        href={`#${v?.trim().toLocaleLowerCase().replaceAll(' ', '-') || v}`}
                        className={cn(
                            'py-1 text-sm font-light text-zinc-400 hover:text-zinc-200',
                            activeHeading === v?.toLowerCase().replace(/\s+/g, '-') && 'font-bold text-zinc-50',
                        )}
                    >
                        {v}
                    </a>
                ))}
                <div className='my-2 h-[1px] w-3/4 bg-white/10' />
                <a
                    href={`https://github.com/konyogony/konyogony.dev/tree/main/frontend/src/docs${structure?.[currentIndex].folder}${structure?.[currentIndex].folder !== '/' ? '/' : ''}${structure?.[currentIndex].name}.mdx`}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='flex flex-row items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200'
                >
                    Edit this page on GitHub <FiArrowUpRight />
                </a>
                {scrollHeight > 500 && (
                    <a
                        href={`#${headings[0]?.trim().toLocaleLowerCase().replaceAll(' ', '-') || headings[0]}`}
                        className='my-2 flex flex-row items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200'
                    >
                        Back to top <FiArrowUp />
                    </a>
                )}
            </div>
        </div>
    );
};
