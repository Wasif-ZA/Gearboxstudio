import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "./components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GearBoxStudio | Production-Ready Templates for Developers",
  description: "Ship faster with 40+ production-ready templates. Full source code, AI-ready documentation, modern stack. Join 2,000+ developers.",
  keywords: ["templates", "Next.js", "React", "TypeScript", "Tailwind CSS", "SaaS", "dashboard", "boilerplate"],
  authors: [{ name: "GearBoxStudio" }],
  openGraph: {
    title: "GearBoxStudio | Production-Ready Templates",
    description: "Ship faster with production-ready templates. Full source code, AI-ready documentation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GearBoxStudio | Production-Ready Templates",
    description: "Ship faster with production-ready templates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
