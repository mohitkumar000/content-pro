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

          {/* White button with rainbow hover glow */}
          <Button
            onClick={handleContactClick}
            className="w-full relative bg-white text-black font-semibold rounded-lg overflow-hidden transition-all duration-300"
          >
            Get Quote
            <span className="absolute inset-0 rounded-lg ring-2 ring-transparent hover:ring-[3px] hover:ring-offset-2 hover:ring-offset-black hover:ring-gradient-to-r hover:from-pink-500 hover:via-yellow-400 hover:via-green-400 hover:via-blue-500 hover:to-purple-600 transition-all duration-500"></span>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default ServiceCard;
