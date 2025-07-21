import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import '@/app/globals.css';

const fira = localFont({
    src: './fonts/FiraCodeNerdFont-Bold.ttf',
    weight: '800',
    style: 'normal',
    display: 'swap',
});

const symbols = localFont({
    src: './fonts/SymbolsNerdFontMono-Regular.ttf',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'konyogony.dev',
    description: 'My hyprland Desktop re-creation',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en' className={cn('antialiased', fira.className, symbols.className)} suppressHydrationWarning>
            <body className='relative min-h-screen'>
                <main className='flex flex-col'>{children}</main>
            </body>
        </html>
    );
};
export default RootLayout;
