import type { Metadata } from 'next';
import { Manrope, Source_Serif_4 } from 'next/font/google';

import { SITE_BRAND_SHORT, SITE_DESCRIPTION, SITE_TITLE } from '@/shared/constants';

import './globals.css';

const manrope = Manrope({
    variable: '--font-body',
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

const sourceSerif = Source_Serif_4({
    variable: '--font-display',
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: SITE_TITLE,
        template: `%s · ${SITE_BRAND_SHORT}`,
    },
    description: SITE_DESCRIPTION,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='uk'>
            <body className={`${manrope.variable} ${sourceSerif.variable} min-h-screen font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
