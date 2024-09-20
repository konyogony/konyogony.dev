import { wikiComponents } from '@/components/custom/wikiComponents';
import { WikiFolder } from '@/components/custom/wikiFolder';
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
import { FileInfo } from '@/types';
import { MDXProvider } from '@mdx-js/react';
import { FiArrowUp, FiArrowUpRight, FiChevronLeft, FiChevronRight } from '@vertisanpro/react-icons/fi';
import { TbOutlineLoader2 } from '@vertisanpro/react-icons/tb';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

    const fallback = 'typescript';
    const scrollToTrigger = 500;

    const location = useLocation();
    const contentRef = useRef<HTMLDivElement>(null);

    const path = useMemo(
        () => location.pathname.replace('/docs/', '').replace('/docs', '') || fallback,
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
            11;
            setLoading(false);
        }
    }, [path, mdxFiles]);

    useEffect(() => {
        const fileArray = Object.entries(mdxFiles).map(([filePath, _]) => {
            const pathParts = filePath.split('/');
            const name = pathParts[pathParts.length - 1].replace('.mdx', '');
            const folder = pathParts.slice(0, -1).join('/').replace('../docs/', '').replace('../docs', '');
            const path = `/docs${folder ? `/${folder}` : ''}/${name}`;
            const gitPath = `https://github.com/konyogony/konyogony.dev/tree/main/frontend/src/docs/${folder}${folder !== '/' ? '/' : ''}${name}.mdx`;
            return { name, folder, path, gitPath };
        });

        const folderSet = new Set(fileArray.map((file) => file.folder));

        setStructure(fileArray.sort(customSort));
        setFolders(Array.from(folderSet).sort((a, b) => a.localeCompare(b)));
    }, [path, mdxFiles]);

    useEffect(() => {
        const [file, ...folders] = path.split('/').reverse();
        const folder = folders.reverse().join('/');
        setCurrentIndex(
            structure?.findIndex((f) => (folder ? f.name === file && f.folder === folder : f.name === file)) || 0,
        );
    }, [location.pathname, structure]);

    useEffect(() => {
        const headings = contentRef.current?.querySelectorAll('h1, h2');
        setHeadings(headings ? Array.from(headings).map((h) => h.textContent) : []);
    }, [location.pathname, Content]);

    useEffect(() => {
        // This effect creates an IntersectionObserver that observes all headings in the currently rendered MDX document.
        // When a heading comes into view, the observer callback is triggered and the ID of the heading is set as the active heading.
        // The observer is configured to consider an element "in view" if at least 5% of it is visible in the viewport.
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        setActiveHeading(id);
                    }
                });
            },
            {
                // The root element is the document root, so we don't need to set it explicitly.
                // The root margin is set to 0px on all sides except for the top, where it is set to -80% of the viewport height.
                // This means that an element is considered "in view" as soon as 5% of its top edge is visible above the fold.
                rootMargin: '0px 0px -80% 0px',
                // The threshold is set to 0.05, which means that an element is considered "in view" if at least 5% of it is visible.
                threshold: 0.05,
            },
        );

        // Get all headings in the currently rendered MDX document.
        const currentHeadings = contentRef.current?.querySelectorAll('h1, h2') || [];

        // Observe each of the headings.
        currentHeadings.forEach((heading) => {
            if (heading) {
                observer.observe(heading);
            }
        });

        // When the component is unmounted, unobserve all headings.
        return () => {
            currentHeadings.forEach((heading) => {
                observer.unobserve(heading);
            });
        };
    }, [Content, location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollHeight(window.scrollY);
            console.log(activeHeading);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='relative my-32 flex w-full flex-row justify-center gap-10 overflow-x-clip lg:my-20'>
            <div className='sticky top-24 hidden h-fit w-fit min-w-[15vh] flex-shrink-0 flex-col items-start lg:flex'>
                <span className='py-2 text-sm font-bold text-zinc-50'>Documentation</span>
                {folders &&
                    folders.map((v, i) => (
                        <WikiFolder key={i} name={v}>
                            {structure ? structure.filter((w) => w.folder === v) : []}
                        </WikiFolder>
                    ))}
            </div>
            <div className='prose prose-zinc prose-invert flex w-full flex-shrink-0 flex-col items-start prose-headings:my-2 prose-headings:w-full prose-headings:border-b prose-headings:border-white/15 prose-headings:pb-1.5 prose-a:decoration-dotted hover:prose-a:text-blue-500 prose-hr:border-white/20 lg:max-w-[40%]'>
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
                <div className='my-4 flex h-full w-full flex-col' ref={contentRef}>
                    {loading ? (
                        <div className='flex h-screen w-full flex-row items-center justify-center gap-2 lg:opacity-0'>
                            <TbOutlineLoader2 className='animate-spin-slow' size={20} />
                            Loading, please wait...
                        </div>
                    ) : Content ? (
                        <MDXProvider components={wikiComponents}>
                            <Content />
                        </MDXProvider>
                    ) : null}
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
            <div className='sticky top-24 hidden h-fit w-fit min-w-[20vh] flex-shrink-0 flex-col items-end lg:flex'>
                <span className='-ml-1 py-2 text-sm font-bold text-zinc-50'>On this page</span>
                {headings.map((v, i) => (
                    <React.Fragment key={i}>
                        {v ? (
                            <a
                                href={`#${v.trim().toLocaleLowerCase().replaceAll(' ', '-') || v}`}
                                className={cn(
                                    'py-1 text-sm font-light text-zinc-400 hover:text-zinc-200',
                                    activeHeading === v.toLowerCase().replace(/\s+/g, '-') && 'font-bold text-zinc-50',
                                )}
                            >
                                {v}
                            </a>
                        ) : null}
                    </React.Fragment>
                ))}
                <div className='my-2 h-[1px] w-3/4 bg-white/10' />
                <a
                    href={structure ? structure[currentIndex].gitPath : '/404'}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='flex flex-row items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200'
                >
                    Edit this page on GitHub <FiArrowUpRight />
                </a>
                {scrollHeight > scrollToTrigger && (
                    <>
                        {headings.length > 0 && (
                            <a
                                href={`#${headings[0]?.trim().toLocaleLowerCase().replaceAll(' ', '-') || headings[0]}`}
                                className='my-2 flex flex-row items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200'
                            >
                                Back to top <FiArrowUp />
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
