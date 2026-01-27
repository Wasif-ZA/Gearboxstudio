"use client";

import { themeConfig } from "@/data/student-portfolio";
import { Hash, CornerRightDown } from "lucide-react";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    number?: string; // Optional, e.g., "01"
}

export function SectionHeading({ title, subtitle, number }: SectionHeadingProps) {
    return (
        <div className="relative mb-16">

            {/* 1. Top "Technical" Line & Label */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-black"></div>
                <span className="font-mono text-xs font-bold uppercase text-zinc-600 tracking-widest">
                    {number ? `SEC // ${number}` : '// SECTION'}
                </span>
                <div className="h-[2px] bg-zinc-200 flex-grow relative">
                    {/* Decorative dash pattern on the line */}
                    <div className="absolute right-0 top-0 h-full w-12 bg-black"></div>
                </div>
            </div>

            {/* 2. Main Title Layout */}
            <div className="flex flex-col md:flex-row gap-6 md:items-start">

                {/* Decorative Icon Box (Hidden on small mobile) */}
                <div
                    className="hidden md:flex items-center justify-center w-14 h-14 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0 mt-1"
                    style={{ backgroundColor: themeConfig.accent.hex }}
                >
                    <Hash className="w-8 h-8 text-black" />
                </div>

                <div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                        <span className="relative inline-block z-10">
                            {title}
                            {/* Marker Pen Highlight Effect */}
                            <span
                                className="absolute bottom-2 left-0 -z-10 w-full h-4 md:h-6 opacity-50 transform -skew-x-12"
                                style={{ backgroundColor: themeConfig.secondary.hex }}
                            />
                        </span>
                    </h2>

                    {subtitle && (
                        <div className="flex gap-4 items-start pl-2">
                            <CornerRightDown className="w-6 h-6 text-zinc-400 shrink-0 mt-1" />
                            <p className="text-lg md:text-xl font-bold text-zinc-700 max-w-2xl leading-relaxed">
                                {subtitle}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}