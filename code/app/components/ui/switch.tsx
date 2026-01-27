import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
    React.ComponentRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={cn(
            // Layout & Base
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-300",

            // Focus States (Glow Ring)
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",

            // Disabled
            "disabled:cursor-not-allowed disabled:opacity-50",

            // Unchecked State (Recessed Slot)
            "data-[state=unchecked]:bg-neutral-950 data-[state=unchecked]:border-white/10 data-[state=unchecked]:shadow-inner",

            // Checked State (Glowing LED)
            "data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 data-[state=checked]:shadow-[0_0_15px_-3px_rgba(6,182,212,0.6)]",

            className
        )}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb
            className={cn(
                "pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform duration-300",

                // Thumb Styling
                "bg-white data-[state=unchecked]:bg-neutral-400", // Dims slightly when off

                // Position
                "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
            )}
        />
    </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };