import { WikiBreadcrumbs } from '@/components/wiki/wikiBreadcrumbs';
import { WikiMdx } from '@/components/wiki/wikiMdx';
import { WikiMobileNavbar } from '@/components/wiki/wikiMobileNavbar';
import { WikiMobileSidebar } from '@/components/wiki/wikiMobileSidebar';
import { WikiNavButtons } from '@/components/wiki/wikiNavButtons';
import { NotFound } from '@/pages/notfound';
import { FileInfo } from '@/types';
import { TbOutlineLoader2 } from '@vertisanpro/react-icons/tb';
import { ForwardedRef, forwardRef } from 'react';

interface WikiMainContentProps {
    breadcrumb: string[];
    currentIndex: number;
    loading: boolean;
    structure: FileInfo[] | null;
    Content: React.FC | null;
    folders: string[];
    openedFolders: { [key: string]: boolean };
    toggleFolder: (folderName: string) => void;
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
            toggleFolder,
        }: WikiMainContentProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        return (
            <div className='prose prose-zinc prose-invert flex h-fit w-full flex-shrink-0 flex-col items-start prose-headings:my-2 prose-headings:w-full prose-headings:border-b prose-headings:border-white/15 prose-headings:pb-1.5 prose-a:decoration-dotted hover:prose-a:text-blue-500 prose-ol:my-0 prose-ul:my-0 prose-hr:border-white/20 lg:max-w-[40%] lg:px-0'>
                {loading ? (
                    <div className='flex h-screen w-full items-center justify-center'>
                        <TbOutlineLoader2 size={24} className='animate-spin-slow' />
                    </div>
                ) : !Content ? (
                    <NotFound />
                ) : (
                    <>
                        <WikiMobileNavbar />
                        <WikiMobileSidebar
                            folders={folders}
                            structure={structure}
                            openedFolders={openedFolders}
                            onToggleFolder={toggleFolder}
                        />
                        <WikiBreadcrumbs breadcrumb={breadcrumb} />
                        <WikiMdx loading={loading} ref={ref} Content={Content} />
                        <WikiNavButtons structure={structure} loading={loading} currentIndex={currentIndex} />
                    </>
                )}
            </div>
        );
    },
);
