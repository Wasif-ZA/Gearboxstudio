"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Command, Search, Zap, ChevronRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming standard shadcn button
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { name: "Features", href: "#features" },
    { name: "Integration", href: "/integration" },
    { name: "Changelog", href: "/changelog", badge: "New" },
    { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    // Detect scroll to add border/blur
    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">

                {/* --- LEFT: LOGO & STATUS --- */}
                <div className="flex gap-8 items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
                            <Zap className="h-4 w-4 text-cyan-400 fill-cyan-400 transition-transform group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-zinc-100 leading-none">GearBox</span>
                            <span className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
                                <span className="block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Operational
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navigation.map((item) => (
                            <NavLink key={item.name} href={item.href} badge={item.badge}>
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* --- RIGHT: ACTIONS --- */}
                <div className="flex items-center gap-3">

                    {/* Search Trigger (Visual Only) */}
                    <button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-md transition-all group">
                        <Search className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
                        <span className="text-xs text-zinc-500 group-hover:text-zinc-300">Search docs...</span>
                        <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-zinc-700 bg-zinc-800 px-1.5 font-mono text-[10px] font-medium text-zinc-400">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </button>

                    <div className="hidden md:flex items-center gap-3 ml-2">
                        <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-transparent">
                            Log in
                        </Button>
                        <Button size="sm" className="bg-white text-black hover:bg-zinc-200 font-semibold h-9 px-4 rounded-sm transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                            Start Building
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-zinc-400 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* --- MOBILE MENU OVERLAY --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-16 z-50 bg-zinc-950 border-t border-zinc-800 sm:hidden flex flex-col"
                    >
                        {/* Background Grid (Matches Hero) */}
                        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f462e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f462e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

                        <div className="relative z-10 p-6 flex flex-col h-full">
                            <nav className="flex flex-col gap-2">
                                {navigation.map((item, idx) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="flex items-center justify-between p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="font-medium">{item.name}</span>
                                            {item.badge ? (
                                                <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                                                    {item.badge}
                                                </span>
                                            ) : (
                                                <ChevronRight className="w-4 h-4 text-zinc-600" />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="mt-auto space-y-4">
                                <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800">
                                    <div className="text-xs text-zinc-500 font-mono mb-2">SYSTEM STATUS</div>
                                    <div className="flex items-center gap-2 text-sm text-emerald-400">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        All Systems Operational
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <Button variant="outline" className="w-full border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white">
                                        Log in
                                    </Button>
                                    <Button className="w-full bg-cyan-500 text-black hover:bg-cyan-400">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

// --- SUB-COMPONENT: Nav Link with Hover Effect ---
function NavLink({ href, children, badge }: { href: string; children: React.ReactNode; badge?: string }) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <Link
            href={href}
            className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Background Pill Hover */}
            {hovered && (
                <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-zinc-800/50 rounded-md -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                />
            )}
            <span className="relative flex items-center gap-2">
                {children}
                {badge && (
                    <span className="text-[9px] bg-purple-500/20 text-purple-400 px-1.5 rounded-sm uppercase tracking-wider font-mono">
                        {badge}
                    </span>
                )}
            </span>
        </Link>
    );
}