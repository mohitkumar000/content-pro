// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Mail, Globe, Zap, Twitter, Linkedin } from "lucide-react";
// ✅ FIXED: Removed direct logo import to prevent build errors. A placeholder is used instead.

const Footer: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.footer 
      className="bg-black/50 border-t border-white/10 mt-24 relative overflow-hidden backdrop-blur-lg"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-0 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              {/* ✅ FIXED: Replaced image with a styled placeholder to resolve import error */}
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <span className="text-2xl font-bold text-white">
                thegrowthgenie
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Empowering creators and businesses to grow with high-quality, engaging content that converts and builds lasting connections.
            </p>
            <motion.a 
              href="https://calendly.com/team-thegrowthgenie/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-black hover:bg-white/90 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-lg"
            >
              Book a Call
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold mb-4 text-white/50 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {[
                { href: "/youtube-services", name: "YouTube Services" },
                { href: "/copywriting", name: "Copywriting" },
                { href: "/other-services", name: "Other Services" },
                { href: "/pricing", name: "Pricing" },
                { href: "/our-work", name: "Our Work" },
                { href: "/faq", name: "FAQ" },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold mb-4 text-white/50 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:team@thegrowthgenie.com" className="text-white/70 hover:text-white transition-colors">
                  team@thegrowthgenie.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-white/70">Remote, Worldwide</span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-white/70">Fast Response</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div className="border-t border-white/10 pt-8" variants={itemVariants}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-white/50">
              © {new Date().getFullYear()} thegrowthgenie. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="https://x.com/Thegrowthgenie9" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Twitter className="w-5 h-5"/>
              </a>
              <a href="https://www.linkedin.com/company/thegrowthgenie" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5"/>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
