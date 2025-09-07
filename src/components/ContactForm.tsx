import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Service Interest: ${formData.service}

Message:
${formData.message}
    `;

    const mailtoLink = `mailto:contact@contentservices.com?subject=Service Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card className="bg-card border-border shadow-card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-card-foreground">
          Get In Touch
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Ready to boost your content? Let's discuss your project.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Service Interest</Label>
            <Input
              id="service"
              name="service"
              placeholder="e.g., YouTube Automation, Copywriting, etc."
              value={formData.service}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project requirements..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:opacity-90 transition-all shadow-glow"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;