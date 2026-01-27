import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "neon" | "glass" }
>(({ className, variant = "default", ...props }, ref) => {

    // Base styles for all cards
    const baseStyles = "group relative rounded-3xl border transition-all duration-500 overflow-hidden";

    // Variants to match different contexts (e.g., Pricing vs Features)
    const variants = {
        default: "bg-neutral-900/40 border-white/5 hover:border-white/10 hover:bg-neutral-900/60 hover:shadow-2xl hover:-translate-y-1",
        glass: "bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 text-white",
        neon: "bg-neutral-900/80 border-cyan-500/30 shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] hover:border-cyan-500/50 hover:shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)]"
    };

    return (
        <div
            ref={ref}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {/* 1. Noise Texture (The "Film" Look) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* 2. Top Edge Highlight (Simulates light hitting the top) */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-100" />

            {/* 3. Subtle Grid Background (Tech Feel) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* 4. Content Wrapper (z-index to sit above background effects) */}
            <div className="relative z-10 h-full flex flex-col">
                {props.children}
            </div>
        </div>
    );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-2 p-8 pb-4", className)}
        {...props}
    />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-2xl font-bold leading-none tracking-tight text-white group-hover:text-cyan-100 transition-colors duration-300",
            className
        )}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-neutral-400 leading-relaxed", className)}
        {...props}
    />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-8 pt-2 flex-1", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-8 pt-0 mt-auto", className)}
        {...props}
    />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };