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
        <section className="py-16 border-y border-slate-100 bg-white overflow-hidden relative">

            {/* Background Grid (Very Subtle Slate) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />

            {/* Fading Edges for Smooth Loop */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center gap-8">

                    {/* Header Badge */}
                    <div className="flex items-center gap-3 opacity-80">
                        <div className="h-px w-10 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                            Trusted by innovative teams
                        </span>
                        <div className="h-px w-10 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                    </div>

                    {/* The Marquee Container */}
                    <div className="relative w-full max-w-5xl overflow-hidden">
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
            className="flex items-center gap-12 md:gap-24 px-6 md:px-12 shrink-0"
        >
            {COMPANIES.map((company, i) => (
                <div
                    key={i}
                    className="group flex items-center gap-2.5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                >
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-slate-200 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <company.icon className={`h-5 w-5 ${company.color}`} />
                    </div>
                    <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                        {company.name}
                    </span>
                </div>
            ))}
        </motion.div>
    );
}