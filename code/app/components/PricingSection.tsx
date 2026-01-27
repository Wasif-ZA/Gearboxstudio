"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"; // Your new Tabs
import { Badge } from "../components/ui/badge"; // Your new Badge
import { Button } from "../components/ui/button"; // Your new Button
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"; // Your new Card

const pricingTiers = [
    {
        name: "Launch",
        price: { monthly: 19, annual: 182 },
        description: "Perfect for indie developers shipping their first product.",
        features: [
            "15+ production templates",
            "Basic AI context files",
            "Community Discord access",
            "Standard email support",
            "Lifetime updates for v1",
        ],
        cta: "Start Building",
        highlighted: false,
    },
    {
        name: "Build",
        price: { monthly: 49, annual: 470 },
        description: "Everything you need to scale. Our most popular plan.",
        features: [
            "40+ production templates",
            "Advanced AI context files",
            "React Component library",
            "Priority support (24h)",
            "Monthly architecture deep-dives",
            "Private strategy channel",
        ],
        cta: "Get Full Access",
        highlighted: true,
    },
    {
        name: "Scale",
        price: { monthly: 149, annual: 1430 },
        description: "For teams and agencies shipping multiple products.",
        features: [
            "Everything in Build",
            "Team seats (up to 5)",
            "Commercial license (unlimited)",
            "Dedicated Slack channel",
            "Quarterly strategy call",
            "Custom component requests",
        ],
        cta: "Contact Sales",
        highlighted: false,
    },
];

export function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section id="pricing" className="relative py-32 px-4 overflow-hidden bg-neutral-950">

            {/* 1. Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <Badge variant="neon-purple" className="mb-8">
                        <Zap className="w-3 h-3 mr-2 fill-purple-400" />
                        Early Bird Pricing Available
                    </Badge>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Simple, transparent <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            pricing for builders
                        </span>
                    </h2>

                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Stop wasting time on boilerplate. Invest in a toolkit that pays for itself
                        with the first project you ship.
                    </p>

                    {/* Toggle Switch (Using Custom Tabs) */}
                    <div className="flex justify-center">
                        <Tabs
                            value={isAnnual ? "annual" : "monthly"}
                            onValueChange={(v) => setIsAnnual(v === "annual")}
                            className="w-full max-w-[400px]"
                        >
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                                <TabsTrigger value="annual" className="gap-2">
                                    Annual
                                    <Badge variant="neon-green" className="py-0.5 px-1.5 text-[10px] h-5 border-none">
                                        -20%
                                    </Badge>
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <PricingCard
                            key={tier.name}
                            tier={tier}
                            isAnnual={isAnnual}
                            index={index}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-neutral-500 text-sm">
                        All prices in USD. VAT may apply.
                        <a href="#" className="text-neutral-400 hover:text-cyan-400 ml-2 underline underline-offset-4 decoration-neutral-800 hover:decoration-cyan-500 transition-all">
                            Read our refund policy
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

function PricingCard({ tier, isAnnual, index }: { tier: any, isAnnual: boolean, index: number }) {
    // Calculate price per month based on annual/monthly selection
    const price = isAnnual ? Math.round(tier.price.annual / 12) : tier.price.monthly;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <Card
                // Use the 'neon' variant for highlighted, 'default' (glass) for others
                variant={tier.highlighted ? "neon" : "default"}
                className="h-full flex flex-col"
            >
                <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className={`text-xl font-bold ${tier.highlighted ? "text-white" : "text-neutral-200"}`}>
                            {tier.name}
                        </h3>
                        {tier.highlighted && (
                            <Badge variant="neon-cyan" className="shadow-none">
                                <Sparkles className="w-3 h-3 mr-1" />
                                Popular
                            </Badge>
                        )}
                    </div>

                    {/* Price Animation Area */}
                    <div className="flex items-baseline gap-1 h-14 overflow-hidden">
                        <span className="text-4xl font-bold text-white font-mono tracking-tighter">
                            $
                        </span>
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={price} // Triggers animation when number changes
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-4xl font-bold text-white font-mono tracking-tighter"
                            >
                                {price}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-neutral-500 font-medium text-sm ml-1">/mo</span>
                    </div>
                    {isAnnual && (
                        <p className="text-xs text-neutral-500 font-mono">
                            Billed ${tier.price.annual} yearly
                        </p>
                    )}

                    <p className="text-neutral-400 text-sm leading-relaxed pt-4 h-16">
                        {tier.description}
                    </p>
                </CardHeader>

                <CardContent className="flex-1">
                    <div className="w-full h-px bg-white/10 mb-6" />
                    <ul className="space-y-4">
                        {tier.features.map((feature: string) => (
                            <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300">
                                <div className={`mt-0.5 p-0.5 rounded-full shrink-0 ${tier.highlighted ? "bg-cyan-500/10 text-cyan-400" : "bg-neutral-800 text-neutral-500"}`}>
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className="leading-tight">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>

                <CardFooter>
                    <Button
                        className="w-full py-6 text-base font-bold"
                        // Use 'shimmer' for the main CTA, 'outline' for others
                        variant={tier.highlighted ? "shimmer" : "outline"}
                        size="lg"
                    >
                        {tier.cta}
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}