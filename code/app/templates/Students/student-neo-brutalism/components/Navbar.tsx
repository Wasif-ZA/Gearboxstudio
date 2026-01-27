"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navigationItems, themeConfig } from "@/data/student-portfolio";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add shadow on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 font-sans">

            {/* 1. Top Status Ticker (The "System Bar") */}
            <div className="bg-black text-white text-[10px] md:text-xs font-mono py-1 overflow-hidden border-b-2 border-white relative z-50">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="whitespace-nowrap flex gap-8"
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="flex items-center gap-4">
                            STATUS: ONLINE <span className="text-green-400">●</span> //
                            ACCEPTING NEW PROJECTS //
                            LAST UPDATE: {new Date().getFullYear()} //
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* 2. Main Navigation Bar */}
            <nav
                className={cn(
                    "bg-white border-b-4 border-black transition-all duration-200",
                    scrolled ? "py-2 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.1)]" : "py-4"
                )}
            >
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex items-center justify-between">

                        {/* Logo / Brand "Sticker" */}
                        <Link
                            href="/"
                            className="relative group"
                            onClick={() => setIsOpen(false)}
                        >
                            <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                            <div
                                className="relative border-2 border-black px-4 py-2 font-black uppercase text-xl md:text-2xl tracking-tighter flex items-center gap-2 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1"
                                style={{ backgroundColor: themeConfig.accent.hex }}
                            >
                                <Terminal className="w-5 h-5" />
                                {siteConfig.name}
                            </div>
                        </Link>

                        {/* Desktop Nav Items */}
                        <div className="hidden md:flex items-center gap-1">
                            {navigationItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "relative px-5 py-2 font-bold uppercase text-sm tracking-wide border-2 border-transparent transition-all hover:border-black hover:bg-zinc-100",
                                            isActive && "bg-black text-white hover:bg-black hover:text-white border-black"
                                        )}
                                    >
                                        {/* Active Dot Indicator */}
                                        {isActive && (
                                            <span className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full border border-black" />
                                        )}
                                        {item.label}
                                    </Link>
                                );
                            })}

                            {/* Resume Button */}
                            <a
                                href={siteConfig.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-6 font-bold uppercase bg-white border-2 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                            >
                                Resume_V1.pdf
                            </a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative w-12 h-12 flex items-center justify-center border-2 border-black bg-white active:bg-zinc-100"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* 3. Mobile Menu Overlay (Full Screen "Drawer") */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-[100px] z-40 bg-white border-t-4 border-black md:hidden flex flex-col"
                    >
                        {/* Decorative Background Grid */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                        />

                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6 relative z-10">
                            {navigationItems.map((item, i) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-center justify-between border-b-2 border-black pb-4"
                                >
                                    <span className="text-4xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-600 group-hover:pl-4 transition-all">
                                        {item.label}
                                    </span>
                                    <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                                </Link>
                            ))}

                            <a
                                href={siteConfig.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 text-center text-xl font-black uppercase py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                                style={{ backgroundColor: themeConfig.secondary.hex }}
                            >
                                Download Resume
                            </a>
                        </div>

                        {/* Bottom "Footer" of the menu */}
                        <div className="mt-auto p-4 bg-black text-white font-mono text-xs text-center border-t-4 border-black">
                            // SYSTEM NAVIGATION // V1.0
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}