"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Lock, CreditCard, Mail, Globe, Cpu } from "lucide-react";

// --- ORBITAL CONFIGURATION ---
const ORBITS = [
    { radius: 140, duration: 20, icon: Database, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { radius: 220, duration: 30, icon: Lock, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { radius: 300, duration: 40, icon: CreditCard, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
];

export function Features() {
    return (
        <section className="py-32 bg-zinc-950 overflow-hidden relative">

            <div className="container relative z-10 mx-auto px-4 text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                    The Gravity of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                        Good Architecture.
                    </span>
                </h2>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Don't wire up disparate APIs manually. We built the central node that holds your entire stack together.
                </p>
            </div>

            {/* THE ORBITAL SYSTEM */}
            <div className="relative w-full h-[600px] flex items-center justify-center scale-75 md:scale-100">

                {/* Central Sun (GearBox Core) */}
                <div className="absolute z-20 w-32 h-32 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center shadow-[0_0_60px_-10px_rgba(6,182,212,0.3)]">
                    <div className="relative z-10 text-2xl font-bold text-white tracking-tighter">GEARBOX</div>
                    {/* Inner Pulse */}
                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
                </div>

                {/* Orbits & Planets */}
                {ORBITS.map((orbit, i) => (
                    <div key={i} className="absolute inset-0 flex items-center justify-center pointer-events-none">

                        {/* The Ring Track */}
                        <div
                            style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
                            className="rounded-full border border-zinc-800/60"
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
                                    className={`w-12 h-12 rounded-xl border ${orbit.border} ${orbit.bg} flex items-center justify-center backdrop-blur-sm shadow-lg`}
                                >
                                    <orbit.icon className={`w-5 h-5 ${orbit.color}`} />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ))}

                {/* Background Gradient Mesh to match Marketeam image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple-900/20 via-transparent to-cyan-900/20 blur-[100px] rounded-full pointer-events-none" />

            </div>
        </section>
    );
}