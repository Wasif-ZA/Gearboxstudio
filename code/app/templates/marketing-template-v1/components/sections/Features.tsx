"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Lock, CreditCard, Mail, Globe, Layers, Zap, ShieldCheck } from "lucide-react";

// --- ORBITAL CONFIGURATION ---
const ORBITS = [
    { radius: 140, duration: 25, icon: Database, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
    { radius: 230, duration: 35, icon: ShieldCheck, color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-200" },
    { radius: 320, duration: 45, icon: CreditCard, color: "text-lime-600", bg: "bg-lime-50", border: "border-lime-200" },
];

export function Features() {
    return (
        <section className="py-32 bg-white overflow-hidden relative">

            {/* --- BACKGROUND DECORATION --- */}
            {/* Subtle glow behind the orbit system */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-50/50 via-transparent to-lime-50/50 blur-[100px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                    The Gravity of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-lime-600">
                        Good Architecture.
                    </span>
                </h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                    Don't wire up disparate APIs manually. We built the central node that holds your entire financial stack together.
                </p>
            </div>

            {/* THE ORBITAL SYSTEM */}
            <div className="relative w-full h-[700px] flex items-center justify-center scale-75 md:scale-100 -mt-10">

                {/* Central Sun (Nexus Core) */}
                <div className="absolute z-20 w-32 h-32 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] ring-8 ring-slate-50/50">
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-md">
                            <Layers className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-900 tracking-wider mt-1">GEARBOX</span>
                    </div>
                    {/* Inner Pulse */}
                    <div className="absolute inset-0 border border-emerald-100 rounded-full animate-ping opacity-20" />
                </div>

                {/* Orbits & Planets */}
                {ORBITS.map((orbit, i) => (
                    <div key={i} className="absolute inset-0 flex items-center justify-center pointer-events-none">

                        {/* The Ring Track */}
                        <div
                            style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
                            className="rounded-full border border-slate-100"
                        />

                        {/* The Planet Container (Rotates) */}
                        <motion.div
                            style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
                            className="absolute rounded-full"
                        >
                            {/* The Planet (Counter-Rotates to stay upright) */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
                                    className={`w-14 h-14 rounded-2xl border ${orbit.border} ${orbit.bg} flex items-center justify-center shadow-sm relative z-10 group`}
                                >
                                    <orbit.icon className={`w-6 h-6 ${orbit.color} transition-transform group-hover:scale-110`} />

                                    {/* Small Connector Dot on Planet */}
                                    <div className="absolute -bottom-1 w-1.5 h-1.5 bg-slate-300 rounded-full" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}