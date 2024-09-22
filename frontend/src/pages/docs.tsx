import { WikiMainContent } from '@/components/wiki/wikiMainContent';
import { WikiSecondarySidebar } from '@/components/wiki/wikiSecondarySidebar';
import { WikiSidebar } from '@/components/wiki/wikiSidebar';
import { wikiConfig } from '@/config';
import { capitalize } from '@/lib/capitalize';
import { FileInfo } from '@/types';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);
    const [loading, setLoading] = useState(true);
    const [breadcrumb, setBreadcrumb] = useState<string[]>([]);
    const [structure, setStructure] = useState<FileInfo[] | null>(null);
    const [folders, setFolders] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [headings, setHeadings] = useState<(string | null)[]>([]);
    // const [activeHeading, setActiveHeading] = useState<string | null>(null);

    const location = useLocation();
    const contentRef = useRef<HTMLDivElement>(null);
    const config = wikiConfig;

    const path = useMemo(
        () =>
            location.pathname.replace('/docs/', '').replace('/docs', '') ||
            config.structure.find((s) => s.fallback)?.path ||
            '',
        [location.pathname, config.structure],
    );

    const mdxFiles = useMemo(() => import.meta.glob('../docs/**/*.mdx'), []);

    useEffect(() => {
        setLoading(true);

        const importFile = mdxFiles[`../docs/${path}.mdx`];
        const configFile = config.structure.find((s) => s.path === path);

        if (!importFile || !configFile || configFile.visible === false) {
            setContent(null);
            setBreadcrumb([]);
            setLoading(false);
            return;
        }

        importFile()
            .then((module) => {
                setContent(() => (module as { default: React.FC }).default);
                setBreadcrumb(path.split('/').map((p) => capitalize(p.replaceAll('-', ' '))));
            })
            .catch((err) => console.error('Error loading MDX file:', err))
            .finally(() => {
                setLoading(false);
            });
    }, [path, mdxFiles, config.structure]);

    useEffect(() => {
        const newStructure: FileInfo[] = config.structure.map((item) => {
            const [file, ...folders] = item.path.split('/').reverse();
            const folder = folders.reverse().join('/');
            return {
                name: file,
                folder,
                path: item.path,
                gitPath: `https://github.com/konyogony/konyogony.dev/blob/main/frontend/src/docs/${item.path}.mdx`,
                visible: item.visible,
                fallback: item.fallback,
            };
        });
        const allFolders = new Set(newStructure.map((f) => f.folder));
        setStructure(newStructure);
        setFolders([...allFolders]);
    }, [config.structure]);

    useEffect(() => {
        const [file, ...folders] = path.split('/').reverse();
        const folder = folders.reverse().join('/');
        setCurrentIndex(
            structure?.findIndex((f) => (folder ? f.name === file && f.folder === folder : f.name === file)) || 0,
        );
    }, [path, structure]);

    useEffect(() => {
        const headings = contentRef.current?.querySelectorAll('h1, h2');
        setHeadings(headings ? Array.from(headings).map((h) => h.textContent) : []);
    }, [Content]);

    // Observe heading intersections
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     const id = entry.target.id;
    //                     setActiveHeading(id);
    //                 }
    //             });
    //         },
    //         {
    //             rootMargin: '0px 0px -80% 0px',
    //             threshold: 0.05,
    //         },
    //     );
    //     const currentHeadings = contentRef.current?.querySelectorAll('h1, h2') || [];
    //     currentHeadings.forEach((heading) => {
    //         if (heading) {
    //             observer.observe(heading);
    //         }
    //     });
    //     return () => {
    //         currentHeadings.forEach((heading) => {
    //             observer.unobserve(heading);
    //         });
    //     };
    // }, [Content]);

    return (
        <div className='relative my-32 flex w-full flex-row justify-center gap-10 overflow-x-clip lg:my-20'>
            <WikiSidebar folders={folders} structure={structure} />
            <WikiMainContent
                ref={contentRef}
                currentIndex={currentIndex}
                loading={loading}
                structure={structure}
                Content={Content}
                breadcrumb={breadcrumb}
            />
            <WikiSecondarySidebar headings={headings} currentIndex={currentIndex} structure={structure} />
        </div>
    );
};
