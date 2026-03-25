import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border/30 py-12">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <span className="text-lg font-display font-bold text-foreground">SmartTraffic <span className="gradient-text">AI</span></span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} AI-Based Smart Traffic Management System. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
