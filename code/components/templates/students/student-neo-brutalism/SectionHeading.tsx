import { themeConfig } from "@/data/student-portfolio";

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                <span
                    className="bg-white border-2 border-transparent shadow-none inline-block transform -skew-x-6 mr-3 px-1"
                    style={{ boxShadow: `-4px 4px 0px 0px ${themeConfig.accent.hex}` }}
                >
                    {/* Decorative accent block */}
                </span>
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-xl font-medium text-zinc-600 max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
