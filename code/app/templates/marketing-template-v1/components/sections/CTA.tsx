import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="py-24 bg-page border-y border-border">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                            Ready to ship your masterpiece?
                        </h2>
                        <p className="mx-auto max-w-[600px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Join thousands of developers building the next big thing with our premium components.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button size="lg" className="px-8 bg-white text-page hover:bg-white/90">
                            Get Started Now
                        </Button>
                        <Button variant="outline" size="lg" className="px-8">
                            Read Documentation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
