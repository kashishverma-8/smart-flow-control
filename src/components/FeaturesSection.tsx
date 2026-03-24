import {
  Camera, Car, School, Footprints, Users, Bell, Navigation, BarChart3,
  Siren, Phone, ShieldAlert, Eye, Monitor, Bus, ListOrdered, Bot, Ambulance, HelpCircle, Filter, Video
} from "lucide-react";

const modules = [
  { icon: Camera, title: "Traffic Violation Detection", desc: "Zebra crossing detection, illegal parking, auto challan system" },
  { icon: Car, title: "Vehicle Flow Control", desc: "E-rickshaw digital pass, limited entry zones, cluster shuttles" },
  { icon: School, title: "School Traffic Management", desc: "Smart pickup/drop zones, micro-cluster grouping" },
  { icon: Footprints, title: "Pedestrian Safety", desc: "Priority signal button, footpath encroachment detection" },
  { icon: Users, title: "Public Participation", desc: "Photo-based complaints, live location tagging, tracking" },
  { icon: Bell, title: "Smart Alert System", desc: "Real-time congestion alerts, priority-based detection" },
  { icon: Navigation, title: "Smart Navigation", desc: "Alternate routes, peak-time alerts, traffic heatmaps" },
  { icon: BarChart3, title: "Data Analytics", desc: "Prediction models, daily/weekly reports, AI dashboards" },
  { icon: Siren, title: "Emergency Vehicle Priority", desc: "Detect ambulance/fire brigade, auto green signals" },
  { icon: Phone, title: "Helpline System", desc: "Emergency helpline numbers, quick access UI" },
  { icon: ShieldAlert, title: "AI Fake Complaint Filter", desc: "Detect fake images, identify duplicate complaints" },
  { icon: Eye, title: "Lane Discipline Cameras", desc: "Detect lane change violations for smooth flow" },
  { icon: Monitor, title: "Centralized Dashboard", desc: "Live map view, module-wise statistics" },
  { icon: Bus, title: "School Bus Tracking", desc: "Live tracking with parent/school access" },
  { icon: ListOrdered, title: "FIFO Lane Discipline", desc: "Queue-based entry, AI penalizes lane cutting" },
  { icon: Bot, title: "Virtual Police (AI Agent)", desc: "Live analysis, auto decision suggestions" },
  { icon: Ambulance, title: "Emergency Priority", desc: "Auto green signals, clear traffic routes" },
  { icon: HelpCircle, title: "Citizen Helpline", desc: "Quick emergency access buttons" },
  { icon: Filter, title: "Misuse Prevention", desc: "AI filters fake complaints for reliability" },
  { icon: Video, title: "Smart CCTV Network", desc: "AI-powered camera network for monitoring" },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-muted/50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">System Modules</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          20 intelligent modules working together for complete traffic management
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {modules.map((m) => (
          <div
            key={m.title}
            className="bg-card border border-border rounded-2xl p-5 hover:shadow-md hover:border-primary/30 transition-all group"
          >
            <m.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground mb-1 text-sm">{m.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
