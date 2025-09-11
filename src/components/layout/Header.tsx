import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "YouTube Services", href: "/youtube-services" },
    { name: "Copywriting", href: "/copywriting" },
    { name: "Other Services", href: "/other-services" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="sticky top-4 z-50 w-[95%] mx-auto rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          {!logoError ? (
            <img
              src={logo}
              alt="thegrowthgenie logo"
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105" 
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-2xl font-bold text-white group-hover:scale-105 transition-transform">
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
              className={`relative text-lg font-medium tracking-wide transition-all duration-300 hover:scale-110 ${
                location.pathname === item.href
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.name}
              {location.pathname === item.href && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <Button
            onClick={() => navigate("/contact")}
            className="rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all px-6 py-2 shadow-md hover:shadow-lg"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-3">
          <Button
            onClick={() => navigate("/contact")}
            className="rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all text-sm px-5 py-2"
          >
            Contact
          </Button>
          <Button
            onClick={() => setMobileOpen(!mobileOpen)}
            variant="ghost"
            size="icon"
            className="hover:bg-white/10 text-white rounded-full"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4 rounded-b-2xl">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block text-lg font-medium tracking-wide transition-all duration-300 hover:translate-x-2 ${
                location.pathname === item.href
                  ? "text-white"
                  : "text-white/70 hover:text-white"
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
