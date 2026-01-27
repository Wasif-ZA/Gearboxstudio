"use client";

import { useState } from "react";
import { PricingCard } from "@/components/ui/PricingCard";
import { cn } from "@/lib/utils";

export function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-24 bg-page">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="max-w-[700px] text-secondary md:text-xl">
                        Choose the plan that&apos;s right for your business. No hidden fees.
                    </p>

                    <div className="mt-8 flex items-center justify-center space-x-4">
                        <span className={cn("text-sm font-medium", !isYearly ? "text-primary" : "text-secondary")}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative h-6 w-11 rounded-full bg-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page"
                        >
                            <span
                                className={cn(
                                    "block h-4 w-4 translate-x-1 rounded-full bg-white transition-transform",
                                    isYearly && "translate-x-6 bg-accent"
                                )}
                            />
                        </button>
                        <span className={cn("text-sm font-medium", isYearly ? "text-primary" : "text-secondary")}>
                            Yearly <span className="text-accent underline decoration-wavy">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
                    />
                </div>
            </div>
        </section>
    );
}
