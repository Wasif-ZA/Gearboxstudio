import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    spacing?: "default" | "sm" | "lg" | "none";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, spacing = "default", ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "relative",
                    {
                        "py-16 md:py-24": spacing === "default",
                        "py-8 md:py-12": spacing === "sm",
                        "py-24 md:py-32": spacing === "lg",
                        "py-0": spacing === "none",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Section.displayName = "Section";

export { Section };
