"use client";

import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/data/student-portfolio";
import { motion, Variants } from "framer-motion";
import { AlertTriangle, Database } from "lucide-react";

// Animation: Parent container staggers children
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each card appearing
            delayChildren: 0.2
        }
    }
};

// Animation: Children slide up
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 70, damping: 12 }
    }
};

export function ProjectGrid({ featuredOnly = false }: { featuredOnly?: boolean }) {
    const projects = featuredOnly
        ? projectsData.filter(p => p.featured)
        : projectsData;

    // 1. "Empty State" (If no projects found) - Looks like a CLI Error
    if (projects.length === 0) {
        return (
            <div className="w-full border-2 border-black border-dashed bg-zinc-50 p-12 flex flex-col items-center justify-center text-center font-mono">
                <AlertTriangle className="w-12 h-12 mb-4 text-zinc-400" />
                <h3 className="text-xl font-bold uppercase text-black mb-2">Error: No_Data_Found</h3>
                <p className="text-zinc-500 max-w-md">
                    // The query returned 0 results. Please check your filter settings or update the database.
                </p>
                <div className="mt-6 px-4 py-2 bg-black text-white text-xs uppercase font-bold">
                    System_Status: Idle
                </div>
            </div>
        );
    }

    // 2. Main Grid with Animations
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }} // Triggers when 50px into view
            className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12 relative"
        >
            {/* Background vertical line decoration (Center of grid) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2 hidden md:block" />

            {projects.map((project, index) => (
                <motion.div
                    key={project.slug}
                    variants={cardVariants}
                    className="relative z-10"
                >
                    {/* Optional: Index Number decoration outside the card */}
                    <div className="hidden md:block absolute -left-8 top-0 font-mono text-[10px] text-zinc-400 -rotate-90 origin-right translate-y-8">
                        {(index + 1).toString().padStart(2, '0')} // PROJ
                    </div>

                    <ProjectCard
                        slug={project.slug}
                        title={project.title}
                        description={project.description}
                        thumbnail={project.thumbnail}
                        tags={project.tags}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}