import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    // Base Layout & Shape
                    "flex h-11 w-full rounded-xl border px-4 py-2 text-sm transition-all duration-300",

                    // Colors & Transparency
                    "bg-neutral-900/50 border-white/10 text-white placeholder:text-neutral-600",

                    // File Input Styles
                    "file:border-0 file:bg-transparent file:text-sm file:font-medium",

                    // Hover State
                    "hover:border-white/20 hover:bg-neutral-900/80",

                    // Focus State (The Glow Effect)
                    "focus-visible:outline-none focus-visible:border-cyan-500/50 focus-visible:ring-1 focus-visible:ring-cyan-500/20",
                    "focus-visible:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]",

                    // Disabled State
                    "disabled:cursor-not-allowed disabled:opacity-50",

                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };