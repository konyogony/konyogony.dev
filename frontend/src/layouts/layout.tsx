import { Navbar } from '@/components/custom/navbar';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <div className='flex min-h-screen w-full flex-col gap-2 bg-zinc-950 pt-12'>
                <Navbar />
                <div className='flex h-full w-full flex-shrink-0 flex-col items-center px-[25%]'>{children}</div>
                <Toaster />
            </div>
        </ThemeProvider>
    );
};
