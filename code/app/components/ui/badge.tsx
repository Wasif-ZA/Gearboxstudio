import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                // 1. Primary Action Badge (Solid)
                default:
                    "border-transparent bg-cyan-500 text-neutral-950 shadow-[0_0_15px_-4px_rgba(6,182,212,0.6)] hover:bg-cyan-400 hover:shadow-[0_0_20px_-4px_rgba(6,182,212,0.8)]",

                // 2. Secondary / Neutral (Glass)
                secondary:
                    "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white backdrop-blur-sm",

                // 3. Destructive
                destructive:
                    "border-transparent bg-red-900/50 text-red-200 hover:bg-red-900/70 border border-red-500/20",

                // 4. Outline (Wireframe)
                outline:
                    "text-neutral-400 border-white/20 hover:border-white/40 hover:text-white",

                // --- THE GEARBOX SPECIALS ---

                // 5. Neon Cyan (Main Brand)
                "neon-cyan":
                    "border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-[0_0_12px_-4px_rgba(6,182,212,0.3)] hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_-4px_rgba(6,182,212,0.5)]",

                // 6. Neon Purple (Premium/Beta)
                "neon-purple":
                    "border-purple-500/30 bg-purple-500/10 text-purple-400 shadow-[0_0_12px_-4px_rgba(168,85,247,0.3)] hover:border-purple-500/50 hover:bg-purple-500/20 hover:shadow-[0_0_15px_-4px_rgba(168,85,247,0.5)]",

                // 7. Neon Green (Success/Operational)
                "neon-green":
                    "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_12px_-4px_rgba(16,185,129,0.3)] hover:border-emerald-500/50 hover:bg-emerald-500/20",

                // 8. Glow (High Attention)
                "glow":
                    "border-cyan-500/50 bg-cyan-900/20 text-cyan-100 shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)] backdrop-blur-md hover:border-cyan-400 hover:bg-cyan-900/40 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.6)]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };