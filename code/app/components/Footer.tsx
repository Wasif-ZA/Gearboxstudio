"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { z } from "zod";
import {
    Check,
    Github,
    Twitter,
    Linkedin,
    MapPin,
    ArrowRight,
    Send
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Logo } from "../components/ui/logo"; // Assuming you saved the Logo component here
import { Container } from "../components/layout/Container"; // Assuming you have this, or remove if using div

// Email validation schema
const emailSchema = z.string().email("Please enter a valid email address");

// ============================================
// DATA
// ============================================

const navLinks = [
    { label: "Templates", href: "#templates" },
    { label: "Components", href: "#components" },
    { label: "Pricing", href: "#pricing" },
    { label: "Documentation", href: "#docs" },
];

const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Licenses", href: "/licenses" },
];

const socialLinks = [
    { label: "Github", href: "https://github.com", icon: <Github className="w-4 h-4" /> },
    { label: "Twitter", href: "https://twitter.com", icon: <Twitter className="w-4 h-4" /> },
    { label: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="w-4 h-4" /> },
];

// ============================================
// ANIMATION CONFIG
// ============================================

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ============================================
// MAIN COMPONENT
// ============================================

export function Footer() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-50px" });
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [emailError, setEmailError] = useState<string | null>(null);

    const handleSubscribe = (e: FormEvent) => {
        e.preventDefault();
        setEmailError(null);

        // Validate email with Zod
        const result = emailSchema.safeParse(email);

        if (!result.success) {
            setEmailError(result.error.issues[0]?.message || "Invalid email");
            return;
        }

        // Email is valid - proceed with subscription
        setIsSubscribed(true);
        setEmail("");
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer
            ref={containerRef}
            className="relative bg-neutral-950 border-t border-white/10 overflow-hidden"
        >
            {/* 1. Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Glow Orbs */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] opacity-30" />
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Top Section - CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: easing }}
                    className="py-16 md:py-20 border-b border-white/5"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                                Ready to ship your next
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mt-1">
                                    software masterpiece?
                                </span>
                            </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                            {/* Uses the new Shimmer Variant */}
                            <Button variant="shimmer" size="lg" className="h-14 px-8 text-base">
                                <span className="flex items-center gap-2">
                                    Start Building
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </Button>

                            <Button variant="outline" size="lg" className="h-14 px-8 text-base">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Middle Section - Links Grid */}
                <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1, ease: easing }}
                        className="lg:col-span-4"
                    >
                        {/* Logo Component */}
                        <a href="/" className="inline-block">
                            <Logo />
                        </a>

                        <p className="mt-6 text-neutral-400 leading-relaxed max-w-xs text-sm">
                            The complete development toolkit for shipping production-ready apps at warp speed.
                        </p>

                        {/* Social Links using Button components */}
                        <div className="mt-8 flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <Button
                                    key={social.label}
                                    variant="outline"
                                    size="icon"
                                    asChild
                                    className="w-10 h-10 rounded-lg bg-neutral-900/50 hover:text-white hover:border-white/20"
                                >
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease: easing }}
                        className="lg:col-span-2"
                    >
                        <h4 className="font-semibold text-white mb-6">Product</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-neutral-700 group-hover:bg-cyan-400 transition-colors" />
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3, ease: easing }}
                        className="lg:col-span-2"
                    >
                        <h4 className="font-semibold text-white mb-6">Legal</h4>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-neutral-700 group-hover:bg-cyan-400 transition-colors" />
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4, ease: easing }}
                        className="lg:col-span-4"
                    >
                        <h4 className="font-semibold text-white mb-6">Stay Updated</h4>
                        <p className="text-neutral-400 text-sm mb-4">
                            Get the latest templates and components delivered to your inbox.
                        </p>

                        {isSubscribed ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                            >
                                <Check className="w-5 h-5" />
                                <span className="text-sm font-medium">You're on the list!</span>
                            </motion.div>
                        ) : (
                            <div className="space-y-2">
                                <form onSubmit={handleSubscribe} className="relative group">
                                    <div className="relative flex gap-2">
                                        {/* System Input Component */}
                                        <Input
                                            type="email"
                                            placeholder="developer@example.com"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                setEmailError(null);
                                            }}
                                            required
                                            className={`pr-14 ${emailError ? 'border-red-500/50 focus-visible:ring-red-500/50' : ''}`}
                                        />

                                        {/* System Button Component (Icon variant) */}
                                        <div className="absolute right-1 top-1">
                                            <Button
                                                type="submit"
                                                size="icon"
                                                className="h-9 w-9 rounded-lg"
                                            >
                                                <Send className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                                {emailError && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-xs pl-1 font-medium"
                                    >
                                        {emailError}
                                    </motion.p>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-20"
                >
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-neutral-500">
                        <span>© {currentYear} GearBoxStudio</span>
                        <span className="hidden sm:block text-neutral-700">·</span>
                        <span>All rights reserved</span>
                    </div>

                    <div className="flex items-center gap-6 text-xs text-neutral-500">
                        <span className="flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            San Francisco, CA
                        </span>
                        <span className="hidden sm:block text-neutral-700">·</span>
                        <span className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Status: Operational
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Giant Faded Wordmark */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center z-0"
            >
                <h1
                    className="text-[18vw] font-bold text-white/[0.03] leading-none tracking-tighter whitespace-nowrap translate-y-[30%]"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent, black)"
                    }}
                >
                    GEARBOX
                </h1>
            </motion.div>
        </footer>
    );
}