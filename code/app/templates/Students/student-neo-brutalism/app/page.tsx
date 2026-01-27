import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { themeConfig } from "@/data/student-portfolio";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Alex Chen | Student Portfolio',
    description: 'Welcome to my portfolio.',
};

export default function HomePage() {
    return (
        <>
            <Hero />

            <section id="projects" className="py-20 bg-white border-y-3 border-black">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex justify-between items-end mb-12">
                        <SectionHeading
                            title="Featured Work"
                            subtitle="A selection of my recent projects and experiments."
                        />
                        <Link
                            href="/templates/students/student-neo-brutalism/projects"
                            className="hidden md:inline-block font-bold uppercase border-b-2 border-black hover:bg-[var(--accent)] transition-colors px-1"
                            style={{ '--accent': themeConfig.accent.hex } as React.CSSProperties}
                        >
                            View All Projects →
                        </Link>
                    </div>

                    <ProjectGrid featuredOnly />

                    <div className="mt-12 text-center md:hidden">
                        <Link
                            href="/templates/students/student-neo-brutalism/projects"
                            className="inline-block font-bold uppercase border-2 border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-100">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-8">
                        Why I do what I do
                    </h2>
                    <p className="text-xl md:text-2xl font-medium text-zinc-700 leading-relaxed mb-10">
                        "I believe that the best software feels invisible. It just works. My goal is to build tools that empower people to do more, creating value through intuitive design and robust engineering."
                    </p>
                    <Link
                        href="/templates/students/student-neo-brutalism/about"
                        className="inline-block px-8 py-4 bg-black text-white font-bold uppercase text-lg hover:rotate-2 transition-transform shadow-[6px_6px_0px_0px_rgba(168,85,247,1)]"
                        style={{ boxShadow: `6px 6px 0px 0px ${themeConfig.secondary.hex}` }}
                    >
                        More About Me
                    </Link>
                </div>
            </section>
        </>
    );
}
