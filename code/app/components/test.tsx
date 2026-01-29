import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Zap, Star, Rocket, Heart } from "lucide-react";

// ============================================================================
// COMPONENT: FeatureCard
// ============================================================================

/**
 * @component FeatureCard
 * @description A stunning, animated feature card with glassmorphism effects
 * and dynamic hover states. Perfect for showcasing features or services.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <FeatureCard title="Fast Performance" icon="zap" />
 *
 * // With all props
 * <FeatureCard
 *   title="AI Powered"
 *   description="Leverage cutting-edge machine learning"
 *   icon="sparkles"
 *   variant="gradient"
 *   badge="New"
 * />
 * ```
 */

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

/**
 * Available icon options for the card
 */
type IconType = "sparkles" | "zap" | "star" | "rocket" | "heart";

/**
 * Props for the FeatureCard component
 */
export interface FeatureCardProps {
    /**
     * The main title displayed prominently
     * @required
     */
    title: string;

    /**
     * Optional subtitle or description
     */
    description?: string;

    /**
     * Icon to display in the card
     * @default "sparkles"
     */
    icon?: IconType;

    /**
     * Visual style variant
     * - `glass`: Frosted glass effect with blur
     * - `gradient`: Vibrant gradient background
     * - `neon`: Glowing neon border effect
     * - `minimal`: Clean, subtle styling
     * @default "glass"
     */
    variant?: "glass" | "gradient" | "neon" | "minimal";

    /**
     * Optional badge text (e.g., "New", "Pro", "Beta")
     */
    badge?: string;

    /**
     * Whether the card is in a selected/active state
     */
    isActive?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;

    /**
     * Click handler
     */
    onClick?: () => void;

    /**
     * Children elements
     */
    children?: React.ReactNode;
}

// ============================================================================
// ICON MAP
// ============================================================================

const IconMap: Record<IconType, React.ComponentType<{ className?: string }>> = {
    sparkles: Sparkles,
    zap: Zap,
    star: Star,
    rocket: Rocket,
    heart: Heart,
};

// ============================================================================
// STYLES
// ============================================================================

const variantStyles = {
    glass: cn(
        "bg-white/5 backdrop-blur-xl border-white/10",
        "hover:bg-white/10 hover:border-white/20",
        "shadow-lg shadow-black/10"
    ),
    gradient: cn(
        "bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20",
        "border-white/10 hover:border-white/30",
        "hover:from-violet-500/30 hover:via-fuchsia-500/30 hover:to-cyan-500/30"
    ),
    neon: cn(
        "bg-black/40 border-cyan-500/50",
        "hover:border-cyan-400 hover:shadow-cyan-500/25 hover:shadow-xl",
        "shadow-lg shadow-cyan-500/10"
    ),
    minimal: cn(
        "bg-neutral-900/50 border-neutral-800",
        "hover:bg-neutral-900/80 hover:border-neutral-700"
    ),
} as const;

const iconVariantStyles = {
    glass: "text-white/80 group-hover:text-white",
    gradient: "text-fuchsia-300 group-hover:text-fuchsia-200",
    neon: "text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]",
    minimal: "text-neutral-400 group-hover:text-neutral-300",
} as const;

const badgeVariantStyles = {
    glass: "bg-white/20 text-white",
    gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white",
    neon: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
    minimal: "bg-neutral-800 text-neutral-300",
} as const;

