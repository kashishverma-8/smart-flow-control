import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-foreground">TrafficAI</span>
        </div>
        <p className="text-sm text-muted-foreground">
          AI-Based Smart Traffic Management System
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TrafficAI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
