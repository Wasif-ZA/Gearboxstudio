"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

export function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border-b border-border">
            <button
                className="flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
                onClick={onToggle}
                data-state={isOpen ? "open" : "closed"}
            >
                {title}
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
            </button>
            <div
                className={cn(
                    "overflow-hidden text-sm transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                )}
            >
                <div className="text-secondary leading-relaxed pb-4 pt-0">{children}</div>
            </div>
        </div>
    );
}

export function Accordion({ items }: { items: { title: string; content: string }[] }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
