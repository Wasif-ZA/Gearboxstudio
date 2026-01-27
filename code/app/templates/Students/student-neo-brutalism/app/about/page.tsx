import { SectionHeading } from "@/components/SectionHeading";
import { SkillsSection } from "@/components/SkillsSection";
import { aboutData, themeConfig } from "@/data/student-portfolio";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Student Portfolio',
    description: 'Learn more about my background and skills.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 max-w-6xl py-20">

            {/* Introduction */}
            <div className="flex flex-col md:flex-row gap-12 mb-20 items-start">
                <div className="w-full md:w-1/3 relative">
                    <div className="aspect-[3/4] border-4 border-black relative z-10 bg-zinc-200">
                        {/* Placeholder for real image since local file might not exist */}
                        <div className="w-full h-full flex items-center justify-center bg-zinc-300 text-zinc-500 font-bold uppercase text-2xl">
                            Profile Photo
                        </div>
                        {/* 
            <Image 
              src={aboutData.photo} 
              alt="Profile Photo" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
            />
            */}
                    </div>
                    <div
                        className="absolute top-4 left-4 w-full h-full border-4 border-black -z-0"
                        style={{ backgroundColor: themeConfig.accent.hex }}
                    ></div>
                </div>

                <div className="w-full md:w-2/3">
                    <SectionHeading title="About Me" />
                    <div className="prose prose-lg md:prose-xl max-w-none text-zinc-800 font-medium">
                        <p className="whitespace-pre-line leading-relaxed">
                            {aboutData.fullBio}
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-zinc-50 p-6 border-2 border-black">
                            <h4 className="font-black uppercase text-lg mb-2">Education</h4>
                            <p className="font-bold">{aboutData.education.school}</p>
                            <p>{aboutData.education.degree}</p>
                            <p className="text-zinc-500">{aboutData.education.year} • GPA: {aboutData.education.gpa}</p>
                        </div>
                        <div className="bg-zinc-50 p-6 border-2 border-black">
                            <h4 className="font-black uppercase text-lg mb-2">Interests</h4>
                            <ul className="list-disc list-inside">
                                {aboutData.interests.map(interest => (
                                    <li key={interest}>{interest}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <section>
                <SectionHeading title="My Toolkit" subtitle="Technologies and tools I use to bring ideas to life." />
                <SkillsSection />
            </section>

        </div>
    );
}
