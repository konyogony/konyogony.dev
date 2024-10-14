import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/css/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'konyogony.dev',
    description: 'Junior fullstack developer who does cool stuff!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={`${inter.className} antialiased`}>
            <body>
                <ThemeProvider>
                    <main>
                        <Navbar />
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
