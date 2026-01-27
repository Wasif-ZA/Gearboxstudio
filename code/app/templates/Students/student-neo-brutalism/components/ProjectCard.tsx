import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Folder, FileCode, HardDrive } from "lucide-react";
import { themeConfig } from "@/data/student-portfolio";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
}

export function ProjectCard({ slug, title, description, thumbnail, tags }: ProjectCardProps) {
    // Generate a fake "file size" based on title length for decoration
    const fakeSize = `${(title.length * 1.5).toFixed(1)} MB`;

    return (
        <Link
            href={`/projects/${slug}`}
            className="group block h-full bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col relative overflow-hidden"
        >
            {/* 1. File Explorer Header Bar */}
            <div className="border-b-3 border-black bg-zinc-100 p-2 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-zinc-500 fill-zinc-300" />
                    <span className="font-mono text-xs font-bold uppercase text-zinc-700">
                        /projects/{slug}.tsx
                    </span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-black/20" />
                    <div className="w-2 h-2 rounded-full bg-black/20" />
                </div>
            </div>

            {/* 2. Image Container */}
            <div className="relative aspect-video w-full border-b-3 border-black overflow-hidden bg-zinc-200">
                {/* Image */}
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale"
                />

                {/* Decorative Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 group-hover:opacity-0 transition-opacity"></div>

                {/* Floating "View" Badge (Hidden by default, slides in on hover) */}
                <div
                    className="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                >
                    <div
                        className="bg-black text-white px-3 py-1 font-bold uppercase text-sm border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
                        style={{ backgroundColor: themeConfig.accent.hex, color: 'black', borderColor: 'black' }}
                    >
                        <span>Open</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* 3. Content Body */}
            <div className="p-6 flex flex-col flex-grow relative">

                {/* Title */}
                <div className="mb-3">
                    <h3 className="text-2xl font-black uppercase leading-none group-hover:underline decoration-4 underline-offset-4">
                        {title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-zinc-600 font-medium leading-relaxed line-clamp-2 mb-6 text-sm md:text-base">
                    {description}
                </p>

                {/* Footer Info (Tags & Tech Specs) */}
                <div className="mt-auto pt-4 border-t-2 border-dashed border-black/20 flex flex-col gap-3">

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] font-black uppercase px-2 py-1 border border-black bg-white group-hover:bg-zinc-100 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Tech Meta Data */}
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold text-zinc-600 uppercase">
                        <div className="flex items-center gap-1">
                            <HardDrive className="w-3 h-3" />
                            <span>{fakeSize}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FileCode className="w-3 h-3" />
                            <span>Read_Only</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}