"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Command, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { name: "Product", href: "#product" },
    { name: "Solutions", href: "/solutions" },
    { name: "Changelog", href: "/changelog", badge: "v2.0" },
    { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    // Add a border/blur effect only when scrolling
    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-200",
                scrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">

                {/* --- LEFT SIDE: LOGO + NAV LINKS --- */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white shadow-md shadow-slate-900/10">
                            <Layers className="h-4 w-4" />
                        </div>
                        <span className="font-bold text-slate-900 text-lg tracking-tight">Gearbox</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group relative px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {item.name}
                                    {item.badge && (
                                        <span className="flex h-5 items-center rounded-full bg-indigo-50 px-1.5 text-[10px] font-bold text-indigo-600 ring-1 ring-inset ring-indigo-500/10">
                                            {item.badge}
                                        </span>
                                    )}
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* --- RIGHT SIDE: SEARCH + ACTIONS --- */}
                <div className="flex items-center gap-4">

                    {/* Search Button (Hidden on Mobile) */}
                    <button className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition-all text-slate-500 hover:text-slate-800">
                        <span className="text-xs font-medium">Search</span>
                        <div className="flex items-center gap-0.5 px-1.5 bg-white border border-slate-200 rounded-[4px] shadow-sm">
                            <Command className="w-3 h-3 text-slate-500" />
                            <span className="text-[10px] font-sans text-slate-500">K</span>
                        </div>
                    </button>

                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/login"
                            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            Log In
                        </Link>
                        <Button className="h-9 px-4 bg-slate-900 text-white hover:bg-slate-800 text-sm font-semibold shadow-lg shadow-slate-900/10 transition-transform active:scale-95 rounded-lg">
                            Start for free
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* --- MOBILE MENU OVERLAY --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-16 left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden sm:hidden"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 text-slate-600 font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        {item.name}
                                        {item.badge && (
                                            <span className="flex h-5 items-center rounded-full bg-indigo-50 px-2 text-[10px] font-bold text-indigo-600 ring-1 ring-inset ring-indigo-500/10">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            ))}
                            <div className="h-px bg-slate-100 my-2" />
                            <div className="flex flex-col gap-3 p-2">
                                <Button variant="outline" className="w-full justify-center h-10">Log In</Button>
                                <Button className="w-full bg-slate-900 text-white justify-center h-10">Start for free</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}