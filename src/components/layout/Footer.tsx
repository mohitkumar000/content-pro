// src/components/layout/Footer.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Globe, Zap } from "lucide-react"; // ✅ modern icons

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-black/95 to-black border-t border-white/10 mt-16 z-10">
      {/* 🌈 Subtle half rainbow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600 opacity-50 rounded-full"></div>

      <div className="container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">TG</span>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                thegrowthgenie
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Empowering creators and businesses to grow with high-quality,
              engaging content that converts and builds lasting connections.
            </p>
            <div>
              <a
                href="https://calendly.com/team-thegrowthgenie/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-transform hover:scale-105 shadow-md"
              >
                🚀 Book a Call
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "YouTube Services", to: "/youtube-services" },
                { name: "Influencer Campaigns", to: "/Influencer-Campaigns" },
                { name: "Complete Tech", to: "/Complete-Tech" },
                { name: "Pricing", to: "/pricing" },
                { name: "Our Work", to: "/our-work" },
                { name: "FAQ", to: "/faq" },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(item.to)}
                    className="text-white/70 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-widest">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <a
                  href="mailto:team@thegrowthgenie.com"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  team@thegrowthgenie.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-indigo-400" />
                <span className="text-white/70">Remote, Worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-indigo-400" />
                <span className="text-white/70">Fast Response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">thegrowthgenie</span>.
            All rights reserved.
          </div>
          <div className="text-sm text-white/70 flex items-center gap-2">
            <span className="animate-pulse">❤️</span> Made with love for creators
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
