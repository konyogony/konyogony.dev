import { WikiBreadcrumbs } from '@/components/wiki/wikiBreadcrumbs';
import { WikiMdx } from '@/components/wiki/wikiMdx';
import { WikiMobileNavbar } from '@/components/wiki/wikiMobileNavbar';
import { WikiMobileSidebar } from '@/components/wiki/wikiMobileSidebar';
import { WikiNavButtons } from '@/components/wiki/wikiNavButtons';
import { FileInfo } from '@/types';
import { ForwardedRef, forwardRef } from 'react';

interface WikiMainContentProps {
    breadcrumb: string[];
    currentIndex: number;
    loading: boolean;
    structure: FileInfo[] | null;
    Content: React.FC | null;
    folders: string[];
    openedFolders: { [key: string]: boolean };
    onToggleFolder: (folderName: string) => void;
}

export const WikiMainContent = forwardRef(
    (
        {
            breadcrumb,
            currentIndex,
            loading,
            structure,
            Content,
            folders,
            openedFolders,
            onToggleFolder,
        }: WikiMainContentProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        return (
            <div className='prose prose-zinc prose-invert flex h-fit w-full flex-shrink-0 flex-col items-start prose-headings:my-2 prose-headings:w-full prose-headings:border-b prose-headings:border-white/15 prose-headings:pb-1.5 prose-a:decoration-dotted hover:prose-a:text-blue-500 prose-hr:border-white/20 lg:max-w-[40%] lg:px-0'>
                <WikiMobileNavbar />
                <WikiMobileSidebar
                    folders={folders}
                    structure={structure}
                    openedFolders={openedFolders}
                    onToggleFolder={onToggleFolder}
                />

                <WikiBreadcrumbs breadcrumb={breadcrumb} />
                <WikiMdx loading={loading} ref={ref} Content={Content} />
                <WikiNavButtons structure={structure} loading={loading} currentIndex={currentIndex} />
            </div>
        );
    },
);
