import { Button } from "@/components/ui/button";
import { Cloud, ShoppingCart, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <div className="relative rounded-3xl overflow-hidden mb-8 shadow-medium">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Agricultural fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/60" />
      </div>
      
      <div className="relative px-8 py-16 md:py-24 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Your Agricultural Information Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Access weather forecasts, buy and sell products, and connect with agricultural services - all in one place
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-2 text-lg px-6 py-6"
              onClick={() => onNavigate("weather")}
            >
              <Cloud className="h-5 w-5" />
              View Weather
            </Button>
            <Button 
              size="lg" 
              className="gap-2 text-lg px-6 py-6 bg-white text-primary hover:bg-white/90"
              onClick={() => onNavigate("marketplace")}
            >
              <ShoppingCart className="h-5 w-5" />
              Browse Marketplace
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 text-lg px-6 py-6 border-white text-white hover:bg-white/10"
              onClick={() => onNavigate("services")}
            >
              <Wrench className="h-5 w-5" />
              Find Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
