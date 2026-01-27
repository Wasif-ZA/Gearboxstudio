import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-page">
            <div className="container px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Product</h3>
                        <ul className="space-y-2 text-sm text-secondary">
                            <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Changelog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Docs</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Company</h3>
                        <ul className="space-y-2 text-sm text-secondary">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Customers</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Legal</h3>
                        <ul className="space-y-2 text-sm text-secondary">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Subscribe to our newsletter</h3>
                        <p className="text-sm text-secondary">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-surface border-border text-primary focus:ring-accent"
                            />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-border/50 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-xs text-secondary">
                        &copy; 2024 GearBox Studio Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-secondary">
                        <Link href="#" className="hover:text-primary transition-colors"><Github className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
