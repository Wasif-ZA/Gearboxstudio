import * as React from "react";
import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitives.Root;

const DropdownMenuTrigger = DropdownMenuPrimitives.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitives.Group;

const DropdownMenuPortal = DropdownMenuPrimitives.Portal;

const DropdownMenuSub = DropdownMenuPrimitives.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitives.RadioGroup;

// Shared Class for the glass background effect
const glassPanelStyles =
    "z-50 min-w-[10rem] overflow-hidden rounded-xl border border-white/10 bg-neutral-900/90 backdrop-blur-md p-1.5 shadow-xl shadow-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

const DropdownMenuSubTrigger = React.forwardRef<
    React.ComponentRef<typeof DropdownMenuPrimitives.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.SubTrigger> & {
        inset?: boolean;
    }
>(({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitives.SubTrigger
        ref={ref}
        className={cn(
            "flex cursor-default select-none items-center rounded-lg px-2.5 py-2 text-sm outline-none transition-colors",
            "text-neutral-400 focus:bg-white/5 focus:text-white data-[state=open]:bg-white/5 data-[state=open]:text-white",
            inset && "pl-8",
            className
        )}
        {...props}
    >
        {children}
        <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
    </DropdownMenuPrimitives.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitives.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
    React.ComponentRef<typeof DropdownMenuPrimitives.SubContent>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.SubContent>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitives.SubContent
        ref={ref}
        className={cn(glassPanelStyles, className)}
        {...props}
    />
));
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitives.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
    React.ComponentRef<typeof DropdownMenuPrimitives.Content>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
    <DropdownMenuPrimitives.Portal>
        <DropdownMenuPrimitives.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(glassPanelStyles, "border-t-white/20", className)}
            {...props}
        >
            {/* Texture Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

            {/* Content wrapper to ensure z-index above texture */}
            <div className="relative z-10">
                {props.children}
            </div>
        </DropdownMenuPrimitives.Content>
    </DropdownMenuPrimitives.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitives.Content.displayName;

const DropdownMenuItem = React.forwardRef<
    React.ComponentRef<typeof DropdownMenuPrimitives.Item>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Item> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitives.Item
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-lg px-2.5 py-2 text-sm outline-none transition-all duration-200",
            "text-neutral-400 focus:bg-cyan-500/10 focus:text-cyan-400 focus:shadow-[0_0_15px_-5px_rgba(6,182,212,0.3)]",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            inset && "pl-8",
            className
        )}
        {...props}
    />
));
DropdownMenuItem.displayName = DropdownMenuPrimitives.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
    React.ComponentRef<typeof DropdownMenuPrimitives.CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
    <DropdownMenuPrimitives.CheckboxItem
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-lg py-2 pl-9 pr-2.5 text-sm outline-none transition-colors",
            "text-neutral-400 focus:bg-white/5 focus:text-white",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        checked={checked}
        {...props}
    >
        <span className="absolute left-2.5 flex h-3.5 w-3.5 items-center justify-center">
            <DropdownMenuPrimitives.ItemIndicator>
                <Check className="h-4 w-4 text-cyan-400" />
            </DropdownMenuPrimitives.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitives.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitives.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
    React.ComponentRef<typeof DropdownMenuPrimitives.RadioItem>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.RadioItem>
>(({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitives.RadioItem
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-lg py-2 pl-9 pr-2.5 text-sm outline-none transition-colors",
            "text-neutral-400 focus:bg-white/5 focus:text-white",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        {...props}
    >
        <span className="absolute left-2.5 flex h-3.5 w-3.5 items-center justify-center">
            <DropdownMenuPrimitives.ItemIndicator>
                <Circle className="h-2 w-2 fill-cyan-400 text-cyan-400" />
            </DropdownMenuPrimitives.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitives.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitives.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
    React.ComponentRef<typeof DropdownMenuPrimitives.Label>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Label> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitives.Label
        ref={ref}
        className={cn(
            "px-2.5 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest",
            inset && "pl-8",
            className
        )}
        {...props}
    />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitives.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
    React.ComponentRef<typeof DropdownMenuPrimitives.Separator>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Separator>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitives.Separator
        ref={ref}
        className={cn("-mx-1 my-1.5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent", className)}
        {...props}
    />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitives.Separator.displayName;

const DropdownMenuShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn("ml-auto text-xs tracking-widest text-neutral-600", className)}
            {...props}
        />
    );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
};