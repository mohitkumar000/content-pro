import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png"; // 👈 ensure logo is in src/assets/

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false); // track logo load error

  const navigation = [
    { name: "Home", href: "/" },
    { name: "YouTube Services", href: "/youtube-services" },
    { name: "Copywriting", href: "/copywriting" },
    { name: "Other Services", href: "/other-services" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-8 py-2 flex items-center justify-between">
        
        {/* Logo with fallback to text */}
        <Link to="/" className="flex items-center">
          {!logoError ? (
            <img
              src={logo}
              alt="thegrowthgenie logo"
              className="h-20 w-auto object-contain" // 👈 taller, keeps aspect ratio
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              thegrowthgenie
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-base font-medium transition-colors hover:text-primary ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            onClick={() => setMobileOpen(!mobileOpen)}
            variant="ghost"
            size="icon"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
