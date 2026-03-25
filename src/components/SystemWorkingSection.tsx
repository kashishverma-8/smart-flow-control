import { Camera, Cpu, Brain, Bell, Settings } from "lucide-react";

const steps = [
  { icon: Camera, title: "Data Collection", desc: "AI cameras & sensors collect real-time traffic data", num: "01" },
  { icon: Cpu, title: "Processing", desc: "Data processed in real-time using edge computing", num: "02" },
  { icon: Brain, title: "AI Analysis", desc: "ML models detect violations and predict patterns", num: "03" },
  { icon: Bell, title: "Alert System", desc: "Instant alerts sent to users and authorities", num: "04" },
  { icon: Settings, title: "Control", desc: "Automated and manual traffic control integration", num: "05" },
];

const SystemWorkingSection = () => (
  <section id="how-it-works" className="relative py-24">
    <div className="absolute inset-0 grid-bg opacity-20" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          <span className="text-foreground">How It </span>
          <span className="gradient-text">Works</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Our system combines AI, IoT sensors, and real-time processing for intelligent traffic management.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <div key={step.title} className="relative group">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
            )}
            <div className="glass-card-hover rounded-xl p-6 text-center h-full">
              <span className="text-xs font-mono text-primary/50 mb-3 block">{step.num}</span>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_25px_hsl(217,91%,55%,0.2)] transition-all duration-300">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemWorkingSection;
