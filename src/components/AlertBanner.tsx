import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertBannerProps {
  title: string;
  message: string;
  severity: "warning" | "critical";
}

export const AlertBanner = ({ title, message, severity }: AlertBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert 
      className={`animate-slide-in ${
        severity === "critical" 
          ? "bg-destructive/10 border-destructive text-destructive" 
          : "bg-warning/10 border-warning text-warning"
      }`}
    >
      <AlertTriangle className="h-5 w-5" />
      <AlertTitle className="text-lg font-semibold">{title}</AlertTitle>
      <AlertDescription className="text-base">{message}</AlertDescription>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
      >
        <X className="h-4 w-4" />
      </button>
    </Alert>
  );
};
