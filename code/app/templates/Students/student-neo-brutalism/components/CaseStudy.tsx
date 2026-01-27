"use client";

import { themeConfig } from "@/data/student-portfolio";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Clock, Hash, Paperclip } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudyProps {
    project: {
        slug: string;
        title: string;
        description: string;
        thumbnail: string;
        tags: string[];
        year: string;
        role: string;
        timeline: string;
        links: {
            live?: string;
            github?: string;
        };
        caseStudy: {
            context: string;
            process: string;
            solution: string;
            result: string;
            images: { src: string; alt: string; caption?: string }[];
            metrics: { label: string; value: string }[];
        };
    };
}

// Reusable "Plus" Background Grid
const PlusGrid = () => (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
        }}
    />
);

export function CaseStudy({ project }: CaseStudyProps) {
    return (
        <article className="min-h-screen bg-white text-black relative selection:bg-black selection:text-white pb-32">
            <PlusGrid />

            {/* --- TOP NAVIGATION BAR --- */}
            <div className="border-b-4 border-black bg-white sticky top-0 z-50">
                <div className="container mx-auto px-4 max-w-6xl h-16 flex items-center justify-between">
                    <Link
                        href="/templates/students/student-neo-brutalism/projects"
                        className="flex items-center gap-2 font-bold uppercase hover:bg-black hover:text-white px-4 py-2 transition-all border-r-2 border-l-2 border-transparent hover:border-black"
                    >
                        <ArrowLeft className="w-5 h-5" /> Back to Archives
                    </Link>
                    <div className="hidden md:flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase">
                        <span>Project_ID: {project.slug}</span>
                        <span>//</span>
                        <span>Status: Documented</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl pt-16 relative z-10">

                {/* --- HEADER SECTION --- */}
                <header className="mb-20">
                    {/* Title Block */}
                    <div className="relative mb-12">
                        {/* Decorative Offset Box behind title */}
                        <div
                            className="absolute -top-4 -left-4 w-20 h-20 z-0"
                            style={{ backgroundColor: themeConfig.accent.hex }}
                        />
                        <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter break-words">
                            {project.title}
                        </h1>
                    </div>

                    {/* Metadata Grid (The "Spec Sheet") */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <MetaItem icon={<Calendar className="w-4 h-4" />} label="Year" value={project.year} />
                        <MetaItem icon={<User className="w-4 h-4" />} label="Role" value={project.role} />
                        <MetaItem icon={<Clock className="w-4 h-4" />} label="Timeline" value={project.timeline} />

                        {/* Tags as the last item */}
                        <div className="p-4 flex flex-col justify-center border-b-2 md:border-b-0 border-black bg-zinc-50">
                            <span className="flex items-center gap-2 text-xs font-bold uppercase text-zinc-500 mb-2">
                                <Hash className="w-4 h-4" /> Tech Stack
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase">
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 3 && (
                                    <span className="text-[10px] font-bold self-center">+{project.tags.length - 3}</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Links Row */}
                    <div className="flex gap-4 mt-6">
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[4px_4px_0px_0px_rgba(120,120,120,1)]"
                            >
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                        )}
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-black text-black font-bold uppercase hover:bg-zinc-100 transition-colors"
                            >
                                <Github className="w-4 h-4" /> Source Code
                            </a>
                        )}
                    </div>
                </header>


                {/* --- MAIN LAYOUT GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT COLUMN (Content) - Spans 8 cols */}
                    <div className="lg:col-span-8">

                        {/* Main Thumbnail */}
                        <div className="w-full aspect-video border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16 relative bg-zinc-200 group overflow-hidden">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-0 right-0 bg-yellow-300 text-black px-4 py-1 font-mono text-xs font-bold border-t-2 border-l-2 border-black">
                                FIG 1.0 // MAIN_VIEW
                            </div>
                        </div>

                        {/* Text Sections */}
                        <div className="space-y-16">
                            <Section title="01. The Context" content={project.caseStudy.context} />
                            <Section title="02. The Process" content={project.caseStudy.process} />

                            {/* Mid-article Image Break (if images exist) */}
                            {project.caseStudy.images[0] && (
                                <div className="border-2 border-dashed border-black p-4 bg-zinc-50 my-12">
                                    <div className="relative aspect-video border-2 border-black">
                                        <Image src={project.caseStudy.images[0].src} alt={project.caseStudy.images[0].alt} fill className="object-cover" />
                                    </div>
                                    <p className="font-mono text-xs mt-2 text-zinc-500">FIG 1.1 // {project.caseStudy.images[0].caption || "PROCESS_SNAPSHOT"}</p>
                                </div>
                            )}

                            <Section title="03. The Solution" content={project.caseStudy.solution} />
                            <Section title="04. The Result" content={project.caseStudy.result} />
                        </div>
                    </div>

                    {/* RIGHT COLUMN (Sticky Sidebar) - Spans 4 cols */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-24 space-y-8">

                            {/* Metrics Card */}
                            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
                                <div className="flex items-center justify-between mb-6 border-b-4 border-black pb-4">
                                    <h3 className="font-black uppercase text-2xl">Results</h3>
                                    <div className="w-4 h-4 rounded-full bg-red-500 border border-black animate-pulse" />
                                </div>

                                <div className="space-y-6">
                                    {project.caseStudy.metrics.length > 0 ? (
                                        project.caseStudy.metrics.map((metric, i) => (
                                            <div key={i} className="group cursor-default">
                                                <div className="flex items-end gap-2 mb-1">
                                                    <span
                                                        className="text-4xl font-black leading-none group-hover:translate-x-1 transition-transform"
                                                        style={{ color: themeConfig.secondary.hex }}
                                                    >
                                                        {metric.value}
                                                    </span>
                                                </div>
                                                <span className="text-sm font-bold uppercase bg-black text-white px-1">
                                                    {metric.label}
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-4 bg-zinc-100 border-2 border-zinc-300 text-zinc-400 font-mono text-sm text-center">
                                            // NO_METRICS_FOUND
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* "Quick Nav" or Decorative Box */}
                            <div className="hidden lg:block border-2 border-black bg-yellow-300 p-4 transform rotate-2">
                                <p className="font-black uppercase text-center leading-tight">
                                    "Good design is obvious. Great design is transparent."
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* --- IMAGE GALLERY (Remaining Images) --- */}
                {project.caseStudy.images.length > 1 && (
                    <div className="mt-32 pt-16 border-t-4 border-black">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 bg-black text-white flex items-center justify-center">
                                <Paperclip className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase">Project Attachments</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.caseStudy.images.slice(1).map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-3 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                                >
                                    <div className="aspect-video relative bg-zinc-100 border border-black mb-3">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <div className="flex justify-between items-end font-mono text-xs">
                                        <span className="font-bold uppercase">{img.caption || `EVIDENCE_${idx + 2}.JPG`}</span>
                                        <span className="text-zinc-400">1024KB</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </article>
    );
}

// --- SUBCOMPONENTS ---

function MetaItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="p-4 border-b-2 last:border-b-0 md:border-b-0 md:border-r-2 border-black last:border-r-0 flex flex-col justify-center hover:bg-yellow-50 transition-colors">
            <span className="flex items-center gap-2 text-xs font-bold uppercase text-zinc-500 mb-1">
                {icon} {label}
            </span>
            <span className="font-bold text-lg leading-tight">{value}</span>
        </div>
    );
}

function Section({ title, content }: { title: string; content: string }) {
    return (
        <section>
            <div className="inline-block bg-black text-white px-4 py-2 mb-6 shadow-[4px_4px_0px_0px_rgba(200,200,200,1)]">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-wide">
                    {title}
                </h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-zinc-800 whitespace-pre-line">
                {content}
            </p>
        </section>
    );
}