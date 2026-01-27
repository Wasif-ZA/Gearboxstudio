import { Box } from "lucide-react";

export function Logo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>

            {/* 1. The Emblem (Chip Style) */}
            <div className="relative h-10 w-10 flex items-center justify-center">

                {/* Glow effect behind */}
                <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Main Container */}
                <div className="relative h-full w-full bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]">

                    {/* Micro-grid background inside the logo */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4px_4px]" />

                    {/* The Icon */}
                    <Box className="relative z-10 w-5 h-5 text-white group-hover:text-cyan-400 transition-colors duration-300" strokeWidth={2.5} />

                    {/* Tech Accents (Corners) */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 rounded-tl-[2px]" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 rounded-br-[2px]" />
                </div>
            </div>

            {/* 2. The Wordmark */}
            <div className="flex flex-col justify-center -space-y-0.5">
                <span className="text-lg font-bold text-white tracking-tight leading-none group-hover:text-cyan-100 transition-colors">
                    GearBox
                </span>
                <span className="text-[10px] font-mono font-medium text-cyan-500/70 tracking-widest uppercase leading-none group-hover:text-cyan-400 transition-colors">
                    Studio
                </span>
            </div>
        </div>
    );
}