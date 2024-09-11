import { cn } from '@/lib/utils';
import { useCallback, useEffect, useState } from 'react';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { IoLogIn } from 'react-icons/io5';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';

export const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState<boolean>(false);

    const routes = ['Home', 'Docs', 'About', 'Notes'];

    const updateScrolledState = useCallback(() => {
        setScrolled(window.scrollY > 0);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', updateScrolledState);
        return () => {
            window.removeEventListener('scroll', updateScrolledState);
        };
    }, [updateScrolledState]);

    return (
        <nav
            className={cn(
                'fixed top-0 flex w-full flex-col items-start gap-2 border-b px-[20%] py-8 transition-all duration-300 xl:flex-row xl:items-center xl:gap-0 xl:py-4',
                scrolled ? 'border-white/5 bg-zinc-950/60 backdrop-blur-md' : 'border-transparent bg-transparent',
            )}
        >
            <Link to={'/'} className='mr-8 hidden flex-row items-center gap-1 xl:flex'>
                <span className='text-xl font-bold text-zinc-100'>konyogony.dev</span>
            </Link>
            <div className='text-md flex w-full flex-row items-center justify-around font-medium xl:w-fit xl:justify-normal xl:gap-8 xl:text-sm'>
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
            <div className='ml-auto mr-2 hidden flex-row items-center gap-2 xl:flex'>
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
            {/* <Button className='flex flex-row'>
                <IoLogIn size={22} />
                Login
            </Button> */}
        </nav>
    );
};
