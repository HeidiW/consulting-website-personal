import { Button } from "@/components/ui/button";
import { ChartLine } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="gradient-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-lg font-medium text-primary mb-4 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
              Hi, I'm Heidi Williams Foy
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Scale Your Business with{" "}
              <span className="gradient-primary bg-clip-text text-transparent">Expert Performance Ads</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8 leading-relaxed bg-white/40 backdrop-blur-sm p-6 rounded-2xl">
              I help businesses maximize their ROI through strategic advertising campaigns on Meta, TikTok, and Reddit. Get data-driven results that actually move the needle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("consult")}
                className="px-8 py-4 shadow-lg"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Digital marketing dashboard and analytics"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 gradient-warm p-6 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                  <ChartLine className="text-primary text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-white">250% ROI</div>
                  <div className="text-sm text-white/80">Average Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
