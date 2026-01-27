import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { Check } from "lucide-react";

interface PricingCardProps {
    title: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    buttonText?: string;
}

export function PricingCard({
    title,
    price,
    period = "/mo",
    description,
    features,
    isPopular = false,
    buttonText = "Get Started",
}: PricingCardProps) {
    return (
        <div
            className={cn(
                "relative flex flex-col rounded-2xl border bg-surface p-8 shadow-sm transition-all hover:shadow-md",
                isPopular ? "border-accent shadow-accent/10" : "border-border"
            )}
        >
            {isPopular && (
                <div className="absolute -top-4 right-8 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-white shadow-sm">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-secondary">{description}</p>
                <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-primary">
                        {price}
                    </span>
                    <span className="ml-1 text-sm font-semibold text-secondary">
                        {period}
                    </span>
                </div>
            </div>

            <ul className="mb-8 flex-1 space-y-4">
                {features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-secondary">
                        <Check className="mr-3 h-4 w-4 text-accent" />
                        {feature}
                    </li>
                ))}
            </ul>

            <Button
                className="w-full"
                variant={isPopular ? "accent" : "outline"}
                size="lg"
            >
                {buttonText}
            </Button>
        </div>
    );
}
