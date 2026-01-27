"use client";

import { motion } from "framer-motion";
import {
    Atom,
    Wind,
    Database,
    CreditCard,
    Cpu,
    FileCode,
    Layers,
    Globe,
    Server,
    ShieldCheck,
    Smartphone,
    Terminal
} from "lucide-react";
import { Badge } from "../components/ui/badge"; // Using your new Badge

const techStackRow1 = [
    { name: "Next.js 14", icon: Globe },
    { name: "React", icon: Atom },
    { name: "TypeScript", icon: FileCode },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Prisma", icon: Database },
    { name: "Stripe", icon: CreditCard },
];

const techStackRow2 = [
    { name: "Vercel", icon: Cpu },
    { name: "Auth.js", icon: Layers },
    { name: "PostgreSQL", icon: Server },
    { name: "Zod", icon: ShieldCheck },
    { name: "React Native", icon: Smartphone },
    { name: "Turborepo", icon: Terminal },
];

export function TechStackSection() {
    return (
        <section className="py-24 bg-neutral-950 border-y border-white/5 overflow-hidden relative">

            {/* Background Texture (Continuity) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            {/* Gradient Masks (Fade Edges) */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
                <div className="text-center">
                    <Badge variant="outline" className="mb-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500 border-neutral-800">
                        System Requirements
                    </Badge>
                    <p className="text-lg font-medium text-white tracking-tight">
                        Powered by the <span className="text-cyan-400">Modern Stack</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
                {/* Row 1: Moving Left */}
                <div className="flex relative overflow-hidden">
                    <MarqueeTrack items={techStackRow1} direction="left" speed={40} />
                </div>

                {/* Row 2: Moving Right */}
                <div className="flex relative overflow-hidden">
                    <MarqueeTrack items={techStackRow2} direction="right" speed={40} />
                </div>
            </div>
        </section>
    );
}

function MarqueeTrack({ items, direction, speed }: { items: any[], direction: "left" | "right", speed: number }) {
    return (
        <motion.div
            className="flex gap-4 flex-nowrap"
            initial={{ x: direction === "left" ? 0 : "-50%" }}
            animate={{ x: direction === "left" ? "-50%" : 0 }}
            transition={{
                ease: "linear",
                duration: speed,
                repeat: Infinity,
            }}
        >
            {/* Render items multiple times to ensure seamless loop on large screens */}
            {[...items, ...items, ...items, ...items].map((tech, index) => (
                <div
                    key={`${tech.name}-${index}`}
                    className="group relative flex items-center gap-3 px-6 py-3 rounded-xl border border-white/5 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_-5px_rgba(6,182,212,0.3)] cursor-default"
                >
                    <tech.icon className="w-4 h-4 text-neutral-500 group-hover:text-cyan-400 transition-colors duration-300" />
                    <span className="text-sm font-bold text-neutral-400 group-hover:text-white transition-colors duration-300 font-mono tracking-tight">
                        {tech.name}
                    </span>

                    {/* Tech "Active" Indicator Dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-cyan-500 transition-colors duration-300 shadow-[0_0_5px_rgba(0,0,0,0)] group-hover:shadow-[0_0_5px_cyan]" />
                </div>
            ))}
        </motion.div>
    );
}