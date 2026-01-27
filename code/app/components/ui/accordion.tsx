"use client";

import * as React from "react";
import * as AccordionPrimitives from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitives.Root;

const AccordionItem = React.forwardRef<
    React.ComponentRef<typeof AccordionPrimitives.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitives.Item
        ref={ref}
        className={cn(
            "group border-b border-white/5 transition-all duration-300",
            "data-[state=open]:bg-white/[0.02] data-[state=open]:border-cyan-500/30",
            className
        )}
        {...props}
    />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
    React.ComponentRef<typeof AccordionPrimitives.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitives.Header className="flex">
        <AccordionPrimitives.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center justify-between py-6 text-left text-sm font-medium transition-all",
                "text-neutral-400 hover:text-cyan-400",
                "group-data-[state=open]:text-white",
                className
            )}
            {...props}
        >
            {children}

            {/* Custom Icon Container */}
            <div className={cn(
                "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                // Default State
                "border-white/10 bg-white/5 text-neutral-500",
                // Hover State
                "group-hover:border-cyan-500/30 group-hover:text-cyan-400",
                // Open State
                "group-data-[state=open]:border-cyan-500/50 group-data-[state=open]:bg-cyan-500/10 group-data-[state=open]:text-cyan-400"
            )}>
                <Plus className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
            </div>
        </AccordionPrimitives.Trigger>
    </AccordionPrimitives.Header>
));
AccordionTrigger.displayName = AccordionPrimitives.Trigger.displayName;

const AccordionContent = React.forwardRef<
    React.ComponentRef<typeof AccordionPrimitives.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitives.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-6 pt-0 text-neutral-400 leading-relaxed", className)}>
            {children}
        </div>
    </AccordionPrimitives.Content>
));
AccordionContent.displayName = AccordionPrimitives.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };