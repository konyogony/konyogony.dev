'use client';

import { Button } from '@/components/button';
import { FiArrowRight, FiChevronRight } from '@vertisanpro/react-icons/fi';
import { useRouter } from 'next/navigation';
import '@/css/app.css';

const NotFound = () => {
    const navigator = useRouter();
    return (
        <div className='relative m-0 flex h-screen w-full flex-col items-center justify-center overflow-y-hidden bg-dot-white/[0.2]'>
            <div className='pointer-events-none absolute inset-0 bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
            <span className='text-[12vh] font-bold text-zinc-100'>404</span>
            <span className='-m-10 text-lg font-medium text-zinc-200'>Oops! Seems like this page doesnt exist...</span>
            <Button className='m-12 hidden lg:flex' variant={'link'} onClick={() => navigator.push('/')}>
                Back to Home <FiChevronRight />
            </Button>
            <Button className='m-14 flex flex-row gap-2 lg:hidden' onClick={() => navigator.push('/')}>
                Back to Home <FiArrowRight />
            </Button>
        </div>
    );
};

export default NotFound;
