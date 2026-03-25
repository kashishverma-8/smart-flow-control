import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden py-20 lg:py-32">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
        <Play className="w-3 h-3" /> AI-Powered Solution
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
        AI-Based Smart Traffic<br />
        <span className="text-primary">Management System</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
        An intelligent system to reduce congestion, improve safety, and automate traffic control using cutting-edge AI technology.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild>
          <a href="#features">Explore Features <ArrowRight className="ml-2 w-4 h-4" /></a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#how-it-works">View System Modules</a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
