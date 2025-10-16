import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Tractor, Droplets, Sprout, Phone } from "lucide-react";
import servicesImage from "@/assets/services-equipment.jpg";

const services = [
  {
    id: 1,
    title: "Equipment Rental",
    description: "Rent modern farming equipment by the hour or day",
    icon: Tractor,
    price: "From $50/day",
    available: true,
  },
  {
    id: 2,
    title: "Irrigation Systems",
    description: "Installation and maintenance of irrigation infrastructure",
    icon: Droplets,
    price: "From $200",
    available: true,
  },
  {
    id: 3,
    title: "Agronomic Consulting",
    description: "Expert advice on crop management and soil health",
    icon: Sprout,
    price: "$75/hour",
    available: true,
  },
  {
    id: 4,
    title: "Maintenance Services",
    description: "Equipment repair and preventive maintenance",
    icon: Wrench,
    price: "Contact for quote",
    available: true,
  },
];

export const Services = () => {
  return (
    <div className="space-y-6">
      <div className="relative rounded-3xl overflow-hidden h-64 mb-8">
        <img 
          src={servicesImage} 
          alt="Agricultural services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-2">Agricultural Services</h2>
            <p className="text-xl">Professional support for your farming needs</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.id} className="p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                    <Button size="lg" className="gap-2">
                      <Phone className="h-4 w-4" />
                      Request Service
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
