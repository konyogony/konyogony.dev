'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const SecondarySidebar = () => {
    const [headings, setHeadings] = useState<string[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        const headings = document.querySelectorAll('h1, h2, h3');
        const headingText = Array.from(headings).map((heading) => heading.textContent || '');
        setHeadings(headingText);
    }, [pathname]);

    return (
        <div className='sticky top-24 hidden h-fit w-fit min-w-[20vh] flex-shrink-0 flex-col items-start lg:flex'>
            <span className='py-2 text-sm font-bold text-zinc-50'>On this page</span>
            {headings.map((v, i) => (
                <a
                    href={`#${
                        v
                            .trim()
                            .toLocaleLowerCase()
                            .replace(/\s+/g, '-')
                            .replace(/[^\p{L}\p{N}-]/gu, '')
                            .replace(/\./g, '') || v
                    }`}
                    className={'py-1 text-sm font-light text-zinc-400 hover:text-zinc-200'}
                    key={i}
                >
                    {v.length > 30 ? v.slice(0, 30) + '...' : v}
                </a>
            ))}
        </div>
    );
};
