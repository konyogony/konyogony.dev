import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Fira_Code } from 'next/font/google';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: 'konyogony.dev',
    description: 'My hyprland Desktop re-creation',
};

const firaCode = Fira_Code({ subsets: ['latin'], weight: '700' });

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en' className={cn('antialiased', firaCode.className)} suppressHydrationWarning>
            <body className='relative min-h-screen'>
                <main className='flex flex-col'>{children}</main>
            </body>
        </html>
    );
};
export default RootLayout;
