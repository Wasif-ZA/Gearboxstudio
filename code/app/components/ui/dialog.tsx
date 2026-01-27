"use client";

import * as React from "react";
import * as DialogPrimitives from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitives.Root;

const DialogTrigger = DialogPrimitives.Trigger;

const DialogPortal = DialogPrimitives.Portal;

const DialogClose = DialogPrimitives.Close;

const DialogOverlay = React.forwardRef<
    React.ComponentRef<typeof DialogPrimitives.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitives.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitives.Overlay
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
    />
));
DialogOverlay.displayName = DialogPrimitives.Overlay.displayName;

const DialogContent = React.forwardRef<
    React.ComponentRef<typeof DialogPrimitives.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content>
>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitives.Content
            ref={ref}
            className={cn(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-neutral-900 p-8 shadow-2xl duration-200",
                // Animations
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
                // Shape & Glow
                "sm:rounded-2xl shadow-cyan-900/20 overflow-hidden",
                className
            )}
            {...props}
        >
            {/* 1. Background Effects (GearBox Texture) */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                {/* Top Edge Highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <div className="relative z-10 grid gap-4">
                {children}
            </div>

            <DialogPrimitives.Close className="absolute right-4 top-4 rounded-lg p-2 text-neutral-400 opacity-70 transition-all hover:bg-white/10 hover:text-white hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-800 data-[state=open]:text-neutral-500">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </DialogPrimitives.Close>
        </DialogPrimitives.Content>
    </DialogPortal>
));
DialogContent.displayName = DialogPrimitives.Content.displayName;

const DialogHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col space-y-1.5 text-center sm:text-left mb-2",
            className
        )}
        {...props}
    />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4",
            className
        )}
        {...props}
    />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
    React.ComponentRef<typeof DialogPrimitives.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitives.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitives.Title
        ref={ref}
        className={cn(
            "text-xl font-bold leading-none tracking-tight text-white",
            className
        )}
        {...props}
    />
));
DialogTitle.displayName = DialogPrimitives.Title.displayName;

const DialogDescription = React.forwardRef<
    React.ComponentRef<typeof DialogPrimitives.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitives.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitives.Description
        ref={ref}
        className={cn("text-sm text-neutral-400 leading-relaxed", className)}
        {...props}
    />
));
DialogDescription.displayName = DialogPrimitives.Description.displayName;

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};