import '../styles/globals.css';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material';
import { theme, mulish, montserrat } from '@/theme';
import { headers } from 'next/headers';
import { Navbar } from '@/components';

export const metadata: Metadata = {
    title: 'Books',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const headersList = headers();
    // read the custom x-url header
    const header_url = headersList.get('x-url') || '';
    const currentUrl = header_url
        ?.split('/')
        ?.slice(header_url?.split('/')?.length - 2, header_url?.split('/')?.length)
        ?.join('/');

    return (
        <html lang="en">
            <body className={`${mulish.variable} ${montserrat.variable}`}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        {/* {!noNavbarRoutes.includes(router.pathname) && <Navbar />} */}
                        {/* {currentUrl === 'auth/signin' && <Navbar />} */}
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
