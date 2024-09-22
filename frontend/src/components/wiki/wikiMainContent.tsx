import { FileInfo } from '@/types';
import { ForwardedRef, forwardRef } from 'react';
import { WikiBreadcrumbs } from './wikiBreadcrumbs';
import { WikiMdx } from './wikiMdx';
import { WikiNavButtons } from './wikiNavButtons';

interface WikiMainContentProps {
    breadcrumb: string[];
    currentIndex: number;
    loading: boolean;
    structure: FileInfo[] | null;
    Content: React.FC | null;
}

export const WikiMainContent = forwardRef(
    (
        { breadcrumb, currentIndex, loading, structure, Content }: WikiMainContentProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        return (
            <div className='prose prose-zinc prose-invert flex w-full flex-shrink-0 flex-col items-start prose-headings:my-2 prose-headings:w-full prose-headings:border-b prose-headings:border-white/15 prose-headings:pb-1.5 prose-a:decoration-dotted hover:prose-a:text-blue-500 prose-hr:border-white/20 lg:max-w-[40%]'>
                <WikiBreadcrumbs breadcrumb={breadcrumb} />
                <WikiMdx loading={loading} ref={ref} Content={Content} />
                <WikiNavButtons structure={structure} loading={loading} currentIndex={currentIndex} />
            </div>
        );
    },
);
