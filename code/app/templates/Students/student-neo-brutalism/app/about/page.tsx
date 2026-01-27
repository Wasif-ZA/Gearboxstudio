"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { SkillsSection } from "@/components/SkillsSection";
import { aboutData, themeConfig, siteConfig } from "@/data/student-portfolio";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Heart, BadgeCheck, Fingerprint, ScanLine, FileText, Barcode } from "lucide-react";

// --- ANIMATION VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stampVariants = {
    hidden: { opacity: 0, scale: 2, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: -10, transition: { type: "spring" as const, stiffness: 200, damping: 10 } }
};

export default function AboutPage() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            // FIX: Added 'pt-32' (padding-top) to prevent the Fixed Navbar from covering your content
            className="min-h-screen bg-white pb-20 pt-32 overflow-x-hidden"
        >

            {/* 1. Page Header / Marquee (FIXED TWIN-TRACK LOOP) */}
            {/* We render two tracks side-by-side to create a seamless infinite loop without gaps */}
            <div className="w-full bg-black text-white py-2 overflow-hidden border-b-4 border-black mb-12 flex relative z-10">
                <MarqueeTrack />
                <MarqueeTrack />
            </div>

            <div className="container mx-auto px-4 max-w-6xl">

                {/* --- TOP SECTION: ID CARD & BIO --- */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24 items-start">

                    {/* LEFT: The "ID Badge" Visual */}
                    <motion.div variants={itemVariants} className="w-full lg:w-1/3 relative group perspective-1000">
                        <div className="relative z-10 bg-white border-4 border-black p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-transform duration-300 overflow-hidden">

                            {/* Holographic Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>

                            {/* Scanning Animation Line */}
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 z-30 animate-[scan_3s_ease-in-out_infinite] opacity-60"></div>

                            {/* Hole Punch */}
                            <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-32 h-8 bg-zinc-900 rounded-lg flex items-center justify-center border-2 border-white z-20">
                                <div className="w-16 h-2 bg-zinc-800 rounded-full"></div>
                            </div>

                            {/* Badge Header */}
                            <div className="flex justify-between items-end mb-4 border-b-2 border-black pb-2 mt-4">
                                <div className="text-xs font-black uppercase tracking-tighter leading-none">
                                    Official<br />Developer<br />License
                                </div>
                                <Fingerprint className="w-8 h-8 opacity-20" />
                            </div>

                            {/* Photo Container */}
                            <div className="aspect-[3/4] border-2 border-black relative bg-zinc-200 mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 text-zinc-400 font-bold uppercase text-xl text-center p-4">
                                    [NO_SIGNAL]
                                </div>

                                {aboutData.photo && (
                                    <Image
                                        src={aboutData.photo}
                                        alt="Profile Photo"
                                        fill
                                        className="object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 pointer-events-none"></div>
                            </div>

                            {/* Badge Footer */}
                            <div className="text-center space-y-1">
                                <h3 className="text-2xl font-black uppercase bg-black text-white py-1 truncate px-1">{siteConfig.name}</h3>
                                <p className="font-mono text-xs font-bold pt-2">ROLE: FULL STACK ENGINEER</p>

                                {/* Barcode Decoration */}
                                <div className="flex justify-center py-2 opacity-60">
                                    <Barcode className="w-32 h-8 scale-x-150" />
                                </div>

                                {/* Animated Stamps */}
                                <div className="flex justify-center gap-4 mt-1 h-6 relative">
                                    <motion.span
                                        variants={stampVariants}
                                        className="absolute left-2 top-[-40px] text-[10px] bg-green-400 px-2 border-2 border-black font-black text-black rotate-[-12deg] shadow-sm mix-blend-multiply"
                                    >
                                        VERIFIED
                                    </motion.span>
                                    <motion.span
                                        variants={stampVariants}
                                        transition={{ delay: 0.2 }}
                                        className="absolute right-2 top-[-20px] text-[10px] bg-red-500 px-2 border-2 border-black font-black text-white rotate-[8deg] shadow-sm"
                                    >
                                        CLEARANCE A
                                    </motion.span>
                                </div>
                            </div>
                        </div>

                        {/* Background Decorative Shape */}
                        <div
                            className="absolute top-4 left-4 w-full h-full border-4 border-black -z-0 bg-transparent"
                            style={{ borderColor: themeConfig.accent.hex }}
                        ></div>
                    </motion.div>

                    {/* RIGHT: Bio & Stats */}
                    <motion.div variants={itemVariants} className="w-full lg:w-2/3">
                        <SectionHeading title="Personnel Bio" number="01" />

                        {/* Bio Text with "True Redaction" Effect */}
                        <div className="prose prose-lg max-w-none text-zinc-800 font-medium mb-12 border-l-4 border-zinc-300 pl-6 relative">
                            <FileText className="absolute top-0 -left-10 w-6 h-6 text-zinc-300" />
                            <div className="font-mono text-xs font-bold text-red-500 mb-2 uppercase tracking-wider animate-pulse">
                                {`>>> SECURITY LEVEL: CLASSIFIED`}
                            </div>
                            <p className="whitespace-pre-line leading-relaxed">
                                <RedactedText text={aboutData.fullBio} />
                            </p>
                        </div>

                        {/* Education & Interests Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Spec Card: Education */}
                            <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12">
                                    <GraduationCap className="w-16 h-16" />
                                </div>
                                <h4 className="font-black uppercase text-sm mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
                                    <div className="w-2 h-2 bg-black"></div> Education_History
                                </h4>
                                <div className="space-y-1 relative z-10">
                                    <p className="font-bold text-xl uppercase leading-tight">{aboutData.education.school}</p>
                                    <p className="font-medium text-zinc-600">{aboutData.education.degree}</p>
                                    <div className="mt-4 inline-block bg-black text-white text-xs px-2 py-1 font-mono">
                                        {aboutData.education.year} // GPA: {aboutData.education.gpa}
                                    </div>
                                </div>
                            </div>

                            {/* Spec Card: Interests */}
                            <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:-rotate-12">
                                    <Heart className="w-16 h-16" />
                                </div>
                                <h4 className="font-black uppercase text-sm mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
                                    <div className="w-2 h-2 bg-black"></div> Human_Interests
                                </h4>
                                <ul className="grid grid-cols-2 gap-2 relative z-10">
                                    {aboutData.interests.map(interest => (
                                        <li key={interest} className="flex items-center gap-2 text-sm font-bold uppercase">
                                            <BadgeCheck className="w-4 h-4 text-zinc-400" />
                                            {interest}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* --- SKILLS SECTION --- */}
                <motion.section variants={itemVariants} className="border-t-4 border-black pt-16 relative">
                    {/* "DANGER" striped tape decoration */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 px-4 border-2 border-black font-black uppercase text-xs tracking-widest transform -rotate-2 shadow-sm">
                        Technical Capabilities
                    </div>

                    <SectionHeading title="The Toolkit" subtitle="Hardware and software utilized for mission success." number="02" />
                    <SkillsSection />
                </motion.section>

            </div>
        </motion.div>
    );
}

// --- SUBCOMPONENTS ---

// 1. Marquee Track (Twin Track Method)
const MarqueeTrack = () => (
    <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap min-w-full shrink-0 items-center pl-8"
    >
        {[...Array(6)].map((_, i) => (
            <span key={i} className="flex gap-4 items-center font-mono text-xs uppercase tracking-widest">
                <span className="text-green-400">///</span>
                PERSONNEL_FILE_LOADED // ID: {siteConfig.name.split(' ')[0]}_001 // CLEARANCE: MAX
            </span>
        ))}
    </motion.div>
);

// 2. True Redaction Effect
// Text is completely blacked out until hovered.
function RedactedText({ text }: { text: string }) {
    const segments = text.split(". ");
    return (
        <span className="leading-loose">
            {segments.map((segment, i) => (
                <span key={i} className="relative inline group cursor-help mr-1">
                    <span className="bg-black text-transparent select-none rounded-[2px] px-1 py-0.5 group-hover:bg-yellow-200 group-hover:text-black transition-all duration-300">
                        {segment}.
                    </span>
                    <span className="absolute -top-6 left-0 bg-red-500 text-white text-[8px] font-bold px-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        DECLASSIFIED
                    </span>
                    {" "}
                </span>
            ))}
        </span>
    );
}