"use client";

import React from "react";
import {
    Box,
    Cpu,
    Layers,
    Shield,
    Zap,
    Database,
    CreditCard,
    Send
} from "lucide-react";
import { motion } from "framer-motion";

// Updated Colors to match the Light Mode SaaS Theme
const COMPANIES = [
    { name: "Vercel", icon: Box, color: "text-slate-900" },
    { name: "Supabase", icon: Database, color: "text-emerald-600" },
    { name: "Stripe", icon: CreditCard, color: "text-indigo-600" },
    { name: "Resend", icon: Send, color: "text-slate-900" },
    { name: "Auth.js", icon: Shield, color: "text-purple-600" },
    { name: "OpenAI", icon: Cpu, color: "text-emerald-600" },
    { name: "Turbo", icon: Zap, color: "text-red-500" },
    { name: "Linear", icon: Layers, color: "text-indigo-600" },
];

export function Logos() {
    return (
        <section className="py-24 border-y border-slate-100 bg-white overflow-hidden relative">

            {/* Background Grid (Very Subtle Slate) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center gap-10">

                    {/* Header Badge */}
                    <div className="flex items-center gap-4 opacity-90">
                        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                            Trusted by innovative teams
                        </span>
                        <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-slate-300 to-transparent" />
                    </div>

                    {/* The Marquee Container */}
                    {/* FIXED: Changed max-w-7xl to max-w-[1100px] to align with Hero Dashboard */}
                    <div
                        className="relative w-full max-w-[1100px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                    >
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
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 md:gap-24 px-6 md:px-12 shrink-0"
        >
            {COMPANIES.map((company, i) => (
                <div
                    key={i}
                    className="group flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                >
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-slate-200 group-hover:bg-white group-hover:shadow-md transition-all">
                        <company.icon className={`h-6 w-6 ${company.color}`} />
                    </div>
                    <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                        {company.name}
                    </span>
                </div>
            ))}
        </motion.div>
    );
}