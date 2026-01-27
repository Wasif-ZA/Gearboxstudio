"use client";

import { themeConfig, siteConfig } from "@/data/student-portfolio";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div
                        className="inline-block px-4 py-2 border-2 border-black font-bold uppercase mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white"
                    >
                        👋 Hi, I'm {siteConfig.name}
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 max-w-4xl">
                        I <span className="bg-white px-2 decoration-clone ring-4 ring-black/0">Design</span> & <br />
                        <span
                            className="px-2 text-black"
                            style={{ backgroundColor: themeConfig.accent.hex }}
                        >
                            Build
                        </span> Things <br />
                        For The Web.
                    </h1>

                    <p className="text-xl md:text-2xl font-medium max-w-2xl text-zinc-700 leading-relaxed mb-12 border-l-4 border-black pl-6">
                        {siteConfig.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-black text-white font-bold uppercase text-lg border-2 border-transparent shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-black hover:border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 group"
                        >
                            See My Work
                            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </a>

                        <a
                            href="/templates/students/student-neo-brutalism/about"
                            className="px-8 py-4 bg-white text-black font-bold uppercase text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                        >
                            About Me
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div
                className="absolute top-20 right-[-50px] w-64 h-64 border-4 border-black rounded-full opacity-20 hidden md:block"
                style={{ backgroundColor: themeConfig.secondary.hex }}
            />
            <div
                className="absolute bottom-20 left-[-50px] w-40 h-40 border-4 border-black rotate-45 opacity-20 hidden md:block"
                style={{ backgroundColor: themeConfig.accent.hex }}
            />
        </section>
    );
}
