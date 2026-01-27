"use client";

import { themeConfig, siteConfig } from "@/data/student-portfolio";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowDown, Star, MousePointer2, X, Minus, CheckCircle2, Terminal } from "lucide-react";

// --- ANIMATION VARIANTS (Unchanged) ---
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, rotate: 5 },
    visible: {
        y: 0, opacity: 1, rotate: 0,
        transition: { type: "spring", stiffness: 100 },
    },
};

// --- DECORATIVE COMPONENTS ---

const BackgroundGrid = () => (
    <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
            backgroundImage: `radial-gradient(circle, #d4d4d8 1px, transparent 1px)`,
            backgroundSize: '32px 32px' // Increased size for cleaner look
        }}
    />
);

const FloatingBarcode = () => (
    <div className="absolute bottom-24 right-5 md:right-10 opacity-50 font-mono text-[10px] writing-vertical hidden lg:block select-none">
        INV-2024-8829 // PROD-V1
        <div className="h-24 w-4 bg-black mt-2"></div>
    </div>
);

export function Hero() {
    const { scrollY } = useScroll();

    // Adjusted Parallax: Slower movement so they don't leave the screen too fast
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -80]);
    const rotate = useTransform(scrollY, [0, 500], [0, 180]);

    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white text-black pt-20 pb-32">

            <BackgroundGrid />
            <FloatingBarcode />

            {/* --- TOP LEFT SPINNING BADGE (Added specific margin top/left) --- */}
            <motion.div
                style={{ rotate }}
                className="absolute top-8 left-8 md:top-12 md:left-12 z-20 hidden lg:flex items-center justify-center w-28 h-28"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-black absolute animate-[spin_12s_linear_infinite]">
                    <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text fontSize="11" fontWeight="bold" letterSpacing="2px">
                        <textPath href="#textPath" startOffset="0%">
                            AVAILABLE FOR HIRE • OPEN TO WORK •
                        </textPath>
                    </text>
                </svg>
                <div className="w-14 h-14 bg-green-400 rounded-full border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <CheckCircle2 className="w-7 h-7 text-black" />
                </div>
            </motion.div>

            {/* --- MAIN CONTAINER GRID --- */}
            <div className="container mx-auto px-6 max-w-7xl relative z-10 h-full">

                {/* Use Grid to separate Text (Left) from Visuals (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* --- LEFT COLUMN: CONTENT (Span 7 cols) --- */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col justify-center"
                    >
                        {/* 1. Name Badge */}
                        <motion.div variants={itemVariants} className="mb-6 w-fit">
                            <div className="flex items-center gap-2 px-5 py-2 border-2 border-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-yellow-300 transform -rotate-1 hover:rotate-0 transition-transform">
                                <Star className="w-5 h-5 fill-black" />
                                <span className="tracking-wide">Hi, I'm {siteConfig.name}</span>
                            </div>
                        </motion.div>

                        {/* 2. Main Headline (Adjusted Spacing) */}
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
                            {/* Line 1 */}
                            <div className="flex items-center gap-4 mb-2">
                                <span>I</span>
                                <span className="bg-black text-white px-4 border-2 border-black rotate-1">DESIGN</span>
                                <span className="text-zinc-300">&</span>
                            </div>

                            {/* Line 2 */}
                            <div className="flex items-center gap-4 mb-2">
                                <span
                                    className="px-4 text-black border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                                    style={{ backgroundColor: themeConfig.accent.hex }}
                                >
                                    BUILD
                                </span>
                                <span>THINGS</span>
                            </div>

                            {/* Line 3 */}
                            <span className="block">FOR THE WEB.</span>
                        </motion.h1>

                        {/* 3. Bio Paragraph (Added vertical spacing) */}
                        <motion.div variants={itemVariants} className="mb-10 relative pl-6 border-l-8 border-black">
                            <p className="text-xl md:text-2xl font-bold text-zinc-800 leading-relaxed bg-white/60 backdrop-blur-sm p-2 rounded">
                                {siteConfig.tagline}
                            </p>
                        </motion.div>

                        {/* 4. Buttons (Aligned properly) */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
                            <a href="#projects" className="group relative w-fit">
                                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                                <div className="relative px-8 py-4 bg-white border-2 border-black font-black uppercase text-xl flex items-center gap-3 hover:-translate-y-1 hover:-translate-x-1 transition-transform">
                                    See My Work <ArrowDown className="w-6 h-6" />
                                </div>
                            </a>
                            <a href="/about" className="group w-fit px-8 py-4 bg-transparent text-black font-black uppercase text-xl border-2 border-black shadow-none hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                About Me
                            </a>
                        </motion.div>
                    </motion.div>


                    {/* --- RIGHT COLUMN: VISUALS (Span 5 cols) --- */}
                    {/* This column is empty in DOM flow, but reserves space for the floating absolute elements so they don't overlap text on large screens */}
                    <div className="lg:col-span-5 relative h-[500px] hidden lg:block pointer-events-none">

                        {/* 1. System Status Window (Positioned relatively within this column) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            drag
                            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 w-80 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-30 pointer-events-auto cursor-grab active:cursor-grabbing"
                        >
                            <div className="bg-black text-white px-3 py-2 flex justify-between items-center border-b-2 border-black">
                                <div className="flex gap-2 items-center">
                                    <Terminal className="w-4 h-4" />
                                    <span className="text-xs font-mono uppercase">System_Status.exe</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 bg-white rounded-full border border-black"></div>
                                    <div className="w-3 h-3 bg-white rounded-full border border-black"></div>
                                </div>
                            </div>
                            <div className="p-6 font-mono text-sm space-y-4">
                                <div className="flex justify-between items-end">
                                    <span>CREATIVITY</span>
                                    <span className="font-bold text-lg">100%</span>
                                </div>
                                <div className="w-full h-3 bg-gray-200 border-2 border-black rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                        className="h-full bg-black"
                                    />
                                </div>

                                <div className="flex justify-between items-end">
                                    <span>COFFEE_LVL</span>
                                    <span className="font-bold text-red-600 animate-pulse">CRITICAL</span>
                                </div>
                                <div className="w-full h-3 bg-gray-200 border-2 border-black rounded-full overflow-hidden">
                                    <div className="h-full bg-yellow-400 w-[15%] border-r-2 border-black"></div>
                                </div>
                                <p className="pt-2 text-xs text-zinc-500 border-t border-dashed border-black mt-4">
                                    {`>>`} Initializing portfolio...<br />
                                    {`>>`} Loaded: Success
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* --- DECORATIVE SHAPES (GLOBAL ABSOLUTE) --- */}

            {/* Yellow Sun (Top Right - Behind text on mobile, Right side on desktop) */}
            <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                style={{ y: y1 }}
                className="absolute top-20 -right-16 md:right-10 w-40 h-40 md:w-64 md:h-64 bg-yellow-400 border-4 border-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-grab active:cursor-grabbing z-0 hover:scale-105 transition-transform"
            />

            {/* Blue Square (Bottom Left - moved slightly down to not overlap buttons) */}
            <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                style={{ y: y2, rotate: 12 }}
                className="absolute -bottom-10 -left-10 md:bottom-20 md:left-20 w-32 h-32 md:w-40 md:h-40 bg-blue-500 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-grab active:cursor-grabbing z-20 hover:rotate-45 transition-all"
            />

            {/* "Drag Shapes" Hint - Positioned near the empty space in center */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-40 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-1/3 opacity-40 hidden md:flex items-center gap-2 font-bold text-sm uppercase rotate-[-5deg] pointer-events-none"
            >
                <MousePointer2 className="w-4 h-4" />
                <span>Interface is Interactive</span>
            </motion.div>

            {/* Marquee Border Bottom */}
            <div className="absolute bottom-0 left-0 w-full border-t-4 border-black bg-yellow-300 py-3 overflow-hidden whitespace-nowrap z-40">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-12 text-xl font-black uppercase tracking-widest"
                >
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="flex items-center gap-12">
                            Software Engineer <Star className="w-6 h-6 fill-black" />
                            Creative Developer <Star className="w-6 h-6 fill-black" />
                            UI/UX Enthusiast <Star className="w-6 h-6 fill-black" />
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}