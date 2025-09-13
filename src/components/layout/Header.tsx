// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";
// ✅ FIXED: Added Variants to the import list for TypeScript
import { motion, AnimatePresence, useScroll, useMotionValueEvent, Variants } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "YouTube Services", href: "/youtube-services" },
    { name: "Copywriting", href: "/copywriting" },
    { name: "Other Services", href: "/other-services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Our Work", href: "/our-work" },
    { name: "FAQ", href: "/faq" },
  ];

  // ✅ FIXED: Explicitly typed variants for TypeScript
  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: "-100%" },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.07, delayChildren: 0.2, ease: "easeInOut" } },
    exit: { opacity: 0, y: "-100%", transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 } },
  };
  const mobileLinkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <>
      <header
        className={`sticky top-4 z-50 w-[95%] mx-auto rounded-2xl border transition-all duration-300 ${
          scrolled ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-lg" : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              {!logoError ? (
                <img src={logo} alt="thegrowthgenie logo" className="h-12 w-auto object-contain" onError={() => setLogoError(true)} />
              ) : (
                <span className="text-2xl font-bold text-white">thegrowthgenie</span>
              )}
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-2 bg-black/20 border border-white/10 rounded-full p-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-md font-medium tracking-wide transition-colors duration-300 px-5 py-2 rounded-full ${
                  location.pathname === item.href ? "text-white" : "text-white/70 hover:text-white"
                }`}
                onMouseEnter={() => setHoveredLink(item.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {(hoveredLink === item.href || location.pathname === item.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {!isContactPage && (
            <div className="hidden md:flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => navigate("/contact")} className="rounded-full bg-blue-600 text-white hover:bg-blue-500 px-6 py-2 shadow-md hover:shadow-lg">
                  Get Started
                </Button>
              </motion.div>
            </div>
          )}

          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="hover:bg-white/10 text-white rounded-full z-50 p-2"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navigation.map((item) => (
              <motion.div key={item.name} variants={mobileLinkVariants}>
                <Link
                  to={item.href}
                  className={`text-3xl font-medium tracking-wide transition-colors duration-300 ${
                    location.pathname === item.href ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            {!isContactPage && (
                 <motion.div variants={mobileLinkVariants}>
                    <Button onClick={() => { navigate("/contact"); setMobileOpen(false); }} className="rounded-full bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 text-xl shadow-md">
                        Get Started
                    </Button>
                </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;