import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const advertisements = [
  {
    id: 1,
    title: "Premium Fertilizer Sale",
    description: "Get 20% off on all organic fertilizers this month",
    badge: "Limited Offer",
    color: "from-primary to-primary-glow",
  },
  {
    id: 2,
    title: "New Irrigation Technology",
    description: "Smart water management systems now available",
    badge: "New Product",
    color: "from-accent to-blue-400",
  },
  {
    id: 3,
    title: "Farm Equipment Workshop",
    description: "Free maintenance training for equipment owners",
    badge: "Free Event",
    color: "from-secondary to-orange-400",
  },
];

export const Advertisement = () => {
  const [currentAd, setCurrentAd] = useState(0);

  const nextAd = () => {
    setCurrentAd((prev) => (prev + 1) % advertisements.length);
  };

  const prevAd = () => {
    setCurrentAd((prev) => (prev - 1 + advertisements.length) % advertisements.length);
  };

  const ad = advertisements[currentAd];

  return (
    <Card className="relative overflow-hidden">
      <div className={`bg-gradient-to-r ${ad.color} p-8 text-white`}>
        <Badge className="mb-4 bg-white/20 text-white border-0">{ad.badge}</Badge>
        <h3 className="text-2xl font-bold mb-2">{ad.title}</h3>
        <p className="text-lg opacity-90">{ad.description}</p>
      </div>
      
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button
          onClick={prevAd}
          size="icon"
          variant="secondary"
          className="bg-white/20 hover:bg-white/30 text-white border-0"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          onClick={nextAd}
          size="icon"
          variant="secondary"
          className="bg-white/20 hover:bg-white/30 text-white border-0"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-8 flex gap-2">
        {advertisements.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentAd ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </Card>
  );
};
