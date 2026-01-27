import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Student Portfolio | Gearbox Studio',
    description: 'A neo-brutalism inspired portfolio template for students.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#f0f0f0] font-sans text-black selection:bg-[var(--accent)] selection:text-black`}>
                <Navbar />
                <main className="pt-24 min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
