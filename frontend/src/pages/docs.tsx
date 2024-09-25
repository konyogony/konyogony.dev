import { WikiMainContent } from '@/components/wiki/wikiMainContent';
import { WikiSecondarySidebar } from '@/components/wiki/wikiSecondarySidebar';
import { WikiSidebar } from '@/components/wiki/wikiSidebar';
import { wikiConfig } from '@/config';
import { wikiGetStructure } from '@/lib/wiki/wikiGetStructure';
import { wikiPrettyText } from '@/lib/wiki/wikiPrettyText';
import { NotFound } from '@/pages/notfound';
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
                setBreadcrumb(path.split('/').map((p) => wikiPrettyText(p)));
            })
            .catch((err) => console.error('Error loading MDX file:', err))
            .finally(() => {
                setLoading(false);
            });
    }, [path, mdxFiles, config.structure]);

    useEffect(() => {
        const newStructure = wikiGetStructure();
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

    // Maybe later I can try to implement ObserverAPI, but hard and no time.

    return (
        <div className='relative my-32 flex w-full flex-row justify-center gap-10 overflow-x-clip lg:my-20'>
            {!Content ? (
                <NotFound />
            ) : (
                <>
                    <WikiSidebar folders={folders} structure={structure} />
                    <WikiMainContent
                        ref={contentRef}
                        currentIndex={currentIndex}
                        loading={loading}
                        structure={structure}
                        Content={Content}
                        breadcrumb={breadcrumb}
                        folders={folders}
                    />
                    <WikiSecondarySidebar headings={headings} currentIndex={currentIndex} structure={structure} />
                </>
            )}
        </div>
    );
};