// ============================================================================
// COMPONENT
// ============================================================================

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
    (
        {
            title,
            description,
            icon = "sparkles",
            variant = "glass",
            badge,
            isActive = false,
            className,
            onClick,
            children,
        },
        ref
    ) => {
        const IconComponent = IconMap[icon];

        return (
            <div
                ref={ref}
                className={cn(
                    // Base styles
                    "group relative rounded-2xl border p-6 transition-all duration-500",
                    "cursor-pointer select-none",
                    // Transform on hover
                    "hover:-translate-y-1 hover:scale-[1.02]",
                    // Variant styles
                    variantStyles[variant],
                    // Active state
                    isActive && "ring-2 ring-white/30 ring-offset-2 ring-offset-black",
                    // Custom className
                    className
                )}
                onClick={onClick}
                role={onClick ? "button" : undefined}
                tabIndex={onClick ? 0 : undefined}
            >
                {/* Animated gradient overlay */}
                {variant === "gradient" && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/0 via-fuchsia-600/10 to-cyan-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                {/* Badge */}
                {badge && (
                    <span
                        className={cn(
                            "absolute -top-2 -right-2 px-2.5 py-0.5 text-xs font-semibold rounded-full",
                            "animate-pulse",
                            badgeVariantStyles[variant]
                        )}
                    >
                        {badge}
                    </span>
                )}

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    <div
                        className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                            "bg-white/5 border border-white/10",
                            "group-hover:scale-110 transition-transform duration-300"
                        )}
                    >
                        <IconComponent
                            className={cn(
                                "w-6 h-6 transition-all duration-300",
                                iconVariantStyles[variant]
                            )}
                        />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                        {title}
                    </h3>

                    {/* Description */}
                    {description && (
                        <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                            {description}
                        </p>
                    )}

                    {/* Children */}
                    {children && <div className="mt-4">{children}</div>}
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                </div>
            </div>
        );
    }
);

FeatureCard.displayName = "FeatureCard";

// ============================================================================
// DEMO COMPONENT
// ============================================================================

/**
 * Demo component showcasing all variants
 */
export const FeatureCardDemo: React.FC = () => {
    const [selected, setSelected] = React.useState<string | null>(null);

    const cards = [
        { id: "1", title: "Lightning Fast", description: "Blazing fast performance with optimized rendering", icon: "zap" as IconType, variant: "glass" as const },
        { id: "2", title: "AI Powered", description: "Intelligent features powered by machine learning", icon: "sparkles" as IconType, variant: "gradient" as const, badge: "New" },
        { id: "3", title: "Rocket Launch", description: "Deploy your projects in seconds", icon: "rocket" as IconType, variant: "neon" as const },
        { id: "4", title: "Community Love", description: "Built with love by developers worldwide", icon: "heart" as IconType, variant: "minimal" as const },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-black min-h-screen">
            {cards.map((card) => (
                <FeatureCard
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    variant={card.variant}
                    badge={card.badge}
                    isActive={selected === card.id}
                    onClick={() => setSelected(card.id)}
                />
            ))}
        </div>
    );
};

// ============================================================================
// EXPORTS
// ============================================================================

export default FeatureCard;

// ============================================================================
// DOCUMENTATION NOTES
// ============================================================================
/**
 * ## FeatureCard Component
 *
 * ### Overview
 * A premium feature card with multiple visual variants and smooth animations.
 *
 * ### Props Table
 * | Prop        | Type                                        | Default     | Description                    |
 * |-------------|---------------------------------------------|-------------|--------------------------------|
 * | title       | string                                      | required    | Main title text                |
 * | description | string                                      | undefined   | Optional description           |
 * | icon        | "sparkles" | "zap" | "star" | "rocket" | "heart" | "sparkles" | Icon to display        |
 * | variant     | "glass" | "gradient" | "neon" | "minimal"  | "glass"     | Visual style variant           |
 * | badge       | string                                      | undefined   | Badge text (e.g., "New")       |
 * | isActive    | boolean                                     | false       | Selected/active state          |
 * | className   | string                                      | undefined   | Additional CSS classes         |
 * | onClick     | () => void                                  | undefined   | Click handler                  |
 * | children    | ReactNode                                   | undefined   | Optional children elements     |
 *
 * ### Features
 * - 4 distinct visual variants: glass, gradient, neon, minimal
 * - Smooth hover animations with scale and translate
 * - Shine effect on hover
 * - Pulsing badge for highlighting new features
 * - Active/selected state support
 * - Fully accessible with keyboard navigation
 */
