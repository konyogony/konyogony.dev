import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { RxMagnifyingGlass } from 'react-icons/rx';
import {
    SiActix,
    SiGithub,
    SiReact,
    SiRust,
    SiShadcnui,
    SiSurrealdb,
    SiTailwindcss,
    SiTypescript,
    SiVisualstudiocode,
    SiVite,
} from 'react-icons/si';

export const Welcome = () => {
    return (
        <>
            <div className='bg-dot-white/[0.2] lg:bg-dot-white/0 relative flex h-[55vh] w-full flex-col items-center justify-center gap-6 border-b border-white/5 lg:h-[75vh] lg:gap-8'>
                <div className='pointer-events-none absolute inset-0 bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] lg:hidden' />
                <div className='z-40 flex flex-col items-center bg-gradient-to-t from-zinc-400 to-zinc-200 bg-clip-text text-transparent lg:gap-1'>
                    <span className='text-5xl font-bold tracking-wide lg:text-7xl'>Meet kony_ogony,</span>
                    <span className='text-lg font-medium lg:text-xl'>
                        a junior full-stack developer, who does cool stuff!
                    </span>
                </div>
                <div className='z-40 flex flex-row items-center gap-4'>
                    <Button className='flex flex-row items-center gap-1'>
                        <span>Contact me</span> <FiArrowRight />
                    </Button>
                    <Button className='flex flex-row items-center gap-1' variant={'secondary'}>
                        <span>Learn more</span> <RxMagnifyingGlass size={16} />
                    </Button>
                </div>
                <div className='z-40 flex flex-row items-center gap-4'>
                    <a href='https://ui.shadcn.com/' target='_blank' rel='noreferrer'>
                        <SiShadcnui />
                    </a>
                    <a href='https://react.dev/' target='_blank' rel='noreferrer'>
                        <SiReact size={20} />
                    </a>
                    <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>
                        <SiTailwindcss size={20} />
                    </a>
                    <a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>
                        <SiTypescript size={20} />
                    </a>
                    <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
                        <SiVite size={20} />
                    </a>
                    <a href='https://actix.rs/' target='_blank' rel='noreferrer'>
                        <SiActix size={20} />
                    </a>
                    <a href='https://www.rust-lang.org' target='_blank' rel='noreferrer'>
                        <SiRust size={20} />
                    </a>
                    <a href='https://surrealdb.com/' target='_blank' rel='noreferrer'>
                        <SiSurrealdb size={20} />
                    </a>
                </div>
                <a
                    href='#work'
                    className='absolute bottom-4 left-1/2 z-40 hidden -translate-x-1/2 text-zinc-500 motion-reduce:hidden lg:flex'
                >
                    <FiChevronDown size={18} />
                </a>
                <BackgroundBeams className='hidden motion-reduce:hidden lg:flex' />
            </div>
            <div className='flex flex-col items-center gap-2' id='work'>
                <span className='text-2xl font-semibold'>Some of my work</span>
            </div>

            <div className='h-[200rem]' />
        </>
    );
};
