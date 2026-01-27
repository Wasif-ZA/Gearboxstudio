import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO at TechFlow",
        content:
            "This template saved us weeks of development time. The code structure is incredibly clean and easy to customize.",
    },
    {
        name: "Michael Ross",
        role: "Indie Solo Founder",
        content:
            "I launched my MVP in a weekend using this. The premium design immediately gave my product credibility.",
    },
    {
        name: "Jessica Park",
        role: "Product Designer",
        content:
            "The attention to detail in the UI components is outstanding. Dark mode implementation is flawless.",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-page">
            <div className="container px-4 md:px-6">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                    Loved by Builders
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-accent/20"
                        >
                            <div className="flex gap-1 text-accent mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <p className="mb-6 text-secondary text-lg leading-relaxed">
                                &quot;{testimonial.content}&quot;
                            </p>
                            <div>
                                <p className="font-semibold text-primary">{testimonial.name}</p>
                                <p className="text-sm text-secondary/70">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
