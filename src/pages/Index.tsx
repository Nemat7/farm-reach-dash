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
            <Hero onNavigate={setActiveSection} />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-medium transition-all cursor-pointer group" onClick={() => setActiveSection("weather")}>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Cloud className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Weather Forecast</h3>
                    <p className="text-muted-foreground">Check regional weather conditions</p>
                  </div>
                </Card>
                
                <Card className="p-6 hover:shadow-medium transition-all cursor-pointer group" onClick={() => setActiveSection("marketplace")}>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ShoppingBag className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Marketplace</h3>
                    <p className="text-muted-foreground">Buy and sell agricultural products</p>
                  </div>
                </Card>
                
                <Card className="p-6 hover:shadow-medium transition-all cursor-pointer group" onClick={() => setActiveSection("services")}>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Wrench className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Services</h3>
                    <p className="text-muted-foreground">Agricultural services and support</p>
                  </div>
                </Card>
                
                <Card className="p-6 hover:shadow-medium transition-all cursor-pointer group" onClick={() => setActiveSection("contact")}>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MessageSquare className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Connect With Us</h3>
                    <p className="text-muted-foreground">Get in touch for support</p>
                  </div>
                </Card>
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
