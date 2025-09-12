// src/pages/PricingPage.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* Small feature row */
const Feature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <svg
      className="w-5 h-5 mt-0.5 text-indigo-400 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-sm text-white/80">{children}</span>
  </li>
);

/* Expandable accordion section */
const ExpandableSection = ({
  title,
  features,
}: {
  title: string;
  features: string[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition text-left"
      >
        <span className="font-semibold text-white">{title}</span>
        <span className="text-white">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <ul className="mt-3 pl-6 space-y-2">
          {features.map((f, idx) => (
            <Feature key={idx}>{f}</Feature>
          ))}
        </ul>
      )}
    </div>
  );
};

/* Pricing Card */
const PricingCard = ({
  title,
  price,
  per,
  popular = false,
  expandableSections = [],
}: {
  title: string;
  price: string;
  per?: string;
  popular?: boolean;
  expandableSections?: { title: string; features: string[] }[];
}) => {
  const navigate = useNavigate();

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

      {/* Accordion Sections */}
      {expandableSections.map((section, idx) => (
        <ExpandableSection
          key={idx}
          title={section.title}
          features={section.features}
        />
      ))}

      <div className="mt-6">
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
      {/* Background */}
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

      {/* Pricing Plans */}
      <section className="py-16 container mx-auto px-6 relative z-10">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-16">
          {/* Starter Plan */}
          <PricingCard
            title="Starter – $699/month"
            price="$699"
            per="/month"
            expandableSections={[
              {
                title: "🎥 Content Production",
                features: [
                  "4 high-quality videos per month",
                  "Scriptwriting included",
                  "Professional editing with smooth cuts & pacing",
                  "1 custom thumbnail per video",
                  "Copyright-free background music & sound effects",
                ],
              },
              {
                title: "📌 Channel Setup & Optimization",
                features: [
                  "Basic channel optimization checklist (titles, tags, descriptions, end screens)",
                  "Initial content strategy call (one-time) to align on niche & style",
                ],
              },
              {
                title: "🎯 Support & Guidance",
                features: [
                  "Monthly progress check-in (15 mins) to review performance & next steps",
                  "Access to starter resources library (thumbnail templates, title formulas, growth tips)",
                ],
              },
              {
                title: "💡 Positioning / Pitch",
                features: [
                  "👉 “Perfect if you’re just starting out and want consistent, professional uploads with the right strategy from day one.”",
                ],
              },
              {
                title: "⚡ Bonus Upgrade Ideas",
                features: [
                  "Add 1 free repurposed short per month → shows extra love without much work",
                  "Offer a 'launch boost' guide PDF → quick wins for new creators",
                  "Optional upgrade to Growth plan anytime with priority onboarding",
                ],
              },
            ]}
          />

          {/* Growth Plan */}
          <PricingCard
            title="Growth – $1499/month"
            price="$1499"
            per="/month"
            popular
            expandableSections={[
              {
                title: "🎥 Content Production",
                features: [
                  "6 high-quality videos per month",
                  "Scriptwriting included",
                  "Professional editing with pro effects",
                  "Voiceover included (up to 10 min per video)",
                  "Premium thumbnails (2 versions for A/B testing)",
                ],
              },
              {
                title: "🔍 Channel Growth Tools",
                features: [
                  "Detailed channel audit (one-time at onboarding)",
                  "Monthly analytics report with growth suggestions",
                  "Basic retention & CTR optimization guidance",
                ],
              },
              {
                title: "🤝 Community & Mentorship",
                features: [
                  "Access to private creator community (Slack/Discord) for networking",
                  "Bi-weekly group calls → Q&A, growth strategies, and accountability",
                  "Learn from other creators scaling alongside you",
                ],
              },
              {
                title: "📈 Positioning / Pitch",
                features: [
                  "👉 “More than just videos — this package gives you pro-level content, ongoing channel insights, and a community of like-minded creators to keep you growing consistently.”",
                ],
              },
              {
                title: "⚡ Bonus Ideas (Optional Upgrades)",
                features: [
                  "Add short-form repurposed clips (2 per video) → great for YouTube Shorts/TikTok",
                  "Quarterly mini-workshop: trend breakdowns & content hacks",
                  "“Next-level support” upgrade → priority edit requests",
                ],
              },
            ]}
          />

          {/* Scale Plan */}
          <PricingCard
            title="Scale – $2999/month"
            price="$2999"
            per="/month"
            expandableSections={[
              {
                title: "🎥 Content Production (Baseline)",
                features: [
                  "8 high-quality long-form videos per month",
                  "End-to-end done-for-you (script → edit → voiceover → thumbnail → publish-ready)",
                  "Advanced editing with motion graphics",
                  "Premium thumbnails with CTR testing",
                  "Dedicated channel manager",
                ],
              },
              {
                title: "📈 Business Consulting (Growth Layer)",
                features: [
                  "2× monthly YouTube Business Consulting Calls",
                  "Monetization roadmap (ads, affiliates, products, sponsorships)",
                  "Brand positioning & growth hacks",
                  "Audience retention + scaling systems",
                ],
              },
              {
                title: "🛠️ Productization Help",
                features: [
                  "Guidance to create digital products (courses, eBooks, merch)",
                  "Funnels, landing pages & email marketing basics",
                  "Plug-and-play templates for product launches",
                ],
              },
              {
                title: "💰 Sponsorship & Revenue Streams",
                features: [
                  "Sponsor-ready media kit",
                  "Brand deal negotiation guidance",
                  "Monthly Revenue Opportunities Report (brands & affiliates in your niche)",
                ],
              },
              {
                title: "🏆 Creator Mentorship & Support",
                features: [
                  "Private 1-on-1 mentorship with our team (automation, outsourcing, scaling)",
                  "Access to private Slack/Discord creator community",
                  "Weekly accountability check-ins & performance reviews",
                ],
              },
              {
                title: "⚡ Bonus Value",
                features: [
                  "Done-for-you YouTube product funnels (mini course/eBook as your first offer)",
                  "Lifetime asset ownership (scripts, edits, templates are yours forever)",
                  "90-day growth roadmap (views, subscribers, monetization projections)",
                ],
              },
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
              Have custom requirements or want a custom enterprise plan? We're
              here to help you find the perfect solution.
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
