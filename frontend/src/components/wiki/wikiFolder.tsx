import { capitalize } from '@/lib/capitalize';
import { cn } from '@/lib/utils';
import { FileInfo } from '@/types';
import { FiChevronRight } from '@vertisanpro/react-icons/fi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { WikiLink } from './wikiLink';

interface WikiFolderProps {
    name: string;
    children: FileInfo[];
}

export const WikiFolder = ({ name, children }: WikiFolderProps) => {
    console.log('folder rendered');

    const [isOpened, isSetOpened] = useState(false);
    const [isActive, isSetActive] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (children.some((w) => w.path === location.pathname)) {
            isSetOpened(true);
            isSetActive(true);
        } else {
            isSetActive(false);
        }
    }, [children, location]);
    return (
        <>
            {name === '' ? (
                <div className={'flex w-full flex-col items-start transition-all duration-300'}>
                    {children
                        .filter((w) => w.visible !== false)
                        .map((w, i) => (
                            <WikiLink key={i} name={w.name} url={w.path} />
                        ))}
                </div>
            ) : (
                <>
                    <button
                        onClick={() => isSetOpened(!isOpened)}
                        className={cn(
                            'flex w-full flex-row items-center py-2 text-sm font-normal transition-all duration-300 hover:text-zinc-200',
                            isActive ? 'font-semibold text-zinc-50' : 'text-zinc-400',
                        )}
                    >
                        {capitalize(name.replaceAll('/', '').replaceAll('-', ' '))}
                        <FiChevronRight size={14} className={cn('ml-auto mt-[1px]', isOpened && 'rotate-90')} />
                    </button>
                    <div
                        className={cn(
                            'ml-1 flex w-full flex-col items-start transition-all duration-300',
                            !isOpened
                                ? 'pointer-events-none max-h-0 opacity-0'
                                : 'pointer-events-auto max-h-[100vh] opacity-100',
                        )}
                    >
                        {children
                            .filter((w) => w.visible !== false)
                            .map((w, i) => (
                                <WikiLink key={i} name={w.name} url={w.path} line={true} />
                            ))}
                    </div>
                </>
            )}
        </>
    );
};
