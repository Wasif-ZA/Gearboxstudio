"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Play, Terminal, GitCommit, Activity } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- CONFIGURATION ---
const CONTENT = {
    badge: "SYSTEM_READY_v2.4",
    headline: "Chaos, Meet Order.",
    subhead: "The Next.js architecture that turns 'spaghetti code' into a shipping machine. Auth, Payments, and Database—pre-assembled.",
};

export function Hero() {
    const { scrollY } = useScroll();

    // Parallax effects for the "Kinetic" floating feel
    const y1 = useTransform(scrollY, [0, 500], [0, -100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -200]);
    const rotate = useTransform(scrollY, [0, 500], [0, 10]);

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col justify-center bg-zinc-950 overflow-hidden font-sans pt-32 pb-20">

            {/* Background: Deep Orbital Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* --- LEFT: THE NARRATIVE --- */}
                <div className="flex flex-col items-start text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-3 py-1 rounded-sm backdrop-blur-md"
                    >
                        <div className="w-2 h-2 bg-cyan-500 animate-pulse rounded-full" />
                        <span className="text-xs font-mono font-bold text-zinc-400 tracking-widest">{CONTENT.badge}</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                        {CONTENT.headline}
                    </h1>

                    <p className="text-xl text-zinc-400 max-w-lg leading-relaxed border-l-2 border-zinc-800 pl-6">
                        {CONTENT.subhead}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button className="h-14 px-8 text-lg font-bold bg-cyan-500 text-black hover:bg-cyan-400 rounded-none border border-cyan-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] transition-transform active:translate-y-[2px] active:shadow-none">
                            Initialize Project <Terminal className="ml-3 w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* --- RIGHT: THE KINETIC ASSEMBLY --- */}
                {/* This mimics the layout of image_aa27b8.png (Kinetic) */}
                <div className="relative h-[600px] w-full perspective-[2000px]">

                    {/* 1. Main Dashboard (The Anchor) */}
                    <motion.div
                        initial={{ opacity: 0, rotateX: 20, z: -100 }}
                        animate={{ opacity: 1, rotateX: 0, z: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute top-10 left-0 right-10 h-[400px] bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl z-10"
                    >
                        {/* Fake UI Header */}
                        <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>
                            <div className="font-mono text-xs text-zinc-500">dashboard.tsx</div>
                        </div>
                        {/* Fake UI Content */}
                        <div className="grid grid-cols-3 gap-4 h-full">
                            <div className="col-span-2 bg-zinc-950/50 rounded-lg border border-zinc-800/50 relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/10 to-transparent" />
                            </div>
                            <div className="col-span-1 space-y-4">
                                <div className="h-20 bg-zinc-800/20 rounded-lg" />
                                <div className="h-20 bg-zinc-800/20 rounded-lg" />
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Floating Code Card (Top Right - Parallax) */}
                    <motion.div
                        style={{ y: y1, rotate: -5 }}
                        className="absolute -top-4 -right-4 w-64 bg-zinc-950 border border-zinc-700 p-4 rounded-lg shadow-xl z-20 backdrop-blur-md"
                    >
                        <div className="flex items-center gap-2 mb-2 text-xs text-purple-400 font-mono">
                            <GitCommit className="w-3 h-3" />
                            <span>Pushing to main...</span>
                        </div>
                        <div className="space-y-1">
                            <div className="h-1.5 w-3/4 bg-zinc-800 rounded-full" />
                            <div className="h-1.5 w-1/2 bg-zinc-800 rounded-full" />
                        </div>
                    </motion.div>

                    {/* 3. Floating Revenue Card (Bottom Right - Parallax) */}
                    <motion.div
                        style={{ y: y2, rotate: 5 }}
                        className="absolute bottom-20 -right-8 w-56 bg-zinc-900 border border-cyan-900/50 p-4 rounded-lg shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] z-30"
                    >
                        <div className="text-xs text-zinc-500 font-mono mb-1">MRR STATUS</div>
                        <div className="text-2xl font-bold text-white mb-2">$12,400</div>
                        <div className="flex items-end gap-1 h-8">
                            {[40, 60, 30, 80, 50, 90].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-cyan-500 rounded-t-[1px]" />
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. Floating Activity Pill (Bottom Left) */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-10 -left-8 bg-zinc-950 border border-zinc-800 px-4 py-3 rounded-full flex items-center gap-3 shadow-lg z-20"
                    >
                        <Activity className="w-4 h-4 text-emerald-400" />
                        <div className="text-xs font-mono text-zinc-300">System Healthy</div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}