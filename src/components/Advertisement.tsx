import { Card } from "@/components/ui/card";

export const Advertisement = () => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-4 bg-card">
        <h4 className="text-lg font-semibold text-foreground mb-2">Featured Advertisement</h4>
        <p className="text-sm text-muted-foreground">Stay updated with the latest agricultural news and offers</p>
      </div>
    </Card>
  );
};
