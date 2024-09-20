import { cn } from '@/lib/utils';
import { BsDiscord, BsGithub } from '@vertisanpro/react-icons/bs';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from 'cmdk';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const routes = ['Home', 'Docs', 'About', 'Notes'];

    useEffect(() => {
        const updateScrolledState = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', updateScrolledState, { passive: true });
        return () => window.removeEventListener('scroll', updateScrolledState);
    }, []);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    return (
        <>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder='Search documentation...' />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading='Wiki'>
                        <CommandItem>a</CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
            <nav
                className={cn(
                    'fixed top-0 z-50 flex w-full transform-gpu flex-col items-start gap-2 border-b px-[20%] py-8 transition-all duration-300 lg:flex-row lg:items-center lg:gap-0 lg:py-4',
                    scrolled ? 'border-white/5 bg-zinc-950/60 backdrop-blur-md' : 'border-transparent bg-transparent',
                )}
            >
                <Link to={'/'} className='mr-8 hidden flex-row items-center gap-1 lg:flex'>
                    <span className='text-lg font-bold text-zinc-100'>konyogony.dev</span>
                </Link>
                <div className='text-md flex w-full flex-row items-center justify-between font-medium lg:w-fit lg:justify-normal lg:gap-8 lg:text-sm'>
                    {routes.map((routeName, i) => {
                        return (
                            <NavLink
                                key={i}
                                to={routeName === 'Home' ? '/' : routeName.toLowerCase()}
                                className={'duration-400 text-zinc-400 transition-all [&.active]:text-zinc-100'}
                            >
                                {routeName}
                            </NavLink>
                        );
                    })}
                </div>
                <button
                    onClick={() => setOpen(true)}
                    className='group ml-auto flex cursor-pointer flex-row items-center gap-10 rounded-md border border-white/5 bg-zinc-900/50 py-1 pl-4 pr-2 text-sm font-normal text-zinc-400 backdrop-blur-md transition-all duration-300 hover:bg-zinc-800/60 hover:text-zinc-200'
                >
                    <span> Search documentation...</span>
                    <span className='flex items-center rounded-sm bg-zinc-700/50 px-2 py-0.5 text-[10px] backdrop-blur-sm'>
                        ⌘ K
                    </span>
                </button>
                <div className='mx-2 hidden flex-row items-center gap-2 lg:flex'>
                    <a
                        className='flex items-center justify-center rounded-sm p-2 hover:bg-zinc-900'
                        href='https://github.com/konyogony'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <BsGithub size={20} />
                    </a>
                    <a
                        className='flex items-center justify-center rounded-sm p-2 hover:bg-zinc-900'
                        href='https://discordlookup.com/user/564472732071493633/'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <BsDiscord size={20} />
                    </a>
                </div>
                <Button variant={'ghost'} className='hidden font-medium lg:flex'>
                    Login
                </Button>
            </nav>
        </>
    );
};
