import { WikiMainContent } from '@/components/wiki/wikiMainContent';
import { WikiSecondarySidebar } from '@/components/wiki/wikiSecondarySidebar';
import { WikiSidebar } from '@/components/wiki/wikiSidebar';
import { wikiConfig } from '@/config';
import { wikiGetStructure } from '@/lib/wiki/wikiGetStructure';
import { wikiPrettyText } from '@/lib/wiki/wikiPrettyText';
import { NotFound } from '@/pages/notfound';
import { FileInfo } from '@/types';
import { TbOutlineLoader2 } from '@vertisanpro/react-icons/tb';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);
    const [loading, setLoading] = useState(true);
    const [breadcrumb, setBreadcrumb] = useState<string[]>([]);
    const [structure, setStructure] = useState<FileInfo[] | null>(null);
    const [folders, setFolders] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [headings, setHeadings] = useState<(string | null)[]>([]);
    const [openedFolders, setOpenedFolders] = useState<{ [key: string]: boolean }>({});

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

    const toggleFolder = (folderName: string) => {
        setOpenedFolders((prev) => ({
            ...prev,
            [folderName]: !prev[folderName],
        }));
    };

    useEffect(() => {
        setLoading(true);

        const importFile = mdxFiles[`../docs/${path}.mdx`];
        const configFile = config.structure.find((s) => s.path === path);

        if (importFile && configFile?.visible !== false) {
            importFile()
                .then((module) => {
                    setContent(() => (module as { default: React.FC }).default);
                    setBreadcrumb(path.split('/').map((p) => wikiPrettyText(p)));
                })
                .catch((err) => {
                    console.error('Error loading MDX file:', err);
                    setContent(null);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setContent(null);
            setBreadcrumb([]);
            setLoading(false);
        }
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

    const wikiSidebarProps = {
        folders,
        structure,
        openedFolders,
        onToggleFolder: toggleFolder,
    };

    const WikiMainContentProps = {
        breadcrumb,
        currentIndex,
        loading,
        structure,
        Content,
        folders,
        openedFolders,
        onToggleFolder: toggleFolder,
    };

    const WikiSecondarySidebarProps = {
        headings,
        currentIndex,
        structure,
    };

    return (
        <div className='relative my-32 flex w-full flex-row justify-center gap-10 overflow-x-clip lg:my-20'>
            {loading ? (
                <div className='flex h-[80vh] w-full items-center justify-center bg-zinc-950'>
                    <TbOutlineLoader2 size={24} className='animate-spin-slow' />
                </div>
            ) : !Content ? (
                <NotFound />
            ) : (
                <>
                    <WikiSidebar {...wikiSidebarProps} />
                    <WikiMainContent {...WikiMainContentProps} />
                    <WikiSecondarySidebar {...WikiSecondarySidebarProps} />
                </>
            )}
        </div>
    );
};

// Credit to nextjs.org as I have borrow ideas and design from them <3
// +rep chatgpt
