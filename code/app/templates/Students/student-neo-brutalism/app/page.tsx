"use client";

import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { themeConfig } from "@/data/student-portfolio";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, FileCode2, Cpu } from "lucide-react";

// --- COMPONENTS ---

// 1. Infinite Marquee Divider (FIXED - TWIN TRACK METHOD)
const MarqueeDivider = ({ text, direction = "left" }: { text: string; direction?: "left" | "right" }) => {

    // We create a reusable track component to ensure both sides are identical
    const MarqueeTrack = () => (
        <motion.div
            initial={{ x: direction === "left" ? "0%" : "-100%" }}
            animate={{ x: direction === "left" ? "-100%" : "0%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap min-w-full shrink-0 items-center justify-around px-4"
        >
            {[...Array(8)].map((_, i) => (
                <span key={i} className="text-xl font-mono font-bold uppercase tracking-widest flex items-center gap-4">
                    {text} <span className="text-zinc-500">//</span>
                </span>
            ))}
        </motion.div>
    );

    return (
        <div className="w-full bg-black text-white py-3 border-y-4 border-black overflow-hidden relative z-20 flex">
            {/* Render two identical tracks side-by-side. 
                As the first one moves out (-100%), the second one (0%) takes its place perfectly. */}
            <MarqueeTrack />
            <MarqueeTrack />
        </div>
    );
};

// 2. Background Grid Pattern (Reusable)
const DotGrid = () => (
    <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
        }}
    />
);

export default function HomePage() {
    return (
        <main className="bg-white min-h-screen relative selection:bg-yellow-300 selection:text-black">

            {/* Hero Section */}
            <Hero />

            {/* Divider 1 */}
            <MarqueeDivider text="FEATURED PROJECTS • RECENT BUILDS • EXPERIMENTS" direction="left" />

            {/* PROJECTS SECTION */}
            <section id="projects" className="py-24 relative border-b-4 border-black">
                <DotGrid />

                <div className="container mx-auto px-4 max-w-6xl relative z-10">

                    {/* Section Header with "Folder Tab" look */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl">
                            <div className="flex items-center gap-3 mb-2 text-zinc-500 font-mono text-sm uppercase">
                                <FileCode2 className="w-4 h-4" />
                                <span>/root/work_log</span>
                            </div>
                            <SectionHeading
                                title="Selected Works"
                                subtitle="A collection of deployed applications, experiments, and open-source contributions."
                            />
                        </div>

                        <Link
                            href="/projects"
                            className="group flex items-center gap-2 font-black uppercase text-lg border-b-4 border-black pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                            style={{ '--accent': themeConfig.accent.hex } as React.CSSProperties}
                        >
                            View Archives
                            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    {/* The Grid Component */}
                    <div className="relative">
                        {/* Decorative 'Brackets' for the grid area */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-black" />
                        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-black" />

                        <ProjectGrid featuredOnly />
                    </div>

                    {/* Mobile Only Button */}
                    <div className="mt-12 text-center md:hidden">
                        <Link
                            href="/projects"
                            className="inline-block font-bold uppercase border-2 border-black px-8 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* Divider 2 */}
            <MarqueeDivider text="PHILOSOPHY • METHODOLOGY • ABOUT ME" direction="right" />

            {/* MANIFESTO / ABOUT SECTION */}
            <section className="py-24 relative bg-zinc-100 overflow-hidden">
                {/* Decorative background shape */}
                <div
                    className="absolute top-0 right-0 w-1/2 h-full opacity-10 skew-x-12 pointer-events-none"
                    style={{ backgroundColor: themeConfig.secondary.hex }}
                />

                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* Left: Large Typography */}
                        <div className="lg:pr-12">
                            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6">
                                The <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-black to-zinc-600">Code</span> <br />
                                Manifest
                            </h2>
                            <div className="h-2 w-32 bg-black mb-6" />
                            <p className="font-mono text-zinc-600">
                                // DEFINING_PRINCIPLES.MD<br />
                                // V1.0.4
                            </p>
                        </div>

                        {/* Right: The "Terminal" Card */}
                        <motion.div
                            whileHover={{ rotate: 1, scale: 1.02 }}
                            className="bg-black text-green-400 p-1 rounded-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] lg:ml-auto max-w-lg"
                        >
                            <div className="bg-zinc-900 rounded-t p-3 flex items-center justify-between border-b border-zinc-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-zinc-500 font-mono flex items-center gap-2">
                                    <Terminal className="w-3 h-3" />
                                    zsh — 80x24
                                </div>
                            </div>

                            <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
                                <p className="mb-4">
                                    <span className="text-blue-400">➜</span> <span className="text-yellow-300">~</span> cat philosophy.txt
                                </p>
                                <p className="mb-6 text-white">
                                    "I believe that the best software feels invisible. It just works. My goal is to build tools that empower people to do more, creating value through intuitive design and robust engineering."
                                </p>
                                <p>
                                    <span className="text-blue-400">➜</span> <span className="text-yellow-300">~</span> <span className="animate-pulse">_</span>
                                </p>

                                <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                                        <Cpu className="w-4 h-4" />
                                        <span>Compiled successfully</span>
                                    </div>
                                    <Link
                                        href="/about"
                                        className="inline-block px-4 py-2 bg-green-500 text-black font-bold uppercase text-xs hover:bg-green-400 transition-colors"
                                    >
                                        Execute: Read_More
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

        </main>
    );
}