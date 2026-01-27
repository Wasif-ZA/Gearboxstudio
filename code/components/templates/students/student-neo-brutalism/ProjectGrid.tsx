import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/data/student-portfolio";
import { themeConfig } from "@/data/student-portfolio";

export function ProjectGrid({ featuredOnly = false }: { featuredOnly?: boolean }) {
    const projects = featuredOnly
        ? projectsData.filter(p => p.featured)
        : projectsData;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-12">
            {projects.map((project) => (
                <ProjectCard
                    key={project.slug}
                    slug={project.slug}
                    title={project.title}
                    description={project.description}
                    thumbnail={project.thumbnail}
                    tags={project.tags}
                />
            ))}
        </div>
    );
}
