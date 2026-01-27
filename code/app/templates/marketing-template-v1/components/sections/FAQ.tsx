import { Accordion } from "@/components/ui/Accordion";

const faqs = [
    {
        title: "Is this template strictly for SaaS?",
        content: "While optimized for SaaS, it's perfect for agencies, consultancies, or any digital product. The neutral styling makes it adaptable to any brand.",
    },
    {
        title: "Can I use this for unlimited projects?",
        content: "Yes! Once purchased, you can use this template for as many personal or commercial projects as you like. It's yours forever.",
    },
    {
        title: "Do I need to know React?",
        content: "A basic understanding of React and Next.js is helpful, but our comprehensive documentation (CONTEXT.md) is designed to help you copy-paste your way to success.",
    },
    {
        title: "Is it SEO optimized?",
        content: "Absolutely. We use semantic HTML5, Next.js Metadata API, and best practices for accessibility and performance right out of the box.",
    }
];

export function FAQ() {
    return (
        <section className="py-24 bg-surface/30">
            <div className="container max-w-3xl px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-secondary">
                        Everything you need to know about the product and billing.
                    </p>
                </div>
                <Accordion items={faqs} />
            </div>
        </section>
    );
}
