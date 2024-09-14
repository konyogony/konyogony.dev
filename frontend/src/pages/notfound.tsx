import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='relative m-0 flex h-screen w-full flex-col items-center justify-center overflow-clip p-0 bg-dot-white/[0.2]'>
            <div className='pointer-events-none absolute inset-0 bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

            <span className='text-[12vh] font-bold text-zinc-100'>404</span>
            <span className='-m-10 text-xl text-zinc-200'>Oops! Seems like this page doesnt exist...</span>
            <Button className='m-12' variant={'link'} onClick={() => navigate('/')}>
                Back to Home
            </Button>
        </div>
    );
};
