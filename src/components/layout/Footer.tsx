// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand section */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              ContentPro
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Helping creators and businesses grow with high-quality content.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Contact Us</h4>
          <p className="text-sm text-muted-foreground">
            📧 Email:{" "}
            <a
              href="mailto:contentpro918@gmail.com"
              className="text-primary hover:underline"
            >
              contentpro918@gmail.com
            </a>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            📍 Location: Remote, Worldwide
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            📅{" "}
            <a
              href="https://calendly.com/contentpro918/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Schedule a Meet
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-border mt-8">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ContentPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
