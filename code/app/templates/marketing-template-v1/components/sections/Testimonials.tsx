"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO at TechFlow",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        content: "Gearbox saved us weeks of development. The automation workflows are incredibly clean and easy to customize.",
    },
    {
        name: "Michael Ross",
        role: "Indie Solo Founder",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        content: "I launched my MVP in a weekend using this. The premium design immediately gave my product credibility.",
    },
    {
        name: "Jessica Park",
        role: "Product Designer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
        content: "The attention to detail in the UI components is outstanding. The integration with our existing stack was flawless.",
    },
    {
        name: "David Kim",
        role: "Engineering Lead",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        content: "Hands down the best financial infrastructure tool I've used. The API documentation is top-tier.",
    },
    {
        name: "Emily Davis",
        role: "VP of Product",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
        content: "We migrated our entire billing system to Gearbox in less than a month. Support was phenomenal.",
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white border-b border-slate-100 overflow-hidden relative">

            {/* Background Gradient (Subtle) */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Loved by Builders
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 font-medium">
                        Join thousands of developers and founders building the future with Gearbox.
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                    <div className="flex w-max min-w-full gap-6 pb-8">
                        <TestimonialRow items={testimonials} duration={40} />
                        <TestimonialRow items={testimonials} duration={40} />
                    </div>
                </div>

            </div>
        </section>
    );
}

function TestimonialRow({ items, duration }: { items: typeof testimonials, duration: number }) {
    return (
        <motion.div
            animate={{ x: "-100%" }}
            transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 shrink-0"
        >
            {items.map((testimonial, i) => (
                <div
                    key={i}
                    className="w-[350px] md:w-[400px] flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-lg hover:border-slate-200"
                >
                    <div className="flex gap-1 text-emerald-500 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-current" />
                        ))}
                    </div>

                    <p className="mb-6 text-slate-600 text-base leading-relaxed font-medium">
                        &quot;{testimonial.content}&quot;
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                        <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden relative">
                            <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                            <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    )
}