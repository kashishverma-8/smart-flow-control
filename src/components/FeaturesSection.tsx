import {
  Camera, Car, GraduationCap, Footprints, MessageSquare, Bell,
  Navigation, BarChart3, Shield, Siren, Layers, Eye, Bot,
  Ambulance, Phone, ShieldAlert, Ruler,
} from "lucide-react";

const modules = [
  { icon: Camera, title: "Traffic Violation Detection", desc: "Zebra crossing, illegal parking, auto challan system", output: "Automated enforcement" },
  { icon: Car, title: "Vehicle Flow Control", desc: "E-rickshaw passes, limited entry zones, shuttle clusters", output: "Organized traffic flow" },
  { icon: GraduationCap, title: "School Traffic Management", desc: "Smart pickup zones, micro-cluster grouping", output: "No gate congestion" },
  { icon: Footprints, title: "Pedestrian Safety", desc: "Priority signals, footpath encroachment detection", output: "Safe crossings" },
  { icon: MessageSquare, title: "Public Participation", desc: "Photo complaints, live location tagging, tracking", output: "Citizens as monitors" },
  { icon: Bell, title: "Smart Alert System", desc: "Real-time congestion alerts, priority detection", output: "Faster response" },
  { icon: Navigation, title: "Smart Navigation", desc: "Alternate routes, peak-time alerts, heatmaps", output: "Reduced jams" },
  { icon: BarChart3, title: "Data Analytics & Prediction", desc: "Pattern analysis, future congestion prediction", output: "Proactive management" },
  { icon: Shield, title: "Reward & Penalty System", desc: "Good driving rewards, violation penalties", output: "Better compliance" },
  { icon: Siren, title: "Traffic Signal Automation", desc: "AI-based dynamic signal timing", output: "Smooth flow" },
  { icon: Layers, title: "Multi-Layer Monitoring", desc: "Vehicle, pedestrian, and parking monitoring", output: "Complete coverage" },
  { icon: Eye, title: "Geo-Fencing & Surveillance", desc: "No-parking zones, restricted area monitoring", output: "Zone enforcement" },
  { icon: Bot, title: "Virtual Police (AI Agent)", desc: "Live analysis, automatic decision suggestions", output: "Smart control" },
  { icon: Ambulance, title: "Emergency Priority", desc: "Auto green signals for ambulance/fire brigade", output: "Life-saving speed" },
  { icon: Phone, title: "Helpline System", desc: "Emergency numbers, quick access UI", output: "Instant help" },
  { icon: ShieldAlert, title: "AI Fake Complaint Filter", desc: "Detect fake images and duplicates", output: "System reliability" },
  { icon: Ruler, title: "FIFO Lane Discipline", desc: "Queue by entry time, penalize lane cutting", output: "Fair traffic flow" },
];

const FeaturesSection = () => (
  <section id="features" className="relative py-24">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          <span className="text-foreground">System </span>
          <span className="gradient-text">Modules</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A comprehensive suite of AI-powered modules for complete traffic management.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {modules.map((mod) => (
          <div
            key={mod.title}
            className="group glass-card-hover rounded-xl p-6 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(217,91%,55%,0.2)] transition-all duration-300">
              <mod.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-base font-display font-semibold text-foreground mb-2">{mod.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{mod.desc}</p>
            <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              {mod.output}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
