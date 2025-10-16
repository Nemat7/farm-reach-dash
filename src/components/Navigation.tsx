import { Cloud, ShoppingCart, Wrench, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "weather", label: "Weather", icon: Cloud },
    { id: "marketplace", label: "Marketplace", icon: ShoppingCart },
    { id: "services", label: "Services", icon: Wrench },
    { id: "contact", label: "Connect", icon: Mail },
  ];

  return (
    <nav className="bg-card shadow-soft border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-earth flex items-center justify-center">
              <span className="text-2xl">🌾</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AgroKiosk</h1>
              <p className="text-xs text-muted-foreground">Agricultural Information Hub</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <Button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  variant={isActive ? "default" : "ghost"}
                  size="lg"
                  className="flex flex-col items-center gap-1 h-auto py-3 px-4 min-w-[100px]"
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
