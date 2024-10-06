import FallbackProviderWrapper from '@/components/fallbackProviderWrapper';
import { Navbar } from '@/components/navbar';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
    <FallbackProviderWrapper>
        <div className='relative flex min-h-screen w-full flex-col gap-2 bg-zinc-950'>
            <Navbar />
            <div className='flex h-full w-full flex-shrink-0 flex-col items-center'>
                <Outlet />
            </div>
        </div>
    </FallbackProviderWrapper>
);
