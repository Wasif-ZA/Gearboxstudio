"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function CTASection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax effect for the background content
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section className="py-24 px-4 overflow-hidden" ref={containerRef}>
            <div className="max-w-5xl mx-auto">
                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative group isolate rounded-[2.5rem] overflow-hidden bg-neutral-900 shadow-2xl"
                >
                    {/* --- LAYER 1: ANIMATED BORDER BEAM --- */}
                    {/* This creates the rotating border light effect */}
                    <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 z-20" />
                    <div className="absolute -inset-[2px] rounded-[2.5rem] z-10 overflow-hidden">
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_340deg,cyan_360deg)] animate-border-spin opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                    {/* Inner mask to hide the center of the conic gradient, leaving only the border */}
                    <div className="absolute inset-[1px] rounded-[2.5rem] bg-neutral-900 z-10" />

                    {/* --- LAYER 2: MOVING BACKGROUNDS --- */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        {/* 2a. Floating Nebula Orbs */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                                rotate: [0, 45, 0]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen"
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.2, 0.4, 0.2],
                                rotate: [0, -45, 0]
                            }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen"
                        />

                        {/* 2b. Scrolling Grid */}
                        <motion.div
                            style={{ y }} // Parallax movement
                            className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"
                        />

                        {/* 2c. Shooting Stars / Particles (Simulated with simple divs for performance) */}
                        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" style={{ animationDuration: '3s' }} />
                        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_cyan]" style={{ animationDuration: '4s' }} />
                        <div className="absolute bottom-10 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse shadow-[0_0_10px_purple]" style={{ animationDuration: '5s' }} />
                    </div>

                    {/* --- LAYER 3: CONTENT --- */}
                    <div className="relative z-20 p-12 md:p-24 text-center flex flex-col items-center">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Badge variant="neon-cyan" className="mb-8 px-4 py-1.5 text-sm gap-2">
                                <Zap className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                                <span className="tracking-wide">SYSTEM UPGRADE AVAILABLE</span>
                            </Badge>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
                            Ready to ship at <br className="hidden md:block" />
                            <span className="relative inline-block">
                                <span className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl" />
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 animate-gradient-x">
                                    warp speed?
                                </span>
                            </span>
                        </h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
                        >
                            Stop configuring Webpack. Start building your legacy.
                            Join 2,000+ developers shipping production-ready apps today.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
                        >
                            {/* Primary Button with Shimmer */}
                            <Button
                                asChild
                                size="lg"
                                variant="shimmer" // Using the specialized variant we made
                                className="w-full sm:w-auto text-base h-14 px-8 font-bold"
                            >
                                <a href="#pricing">
                                    Initialize Project
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>

                            {/* Secondary Button */}
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto text-base h-14 px-8"
                            >
                                <a href="#demo">
                                    Read Architecture Docs
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    {/* 4. Top Highlight Edge (Glass reflection) */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50 z-30" />

                    {/* 5. Bottom Reflection */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-30 z-30" />
                </motion.div>
            </div>

            {/* CSS Animation for Border Spin */}
            <style jsx global>{`
                @keyframes border-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-border-spin {
                    animation: border-spin 8s linear infinite;
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 15s ease infinite;
                }
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    );
}