"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Layout, ShoppingCart, BarChart3, FileText, Globe, Eye } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"; // Using your new Tabs
import { Card } from "../components/ui/card"; // Using your new Card
import { Badge } from "../components/ui/badge"; // Using your new Badge
import { Button } from "../components/ui/button"; // Using your new Button

const templates = [
    {
        id: 1,
        name: "SaaS Starter",
        description: "Production-ready boilerplate with Authentication, Stripe billing, and User Dashboard pre-configured.",
        category: "SaaS",
        tags: ["Next.js", "Stripe", "Supabase"],
        icon: Layout,
        gradient: "from-cyan-500/20 to-blue-600/20",
        border: "group-hover:border-cyan-500/50"
    },
    {
        id: 2,
        name: "Agency Portfolio",
        description: "High-performance landing page featuring scroll animations, case study CMS, and contact forms.",
        category: "Landing",
        tags: ["Framer Motion", "Resend"],
        icon: Globe,
        gradient: "from-purple-500/20 to-pink-600/20",
        border: "group-hover:border-purple-500/50"
    },
    {
        id: 3,
        name: "E-commerce Pro",
        description: "Full-stack store with cart logic, inventory management, and checkout flow.",
        category: "E-commerce",
        tags: ["Shopify SDK", "Tailwind"],
        icon: ShoppingCart,
        gradient: "from-emerald-500/20 to-teal-600/20",
        border: "group-hover:border-emerald-500/50"
    },
    {
        id: 4,
        name: "Dev Blog",
        description: "MDX-powered technical blog with syntax highlighting, search, and category filtering.",
        category: "Content",
        tags: ["MDX", "Contentlayer"],
        icon: FileText,
        gradient: "from-orange-500/20 to-red-600/20",
        border: "group-hover:border-orange-500/50"
    },
    {
        id: 5,
        name: "Admin Analytics",
        description: "Data-heavy dashboard with interactive charts, data tables, and export functionality.",
        category: "Dashboard",
        tags: ["Tremor", "TanStack Table"],
        icon: BarChart3,
        gradient: "from-blue-500/20 to-indigo-600/20",
        border: "group-hover:border-blue-500/50"
    },
    {
        id: 6,
        name: "Documentation",
        description: "Beautifully structured documentation site with Algolia search and version control.",
        category: "Content",
        tags: ["Markdoc", "Algolia"],
        icon: FileText,
        gradient: "from-pink-500/20 to-rose-600/20",
        border: "group-hover:border-pink-500/50"
    },
];

export function TemplatesSection() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "SaaS", "Dashboard", "Landing", "E-commerce"];

    const filteredTemplates = activeFilter === "All"
        ? templates
        : templates.filter(t => t.category === activeFilter);

    return (
        <section id="templates" className="relative py-24 px-4 bg-neutral-950 overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Accelerate your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                development cycle
                            </span>
                        </h2>
                        <p className="text-neutral-400 max-w-xl text-lg">
                            Don't start from `npm init`. Clone a production-ready architecture and start shipping features immediately.
                        </p>
                    </div>

                    {/* Filter Segmented Control using new Tabs component */}
                    <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full md:w-auto">
                        <TabsList className="bg-neutral-900 border border-white/10 h-auto p-1.5 rounded-2xl flex-wrap justify-start">
                            {filters.map((filter) => (
                                <TabsTrigger
                                    key={filter}
                                    value={filter}
                                    className="rounded-xl px-4 py-2 text-sm font-medium"
                                >
                                    {filter}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>

                {/* Templates Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredTemplates.map((template) => (
                            <TemplateCard key={template.id} template={template} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Footer Link */}
                <div className="text-center mt-16">
                    <Button variant="link" asChild className="text-neutral-400 hover:text-cyan-400">
                        <a href="#" className="gap-2 group">
                            Explore component library
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function TemplateCard({ template }: { template: any }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            {/* Using the Custom Card Component */}
            <Card className={`group relative h-full bg-neutral-900 border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/10 ${template.border}`}>

                {/* 1. Browser Window Header */}
                <div className="h-8 bg-neutral-800/50 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                    <div className="ml-auto text-[10px] font-mono text-neutral-600">
                        localhost:3000
                    </div>
                </div>

                {/* 2. Image Area (Gradient Placeholder) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-50 transition-transform duration-700 group-hover:scale-105`} />

                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

                    {/* Central Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-neutral-950/30 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                            <template.icon className="w-8 h-8 text-white/80" />
                        </div>
                    </div>

                    {/* Hover Overlay with Button */}
                    <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="rounded-full font-bold gap-2 shadow-xl" variant="secondary">
                            <Eye className="w-4 h-4" />
                            Live Preview
                        </Button>
                    </div>
                </div>

                {/* 3. Content Details */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {template.name}
                        </h3>
                        <Badge variant="outline" className="font-mono text-xs border-white/10 text-neutral-500">
                            v2.0
                        </Badge>
                    </div>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 h-10 line-clamp-2">
                        {template.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                        {template.tags.map((tag: string) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="font-mono bg-white/5 border border-white/5 text-neutral-400 hover:text-cyan-200 hover:border-cyan-500/20 transition-colors"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}