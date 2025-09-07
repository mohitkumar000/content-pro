import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ title, description, features }: ServiceCardProps) => {
  const handleContactClick = () => {
    window.location.href = `mailto:contact@contentservices.com?subject=Interest in ${title}`;
  };

  return (
    <Card className="h-full bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-card-foreground">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          onClick={handleContactClick}
          className="w-full bg-gradient-primary hover:opacity-90 transition-all"
        >
          Get Quote
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;