import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-page flex flex-col">
            <Navbar />
            <div className="flex-1 container px-4 md:px-6 py-24">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left Column: Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Get in Touch
                            </h1>
                            <p className="mt-4 text-lg text-secondary">
                                Have a question or want to work together? We&apos;d love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Email Us</h3>
                                    <p className="text-secondary">hello@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Call Us</h3>
                                    <p className="text-secondary">+1 (555) 000-0000</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Visit Us</h3>
                                    <p className="text-secondary">123 Innovation Dr, Tech City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
                        <form className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium text-primary">
                                        First name
                                    </label>
                                    <Input id="first-name" placeholder="John" className="bg-page border-border" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium text-primary">
                                        Last name
                                    </label>
                                    <Input id="last-name" placeholder="Doe" className="bg-page border-border" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-primary">
                                    Email
                                </label>
                                <Input id="email" type="email" placeholder="john@example.com" className="bg-page border-border" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-primary">
                                    Message
                                </label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] bg-page border-border" />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
