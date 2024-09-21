import { WikiMainContent } from '@/components/wiki/wikiMainContent';
import { WikiSecondarySidebar } from '@/components/wiki/wikiSecondarySidebar';
import { WikiSidebar } from '@/components/wiki/wikiSidebar';
import { wikiFallbackPage } from '@/config';
import { capitalize } from '@/lib/capitalize';
import { wikiStructureSort } from '@/lib/wiki/wikiStructureSort';
import { FileInfo } from '@/types';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
        () => location.pathname.replace('/docs/', '').replace('/docs', '') || wikiFallbackPage,
        [location.pathname],
    );

    const mdxFiles = useMemo(() => import.meta.glob('../docs/**/*.mdx'), [path]);

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
            const path = `/docs${folder ? `/${folder}` : ''}/${name}`;
            const gitPath = `https://github.com/konyogony/konyogony.dev/tree/main/frontend/src/docs/${folder}${folder !== '/' ? '/' : ''}${name}.mdx`;
            return { name, folder, path, gitPath };
        });

        const folderSet = new Set(fileArray.map((file) => file.folder));

        setStructure(fileArray.sort(wikiStructureSort));
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

    // This doesnt even work
    useEffect(() => {
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
                rootMargin: '0px 0px -80% 0px',
                threshold: 0.05,
            },
        );
        const currentHeadings = contentRef.current?.querySelectorAll('h1, h2') || [];
        currentHeadings.forEach((heading) => {
            if (heading) {
                observer.observe(heading);
            }
        });
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
            <WikiSidebar folders={folders} structure={structure} />
            <WikiMainContent
                breadcrumb={breadcrumb}
                ref={contentRef}
                currentIndex={currentIndex}
                loading={loading}
                structure={structure}
                Content={Content}
            />
            <WikiSecondarySidebar
                headings={headings}
                currentIndex={currentIndex}
                scrollHeight={scrollHeight}
                structure={structure}
            />
        </div>
    );
};
