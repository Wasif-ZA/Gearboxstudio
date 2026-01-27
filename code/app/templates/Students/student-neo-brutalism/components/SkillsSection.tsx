import { aboutData, themeConfig } from "@/data/student-portfolio";

export function SkillsSection() {
    // Group skills by category
    const categories = Array.from(new Set(aboutData.skills.map(s => s.category)));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
                <div key={category} className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-xl font-black uppercase mb-4 border-b-2 border-black pb-2 inline-block">
                        {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {aboutData.skills
                            .filter(s => s.category === category)
                            .map(skill => (
                                <span
                                    key={skill.name}
                                    className="px-3 py-1 bg-zinc-100 border border-black text-sm font-bold uppercase hover:bg-[var(--secondary)] transition-colors cursor-default"
                                    style={{ '--secondary': themeConfig.secondary.hex } as React.CSSProperties}
                                >
                                    {skill.name}
                                </span>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
