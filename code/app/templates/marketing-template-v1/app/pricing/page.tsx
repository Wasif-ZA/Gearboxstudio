import { Navbar } from "@/components/layout/Navbar";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-page">
            <Navbar />
            <div className="pt-20">
                <Pricing />
                <FAQ />
            </div>
            <CTA />
            <Footer />
        </main>
    );
}
