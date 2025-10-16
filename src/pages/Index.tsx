import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AlertBanner } from "@/components/AlertBanner";
import { WeatherMap } from "@/components/WeatherMap";
import { Marketplace } from "@/components/Marketplace";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Advertisement } from "@/components/Advertisement";
import { Card } from "@/components/ui/card";
import { Cloud, ShoppingBag, Wrench, MessageSquare } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "weather":
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">Weather Forecast</h2>
            <WeatherMap />
          </div>
        );
      case "marketplace":
        return (
          <div className="animate-fade-in">
            <Marketplace />
          </div>
        );
      case "services":
        return (
          <div className="animate-fade-in">
            <Services />
          </div>
        );
      case "contact":
        return (
          <div className="animate-fade-in">
            <Contact />
          </div>
        );
      default:
        return (
          <div className="animate-fade-in space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-medium hover:shadow-lg transition-all"
                  onClick={() => setActiveSection("weather")}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow" />
                  <div className="relative p-8 text-white">
                    <div className="w-16 h-16 mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Cloud className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Weather Forecast</h3>
                    <p className="text-white/90">Check regional weather conditions and plan your activities</p>
                  </div>
                </div>
                
                <div 
                  className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-medium hover:shadow-lg transition-all"
                  onClick={() => setActiveSection("marketplace")}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-blue-400" />
                  <div className="relative p-8 text-white">
                    <div className="w-16 h-16 mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ShoppingBag className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Marketplace</h3>
                    <p className="text-white/90">Buy and sell agricultural products directly with farmers</p>
                  </div>
                </div>
                
                <div 
                  className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-medium hover:shadow-lg transition-all"
                  onClick={() => setActiveSection("services")}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-orange-400" />
                  <div className="relative p-8 text-white">
                    <div className="w-16 h-16 mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Wrench className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Services</h3>
                    <p className="text-white/90">Agricultural services, equipment rental, and expert support</p>
                  </div>
                </div>
                
                <div 
                  className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-medium hover:shadow-lg transition-all"
                  onClick={() => setActiveSection("contact")}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-glow to-accent" />
                  <div className="relative p-8 text-white">
                    <div className="w-16 h-16 mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <MessageSquare className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Connect With Us</h3>
                    <p className="text-white/90">Get in touch for support and assistance</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Video Announcements</h3>
                  <Advertisement />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <AlertBanner
            title="Weather Alert"
            message="Moderate rainfall expected in Southern and Eastern regions over the next 48 hours. Plan your activities accordingly."
            severity="warning"
          />
        </div>

        {renderSection()}
      </div>
    </div>
  );
};

export default Index;
