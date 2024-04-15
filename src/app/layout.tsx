import type {Metadata} from "next";
import {Inter, Poppins} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const poppins = Poppins({weight: ['300', '400', '500', '600', '700'], subsets: ['latin']});
// const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: {
        template: '%s | Mardiancode',
        default: 'Home', // a default is required when creating a template
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${poppins.className} bg-[#041F31] text-orange-100 pb-10`}>{children}</body>
        </html>
    );
}
