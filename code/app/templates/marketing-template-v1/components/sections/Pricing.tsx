"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">

                {/* Header & Toggle */}
                <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-lg text-slate-500 font-medium">
                            Start for free, scale as you grow. No credit card required.
                        </p>
                    </div>

                    <div className="flex items-center justify-center p-1 bg-white border border-slate-200 rounded-full shadow-sm">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300",
                                !isYearly ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2",
                                isYearly ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900"
                            )}
                        >
                            Yearly
                            <span className={cn(
                                "text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 uppercase tracking-wide transition-colors",
                                isYearly && "bg-emerald-500 text-white"
                            )}>
                                -20%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    <PricingCard
                        title="Starter"
                        price={isYearly ? "$29" : "$39"}
                        description="Perfect for side projects and hobbyists."
                        features={[
                            "Up to 5 Projects",
                            "Basic Analytics",
                            "48-hour Support Response",
                            "Community Access",
                        ]}
                        delay={0.1}
                    />
                    <PricingCard
                        title="Pro"
                        price={isYearly ? "$79" : "$99"}
                        description="For growing teams and serious businesses."
                        isPopular
                        features={[
                            "Unlimited Projects",
                            "Advanced Analytics",
                            "Priority Support (24h)",
                            "Custom Domains",
                            "Team Collaboration",
                        ]}
                        delay={0.2}
                    />
                    <PricingCard
                        title="Enterprise"
                        price="Custom"
                        description="Tailored solutions for large organizations."
                        features={[
                            "Dedicated Account Manager",
                            "SLA Agreements",
                            "SSO Authentication",
                            "Audit Logs",
                            "Advanced Security",
                        ]}
                        buttonText="Contact Sales"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
}

// --- SUB-COMPONENT: Pricing Card ---
function PricingCard({
    title,
    price,
    description,
    features,
    isPopular,
    buttonText = "Get Started",
    delay
}: {
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    buttonText?: string;
    delay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className={cn(
                "relative flex flex-col p-8 bg-white rounded-3xl border transition-all duration-300",
                isPopular
                    ? "border-emerald-500 shadow-2xl shadow-emerald-900/10 scale-100 md:scale-105 z-10"
                    : "border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300"
            )}
        >
            {isPopular && (
                <div className="absolute top-0 inset-x-0 -mt-3 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-sm">
                        <Sparkles className="w-3 h-3 fill-current" />
                        Most Popular
                    </span>
                </div>
            )}

            <div className="mb-6">
                <h3 className={cn("text-lg font-bold", isPopular ? "text-emerald-600" : "text-slate-900")}>
                    {title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 font-medium leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="mb-8 h-12 flex items-baseline">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={price}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-4xl font-extrabold text-slate-900 tracking-tight"
                    >
                        {price}
                    </motion.span>
                </AnimatePresence>
                {price !== "Custom" && <span className="text-sm font-semibold text-slate-500 ml-1">/mo</span>}
            </div>

            <ul className="mb-8 space-y-4 flex-1">
                {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                        <div className={cn(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            isPopular ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500"
                        )}>
                            <Check className="h-3 w-3" />
                        </div>
                        {feature}
                    </li>
                ))}
            </ul>

            <Button
                className={cn(
                    "w-full h-12 text-sm font-bold shadow-sm transition-all active:scale-[0.98] rounded-xl",
                    isPopular
                        ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                )}
            >
                {buttonText} {isPopular && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
        </motion.div>
    );
}