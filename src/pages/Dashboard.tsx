import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, AlertTriangle, BarChart3, Users, Settings, Camera, Award, Bell } from "lucide-react";

const Dashboard = () => {
  const { user, role, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const roleCards: Record<string, { title: string; icon: any; desc: string }[]> = {
    citizen: [
      { title: "Report Violation", icon: Camera, desc: "Upload photo-based complaints" },
      { title: "Traffic Updates", icon: Bell, desc: "Real-time congestion alerts" },
      { title: "My Rewards", icon: Award, desc: "View your reward score" },
    ],
    authority: [
      { title: "Analytics Dashboard", icon: BarChart3, desc: "Traffic data & predictions" },
      { title: "Violation Reports", icon: AlertTriangle, desc: "Review flagged violations" },
      { title: "Signal Control", icon: Settings, desc: "Manage traffic signals" },
    ],
    admin: [
      { title: "User Management", icon: Users, desc: "Manage all users & roles" },
      { title: "System Config", icon: Settings, desc: "Configure system modules" },
      { title: "Full Analytics", icon: BarChart3, desc: "Complete system overview" },
    ],
  };

  const cards = roleCards[role || "citizen"] || roleCards.citizen;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          <div>
            <h1 className="text-lg font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground capitalize">{role} Access</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{profile?.full_name || user?.email}</span>
          <Button variant="outline" size="sm" onClick={handleSignOut}>Logout</Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Welcome, {profile?.full_name || "User"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
            >
              <card.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{card.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
