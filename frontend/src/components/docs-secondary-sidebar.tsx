'use client';

import { FiArrowUp } from '@vertisanpro/react-icons/fi';
import { useEffect, useState } from 'react';

export const SecondarySidebar = () => {
    const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
    const [activeHeading, setActiveHeading] = useState<string>('');

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll('h1, h2, h3')) as HTMLHeadingElement[];
        headingElements.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `heading-${index}`;
            }
        });
        setHeadings(headingElements);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveHeading(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px', threshold: 0.1 },
        );

        headingElements.forEach((heading) => {
            observer.observe(heading);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className='sticky top-24 hidden h-fit w-fit min-w-[20vh] flex-shrink-0 flex-col items-start lg:flex'>
            <span className='py-2 text-sm font-bold text-zinc-50'>On this page</span>
            {headings.map((heading, i) => (
                <a
                    href={`#${heading.id}`}
                    className={`py-1 text-sm font-light ${activeHeading === heading.id ? 'text-zinc-200' : 'text-zinc-400'} hover:text-zinc-200`}
                    key={i}
                >
                    {heading.innerText.length > 30 ? `${heading.innerText.slice(0, 30)}...` : heading.innerText}
                </a>
            ))}
            <div className='my-2 h-[1px] w-3/4 bg-white/10' />
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='my-2 flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200'
            >
                Back to top <FiArrowUp />
            </button>
        </div>
    );
};
