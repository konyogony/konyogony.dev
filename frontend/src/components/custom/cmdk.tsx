import { Button } from '@/components/ui/button';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { wikiGetStructure } from '@/lib/wiki/wikiGetStructure';
import { FileInfo } from '@/types';
import { type DialogProps } from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';

export const Cmdk = ({ ...props }: DialogProps) => {
    const [open, setOpen] = useState(false);
    const [structure, setStructure] = useState<FileInfo[]>([]);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
                if (
                    (e.target instanceof HTMLElement && e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement
                ) {
                    return;
                }

                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    useEffect(() => {
        setStructure(wikiGetStructure());
    }, []);

    // const runCommand = useCallback((command: () => unknown) => {
    //     setOpen(false);
    //     command();
    // }, []);

    return (
        <>
            <Button
                variant={'outline'}
                onClick={() => setOpen(true)}
                {...props}
                className='group ml-auto hidden cursor-pointer flex-row items-center gap-10 rounded-md border border-white/5 bg-zinc-900/50 py-1 pl-4 pr-2 text-sm font-normal text-zinc-400 backdrop-blur-md transition-all duration-300 hover:bg-zinc-800/60 hover:text-zinc-200 lg:flex'
            >
                <span> Search documentation...</span>
                <kbd className='flex flex-row items-center -space-x-0.5 rounded-sm bg-zinc-700/50 px-2 py-0.5 text-[10px] backdrop-blur-sm'>
                    ⌘ K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder='Search documentation...' />
                <CommandList className='border-white/5'>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading='Documentation'>
                        {structure.map((item) => {
                            return (
                                <CommandItem key={item.name} value={item.name}>
                                    {item.name}
                                </CommandItem>
                            );
                        })}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
};
