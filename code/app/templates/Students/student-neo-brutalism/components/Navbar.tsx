"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navigationItems, themeConfig } from "@/data/student-portfolio";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b-3 border-black bg-white" style={{ borderColor: "black" }}>
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex h-20 items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-black uppercase tracking-tighter hover:underline decoration-4 underline-offset-4"
                        style={{ textDecorationColor: themeConfig.accent.hex }}
                    >
                        {siteConfig.name}
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigationItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-bold uppercase hover:-translate-y-1 transition-transform border-2 border-transparent px-3 py-1",
                                        isActive ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <a
                            href={siteConfig.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 font-bold uppercase bg-[var(--accent)] border-2 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                            style={{ backgroundColor: themeConfig.accent.hex }}
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
                        style={{ backgroundColor: isOpen ? themeConfig.accent.hex : "white" }}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t-3 border-black bg-white"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-xl font-bold uppercase py-2 px-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all",
                                        pathname === item.href ? "bg-black text-white" : "bg-white"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href={siteConfig.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-bold uppercase py-2 px-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all text-center"
                                style={{ backgroundColor: themeConfig.accent.hex }}
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
