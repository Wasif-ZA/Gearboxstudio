import { siteConfig, themeConfig } from "@/data/student-portfolio";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t-3 border-black bg-white pt-16 pb-8 mt-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    <div>
                        <h2 className="text-4xl font-black uppercase mb-4">
                            Let's <span style={{ backgroundColor: themeConfig.accent.hex }} className="px-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Work</span> Together
                        </h2>
                        <p className="text-lg font-medium max-w-md text-zinc-600">
                            Currently open to internships and freelance opportunities. Have an idea? Let's build it.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <SocialLink href={siteConfig.social.github} icon={<Github />} />
                        <SocialLink href={siteConfig.social.linkedin} icon={<Linkedin />} />
                        <SocialLink href={`mailto:${siteConfig.email}`} icon={<Mail />} />
                    </div>
                </div>

                <div className="border-t-3 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-bold uppercase">
                        © {year} {siteConfig.name}
                    </p>
                    <p className="font-medium text-sm text-zinc-500">
                        Built with Next.js & Neo-Brutalism
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
            {icon}
        </a>
    );
}
