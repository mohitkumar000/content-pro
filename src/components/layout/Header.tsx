import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const [isContactPage, setIsContactPage] = useState(
    location.pathname === "/contact"
  );

  useEffect(() => {
    setIsContactPage(location.pathname === "/contact");
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "YouTube Services", href: "/youtube-services" },
    { name: "Influencer Campaigns", href: "/Influencer-Campaigns" },
    { name: "Complete Tech", href: "/Complete-Tech" },
    { name: "Pricing", href: "/pricing" },
    { name: "Our Work", href: "/our-work" },
    { name: "FAQ", href: "/faq" },
  ];

  // ✅ Scroll to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-3 z-50 w-[94%] mx-auto rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 shadow-md">
      <div className="container mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group" onClick={scrollToTop}>
          {!logoError ? (
            <img
              src={logo}
              alt="thegrowthgenie logo"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-xl font-bold text-white group-hover:scale-105 transition-transform">
              thegrowthgenie
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={scrollToTop} // ✅ ensures scroll on click
              className={`relative text-base font-medium transition-all duration-300 hover:text-white ${
                location.pathname === item.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.name}
              {location.pathname === item.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button (hidden on /contact) */}
        {!isContactPage && (
          <div className="hidden md:flex items-center">
            <Button
              onClick={() => {
                navigate("/contact");
                scrollToTop();
              }}
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all px-5 py-2 text-sm font-semibold"
            >
              Get Started
            </Button>
          </div>
        )}

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          {!isContactPage && (
            <Button
              onClick={() => {
                navigate("/contact");
                scrollToTop();
              }}
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-4 py-1.5 shadow hover:scale-105 transition-all"
            >
              Contact
            </Button>
          )}
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
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-5 space-y-4 rounded-b-2xl">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => {
                scrollToTop();
                setMobileOpen(false);
              }}
              className={`block text-lg font-medium transition-all duration-300 hover:translate-x-2 ${
                location.pathname === item.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
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
