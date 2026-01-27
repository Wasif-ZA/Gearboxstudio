import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
    {
        variants: {
            variant: {
                default:
                    "bg-cyan-500 text-neutral-950 font-bold hover:bg-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.6)]",
                destructive:
                    "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/40",
                outline:
                    "border border-white/10 bg-white/5 text-neutral-200 hover:bg-white/10 hover:border-white/20 hover:text-white backdrop-blur-sm",
                secondary:
                    "bg-neutral-800 text-neutral-200 hover:bg-neutral-700 hover:text-white border border-white/5",
                ghost:
                    "hover:bg-white/5 text-neutral-400 hover:text-white",
                link:
                    "text-cyan-400 underline-offset-4 hover:underline",
                shimmer:
                    "relative overflow-hidden bg-neutral-900 text-white border border-white/10 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50",
                glow:
                    "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border border-transparent hover:brightness-110 shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-lg px-3 text-xs",
                lg: "h-14 rounded-2xl px-8 text-base",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        // Logic for the 'shimmer' animation overlay
        // Only render this if we are NOT using asChild, to prevent Slot errors
        const shimmerOverlay = !asChild && variant === 'shimmer' ? (
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        ) : null;

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {/* Fix: If asChild is true, Slot requires exactly one child. 
                   We cannot inject the shimmer overlay as a sibling.
                   We render children directly.
                */}
                {asChild ? (
                    props.children
                ) : (
                    <>
                        {props.children}
                        {shimmerOverlay}
                    </>
                )}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };