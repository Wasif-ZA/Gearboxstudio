"use client";

import { siteConfig, themeConfig } from "@/data/student-portfolio";
import { Github, Linkedin, Twitter, Mail, ArrowUp, Copy, Check, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Footer() {
    const [copied, setCopied] = useState(false);
    const [time, setTime] = useState("");

    // Update time for the "Server Time" display
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(siteConfig.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-white text-black mt-20 border-t-4 border-black selection:bg-black selection:text-white">

            {/* 1. Scrolling Marquee Header */}
            <div className="bg-yellow-300 border-b-4 border-black py-3 overflow-hidden whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-8 text-xl font-black uppercase tracking-widest"
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="flex items-center gap-8">
                            Open To Work <span className="text-4xl leading-[0]">•</span>
                            Lets Build Something <span className="text-4xl leading-[0]">•</span>
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* 2. Main Footer Grid */}
            <div className="container mx-auto px-4 max-w-7xl pt-20 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Left Column: CTA (Span 6) */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                        <div>
                            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] mb-8">
                                Get In<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-black to-zinc-500">Touch</span>
                            </h2>
                            <p className="text-xl font-medium max-w-md text-zinc-700 mb-8 border-l-4 border-black pl-4">
                                Currently looking for internships and freelance opportunities. Have a crazy idea? Let's engineer it into reality.
                            </p>
                        </div>

                        {/* Interactive Email Box */}
                        <div className="relative w-fit group">
                            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                            <button
                                onClick={handleCopyEmail}
                                className="relative flex items-center justify-between gap-4 bg-white border-2 border-black px-6 py-4 w-full md:w-auto hover:-translate-y-1 hover:-translate-x-1 transition-transform"
                            >
                                <div className="flex flex-col items-start">
                                    <span className="text-xs font-bold uppercase text-zinc-600">Drop a line</span>
                                    <span className="font-bold text-lg md:text-xl font-mono">{siteConfig.email}</span>
                                </div>
                                <div className="bg-yellow-300 p-2 border-2 border-black">
                                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Middle Column: Sitemap (Span 3) */}
                    <div className="lg:col-span-3 pt-4">
                        <h3 className="font-black uppercase text-xl mb-6 flex items-center gap-2">
                            <div className="w-3 h-3 bg-black"></div> Directory
                        </h3>
                        <ul className="space-y-4 font-bold uppercase text-lg tracking-wide">
                            <li>
                                <a href="/" className="hover:bg-black hover:text-white px-1 transition-colors">Home_Page</a>
                            </li>
                            <li>
                                <a href="/projects" className="hover:bg-black hover:text-white px-1 transition-colors">Work_Logs</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:bg-black hover:text-white px-1 transition-colors">Manifesto</a>
                            </li>
                            <li>
                                <a href={`mailto:${siteConfig.email}`} className="hover:bg-black hover:text-white px-1 transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column: Socials & Status (Span 3) */}
                    <div className="lg:col-span-3 pt-4 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="font-black uppercase text-xl mb-6 flex items-center gap-2">
                                <div className="w-3 h-3 bg-black"></div> Socials
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <SocialLink href={siteConfig.social.github} icon={<Github className="w-5 h-5" />} label="GH" />
                                <SocialLink href={siteConfig.social.linkedin} icon={<Linkedin className="w-5 h-5" />} label="LI" />
                                <SocialLink href={`mailto:${siteConfig.email}`} icon={<Mail className="w-5 h-5" />} label="@" />
                            </div>
                        </div>

                        {/* Fake Server Status Box */}
                        <div className="mt-8 border-2 border-black p-4 bg-zinc-50 font-mono text-xs hidden md:block">
                            <div className="flex justify-between border-b border-black pb-2 mb-2">
                                <span>SYS_STATUS</span>
                                <span className="text-green-600 animate-pulse">ONLINE ●</span>
                            </div>
                            <div className="space-y-1 text-zinc-700">
                                <p>LOC: Sydney, AU</p>
                                <p>TIME: {time}</p>
                                <p>VER: 2.0.4-beta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Bottom Bar */}
            <div className="border-t-4 border-black bg-zinc-900 text-white py-6">
                <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-mono text-sm text-zinc-400">
                        // © {new Date().getFullYear()} {siteConfig.name}. ALL RIGHTS RESERVED.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 font-black uppercase hover:text-yellow-300 transition-colors"
                    >
                        Return to Top
                        <div className="bg-white text-black p-1 group-hover:bg-yellow-300 transition-colors">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Decorative Corner Grid */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }}
            />
        </footer>
    );
}

// Subcomponent for Social Links with a "Tag" look
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            aria-label={label}
        >
            <span className="group-hover:scale-110 transition-transform">
                {icon}
            </span>
        </a>
    );
}