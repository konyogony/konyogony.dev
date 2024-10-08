import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/css/app.css';
import { ThemeProvider } from '@/components/themeProvider';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

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
