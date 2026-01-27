"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, themeConfig } from "@/data/student-portfolio";
import { Mail, Linkedin, Github, Send, Radio, MapPin, Globe, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate network request
        setTimeout(() => setFormStatus('sent'), 2000);
    };

    return (
        <div className="min-h-screen bg-white pb-20 relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.1 }}
            />

            <div className="container mx-auto px-4 max-w-6xl py-20 relative z-10">

                {/* Header Section */}
                <div className="mb-16">
                    <SectionHeading title="Uplink Request" subtitle="Initiate communication protocol." number="03" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* LEFT COLUMN: Status & Info (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col gap-8">

                        {/* Status Card */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="bg-black text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(100,100,100,1)] relative overflow-hidden"
                        >
                            {/* Animated Radar/Ping Effect */}
                            <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-green-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

                            <div className="flex items-center gap-3 mb-6 border-b border-zinc-700 pb-4">
                                <Radio className="w-6 h-6 text-green-400 animate-pulse" />
                                <span className="font-mono text-sm uppercase tracking-widest text-green-400">Signal: Strong</span>
                            </div>

                            <p className="text-xl font-medium leading-relaxed mb-8 font-mono">
                                "Ready to deploy? I am currently accepting new mission objectives (freelance & internships). Transmit your data below."
                            </p>

                            <div className="space-y-4 font-bold uppercase tracking-wide text-sm">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-zinc-500" /> Sydney, Australia
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-zinc-500" /> Response Time: &lt; 24hrs
                                </div>
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-zinc-500" /> Remote: Available
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Links (Big Buttons) */}
                        <div className="grid grid-cols-1 gap-4">
                            <SocialButton
                                href={`mailto:${siteConfig.email}`}
                                icon={<Mail />}
                                label="Email Protocol"
                                subLabel={siteConfig.email}
                            />
                            <SocialButton
                                href={siteConfig.social.linkedin}
                                icon={<Linkedin />}
                                label="Professional Network"
                                subLabel="LinkedIn"
                            />
                            <SocialButton
                                href={siteConfig.social.github}
                                icon={<Github />}
                                label="Code Repository"
                                subLabel="GitHub"
                            />
                        </div>
                    </div>


                    {/* RIGHT COLUMN: The "Work Order" Form (Span 7) */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">

                            {/* Decorative "Punch Holes" */}
                            <div className="absolute left-4 top-0 -translate-y-1/2 flex gap-4">
                                <div className="w-4 h-4 rounded-full bg-zinc-200 border-2 border-black"></div>
                                <div className="w-4 h-4 rounded-full bg-zinc-200 border-2 border-black"></div>
                                <div className="w-4 h-4 rounded-full bg-zinc-200 border-2 border-black"></div>
                            </div>

                            <div className="mb-8 border-b-4 border-black pb-4 flex justify-between items-end">
                                <h3 className="text-3xl font-black uppercase">Transmission Form</h3>
                                <span className="font-mono text-xs text-zinc-500">ID: REQ-{new Date().getFullYear()}</span>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Name Input */}
                                <div className="relative group">
                                    <label htmlFor="name" className="block text-xs font-bold uppercase mb-1 ml-1 bg-white w-fit px-1 border-2 border-transparent group-focus-within:border-black group-focus-within:-translate-y-3 transition-all">
                                        Operator Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        className="w-full bg-zinc-50 border-2 border-black p-4 font-bold text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:bg-white transition-all placeholder:text-zinc-300 placeholder:font-normal"
                                        placeholder="Enter Identity..."
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="relative group">
                                    <label htmlFor="email" className="block text-xs font-bold uppercase mb-1 ml-1 bg-white w-fit px-1 border-2 border-transparent group-focus-within:border-black group-focus-within:-translate-y-3 transition-all">
                                        Return Address
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        className="w-full bg-zinc-50 border-2 border-black p-4 font-bold text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:bg-white transition-all placeholder:text-zinc-300 placeholder:font-normal"
                                        placeholder="user@domain.com"
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="relative group">
                                    <label htmlFor="message" className="block text-xs font-bold uppercase mb-1 ml-1 bg-white w-fit px-1 border-2 border-transparent group-focus-within:border-black group-focus-within:-translate-y-3 transition-all">
                                        Payload Data
                                    </label>
                                    <textarea
                                        required
                                        id="message"
                                        rows={6}
                                        className="w-full bg-zinc-50 border-2 border-black p-4 font-medium text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:bg-white transition-all placeholder:text-zinc-300 placeholder:font-normal resize-none"
                                        placeholder="Describe project parameters..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    disabled={formStatus !== 'idle'}
                                    type="submit"
                                    className="w-full font-black uppercase text-xl bg-black text-white py-6 border-2 border-black hover:bg-white hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                                    style={formStatus === 'sent' ? { backgroundColor: '#22c55e', color: 'black', borderColor: '#22c55e' } : {}}
                                >
                                    {formStatus === 'idle' && (
                                        <>
                                            Transmit Data <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                    {formStatus === 'sending' && "Encrypting & Sending..."}
                                    {formStatus === 'sent' && (
                                        <>
                                            Sent Successfully <CheckCircle2 className="w-6 h-6" />
                                        </>
                                    )}
                                </button>

                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

// Helper for Social Buttons
function SocialButton({ href, icon, label, subLabel }: { href: string; icon: React.ReactNode; label: string; subLabel: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border-2 border-black bg-white hover:bg-zinc-50 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
        >
            <div
                className="w-12 h-12 flex items-center justify-center border-2 border-black text-white group-hover:rotate-6 transition-transform"
                style={{ backgroundColor: themeConfig.accent.hex, color: 'black' }}
            >
                {icon}
            </div>
            <div>
                <div className="text-xs font-bold uppercase text-zinc-500">{label}</div>
                <div className="font-bold text-lg leading-none">{subLabel}</div>
            </div>
        </a>
    );
}