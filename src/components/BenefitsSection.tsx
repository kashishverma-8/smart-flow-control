import { TrendingDown, ShieldCheck, Zap, Building2, MapPin } from "lucide-react";

const benefits = [
  { icon: TrendingDown, title: "Reduced Congestion", desc: "AI-optimized signal timing and route suggestions cut traffic by up to 40%" },
  { icon: ShieldCheck, title: "Improved Safety", desc: "Automated violation detection and pedestrian priority systems" },
  { icon: Zap, title: "Faster Emergency Response", desc: "Priority green corridors for ambulances and fire brigades" },
  { icon: Building2, title: "Smart Governance", desc: "Data-driven decisions for better urban traffic planning" },
  { icon: MapPin, title: "Better Urban Planning", desc: "Traffic heatmaps and analytics for infrastructure development" },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Key Benefits</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transform your city's traffic infrastructure with measurable improvements.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
