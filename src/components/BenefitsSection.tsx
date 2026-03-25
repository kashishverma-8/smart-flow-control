import { TrendingDown, ShieldCheck, Zap, Building2, MapPin } from "lucide-react";

const benefits = [
  { icon: TrendingDown, title: "Reduced Congestion", desc: "AI-optimized signal timing and route suggestions cut traffic by up to 40%" },
  { icon: ShieldCheck, title: "Improved Safety", desc: "Automated violation detection and pedestrian priority systems" },
  { icon: Zap, title: "Faster Emergency Response", desc: "Priority green corridors for ambulances and fire brigades" },
  { icon: Building2, title: "Smart Governance", desc: "Data-driven decisions for better urban traffic planning" },
  { icon: MapPin, title: "Better Urban Planning", desc: "Traffic heatmaps and analytics for infrastructure development" },
];

const BenefitsSection = () => (
  <section id="benefits" className="relative py-24">
    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.03] to-transparent" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          <span className="text-foreground">Key </span>
          <span className="gradient-text">Benefits</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Transform your city's traffic infrastructure with measurable improvements.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="glass-card-hover rounded-xl p-6 flex gap-4 group cursor-pointer">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(217,91%,55%,0.2)] transition-all duration-300">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
