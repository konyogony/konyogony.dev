import { WikiFolder } from '@/components/wiki/wikiFolder';
import { useSidebarToggle } from '@/hooks/useSidebarToggle';
import { cn } from '@/lib/utils';
import { FileInfo } from '@/types';
import { useStore } from 'zustand';

interface WikiMobileSidebarProps {
    folders: string[];
    structure: FileInfo[] | null;
}

export const WikiMobileSidebar = ({ folders, structure }: WikiMobileSidebarProps) => {
    const sidebar = useStore(useSidebarToggle, (state) => state);

    if (!sidebar) return null;

    return (
        <>
            <button onClick={() => sidebar.setIsOpen()}>change sidebar</button>

            <button
                onClick={() => sidebar.setIsOpen()}
                className={cn(
                    'not-prose absolute inset-0 z-20 h-screen w-full bg-zinc-950/60 saturate-50 transition-all duration-300 ease-in-out',
                    sidebar.isOpen
                        ? 'pointer-events-auto cursor-pointer opacity-100'
                        : 'pointer-events-none cursor-default opacity-0',
                )}
            />

            <div
                className={cn(
                    'not-prose fixed left-0 top-0 z-50 flex h-full flex-col border-r border-white/15 bg-zinc-950/90 px-16 py-8 backdrop-blur-sm transition-all duration-300 ease-in-out',
                    sidebar.isOpen
                        ? 'pointer-events-auto w-3/5 opacity-100'
                        : 'pointer-events-none w-0 cursor-default opacity-0',
                )}
            >
                <span className='py-2 text-base font-bold text-zinc-50'>Documentation</span>
                {folders &&
                    folders.map((v, i) => (
                        <WikiFolder key={i} name={v} mobile={true}>
                            {structure ? structure.filter((w) => w.folder === v) : []}
                        </WikiFolder>
                    ))}
            </div>
        </>
    );
};
