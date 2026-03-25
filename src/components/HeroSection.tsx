import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden py-24 lg:py-40">
    {/* Animated background effects */}
    <div className="absolute inset-0 grid-bg opacity-40" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[hsl(190,90%,50%,0.08)] rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 glass-card text-primary text-sm font-medium px-5 py-2 rounded-full mb-8 animate-pulse-glow">
        <Zap className="w-4 h-4" /> AI-Powered Solution
      </div>
      <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-8">
        <span className="text-foreground">AI-Based Smart Traffic</span><br />
        <span className="gradient-text glow-text">Management System</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
        An intelligent system to reduce congestion, improve safety, and automate traffic control using cutting-edge AI technology.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="glow-blue text-base px-8 py-6" asChild>
          <a href="#features">Explore Features <ArrowRight className="ml-2 w-5 h-5" /></a>
        </Button>
        <Button size="lg" variant="outline" className="border-border/50 hover:border-primary/50 text-base px-8 py-6 bg-card/30 backdrop-blur-sm" asChild>
          <a href="#how-it-works"><Play className="mr-2 w-4 h-4" /> View System Modules</a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
