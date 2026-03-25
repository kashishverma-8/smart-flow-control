import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, LogOut, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { session, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="w-7 h-7 text-primary group-hover:drop-shadow-[0_0_8px_hsl(217,91%,55%,0.5)] transition-all" />
            </div>
            <span className="text-lg font-display font-bold text-foreground">SmartTraffic <span className="gradient-text">AI</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                {link.label}
              </a>
            ))}
            {session ? (
              <>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" onClick={() => navigate("/dashboard")}>
                  <LayoutDashboard className="w-4 h-4 mr-1" /> Dashboard
                </Button>
                <Button variant="outline" size="sm" className="border-border/50 hover:border-primary/50 hover:glow-blue" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-1" /> Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" onClick={() => navigate("/auth")}>Login</Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90 glow-blue" onClick={() => navigate("/auth")}>Sign Up</Button>
              </>
            )}
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card border-t border-border/40 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          {session ? (
            <>
              <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" onClick={() => { navigate("/dashboard"); setIsOpen(false); }}>Dashboard</Button>
              <Button variant="outline" size="sm" className="w-full border-border/50" onClick={() => { handleSignOut(); setIsOpen(false); }}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" className="w-full text-muted-foreground" onClick={() => { navigate("/auth"); setIsOpen(false); }}>Login</Button>
              <Button size="sm" className="w-full glow-blue" onClick={() => { navigate("/auth"); setIsOpen(false); }}>Sign Up</Button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
