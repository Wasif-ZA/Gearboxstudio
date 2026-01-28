import * as React from "react";
import { cn } from "@/lib/utils";

// ============================================================================
// COMPONENT: ExampleComponent
// ============================================================================

/**
 * @component ExampleComponent
 * @description A well-documented example component that serves as a template
 * for creating documentation-friendly React components.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <ExampleComponent title="Hello World" />
 *
 * // With description and variant
 * <ExampleComponent
 *   title="My Title"
 *   description="A detailed description here"
 *   variant="primary"
 * />
 *
 * // With custom className and onClick
 * <ExampleComponent
 *   title="Clickable Card"
 *   variant="outline"
 *   className="my-custom-class"
 *   onClick={() => console.log('clicked!')}
 * />
 * ```
 */

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

/**
 * Props for the ExampleComponent
 */
export interface ExampleComponentProps {
    /**
     * The main title text displayed in the component
     * @required
     */
    title: string;

    /**
     * Optional description text shown below the title
     * @default undefined
     */
    description?: string;

    /**
     * Visual variant of the component
     * - `default`: Standard styling with neutral background
     * - `primary`: Highlighted styling with accent color
     * - `outline`: Bordered styling with transparent background
     * @default "default"
     */
    variant?: "default" | "primary" | "outline";

    /**
     * Additional CSS classes to apply
     */
    className?: string;

    /**
     * Optional click handler
     */
    onClick?: () => void;

    /**
     * Children elements to render inside the component
     */
    children?: React.ReactNode;
}

// ============================================================================
// STYLES
// ============================================================================

const variants = {
    default:
        "bg-neutral-900/40 border-white/10 hover:bg-neutral-900/60 text-white",
    primary:
        "bg-cyan-500/20 border-cyan-500/30 hover:border-cyan-500/50 text-cyan-50",
    outline:
        "bg-transparent border-white/20 hover:border-white/40 text-white",
    test:
        "bg-red-500/20 border-red-500/30 hover:border-red-500/50 text-red-50",
} as const;

// ============================================================================
// COMPONENT
// ============================================================================

export const ExampleComponent = React.forwardRef<
    HTMLDivElement,
    ExampleComponentProps
>(
    (
        { title, description, variant = "default", className, onClick, children },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    // Base styles
                    "relative rounded-xl border p-6 transition-all duration-300",
                    "hover:-translate-y-0.5 hover:shadow-lg",
                    // Variant styles
                    variants[variant],
                    // Custom className
                    className
                )}
                onClick={onClick}
                role={onClick ? "button" : undefined}
                tabIndex={onClick ? 0 : undefined}
            >
                {/* Title */}
                <h3 className="text-lg font-semibold">{title}</h3>

                {/* Description (optional) */}
                {description && (
                    <p className="mt-2 text-sm text-neutral-400">{description}</p>
                )}

                {/* Children (optional) */}
                {children && <div className="mt-4">{children}</div>}
            </div>
        );
    }
);

ExampleComponent.displayName = "ExampleComponent";

// ============================================================================
// EXPORTS
// ============================================================================

export default ExampleComponent;

// ============================================================================
// DOCUMENTATION NOTES
// ============================================================================
/**
 * ## Component Documentation
 *
 * ### Overview
 * This is a simple, reusable component designed with documentation in mind.
 *
 * ### Props Table
 * | Prop        | Type                              | Default   | Description                    |
 * |-------------|-----------------------------------|-----------|--------------------------------|
 * | title       | string                            | required  | Main title text                |
 * | description | string                            | undefined | Optional description           |
 * | variant     | "default" | "primary" | "outline" | "default" | Visual style variant           |
 * | className   | string                            | undefined | Additional CSS classes         |
 * | onClick     | () => void                        | undefined | Click handler                  |
 * | children    | ReactNode                         | undefined | Optional children elements     |
 *
 * ### Accessibility
 * - Automatically adds `role="button"` and `tabIndex={0}` when onClick is provided
 * - Uses semantic heading element for title
 *
 * ### Styling
 * - Uses Tailwind CSS utility classes
 * - Supports three visual variants: default, primary, outline
 * - Includes hover states and smooth transitions
 */
