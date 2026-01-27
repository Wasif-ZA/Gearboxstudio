"use client";

import { aboutData, themeConfig } from "@/data/student-portfolio";
import { Cpu, Palette, Globe, Database, Terminal, Server, Layout, X } from "lucide-react";

const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("front") || cat.includes("web")) return <Layout className="w-5 h-5" />;
    if (cat.includes("back") || cat.includes("api")) return <Server className="w-5 h-5" />;
    if (cat.includes("data") || cat.includes("sql")) return <Database className="w-5 h-5" />;
    if (cat.includes("design") || cat.includes("ui")) return <Palette className="w-5 h-5" />;
    if (cat.includes("tool") || cat.includes("devops")) return <Terminal className="w-5 h-5" />;
    return <Cpu className="w-5 h-5" />;
};

export function SkillsSection() {
    const categories = Array.from(new Set(aboutData.skills.map(s => s.category)));

    return (
        <div className="relative py-8">
            {/* Background Connector Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-black -z-10 -translate-y-1/2"></div>
            <div className="hidden md:block absolute left-1/2 top-0 w-2 h-full bg-black -z-10 -translate-x-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {categories.map((category, idx) => (
                    <div
                        key={category}
                        className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                    >
                        {/* --- DECORATIVE SCREWS (Fixed Placement) --- */}
                        <Screw position="top-3 left-3" color="text-white" />
                        <Screw position="top-3 right-3" color="text-white" />
                        <Screw position="bottom-3 left-3" color="text-black" />
                        <Screw position="bottom-3 right-3" color="text-black" />

                        {/* Module Header */}
                        {/* BUG FIX: Added 'px-10' (40px padding) to force text away from the corners */}
                        <div className="bg-black text-white py-3 px-10 border-b-2 border-black flex items-center justify-between relative h-14">
                            <div className="flex items-center gap-3 w-full">
                                <div
                                    className="w-8 h-8 flex items-center justify-center border border-white text-black font-bold shrink-0"
                                    style={{ backgroundColor: themeConfig.accent.hex }}
                                >
                                    {getCategoryIcon(category)}
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-wider truncate w-full">
                                    {category}
                                </h3>
                            </div>
                            <span className="font-mono text-xs text-zinc-400 hidden sm:block whitespace-nowrap absolute right-10">
                                MOD-{String(idx + 1).padStart(2, '0')} // A
                            </span>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 bg-zinc-50 relative min-h-[160px]">
                            {/* Grid Background */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '12px 12px' }}
                            />

                            <div className="flex flex-wrap gap-3 relative z-10">
                                {aboutData.skills
                                    .filter(s => s.category === category)
                                    .map((skill, i) => (
                                        <div
                                            key={skill.name}
                                            className="relative group/skill inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black font-bold uppercase text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all cursor-default"
                                        >
                                            <div className={`w-2 h-2 rounded-full border border-black ${i % 2 === 0 ? 'bg-green-400' : 'bg-yellow-400'}`} />
                                            {skill.name}
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* Footer Status Bar */}
                        {/* BUG FIX: Added 'px-10' here too */}
                        <div className="border-t-2 border-black bg-white py-2 px-10 flex justify-between relative h-10 items-center">
                            <span className="text-[10px] font-mono uppercase text-zinc-400 truncate mr-2">Status: Operational</span>
                            <span className="text-[10px] font-mono uppercase text-zinc-400 truncate">Load: 100%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Screw({ position, color }: { position: string, color: string }) {
    return (
        <div className={`absolute ${position} z-20 ${color} pointer-events-none`}>
            <X strokeWidth={4} className="w-3 h-3 opacity-60" />
        </div>
    );
}