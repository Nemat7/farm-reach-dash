import { Card } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Droplets } from "lucide-react";

const regions = [
  { id: 1, name: "Northern Region", temp: "28°C", humidity: "65%", precipitation: "Low", x: 30, y: 20 },
  { id: 2, name: "Central Region", temp: "32°C", humidity: "45%", precipitation: "None", x: 45, y: 45 },
  { id: 3, name: "Southern Region", temp: "26°C", humidity: "78%", precipitation: "High", x: 50, y: 75 },
  { id: 4, name: "Eastern Region", temp: "30°C", humidity: "52%", precipitation: "Medium", x: 75, y: 50 },
  { id: 5, name: "Western Region", temp: "29°C", humidity: "58%", precipitation: "Low", x: 15, y: 55 },
];

export const WeatherMap = () => {
  const getWeatherIcon = (precipitation: string) => {
    switch (precipitation) {
      case "High":
        return <CloudRain className="h-6 w-6 text-accent" />;
      case "Medium":
        return <Cloud className="h-6 w-6 text-muted-foreground" />;
      default:
        return <Sun className="h-6 w-6 text-warning" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 min-h-[500px] border-2 border-border">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M 20 30 Q 40 20, 60 30 T 80 40 Q 85 50, 80 60 T 60 75 Q 40 80, 30 70 T 20 30"
              fill="hsl(var(--primary))"
              fillOpacity="0.3"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {regions.map((region) => (
          <div
            key={region.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${region.x}%`, top: `${region.y}%` }}
          >
            <Card className="p-4 min-w-[200px] shadow-medium hover:shadow-xl transition-all hover:scale-105 bg-card/95 backdrop-blur">
              <div className="flex items-start gap-3">
                {getWeatherIcon(region.precipitation)}
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{region.name}</h4>
                  <div className="mt-2 space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4 text-warning" />
                      <span className="text-foreground font-medium">{region.temp}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">{region.humidity}</span>
                    </div>
                    <div className="mt-2 text-xs">
                      <span className="text-muted-foreground">Rain: </span>
                      <span className={`font-medium ${
                        region.precipitation === "High" ? "text-accent" : 
                        region.precipitation === "Medium" ? "text-warning" : 
                        "text-primary"
                      }`}>
                        {region.precipitation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <Sun className="h-8 w-8 text-warning mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">30°C</div>
          <div className="text-sm text-muted-foreground">Avg Temperature</div>
        </Card>
        <Card className="p-4 text-center">
          <Droplets className="h-8 w-8 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">60%</div>
          <div className="text-sm text-muted-foreground">Avg Humidity</div>
        </Card>
        <Card className="p-4 text-center">
          <CloudRain className="h-8 w-8 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">Medium</div>
          <div className="text-sm text-muted-foreground">Rain Forecast</div>
        </Card>
      </div>
    </div>
  );
};
