import { wikiScrollToTriggerButton } from '@/config';
import { cn } from '@/lib/utils';
import { FileInfo } from '@/types';
import { FiArrowUp, FiArrowUpRight } from '@vertisanpro/react-icons/fi';
import React from 'react';

interface WikiSecondarySidebarProps {
    headings: (string | null)[];
    currentIndex: number;
    scrollHeight: number;
    structure: FileInfo[] | null;
}

export const WikiSecondarySidebar = ({
    headings,
    currentIndex,
    scrollHeight,
    structure,
}: WikiSecondarySidebarProps) => {
    return (
        <div className='sticky top-24 hidden h-fit w-fit min-w-[20vh] flex-shrink-0 flex-col items-end lg:flex'>
            <span className='-ml-1 py-2 text-sm font-bold text-zinc-50'>On this page</span>
            {headings.map((v, i) => (
                <React.Fragment key={i}>
                    {v ? (
                        <a
                            href={`#${v.trim().toLocaleLowerCase().replaceAll(' ', '-') || v}`}
                            className={cn(
                                'py-1 text-sm font-light text-zinc-400 hover:text-zinc-200',
                                // activeHeading === v.toLowerCase().replace(/\s+/g, '-') && 'font-bold text-zinc-50',
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
            {scrollHeight > wikiScrollToTriggerButton && (
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
    );
};
