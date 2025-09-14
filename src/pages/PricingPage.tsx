// src/pages/PricingPage.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

/* Inline helper Feature row */
const Feature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <svg
      className="w-5 h-5 mt-0.5 text-indigo-400 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-sm text-white/85">{children}</span>
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
    <div className="mb-3">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex justify-between items-center px-4 py-3 rounded-lg bg-white/3 hover:bg-white/6 transition text-left"
      >
        <span className="font-semibold text-white">{title}</span>
        <span className="text-white text-lg">{open ? "−" : "+"}</span>
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
  children,
}: {
  title: string;
  price: string;
  per?: string;
  popular?: boolean;
  expandableSections?: { title: string; features: string[] }[];
  children?: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const handleContactUs = () => {
    localStorage.setItem("selectedService", title);
    navigate("/contact");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="relative rounded-3xl border border-white/10 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-black/60 backdrop-blur-xl group"
    >
      {popular && (
        <div className="absolute -top-4 left-6 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md animate-gradient-x">
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

      {expandableSections.map((section, idx) => (
        <ExpandableSection
          key={idx}
          title={section.title}
          features={section.features}
        />
      ))}

      {children}

      <div className="mt-6 flex flex-col space-y-3">
        <Button
          onClick={handleContactUs}
          className="w-full bg-white text-black hover:bg-white/90 px-6 py-4 text-lg hover:scale-105 transition-all duration-300 font-semibold"
        >
          Contact Us
        </Button>
        <a
          href="https://calendly.com/team-thegrowthgenie/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:opacity-90 px-6 py-4 text-lg hover:scale-105 transition-all duration-300 font-semibold">
            Book a Meeting
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

/* Pricing Page */
const PricingPage: React.FC = () => {
  const [service, setService] = useState<
    "youtube" | "website_app" | "ai_agent" | "influencer"
  >("youtube");

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <Helmet>
        <title>
          Pricing Plans | The Growth Genie – YouTube, Websites, Apps, AI Agents &
          Influencer Campaigns
        </title>
        <meta
          name="description"
          content="Choose from YouTube automation, Website & App dev, AI Agent packages, and Influencer Campaigns. Transparent pricing to help you scale."
        />
        <link rel="canonical" href="https://www.thegrowthgenie.com/pricing" />
      </Helmet>

      {/* Background */}
      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background: linear-gradient(90deg, #ff6ec4, #ffd166, #4ade80, #60a5fa, #a78bfa);
          background-size: 400% 400%;
          animation: gradient-x 6s ease infinite;
        }
        .bg-grid-fallback {
          background-image:
            linear-gradient(transparent 96%, rgba(255,255,255,0.02) 100%),
            linear-gradient(90deg, transparent 96%, rgba(255,255,255,0.02) 100%);
          background-size: 40px 40px;
        }
      `}</style>

      <div className="absolute inset-0 -z-10 bg-black">
        <div className="w-full h-full bg-grid-fallback -z-10" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95 -z-10" />

      {/* Service Switch */}
      <section className="py-10 container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Pricing & Packages</h1>
          <p className="text-white/80 mb-6">
            Pick a service below to see relevant plans, full details, and
            starting prices.
          </p>

          <div className="inline-flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setService("youtube")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                service === "youtube"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              YouTube Automation
            </button>
            <button
              onClick={() => setService("website_app")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                service === "website_app"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              Website & App Dev
            </button>
            <button
              onClick={() => setService("ai_agent")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                service === "ai_agent"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              Personalized AI Agent
            </button>
            <button
              onClick={() => setService("influencer")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                service === "influencer"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              Influencer Campaigns
            </button>
          </div>
        </div>
      </section>

      {/* Pricing content */}
           {/* Pricing content */}
      <section className="py-6 container mx-auto px-6 relative z-10">
        {/* ✅ YOUTUBE */}
        {service === "youtube" && (
          <>
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
                      "👉 Perfect if you’re just starting out and want consistent, professional uploads with the right strategy from day one.",
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
                      "Access to private creator community (Slack/Discord)",
                      "Bi-weekly group calls → Q&A, growth strategies, and accountability",
                      "Learn from other creators scaling alongside you",
                    ],
                  },
                  {
                    title: "📈 Positioning / Pitch",
                    features: [
                      "👉 More than just videos — this gives you pro-level content, ongoing insights, and a creator community.",
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
                    title: "📈 Business Consulting",
                    features: [
                      "2× monthly YouTube Business Consulting Calls",
                      "Monetization roadmap (ads, affiliates, products, sponsorships)",
                      "Brand positioning & growth hacks",
                      "Audience retention + scaling systems",
                    ],
                  },
                  {
                    title: "🏆 Mentorship",
                    features: [
                      "Private 1-on-1 mentorship with our team",
                      "Access to private Slack/Discord creator community",
                      "Weekly accountability check-ins & reviews",
                    ],
                  },
                ]}
              />
            </div>

            {/* Custom YouTube Package */}
            <div className="text-center relative z-10 mb-16">
              <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Want a custom YouTube package?
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  We can combine packages, add ads, or provide dedicated
                  channel management for enterprises. Contact us with your
                  goals — we’ll build the plan.
                </p>
                <Link to="/contact">
                  <Button className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg hover:scale-105 transition-all duration-300 font-semibold">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}

        {/* ✅ WEBSITE + APP */}
        
        {/* ✅ WEBSITE + APP (expanded with Android/iOS + 3 months support + scalable features) */}
        {service === "website_app" && (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {/* Main Website & App Card */}
            <PricingCard
              title="Website & App Development"
              price="$599"
              per="starting from"
              expandableSections={[
                {
                  title: "🔧 Starter Package",
                  features: [
                    "Custom responsive website (frontend + backend)",
                    "Basic CMS integration (headless or traditional)",
                    "SEO-friendly structure & mobile-first design",
                    "Performance-optimized builds with Lighthouse checks",
                    "1–2 rounds of design revisions",
                  ],
                },
                {
                  title: "📱 Mobile Apps (Android & iOS)",
                  features: [
                    "Native Android & iOS app development",
                    "Cross-platform builds with React Native / Flutter",
                    "App Store & Play Store deployment support",
                    "Push notifications, authentication, payments",
                    "AI features (chatbots, personalization, smart search)",
                    "Scalable architecture ready for growth",
                  ],
                },
                {
                  title: "🧾 Delivery & Support",
                  features: [
                    "Staged delivery → wireframes → dev → QA → launch",
                    "3 months post-launch support (website + app)",
                    "Optional ongoing maintenance & feature upgrades",
                    "Version updates & OS compatibility fixes",
                  ],
                },
              ]}
            >
              <div className="mt-4">
                <ul className="space-y-2 mb-4">
                  <Feature>
                    Custom UI/UX tailored to your brand and conversion goals
                  </Feature>
                  <Feature>Performance & Lighthouse optimization</Feature>
                  <Feature>AI-ready foundation (chatbots, recommendations, automation)</Feature>
                  <Feature>Basic analytics & tracking setup</Feature>
                </ul>
              </div>
            </PricingCard>

            {/* Example Packages */}
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
              <div className="rounded-3xl border border-white/10 p-8 bg-black/60 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Example Packages – Websites & Apps
                </h3>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                  {/* Standard */}
                  <div className="rounded-xl p-6 border border-white/8">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-lg font-semibold">Standard</div>
                      <div className="text-2xl font-bold">$1,499</div>
                    </div>
                    <p className="text-white/70 mb-3">
                      Best for small businesses & personal brands.
                    </p>
                    <ul className="space-y-2">
                      <Feature>Custom 5–10 page website</Feature>
                      <Feature>CMS & blog setup</Feature>
                      <Feature>Basic SEO & analytics</Feature>
                      <Feature>2 rounds of revisions</Feature>
                      <Feature>30 days post-launch support</Feature>
                    </ul>
                    <div className="mt-4 text-center">
                      <Link to="/contact">
                        <Button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-base font-semibold">
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Pro */}
                  <div className="rounded-xl p-6 border border-white/8">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-lg font-semibold">Pro</div>
                      <div className="text-2xl font-bold">$3,499</div>
                    </div>
                    <p className="text-white/70 mb-3">
                      Growth-focused, includes backend + app features.
                    </p>
                    <ul className="space-y-2">
                      <Feature>Custom web app or mobile app MVP</Feature>
                      <Feature>API & database design (scalable architecture)</Feature>
                      <Feature>AI integrations (chatbots, ML-based recommendations)</Feature>
                      <Feature>CI/CD pipeline setup</Feature>
                      <Feature>Native Android + iOS builds</Feature>
                      <Feature>3 months post-launch support</Feature>
                    </ul>
                    <div className="mt-4 text-center">
                      <Link to="/contact">
                        <Button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-base font-semibold">
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-white/70">
                    Need a full digital product (website + Android/iOS app +
                    backend)? Book a discovery call and we’ll scope a tailored
                    proposal with timelines and costs.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Link to="/contact">
                      <Button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-base font-semibold">
                        Request Quote
                      </Button>
                    </Link>
                    <a
                      href="https://calendly.com/team-thegrowthgenie/30min"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-3 text-base font-semibold">
                        Schedule Call
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}



        {/* ✅ AI AGENT */}
               {/* ✅ AI AGENT */}
        {service === "ai_agent" && (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-16">
            {/* Left: Pricing card */}
            <PricingCard
              title="Personalized AI Agent"
              price="$3,000"
              per="starting from"
              expandableSections={[
                {
                  title: "🤖 What you get (Baseline)",
                  features: [
                    "Custom AI assistant tailored to your business workflows",
                    "Conversational UX & intents design",
                    "Integration with your systems (CRM, Slack, email) — connectors vary",
                    "Initial knowledge ingestion (docs, FAQs, product data)",
                    "Hosting & deployment guidance",
                  ],
                },
                {
                  title: "⚙️ Upgrades & Enterprise",
                  features: [
                    "Advanced NLU / custom model training",
                    "Multimodal support (images, documents)",
                    "SLA-backed hosting, monitoring & alerting",
                    "Ongoing retraining & model optimization",
                  ],
                },
                {
                  title: "🔒 Security & Compliance",
                  features: [
                    "Data handling & retention guidance",
                    "Encryption-in-transit and at-rest recommendations",
                    "Support for enterprise compliance requests",
                  ],
                },
              ]}
            >
              <div className="mt-4">
                <p className="text-white/80 mb-3">
                  Personalized AI Agents are complex projects — pricing depends
                  on data size, integrations, custom training, and hosting. The
                  $3,000 is the entry point for a basic agent; enterprise
                  solutions often start higher depending on scope.
                </p>
                <ul className="space-y-2">
                  <Feature>Use-case design & rapid prototype</Feature>
                  <Feature>1 month monitoring & tuning</Feature>
                  <Feature>Knowledge base ingestion up to 10k docs</Feature>
                </ul>
              </div>
            </PricingCard>

            {/* Right: Scoping + CTA */}
            <div className="rounded-3xl border border-white/10 p-8 bg-black/60 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                How we scope AI Agents
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-white/80">
                <li>Discovery: goals, flows, and data sources</li>
                <li>Prototype: a small working agent to validate the flow</li>
                <li>Integrations: connect to your systems & APIs</li>
                <li>Training: fine-tune models and tune prompts</li>
                <li>Deploy & Monitor: host, configure telemetry & iterate</li>
              </ol>

              <div className="mt-6">
                <p className="text-white/70 mb-4">
                  For a tailored quote, share your use case. We’ll propose a
                  phased plan (pilot → scale) to reduce risk and cost.
                </p>
                <div className="flex gap-3">
                  <Link to="/contact">
                    <Button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-base font-semibold">
                      Get a Quote
                    </Button>
                  </Link>
                  <a
                    href="https://calendly.com/team-thegrowthgenie/30min"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-3 text-base font-semibold">
                      Schedule Discovery
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* ✅ INFLUENCER CAMPAIGNS */}
        {service === "influencer" && (
          <>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-16">
              <PricingCard
                title="Starter – $5,000"
                price="$5,000"
                expandableSections={[
                  {
                    title: "Includes",
                    features: [
                      "10 creators (LinkedIn/X/YouTube micros)",
                      "25–30 posts",
                      "1 founder UGC script pack",
                      "4-week posting calendar",
                      "Weekly tracking & recap",
                    ],
                  },
                  {
                    title: "Targets",
                    features: [
                      "100K–300K impressions",
                      "200–500 qualified site visits",
                    ],
                  },
                ]}
              />
              <PricingCard
                title="Growth – $10,000"
                price="$10,000"
                popular
                expandableSections={[
                  {
                    title: "Everything in Starter, plus:",
                    features: [
                      "20–25 creators incl. mid-tier",
                      "60–80 posts",
                      "3 UGC shoots + 10 Shorts",
                      "Community push + lead magnet",
                    ],
                  },
                  {
                    title: "Targets",
                    features: [
                      "500K–1M impressions",
                      "600–1,500 site visits",
                      "50–150 leads",
                    ],
                  },
                ]}
              />
              <PricingCard
                title="Enterprise – Let’s Talk"
                price="Custom"
                expandableSections={[
                  {
                    title: "Everything in Growth, plus:",
                    features: [
                      "40–60 creators incl. marquee",
                      "Multi-wave narrative & PR tour",
                      "Performance media add-on",
                      "Daily analytics + war-room support",
                    ],
                  },
                ]}
              />
            </div>
          </>
        )}
      </section>

    </div>
  );
};

export default PricingPage;
