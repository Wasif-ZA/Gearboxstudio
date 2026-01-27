"use client";

import React from "react";
import {
    Box,
    Cpu,
    Globe,
    Layers,
    LayoutTemplate,
    Server,
    Shield,
    Zap,
    Command,
    Database
} from "lucide-react";
import { motion } from "framer-motion";

const COMPANIES = [
    { name: "Vercel", icon: Box, color: "text-white" },
    { name: "Supabase", icon: Database, color: "text-emerald-400" },
    { name: "Stripe", icon: CreditCardIcon, color: "text-indigo-400" }, // Custom icon below
    { name: "Resend", icon: SendIcon, color: "text-white" },
    { name: "Auth.js", icon: Shield, color: "text-purple-400" },
    { name: "OpenAI", icon: Cpu, color: "text-emerald-400" },
    { name: "Turbo", icon: Zap, color: "text-red-400" },
    { name: "Linear", icon: Layers, color: "text-indigo-400" },
];

export function Logos() {
    return (
        <section className="py-10 border-y border-zinc-800 bg-zinc-950 overflow-hidden relative">

            {/* Background Grid (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center gap-6">

                    {/* Header Badge */}
                    <div className="flex items-center gap-2 opacity-60">
                        <div className="h-px w-8 bg-zinc-700" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                            Powering Next-Gen Teams
                        </span>
                        <div className="h-px w-8 bg-zinc-700" />
                    </div>

                    {/* The Marquee Container */}
                    <div className="relative w-full max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                        <div className="flex w-max min-w-full">
                            <MarqueeGroup />
                            <MarqueeGroup />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- SUB-COMPONENT: The Scrolling Group ---
function MarqueeGroup() {
    return (
        <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-8 md:gap-20 px-4 md:px-10 shrink-0"
        >
            {COMPANIES.map((company, i) => (
                <div
                    key={i}
                    className="group flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                >
                    <div className={`p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors`}>
                        <company.icon className={`h-5 w-5 ${company.color}`} />
                    </div>
                    <span className="text-sm font-semibold text-zinc-300 group-hover:text-white">
                        {company.name}
                    </span>
                </div>
            ))}
        </motion.div>
    );
}

// --- Custom Mini Icons for specific brands (if not in Lucide) ---
function CreditCardIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
    )
}

function SendIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
    )
}