import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AlertBanner } from "@/components/AlertBanner";
import { WeatherMap } from "@/components/WeatherMap";
import { Marketplace } from "@/components/Marketplace";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Advertisement } from "@/components/Advertisement";

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
            <Hero onNavigate={setActiveSection} />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">Quick Weather Overview</h3>
                <WeatherMap />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Announcements</h3>
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
