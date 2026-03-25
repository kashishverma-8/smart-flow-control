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
    <div className="min-h-screen relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <header className="relative glass-card border-b border-border/30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          <div>
            <h1 className="text-lg font-display font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground capitalize">{role} Access</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{profile?.full_name || user?.email}</span>
          <Button variant="outline" size="sm" className="border-border/50 hover:border-primary/50" onClick={handleSignOut}>Logout</Button>
        </div>
      </header>

      <main className="relative max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-display font-bold text-foreground mb-8">
          Welcome, <span className="gradient-text">{profile?.full_name || "User"}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="glass-card-hover rounded-xl p-6 cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(217,91%,55%,0.2)] transition-all duration-300">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground">{card.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{card.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
