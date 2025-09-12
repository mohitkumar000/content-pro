// src/pages/PricingPage.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* Small visual feature row used inside the card */
const Feature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <svg
      className="w-5 h-5 mt-0.5 text-white flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-sm text-white/70">{children}</span>
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
    localStorage.setItem("selectedService", title);
    navigate("/contact");
  };

  return (
    <div className="relative rounded-3xl border border-white/10 p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 bg-black/60 backdrop-blur-xl group">
      {popular && (
        <div className="absolute -top-4 left-8 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600 text-white shadow-md animate-gradient-x">
          Most Popular
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="text-right">
          <div className="text-3xl font-bold text-white">{price}</div>
          {per && <div className="text-sm text-white/70">{per}</div>}
        </div>
      </div>

      <p className="mb-6 text-white/70 leading-relaxed">{description}</p>

      <ul className="space-y-3 mb-8">
        {highlights.map((h) => (
          <Feature key={h}>{h}</Feature>
        ))}
      </ul>

      <div>
        <Button
          onClick={handleGetStarted}
          className="w-full bg-white text-black hover:bg-white/90 px-6 py-4 text-lg hover:scale-105 transition-all duration-300 font-semibold"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* 🔥 3D Grid Background (same as OtherServices) */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(transparent 97%, rgba(255,255,255,0.15) 100%),
              linear-gradient(90deg, transparent 97%, rgba(255,255,255,0.15) 100%)
            `,
            backgroundSize: "50px 50px",
            transform: "perspective(600px) rotateX(60deg)",
            transformOrigin: "center top",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 -z-10"></div>

      {/* Hero Section */}
      <section className="py-16 container mx-auto px-6 relative z-10">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-16">
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

        {/* Custom Section */}
        <div className="text-center relative z-10">
          <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-elevated max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Something Custom?
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Have custom requirements or want a custom enterprise plan? We're here to help you find the perfect solution.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg hover:scale-105 transition-all duration-300 font-semibold">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
