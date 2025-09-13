// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 mt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-lg">TG</span>
              </div>
              <span className="text-xl font-bold text-white">
                thegrowthgenie
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Empowering creators and businesses to grow with high-quality, engaging content that converts and builds lasting connections.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://calendly.com/team-thegrowthgenie/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-white/90 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/youtube-services" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  YouTube Services
                </Link>
              </li>
              <li>
                <Link to="/copywriting" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Copywriting
                </Link>
              </li>
              <li>
                <Link to="/other-services" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Other Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-wide">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-white">📧</span>
                <a
                  href="mailto:team@thegrowthgenie.com"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  team@thegrowthgenie.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">🌍</span>
                <span className="text-white/70">Remote, Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">⚡</span>
                <span className="text-white/70">Fast Response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} thegrowthgenie. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/70">Made with ❤️ for creators</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
