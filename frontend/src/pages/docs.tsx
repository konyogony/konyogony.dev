import { Page } from '@/components/custom/page';
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
    const { headings, setHeadings } = useHeadings();

    const ref = useRef<HTMLDivElement>(null);

    const wikiSidebarProps = {
        folders,
        structure,
    };

    const WikiMainContentProps = {
        ref,
        breadcrumb,
        currentIndex,
        loading,
        structure,
        Content,
        folders,

        setHeadings,
    };

    const WikiSecondarySidebarProps = {
        loading,
        currentIndex,
        structure,
        headings,
    };

    if (error) {
        console.error(error);
        return <NotFound />;
    }

    useEffect(() => {
        if (Content && !loading && ref.current) {
            const headings = ref.current.querySelectorAll('h1, h2');
            setHeadings(Array.from(headings).map((h) => h.textContent));
        }
    }, [loading]);

    return (
        <Page>
            <div className='relative my-32 flex w-full flex-row justify-center gap-10 overflow-x-clip lg:my-20'>
                <WikiSidebar {...wikiSidebarProps} />
                <WikiMainContent {...WikiMainContentProps} />
                <WikiSecondarySidebar {...WikiSecondarySidebarProps} />
            </div>
        </Page>
    );
};

// Thanks https://github.com/vercel/next.js
// +rep chatgpt
