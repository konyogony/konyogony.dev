import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
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
            <div className='relative flex h-[75vh] w-full flex-col items-center justify-center gap-8 border-b border-white/5'>
                <div className='z-40 flex flex-col items-center gap-1 bg-gradient-to-t from-zinc-400 to-zinc-200 bg-clip-text text-transparent'>
                    <span className='text-7xl font-bold tracking-wide'>Meet kony_ogony,</span>
                    <span className='text-xl font-medium'>a junior full-stack developer, who does cool stuff!</span>
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
                <BackgroundBeams className='hidden motion-reduce:hidden lg:flex' />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <span className='text-2xl font-semibold'>Some of my work</span>
            </div>

            <div className='h-[200rem]' />
        </>
    );
};
