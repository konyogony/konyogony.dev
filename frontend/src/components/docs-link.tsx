'use client';

import prettifyText from '@/lib/prettify-text';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface WikiLinkProps {
    name: string;
    path: string;
    title?: boolean;
}

export const DocsLink = ({ name, path, title = false }: WikiLinkProps) => {
    const pathname = usePathname();

    return (
        <Link
            href={path}
            className={cn(
                'flex w-full py-1.5 text-sm font-normal text-zinc-400 transition-all duration-300',
                pathname === path && 'text-zinc-100',
                title && 'pt-3 font-bold text-zinc-50',
                pathname !== path && !title && 'hover:underline',
            )}
        >
            {prettifyText(name || '')}
        </Link>
    );
};
