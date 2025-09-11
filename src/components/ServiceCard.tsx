import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ title, description, features }: ServiceCardProps) => {
  const handleContactClick = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
      localStorage.setItem("selectedService", title);
    }
  };

  return (
    <Card className="relative h-full glass-card bg-grid-lines overflow-hidden transition-all duration-500 hover:-translate-y-2 hover-glow">
      {/* Content */}
      <div className="relative z-10">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">
            {title}
          </CardTitle>
          <CardDescription className="text-white/70">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3 text-sm">
                <div className="w-2 h-2 bg-white/70 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            onClick={handleContactClick}
            className="w-full glass-button"
          >
            Get Quote
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default ServiceCard;
