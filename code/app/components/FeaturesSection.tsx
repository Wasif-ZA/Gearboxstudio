"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import {
    FileCode,
    Layers,
    Sparkles,
    Code2,
    Zap,
    Shield,
    Cpu
} from "lucide-react";
import { Badge } from "../components/ui/badge"; // Using your new Badge
import { Card, CardContent } from "../components/ui/card"; // Using your new Card

const features = [
    {
        icon: FileCode,
        title: "Full Source Code",
        description: "No black boxes. You get the complete, documented source code. Modify, scale, and own it forever.",
        tag: "SRC-01"
    },
    {
        icon: Layers,
        title: "Production Systems",
        description: "Includes robust Authentication, Stripe payments, and transactional email systems pre-wired.",
        tag: "SYS-02"
    },
    {
        icon: Sparkles,
        title: "AI-Ready Context",
        description: "Includes ARCHITECTURE.md and context files designed to make Copilot understand your codebase.",
        tag: "AI-03"
    },
    {
        icon: Code2,
        title: "Modern Stack",
        description: "Built on the bleeding edge: Next.js 14, TypeScript, Tailwind CSS, and Prisma. No legacy baggage.",
        tag: "STK-04"
    },
    {
        icon: Zap,
        title: "Weekly Updates",
        description: "We don't abandon ship. Get new components, template improvements, and guides every week.",
        tag: "UPD-05"
    },
    {
        icon: Shield,
        title: "Commercial License",
        description: "Build unlimited projects for clients or yourself. No attribution required.",
        tag: "LIC-06"
    },
];

export function FeaturesSection() {
    return (
        <section className="relative py-32 px-4 bg-neutral-950 overflow-hidden">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDuration: '4s' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="neon-cyan" className="mb-6">
                            <Cpu className="w-3 h-3 mr-2" />
                            Core Architecture
                        </Badge>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Velocity</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-neutral-400 max-w-2xl mx-auto text-lg"
                    >
                        Every component is designed to remove friction. Stop configuring tooling and start shipping features.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
    // Mouse Tracking Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const backgroundSpotlight = useMotionTemplate`
        radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            rgba(6, 182, 212, 0.10),
            transparent 80%
        )
    `;

    const borderBeam = useMotionTemplate`
        radial-gradient(
            400px circle at ${mouseX}px ${mouseY}px,
            rgba(6, 182, 212, 0.4),
            transparent 40%
        )
    `;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
            onMouseMove={handleMouseMove}
        >
            <Card className="group relative h-full bg-neutral-900/40 border-white/5 overflow-hidden">

                {/* 1. The Spotlight Effect (Background Glow) */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: backgroundSpotlight,
                    }}
                />

                {/* 2. The Border Beam (Follows Mouse on the border) */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: borderBeam,
                    }}
                />

                {/* Mask to create the thin border effect from the gradient above */}
                <div className="absolute inset-[1px] rounded-[1.4rem] bg-neutral-900/90 z-0" />

                <CardContent className="relative z-10 p-8 flex flex-col h-full">
                    {/* Tech Tag */}
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0)] group-hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)]">
                            <feature.icon className="w-6 h-6 text-neutral-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <Badge variant="outline" className="font-mono text-[10px] bg-neutral-950/50 border-white/5 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
                            {feature.tag}
                        </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                        {feature.title}
                    </h3>

                    <p className="text-neutral-400 leading-relaxed text-sm group-hover:text-neutral-300 transition-colors">
                        {feature.description}
                    </p>

                    {/* Bottom Glow Line */}
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CardContent>
            </Card>
        </motion.div>
    );
}