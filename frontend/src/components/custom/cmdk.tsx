import { Button } from '@/components/ui/button';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command';
// import { docsConfig } from '@/config/docs';
import { type DialogProps } from '@radix-ui/react-dialog';
// import { RxLaptop, RxMoon, RxSun } from '@vertisanpro/react-icons/rx';
import { useEffect, useState } from 'react';

// import { useTheme } from '../ui/theme-provider';

export const Cmdk = ({ ...props }: DialogProps) => {
    const [open, setOpen] = useState(false);

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
                className='group ml-auto flex cursor-pointer flex-row items-center gap-10 rounded-md border border-white/5 bg-zinc-900/50 py-1 pl-4 pr-2 text-sm font-normal text-zinc-400 backdrop-blur-md transition-all duration-300 hover:bg-zinc-800/60 hover:text-zinc-200'
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
                        {/* {docsConfig.mainNav
                            .filter((navitem) => !navitem.external)1
                            .map((navItem) => (
                                <CommandItem
                                    key={navItem.href}
                                    value={navItem.title}
                                    onSelect={() => {
                                        runCommand(() => router.push(navItem.href as string));
                                    }}
                                >
                                    <FileIcon className='mr-2 h-4 w-4' />
                                    {navItem.title}
                                </CommandItem>
                            ))} */}
                    </CommandGroup>
                    {/* {docsConfig.sidebarNav.map((group) => (
                        <CommandGroup key={group.title} heading={group.title}>
                            {group.items.map((navItem) => (
                                <CommandItem
                                    key={navItem.href}
                                    value={navItem.title}
                                    onSelect={() => {
                                        runCommand(() => router.push(navItem.href as string));
                                    }}
                                >
                                    <div className='mr-2 flex h-4 w-4 items-center justify-center'>
                                        <CircleIcon className='h-3 w-3' />
                                    </div>
                                    {navItem.title}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ))} */}
                    <CommandSeparator />
                    {/* <CommandGroup heading='Theme'>
                        <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
                            <RxSun size={16} className='mr-2' />
                            Light
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
                            <RxMoon size={16} className='mr-2' />
                            Dark
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
                            <RxLaptop size={16} className='mr-2' />
                            System
                        </CommandItem>
                    </CommandGroup> */}
                </CommandList>
            </CommandDialog>
        </>
    );
};
