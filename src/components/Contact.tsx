import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Connect With Us</h2>
        <p className="text-muted-foreground">We're here to help with all your agricultural needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-base">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="mt-2 h-12 text-base"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-base">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="mt-2 h-12 text-base"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-base">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="mt-2 h-12 text-base"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-base">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we help you?"
                className="mt-2 min-h-32 text-base"
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2">
              <Send className="h-5 w-5" />
              Send Message
            </Button>
          </form>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground">+1 (800) 555-AGRO</p>
                <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 8AM-6PM</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">support@agrokiosk.com</p>
                <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary/10">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">Agricultural Hub Center</p>
                <p className="text-muted-foreground">123 Farm Road, Rural District</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-earth text-white">
            <h4 className="font-semibold text-lg mb-2">Operating Hours</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
