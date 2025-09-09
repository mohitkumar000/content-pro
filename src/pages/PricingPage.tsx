// src/pages/PricingPage.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* Small visual feature row used inside the card */
const Feature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <svg
      className="w-5 h-5 mt-0.5 text-primary flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-sm text-muted-foreground">{children}</span>
  </li>
);

/* Card used for each pricing tier */
const PricingCard = ({
  title,
  price,
  per,
  highlights,
  popular = false,
}: {
  title: string;
  price: string;
  per?: string;
  highlights: string[];
  popular?: boolean;
}) => {
  const navigate = useNavigate();

  const description =
    title.startsWith("Starter")
      ? "Best for new creators who want consistent uploads."
      : title.startsWith("Growth")
      ? "Growing channels that want faster traction."
      : "Businesses & serious creators aiming for 100K+ growth.";

  const handleGetStarted = () => {
    // Save selected plan so Contact page can prefill subject (your pages already read localStorage.selectedService)
    localStorage.setItem("selectedService", title);
    navigate("/contact");
  };

  return (
    <div className="relative rounded-2xl border border-border p-6 shadow-sm bg-foreground/5">
      {popular && (
        <div className="absolute -top-3 left-6 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
          Most Popular
        </div>
      )}

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">{price}</div>
          {per && <div className="text-sm text-muted-foreground">{per}</div>}
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">{description}</p>

      <ul className="mt-4 space-y-2">
        {highlights.map((h) => (
          <Feature key={h}>{h}</Feature>
        ))}
      </ul>

      <div className="mt-6">
        <Button
          onClick={handleGetStarted}
          className="w-full bg-gradient-primary px-6 py-4 text-lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">
            ContentPro Pricing
          </h1>
          <p className="mt-4 text-muted-foreground">
            Choose a plan that fits your growth stage — transparent pricing, no hidden fees.
          </p>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
          <PricingCard
            title="Starter – $500/month"
            price="$500"
            per="/month"
            highlights={[
              "4 high-quality videos per month",
              "Scriptwriting included",
              "Professional editing",
              "1 custom thumbnail per video",
              "Copyright-free background music & SFX",
              "Basic channel optimization checklist",
            ]}
          />

          <PricingCard
            title="Growth – $1,500/month"
            price="$1,500"
            per="/month"
            popular
            highlights={[
              "6 high-quality videos per month",
              "Scriptwriting included",
              "Professional editing with pro effects",
              "Voiceover included (up to 6 min per video)",
              "Premium thumbnails (2 versions for A/B test)",
              "Detailed channel audit (one-time at onboarding)",
              "Monthly analytics report & growth suggestions",
            ]}
          />

          <PricingCard
            title="Scale – $3,000/month"
            price="$3,000"
            per="/month"
            highlights={[
              "8 high-quality videos per month",
              "End-to-end done-for-you (script → edit → voice → thumbnail → publish-ready)",
              "Advanced editing with motion graphics",
              "Premium thumbnails with CTR optimization tests",
              "Dedicated channel manager",
              "Full channel audit + monthly performance reviews",
              "Content calendar planning & niche research",
              "Sponsor-ready presentation (media kit basics)",
            ]}
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have custom requirements or want a custom enterprise plan?
          </p>
          <div className="mt-4 inline-flex gap-3">
            {/* Enlarged prominent Contact Sales button */}
            <Link to="/contact">
              <Button className="bg-gradient-primary px-6 py-4 text-lg shadow-glow">
                Contact Sales
              </Button>
            </Link>
            {/* See Services removed as requested */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
