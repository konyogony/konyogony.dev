import { NotFoundHomeButton } from '@/components/not-found-home-button';

const NotFound = () => {
    return (
        <div className='relative m-0 flex h-screen w-full flex-col items-center justify-center overflow-y-hidden bg-dot-white/[0.2]'>
            <div className='pointer-events-none absolute inset-0 bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
            <span className='text-[12vh] font-bold text-zinc-100'>404</span>
            <span className='-m-10 text-lg font-medium text-zinc-200'>Oops! Seems like this page doesnt exist...</span>
            <NotFoundHomeButton />
        </div>
    );
};

export default NotFound;
