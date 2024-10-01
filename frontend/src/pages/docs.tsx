import { WikiMainContent } from '@/components/wiki/wikiMainContent';
import { WikiSecondarySidebar } from '@/components/wiki/wikiSecondarySidebar';
import { WikiSidebar } from '@/components/wiki/wikiSidebar';
import { useContent } from '@/hooks/useContent';
import { useHeadings } from '@/hooks/useHeadings';
import { useOpenedFolders } from '@/hooks/useOpenedFolders';
import { useStructure } from '@/hooks/useStructure';
import { NotFound } from '@/pages/notfound';
import { useEffect, useRef, useState } from 'react';

export const Docs = () => {
    const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

    const { Content, loading, error } = useContent(setBreadcrumb);
    const { folders, structure, currentIndex } = useStructure();
    const { openedFolders, toggleFolder } = useOpenedFolders();
    const { headings, setHeadings } = useHeadings();

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current && Content) {
            console.log(1);
            const headings = contentRef.current.querySelectorAll('h1, h2');
            if (headings) {
                setHeadings(Array.from(headings).map((h) => h.textContent));
            }
        }
    }, [Content, loading]);

    const wikiSidebarProps = {
        folders,
        structure,
        openedFolders,
        toggleFolder,
    };

    const WikiMainContentProps = {
        contentRef,
        breadcrumb,
        currentIndex,
        loading,
        structure,
        Content,
        folders,
        openedFolders,
        toggleFolder,
        setHeadings,
    };

    const WikiSecondarySidebarProps = {
        currentIndex,
        structure,
        headings,
    };

    if (error) {
        console.log(error);
        return <NotFound />;
    }

    console.log(2, headings);

    return (
        <div className='relative my-32 flex w-full flex-row justify-center gap-10 overflow-x-clip lg:my-20'>
            <WikiSidebar {...wikiSidebarProps} />
            <WikiMainContent {...WikiMainContentProps} />
            <WikiSecondarySidebar {...WikiSecondarySidebarProps} />
        </div>
    );
};

// Credit to nextjs.org as I have borrow ideas and design from them <3
// +rep chatgpt
