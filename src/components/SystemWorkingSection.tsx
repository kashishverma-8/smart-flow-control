import { Camera, Cpu, Brain, Bell, Settings } from "lucide-react";

const steps = [
  { icon: Camera, title: "Data Collection", desc: "AI cameras & sensors collect real-time traffic data" },
  { icon: Cpu, title: "Processing", desc: "Data processed in real-time using edge computing" },
  { icon: Brain, title: "AI Analysis", desc: "ML models detect violations and predict patterns" },
  { icon: Bell, title: "Alert System", desc: "Instant alerts sent to users and authorities" },
  { icon: Settings, title: "Control", desc: "Automated and manual traffic control integration" },
];

const SystemWorkingSection = () => (
  <section id="how-it-works" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our system combines AI, IoT sensors, and real-time processing for intelligent traffic management.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {steps.map((step, i) => (
          <div key={step.title} className="flex-1 text-center relative">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <step.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute top-3 left-0 w-full flex items-center justify-center -z-10">
              {i < steps.length - 1 && (
                <div className="hidden md:block w-full h-0.5 bg-border absolute top-5 left-1/2" />
              )}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemWorkingSection;
