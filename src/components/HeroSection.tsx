import { Shield, ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden py-24 md:py-32">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/30" />
    <div className="relative max-w-7xl mx-auto px-4 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
        <Shield className="h-4 w-4" />
        AI-Powered Traffic Solution
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
        AI-Based Smart Traffic
        <br />
        <span className="text-primary">Management System</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
        An intelligent system to reduce congestion, improve safety, and automate traffic control using AI — making cities smarter and roads safer.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#features"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
        >
          Explore Features <ArrowRight className="h-5 w-5" />
        </a>
        <a
          href="#benefits"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-all"
        >
          View Benefits
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
