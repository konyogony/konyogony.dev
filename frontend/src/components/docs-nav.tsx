'use client';

import { flattenStructure } from '@/lib/flatten-structure';
import prettifyText from '@/lib/prettify-text';
import { DocsNode } from '@/types';
import { FiChevronLeft, FiChevronRight } from '@vertisanpro/react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface DocsNavProps {
    structure: DocsNode[];
}

const DocsNav = ({ structure }: DocsNavProps) => {
    const [paths, setPaths] = useState<{
        prev: { path: string; name: string } | null;
        next: { path: string; name: string } | null;
    }>({ prev: null, next: null });
    const pathname = usePathname();

    useEffect(() => {
        const { result: flatStructure } = flattenStructure(structure);
        const currentIndex = flatStructure.findIndex((item) => item.path === pathname);

        setPaths({
            prev: currentIndex > 0 ? flatStructure[currentIndex - 1] : null,
            next: currentIndex < flatStructure.length - 1 ? flatStructure[currentIndex + 1] : null,
        });
    }, [pathname, structure]);

    return (
        <div className='flex w-full flex-row items-center'>
            {paths.prev && (
                <Link href={paths.prev.path} className='flex flex-row items-center'>
                    <FiChevronLeft size={14} />
                    {prettifyText(paths.prev.name)}
                </Link>
            )}
            {paths.next && (
                <Link href={paths.next.path} className='ml-auto flex flex-row items-center'>
                    {prettifyText(paths.next.name)}
                    <FiChevronRight size={14} />
                </Link>
            )}
        </div>
    );
};

export default DocsNav;

// Thanks Github Copilot
