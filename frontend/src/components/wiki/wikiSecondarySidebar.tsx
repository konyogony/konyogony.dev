import { wikiConfig } from '@/config';
import { FileInfo } from '@/types';
import { FiArrowUp, FiArrowUpRight } from '@vertisanpro/react-icons/fi';
import React, { useEffect, useMemo, useState } from 'react';

interface WikiSecondarySidebarProps {
    headings: (string | null)[];
    currentIndex: number;
    structure: FileInfo[] | null;
}

export const WikiSecondarySidebar = ({ headings, currentIndex, structure }: WikiSecondarySidebarProps) => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollHeight(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollHeight]);

    const headingsElement: JSX.Element = useMemo(
        () => (
            <>
                {headings.map((v, i) => (
                    <React.Fragment key={i}>
                        {v ? (
                            <a
                                href={`#${
                                    v
                                        .trim()
                                        .toLocaleLowerCase()
                                        .replace(/\s+/g, '-')
                                        .replace(/[^\p{L}\p{N}-]/gu, '') || v
                                }`}
                                className={'py-1 text-sm font-light text-zinc-400 hover:text-zinc-200'}
                            >
                                {v.length > 30 ? v.slice(0, 30) + '...' : v}
                            </a>
                        ) : null}
                    </React.Fragment>
                ))}
            </>
        ),
        [headings],
    );

    const editElement: JSX.Element = useMemo(
        () => (
            <a
                href={structure ? structure[currentIndex].gitPath : '/404'}
                rel='noopener noreferrer'
                target='_blank'
                className='flex flex-row items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200'
            >
                Edit this page on GitHub <FiArrowUpRight />
            </a>
        ),
        [structure, currentIndex],
    );

    const backToTopElement: JSX.Element = useMemo(
        () => (
            <a
                href={`#${headings[0]?.trim().toLocaleLowerCase().replaceAll(' ', '-') || headings[0]}`}
                className='my-2 flex flex-row items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200'
            >
                Back to top <FiArrowUp />
            </a>
        ),
        [headings],
    );

    return (
        <div className='sticky top-24 hidden h-fit w-fit min-w-[20vh] flex-shrink-0 flex-col items-end lg:flex'>
            <span className='-ml-1 py-2 text-sm font-bold text-zinc-50'>On this page</span>
            {headingsElement}
            <div className='my-2 h-[1px] w-3/4 bg-white/10' />
            {editElement}
            {scrollHeight > wikiConfig.scrollToTriggerButton && <>{backToTopElement}</>}
        </div>
    );
};
