import { TrendingDown, ShieldCheck, Zap, Building2, MapPin } from "lucide-react";

const benefits = [
  { icon: TrendingDown, title: "Reduced Congestion", desc: "AI-optimized traffic flow reduces jams by up to 40%" },
  { icon: ShieldCheck, title: "Improved Safety", desc: "Automated violation detection and pedestrian protection" },
  { icon: Zap, title: "Faster Emergency Response", desc: "Priority routing for ambulances and fire brigades" },
  { icon: Building2, title: "Smart Governance", desc: "Data-driven decisions for better traffic policies" },
  { icon: MapPin, title: "Better Urban Planning", desc: "Analytics help plan roads and infrastructure" },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Key Benefits</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transforming urban traffic management with measurable impact
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <b.icon className="h-7 w-7" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
