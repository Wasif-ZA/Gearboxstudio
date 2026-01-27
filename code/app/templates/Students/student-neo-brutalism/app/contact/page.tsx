import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, themeConfig } from "@/data/student-portfolio";
import { Mail, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Student Portfolio',
    description: 'Get in touch with me.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 max-w-4xl py-20">
            <SectionHeading title="Get In Touch" subtitle="Have a project in mind or just want to say hi?" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <div>
                    <p className="text-xl font-medium mb-8">
                        I'm currently available for internships and freelance projects. I usually respond within 24 hours.
                    </p>

                    <div className="space-y-6">
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="flex items-center gap-4 text-2xl font-bold hover:text-[var(--accent)] transition-colors"
                            style={{ '--accent': themeConfig.secondary.hex } as React.CSSProperties}
                        >
                            <Mail className="w-8 h-8" />
                            {siteConfig.email}
                        </a>

                        <a
                            href={siteConfig.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-xl font-bold hover:text-[var(--accent)] transition-colors"
                            style={{ '--accent': themeConfig.secondary.hex } as React.CSSProperties}
                        >
                            <Linkedin className="w-6 h-6" />
                            LinkedIn
                        </a>

                        <a
                            href={siteConfig.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-xl font-bold hover:text-[var(--accent)] transition-colors"
                            style={{ '--accent': themeConfig.secondary.hex } as React.CSSProperties}
                        >
                            <Github className="w-6 h-6" />
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="bg-white border-3 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold uppercase mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-zinc-50 border-2 border-black p-3 font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold uppercase mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-zinc-50 border-2 border-black p-3 font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold uppercase mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full bg-zinc-50 border-2 border-black p-3 font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 transition-all"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full font-bold uppercase bg-black text-white py-4 border-2 border-transparent hover:bg-white hover:text-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:shadow-none"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
