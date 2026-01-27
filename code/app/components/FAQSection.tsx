"use client";

import { MessageCircleQuestion } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"; // Assuming you placed the new Accordion here
import { Badge } from "../components/ui/badge"; // Using the new Badge component

const faqs = [
    {
        q: "What's included in each template?",
        a: "Full source code, documentation, context files for AI tools, deployment guides, and ongoing updates.",
    },
    {
        q: "Can I use templates for client projects?",
        a: "Yes! Build and Scale tiers include commercial license for unlimited client projects.",
    },
    {
        q: "Do I keep access if I cancel?",
        a: "You keep everything you downloaded. You lose access to new templates and updates.",
    },
    {
        q: "What tech stack do templates use?",
        a: "Next.js 14, React, TypeScript, Tailwind CSS. Some include Prisma, Stripe, and other integrations.",
    },
    {
        q: "What are 'AI context files'?",
        a: "ARCHITECTURE.md, DECISIONS.md, and PROMPTS.md files that help AI assistants understand your codebase.",
    },
    {
        q: "Is there a refund policy?",
        a: "Yes, 14-day money-back guarantee. No questions asked.",
    },
    {
        q: "Can I request a template?",
        a: "Yes! Scale members can vote on and request new templates.",
    },
    {
        q: "How often are new templates added?",
        a: "At least 2 new templates per month, plus weekly component and integration updates.",
    },
];

export function FAQSection() {
    return (
        <section className="relative py-24 px-4 bg-neutral-950 overflow-hidden" id="faq">

            {/* 1. Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-900/10 rounded-[100%] blur-[120px] opacity-50" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-900/10 rounded-[100%] blur-[120px] opacity-30" />

                {/* Noise */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge variant="neon-purple" className="mb-6">
                        <MessageCircleQuestion className="w-3 h-3 mr-2" />
                        Support & Details
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Frequently Asked <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            Questions
                        </span>
                    </h2>

                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Everything you need to know about the GearBox ecosystem.
                        Can't find the answer? We're here to help.
                    </p>
                </div>

                {/* 2. The System Container (Glass Panel) */}
                <div className="relative rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                    {/* Top Highlight Line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="p-6 md:p-8">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-white/5 last:border-0"
                                >
                                    <AccordionTrigger className="text-base md:text-lg text-neutral-200 hover:text-white py-5">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-neutral-400 leading-relaxed pb-6 pr-8">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>

                {/* Contact Footer */}
                <div className="mt-16 text-center">
                    <p className="text-neutral-500">
                        Still have questions?{" "}
                        <a
                            href="#contact"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium border-b border-cyan-400/30 hover:border-cyan-400 pb-0.5 ml-1"
                        >
                            Contact our engineering team
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}