import Link from "next/link";
import { themeConfig } from "@/data/student-portfolio";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-9xl font-black mb-4">404</h1>
            <h2 className="text-3xl font-bold uppercase mb-8">Page Not Found</h2>
            <p className="text-xl max-w-md mb-12">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                href="/templates/students/student-neo-brutalism"
                className="px-8 py-4 bg-black text-white font-bold uppercase text-lg border-2 border-transparent shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-black hover:border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                style={{ '--accent': themeConfig.accent.hex } as React.CSSProperties}
            >
                Go Back Home
            </Link>
        </div>
    );
}
