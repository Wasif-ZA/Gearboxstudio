"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Activity, Database, Lock, Layout, Copy, Check } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function HeroSection() {
    const containerRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen py-20 flex items-center justify-center bg-zinc-950 text-zinc-100 overflow-hidden"
        >
            {/* Background Detail: Subtle noise/grid to keep it industrial, not plain black */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light pointer-events-none" />

            {/* THE MAIN CONTAINER ("The Chassis") - Mimicking the card layout from the image */}
            <div className="container relative z-10 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

                {/* The Inner "Card" - Creating the containment effect */}
                <div className="relative rounded-3xl bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm overflow-hidden">

                    {/* Top Navigation / Brand Strip (Inside the card, like the image) */}
                    <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-800/50">
                        <div className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest text-zinc-100">
                    // GEARBOX_STUDIO
                        </div>
                        <div className="hidden md:flex gap-8 text-xs font-mono text-zinc-400 uppercase tracking-wide">
                            <span>v2.4.0 Stable</span>
                            <span>Docs</span>
                            <span>Changelog</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 p-8 md:p-16 items-center">

                        {/* LEFT COLUMN: Typography & Action */}
                        <div className="flex flex-col items-start space-y-8">

                            {/* Status Pill (Mimicking the '2.4M User' pill) */}
                            <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 rounded-full py-1.5 px-1.5 pr-4">
                                <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                                    <Activity className="w-4 h-4 text-emerald-500" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono text-zinc-500 leading-tight uppercase">System Status</span>
                                    <span className="text-xs font-bold text-zinc-200 leading-tight">All Systems Operational</span>
                                </div>
                            </div>

                            {/* Massive Headline (Mimicking "Agents") */}
                            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8]">
                                Systems
                            </h1>

                            {/* Subhead */}
                            <p className="text-lg md:text-xl text-zinc-400 max-w-md font-light leading-relaxed">
                                Deep architectural patterns, type-safety, and modular execution. All powered by one <span className="text-zinc-100 font-medium">unified engine.</span>
                            </p>

                            {/* Primary CTA Area */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
                                <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-zinc-200 rounded-lg text-base font-bold">
                                    Get Access — $49
                                </Button>
                                <Button size="lg" variant="link" className="h-14 px-8 text-zinc-400 hover:text-white">
                                    Read the manifesto <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>


                        {/* RIGHT COLUMN: The Interactive "Widget" (Mimicking the input field/process visual) */}
                        <div className="relative w-full flex flex-col items-center lg:items-end space-y-8">

                            {/* 1. Visual Node Graph (Replacing the avatars) */}
                            <div className="flex items-center justify-center gap-6 mb-4 relative">
                                {/* Connecting Lines */}
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-800 -z-10" />

                                {/* Nodes */}
                                {[
                                    { icon: Lock, label: "Auth" },
                                    { icon: Database, label: "Data" },
                                    { icon: Layout, label: "UI" }
                                ].map((node, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 0 }}
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="flex flex-col items-center gap-2 bg-zinc-950 p-3 rounded-xl border border-zinc-800 z-10"
                                    >
                                        <div className="h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400">
                                            <node.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase">{node.label}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* 2. The "Terminal" Widget (Replacing the 'How can I help' box) */}
                            <div className="w-full max-w-md bg-[#0C0C0E] border border-zinc-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">

                                {/* Header of widget */}
                                <div className="text-zinc-500 text-sm mb-4 font-mono">Initialize Project</div>

                                {/* Input Area */}
                                <div className="flex items-center justify-between bg-zinc-900/50 border border-zinc-800 rounded-lg p-1 pl-4 h-14">
                                    <div className="font-mono text-sm text-zinc-300 flex items-center gap-2">
                                        <span className="text-emerald-500">$</span>
                                        npx create-gearbox-app
                                    </div>
                                    <Button
                                        onClick={handleCopy}
                                        size="sm"
                                        className="h-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 rounded-md px-4"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                                    </Button>
                                </div>

                                {/* Badges/Tags below input */}
                                <div className="flex gap-2 mt-6 justify-center">
                                    {['React', 'TypeScript', 'Tailwind'].map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Decorative Glow (Subtle) */}
                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-zinc-700/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-zinc-600/20 transition-colors duration-500" />
                            </div>

                        </div>
                    </div>

                    {/* Bottom "Trusted" Strip (Mimicking the logos at bottom) */}
                    <div className="bg-zinc-900/80 border-t border-zinc-800 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder for Logos - using text for now to keep it clean code */}
                        {["Next.js", "Vercel", "Supabase", "Stripe"].map((brand) => (
                            <span key={brand} className="text-lg font-bold text-zinc-500 font-mono">{brand}_</span>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}