"use client";

import * as React from "react";
import * as TabsPrimitives from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitives.Root;

const TabsList = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitives.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitives.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitives.List
        ref={ref}
        className={cn(
            // Layout & Shape
            "inline-flex h-12 items-center justify-center rounded-xl p-1",

            // The "Recessed Slot" Look
            "bg-neutral-950 border border-white/5 shadow-inner",

            className
        )}
        {...props}
    />
));
TabsList.displayName = TabsPrimitives.List.displayName;

const TabsTrigger = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitives.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitives.Trigger
        ref={ref}
        className={cn(
            // Base Layout
            "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ring-offset-background",

            // Inactive State
            "text-neutral-500 hover:text-neutral-300",

            // Focus State
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",

            // Disabled
            "disabled:pointer-events-none disabled:opacity-50",

            // Active State (The "Lit Up" Effect)
            "data-[state=active]:bg-neutral-800 data-[state=active]:text-cyan-400",
            "data-[state=active]:shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]", // Lifted shadow
            "data-[state=active]:border data-[state=active]:border-white/10", // Subtle edge highlight

            className
        )}
        {...props}
    />
));
TabsTrigger.displayName = TabsPrimitives.Trigger.displayName;

const TabsContent = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitives.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitives.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitives.Content
        ref={ref}
        className={cn(
            // Animation & Focus
            "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
            // Content Fade In
            "data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:zoom-in-95 duration-300",
            className
        )}
        {...props}
    />
));
TabsContent.displayName = TabsPrimitives.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };