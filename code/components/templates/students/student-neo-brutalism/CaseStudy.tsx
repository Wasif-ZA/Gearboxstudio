import { themeConfig } from "@/data/student-portfolio";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

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

export function CaseStudy({ project }: CaseStudyProps) {
    return (
        <article className="container mx-auto px-4 max-w-5xl py-20">

            {/* Back Button */}
            <Link
                href="/templates/students/student-neo-brutalism/projects"
                className="inline-flex items-center gap-2 font-bold uppercase hover:bg-[var(--accent)] px-3 py-1 -ml-3 mb-8 transition-colors"
                style={{ '--accent': themeConfig.accent.hex } as React.CSSProperties}
            >
                <ArrowLeft className="w-5 h-5" /> Back to Projects
            </Link>

            {/* Header */}
            <header className="mb-16">
                <h1 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-none">
                    {project.title}
                </h1>

                <div className="flex flex-wrap gap-4 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 border border-black bg-zinc-100 text-sm font-bold uppercase">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-y-2 border-black py-8 bg-zinc-50">
                    <div>
                        <span className="block text-xs font-bold uppercase text-zinc-500 mb-1">Year</span>
                        <span className="font-bold text-lg">{project.year}</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase text-zinc-500 mb-1">Role</span>
                        <span className="font-bold text-lg">{project.role}</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase text-zinc-500 mb-1">Timeline</span>
                        <span className="font-bold text-lg">{project.timeline}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-bold hover:text-[var(--accent)] transition-colors"
                                style={{ '--accent': themeConfig.secondary.hex } as React.CSSProperties}
                            >
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                        )}
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-bold hover:text-[var(--accent)] transition-colors"
                                style={{ '--accent': themeConfig.secondary.hex } as React.CSSProperties}
                            >
                                <Github className="w-4 h-4" /> View Code
                            </a>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Image */}
            <div className="w-full aspect-video border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16 relative bg-zinc-200">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <Section title="Context" content={project.caseStudy.context} />
                    <Section title="Process" content={project.caseStudy.process} />
                    <Section title="Solution" content={project.caseStudy.solution} />
                    <Section title="Result" content={project.caseStudy.result} />
                </div>

                {/* Sidebar / Metrics */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 p-6 border-2 border-black bg-[#fffffe] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="font-black uppercase text-xl mb-6 border-b-2 border-black pb-2">Key Metrics</h3>
                        <div className="space-y-6">
                            {project.caseStudy.metrics.map((metric) => (
                                <div key={metric.label}>
                                    <span className="block text-3xl font-black text-[var(--accent)]" style={{ color: themeConfig.secondary.hex }}>
                                        {metric.value}
                                    </span>
                                    <span className="text-sm font-bold uppercase text-zinc-600">
                                        {metric.label}
                                    </span>
                                </div>
                            ))}
                            {project.caseStudy.metrics.length === 0 && (
                                <p className="text-zinc-500 italic text-sm">No metrics available for this project.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Gallery */}
            {project.caseStudy.images.length > 0 && (
                <div className="mt-20">
                    <h2 className="text-3xl font-black uppercase mb-8">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.caseStudy.images.map((img, idx) => (
                            <div key={idx} className="border-2 border-black p-2 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <div className="aspect-video relative bg-zinc-100 mb-2">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {img.caption && (
                                    <p className="text-sm font-medium text-zinc-500 text-center py-2">{img.caption}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </article>
    );
}

function Section({ title, content }: { title: string; content: string }) {
    return (
        <div>
            <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
                <span className="w-4 h-4 bg-black"></span>
                {title}
            </h2>
            <p className="text-lg leading-relaxed text-zinc-800 whitespace-pre-line">
                {content}
            </p>
        </div>
    );
}
