"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Logo } from "../components/ui/logo";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect with a slight buffer
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Templates", href: "#templates" },
        { name: "Components", href: "#components" },
        { name: "Pricing", href: "#pricing" },
        { name: "Docs", href: "#docs" },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled || mobileMenuOpen ? "py-4" : "py-6"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={cn(
                            "relative flex items-center justify-between px-4 sm:px-6 py-3 transition-all duration-500",
                            // Scroll State: Glass Pill
                            (isScrolled || mobileMenuOpen)
                                ? "bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-2xl"
                                : "bg-transparent border border-transparent rounded-none"
                        )}
                    >
                        {/* 1. Logo */}
                        <a href="/" className="relative z-50">
                            <Logo />
                        </a>

                        {/* 2. Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors group"
                                >
                                    {link.name}
                                    {/* Hover Glow Effect */}
                                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </a>
                            ))}
                        </nav>

                        {/* 3. Desktop Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="hidden lg:inline-flex text-neutral-400">
                                Sign in
                            </Button>
                            <Button size="sm" className="font-bold shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]">
                                <Zap className="w-3.5 h-3.5 mr-2 fill-current" />
                                Get Access
                            </Button>
                        </div>

                        {/* 4. Mobile Menu Toggle */}
                        <button
                            className="md:hidden relative z-50 p-2 text-neutral-400 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* 5. Mobile Menu Overlay (Holographic Style) */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden bg-neutral-950/90"
                    >
                        {/* Background Effects */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px]" />
                        </div>

                        <div className="flex flex-col h-full pt-32 px-6 pb-10">
                            <nav className="flex-1 flex flex-col gap-2">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                                    >
                                        <span className="text-2xl font-bold text-neutral-300 group-hover:text-white">
                                            {link.name}
                                        </span>
                                        <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-cyan-400 transition-colors" />
                                    </motion.a>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col gap-4"
                            >
                                <Button variant="outline" size="lg" className="w-full text-base">
                                    Sign In
                                </Button>
                                <Button size="lg" className="w-full text-base font-bold shadow-cyan-500/20 shadow-lg">
                                    Get Full Access
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}