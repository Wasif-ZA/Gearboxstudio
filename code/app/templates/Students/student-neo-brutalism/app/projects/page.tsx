import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Student Portfolio',
    description: 'A collection of my work and side projects.',
};

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 max-w-6xl py-20">
            <div className="max-w-4xl mb-16">
                <SectionHeading
                    title="All Projects"
                    subtitle="From class assignments to passion projects, here is a collection of things I've built."
                />
            </div>

            <ProjectGrid />
        </div>
    );
}
