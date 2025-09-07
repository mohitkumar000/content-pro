import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "YouTube Services", href: "/youtube-services" },
    { name: "Copywriting", href: "/copywriting" },
    { name: "Other Services", href: "/other-services" },
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:contact@contentservices.com?subject=Service Inquiry";
  };

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ContentPro
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.href 
                  ? "text-primary" 
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button 
          onClick={handleContactClick}
          className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow"
        >
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;