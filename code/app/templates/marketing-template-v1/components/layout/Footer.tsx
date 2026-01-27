"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Github, Twitter, Linkedin, Layers, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative border-t border-slate-200 bg-slate-50 overflow-hidden">

            {/* --- BACKGROUND DECORATION --- */}

            {/* 1. Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

            {/* 2. GIANT FADED WATERMARK (Matches reference image style) */}
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 pointer-events-none select-none w-full overflow-hidden flex justify-center z-0">
                <h1 className="text-[13vw] font-black text-slate-200/50 tracking-tighter whitespace-nowrap leading-none">
                    GEARBOX
                </h1>
            </div>

            <div className="container relative z-10 px-4 md:px-6 py-16 mx-auto">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-xl shadow-slate-900/10">
                                <Layers className="h-5 w-5" />
                            </div>
                            <span className="font-bold text-slate-900 text-xl tracking-tight">Gearbox</span>
                        </div>

                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
                            The central node for your entire financial stack. Automate payments, recovery, and reconciliation with a single, hardened API.
                        </p>

                        <div className="flex gap-3">
                            <SocialIcon icon={Github} href="#" />
                            <SocialIcon icon={Twitter} href="#" />
                            <SocialIcon icon={Linkedin} href="#" />
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-sm font-bold text-slate-900">Product</h3>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><FooterLink href="#">Features</FooterLink></li>
                            <li><FooterLink href="#">Integrations</FooterLink></li>
                            <li><FooterLink href="#">Pricing</FooterLink></li>
                            <li><FooterLink href="#">Changelog</FooterLink></li>
                            <li><FooterLink href="#">Docs</FooterLink></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-sm font-bold text-slate-900">Company</h3>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><FooterLink href="#">About Us</FooterLink></li>
                            <li><FooterLink href="#">Careers</FooterLink></li>
                            <li><FooterLink href="#">Blog</FooterLink></li>
                            <li><FooterLink href="#">Contact</FooterLink></li>
                            <li><FooterLink href="#">Partners</FooterLink></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative z-20">
                            <h3 className="text-sm font-bold text-slate-900 mb-2">Subscribe to our newsletter</h3>
                            <p className="text-sm text-slate-500 mb-4 font-medium">
                                Get the latest updates, articles, and resources.
                            </p>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-slate-50 border-slate-200 focus:ring-slate-400 focus:border-slate-400"
                                />
                                <Button size="icon" className="bg-slate-900 text-white hover:bg-slate-800 shrink-0 aspect-square">
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar (Aligned like reference) */}
                <div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                    <p className="text-xs text-slate-500 font-bold">
                        &copy; 2026 Gearbox Studios. All rights reserved.
                    </p>

                    <div className="flex gap-8 text-xs text-slate-600 font-bold">
                        <Link href="#" className="hover:text-slate-900 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-slate-900 transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-slate-900 transition-colors">Code of Conduct</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// --- Helper Components ---

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="block hover:text-slate-900 transition-colors duration-200 font-medium">
            {children}
        </Link>
    )
}

function SocialIcon({ icon: Icon, href }: { icon: any, href: string }) {
    return (
        <Link href={href} className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm">
            <Icon className="h-4 w-4" />
        </Link>
    )
}