'use client';

import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import Cmdk from '@/components/cmdk';
import prettifyText from '@/lib/prettify-text';
import { cn } from '@/lib/utils';
import { BsDiscord, BsGithub } from '@vertisanpro/react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const routes = ['Home', 'Docs', 'About', 'Notes'];

    const pathname = usePathname();

    useEffect(() => {
        const updateScrolledState = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', updateScrolledState, { passive: true });
        return () => window.removeEventListener('scroll', updateScrolledState);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 z-50 flex w-full transform-gpu flex-col items-start gap-2 border-b border-white/10 bg-zinc-950/40 px-[15%] py-8 backdrop-blur-md transition-all duration-300 lg:flex-row lg:items-center lg:gap-0 lg:border-transparent lg:bg-transparent lg:py-4 lg:backdrop-blur-none xl:px-[20%]',
                scrolled
                    ? 'lg:border-white/5 lg:bg-zinc-950/60 lg:backdrop-blur-md'
                    : 'lg:border-transparent lg:bg-transparent',
            )}
        >
            <Link href={'/'} className='mr-8 hidden flex-row items-center gap-2 lg:flex'>
                <span className='text-lg font-bold text-zinc-100'>konyogony.dev</span>
                <Badge variant='outline'>Beta</Badge>
            </Link>
            <div className='mr-2 flex w-full transform-gpu flex-row items-center justify-between text-sm font-medium transition-transform duration-300 lg:w-fit lg:justify-normal lg:gap-8'>
                {routes.map((routeName, i) => {
                    return (
                        <Link
                            key={i}
                            href={routeName === 'Home' ? '/' : `/${routeName.toLocaleLowerCase()}`}
                            className={cn(
                                'text-zinc-400 transition-all duration-150 hover:text-zinc-300',
                                pathname === (routeName === 'Home' ? '/' : `/${routeName.toLocaleLowerCase()}`) &&
                                    'text-zinc-50',
                            )}
                        >
                            {prettifyText(routeName)}
                        </Link>
                    );
                })}
            </div>
            <Cmdk />
            <div className='mx-2 ml-auto hidden flex-row items-center gap-2 lg:flex'>
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
    );
};

export default Navbar;
