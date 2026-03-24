import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Shield, Menu, X, LogOut, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { session, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Benefits", href: "/#benefits" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">TrafficAI</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          {session ? (
            <>
              <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
                <LayoutDashboard className="h-4 w-4" /> Dashboard
              </Link>
              <button onClick={handleSignOut} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground">Login</Link>
              <Link to="/auth" className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all">
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          {session ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">Dashboard</Link>
              <button onClick={() => { handleSignOut(); setOpen(false); }} className="block text-sm text-muted-foreground hover:text-foreground">Logout</button>
            </>
          ) : (
            <>
              <Link to="/auth" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">Login</Link>
              <Link to="/auth" onClick={() => setOpen(false)} className="block text-sm text-primary font-medium">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
