import { Navbar } from '@/components/custom/navbar';
import { Toaster } from '@/components/ui/toaster';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='felx mx-[20%] mt-4 min-h-screen w-full flex-col gap-2 bg-background'>
            <Navbar />
            {children}
            <Toaster />
        </div>
    );
};
