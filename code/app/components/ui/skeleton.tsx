import * as React from "react";
import { cn } from "@/lib/utils";

const Skeleton = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                // Base Appearance
                "relative overflow-hidden rounded-xl bg-neutral-900/50 border border-white/5",

                // The Shimmer Animation (Scanning Effect)
                // We use a pseudo-element or direct gradient animation here
                "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent",

                className
            )}
            {...props}
        />
    );
};

export { Skeleton };