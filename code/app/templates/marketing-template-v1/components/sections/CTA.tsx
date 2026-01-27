"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="py-32 bg-white border-t border-slate-200 relative overflow-hidden">

            {/* --- BACKGROUND DECORATION --- */}

            {/* Grid Pattern (Technical Texture) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-emerald-50/60 via-lime-50/20 to-transparent rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center space-y-10 text-center"
                >
                    <div className="space-y-6 max-w-3xl">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider mb-4 shadow-sm">
                            <Sparkles className="w-3 h-3 text-emerald-500 fill-emerald-500" />
                            Start Building
                        </div>

                        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-[1.1]">
                            Ready to ship your <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                                Next Masterpiece?
                            </span>
                        </h2>

                        <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl font-medium leading-relaxed">
                            Join thousands of developers building the next generation of financial apps with <strong>Gearbox Studios</strong>. Speed, security, and scalability included.
                        </p>
                    </div>

                    <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="h-14 px-8 bg-slate-900 text-white hover:bg-slate-800 shadow-2xl shadow-slate-900/20 text-base font-bold rounded-2xl transition-all hover:-translate-y-1 hover:shadow-slate-900/30"
                        >
                            Get Started Now
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 px-8 bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 text-base font-bold rounded-2xl shadow-sm transition-all hover:-translate-y-1"
                        >
                            Read Documentation
                        </Button>
                    </div>

                    <div className="flex items-center gap-6 pt-4 text-sm text-slate-500 font-medium">
                        <span className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-emerald-500" /> Free for open source
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-emerald-500" /> No credit card required
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}