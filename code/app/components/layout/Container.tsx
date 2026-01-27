import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "default" | "sm" | "lg" | "xl" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "mx-auto px-4 sm:px-6 lg:px-8 w-full",
                    {
                        "max-w-7xl": size === "default",
                        "max-w-3xl": size === "sm",
                        "max-w-screen-2xl": size === "lg",
                        "max-w-[1920px]": size === "xl",
                        "max-w-none": size === "full",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Container.displayName = "Container";

export { Container };
