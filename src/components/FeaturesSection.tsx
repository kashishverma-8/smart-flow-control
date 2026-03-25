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
  <section id="features" className="py-20 bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">System Modules</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive suite of AI-powered modules for complete traffic management.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map((mod) => (
          <div
            key={mod.title}
            className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
          >
            <mod.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-base font-semibold text-foreground mb-2">{mod.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{mod.desc}</p>
            <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
              {mod.output}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
