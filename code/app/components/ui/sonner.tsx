"use client";

import * as React from "react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
    return (
        <Sonner
            theme="dark"
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast:
                        "group toast group-[.toaster]:bg-neutral-950/90 group-[.toaster]:backdrop-blur-xl group-[.toaster]:text-white group-[.toaster]:border-white/10 group-[.toaster]:shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] group-[.toaster]:rounded-xl",
                    description:
                        "group-[.toast]:text-neutral-400 group-[.toast]:font-medium",
                    actionButton:
                        "group-[.toast]:bg-cyan-500 group-[.toast]:text-neutral-950 group-[.toast]:font-bold group-[.toast]:hover:bg-cyan-400 group-[.toast]:shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)]",
                    cancelButton:
                        "group-[.toast]:bg-white/5 group-[.toast]:text-neutral-300 group-[.toast]:border group-[.toast]:border-white/10 group-[.toast]:hover:bg-white/10",
                },
            }}
            {...props}
        />
    );
};

export { Toaster };