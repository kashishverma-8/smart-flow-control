import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/Navbar";
import { Shield, AlertTriangle, BarChart3, Users, Settings, FileText, MapPin, Bell } from "lucide-react";

const Dashboard = () => {
  const { profile, role } = useAuth();

  const citizenCards = [
    { icon: AlertTriangle, title: "Report Violation", desc: "Upload photo-based complaints with live location" },
    { icon: MapPin, title: "Traffic Updates", desc: "Real-time congestion alerts and route suggestions" },
    { icon: Bell, title: "My Complaints", desc: "Track your submitted complaints" },
  ];

  const authorityCards = [
    { icon: BarChart3, title: "Analytics Dashboard", desc: "View traffic patterns and violation data" },
    { icon: FileText, title: "Violation Reports", desc: "Review and process violation reports" },
    { icon: Settings, title: "Signal Control", desc: "Manage traffic signal timings" },
  ];

  const adminCards = [
    { icon: Users, title: "User Management", desc: "Manage all system users and roles" },
    { icon: Shield, title: "System Config", desc: "Configure system modules and settings" },
    { icon: BarChart3, title: "Full Analytics", desc: "Complete system analytics and reports" },
  ];

  const cards = role === "admin" ? adminCards : role === "authority" ? authorityCards : citizenCards;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome, {profile?.full_name || "User"}
          </h1>
          <p className="text-muted-foreground mt-1">
            Role: <span className="capitalize text-primary font-medium">{role || "citizen"}</span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group"
            >
              <card.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
