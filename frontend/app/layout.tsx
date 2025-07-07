import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: 'konyogony.dev',
    description: 'Personal Portfolio',
};

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en' className={cn('antialiased', inter.className)} suppressHydrationWarning>
            <body className='relative min-h-screen'>
                <main className='flex flex-col'>{children}</main>
            </body>
        </html>
    );
};
export default RootLayout;
