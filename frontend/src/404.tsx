import { Button } from '@/components/button';
import { FiArrowRight, FiChevronRight } from '@vertisanpro/react-icons/fi';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    return (
        <div className='bg-dot-white/[0.2] relative m-0 flex h-full w-full flex-col items-center justify-center overflow-y-hidden'>
            <div className='pointer-events-none absolute inset-0 bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
            <span className='text-[12vh] font-bold text-zinc-100'>404</span>
            <span className='-m-10 text-lg font-medium text-zinc-200'>Oops! Seems like this page doesnt exist...</span>
            <Button className='m-12 hidden lg:flex' variant={'link'} onClick={() => router.push('/')}>
                Back to Home <FiChevronRight />
            </Button>
            <Button className='m-14 flex flex-row gap-2 lg:hidden' onClick={() => router.push('/')}>
                Back to Home <FiArrowRight />
            </Button>
        </div>
    );
};

export default NotFound;
