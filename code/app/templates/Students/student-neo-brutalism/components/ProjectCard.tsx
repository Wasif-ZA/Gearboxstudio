import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { themeConfig } from "@/data/student-portfolio";

interface ProjectCardProps {
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
}

export function ProjectCard({ slug, title, description, thumbnail, tags }: ProjectCardProps) {
    return (
        <Link
            href={`/templates/students/student-neo-brutalism/projects/${slug}`}
            className="group block h-full bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col"
        >
            <div className="relative aspect-video w-full border-b-3 border-black overflow-hidden bg-zinc-100">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-[var(--accent)] transition-colors" style={{ '--accent': themeConfig.accent.hex } as React.CSSProperties}>
                    <ArrowUpRight className="w-6 h-6" />
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 flex-wrap mb-4">
                    {tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-bold uppercase px-2 py-1 border border-black bg-zinc-100"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl font-black uppercase mb-2 group-hover:underline decoration-2 underline-offset-4 leading-tight">
                    {title}
                </h3>

                <p className="text-zinc-600 font-medium line-clamp-3">
                    {description}
                </p>
            </div>
        </Link>
    );
}
