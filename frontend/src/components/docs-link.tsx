'use client';

import prettifyText from '@/lib/prettify-text';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface WikiLinkProps {
    name: string;
    path?: string;
    title?: boolean;
}

export const DocsLink = ({ name, path, title = false }: WikiLinkProps) => {
    const pathname = usePathname();

    return (
        <>
            {!title ? (
                <Link
                    href={path || ''}
                    className={cn(
                        'flex w-full py-1.5 text-sm font-normal text-zinc-400 transition-all duration-300 hover:underline',
                        pathname === path && 'text-zinc-100',
                    )}
                >
                    {prettifyText(name || '')}
                </Link>
            ) : (
                <span
                    className={cn(
                        'flex w-full py-1.5 pt-3 text-sm font-bold text-zinc-50 transition-all duration-300',
                        pathname === path && 'text-zinc-100',
                    )}
                >
                    {prettifyText(name || '')}
                </span>
            )}
        </>
    );
};
