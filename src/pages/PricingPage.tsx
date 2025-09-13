// src/pages/PricingPage.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, CheckCircle } from "lucide-react";

// ✨ ANIMATION: Re-usable animated text component
const AnimatedText = ({ text, el: Wrapper = "p", className }: { text: string; el?: keyof JSX.IntrinsicElements; className?: string }) => {
  // ✅ FIXED: Explicitly typed variants for TypeScript
  const container: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.2 } } };
  const item: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 200 } } };
  return (
    <Wrapper className={className}>
      <motion.span variants={container} initial="hidden" animate="show">
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={item} className="inline-block">{char === " " ? "\u00A0" : char}</motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

/* 🚀 REDESIGNED: Feature row with new icon */
const Feature = ({ children }: { children: React.ReactNode }) => (
  <motion.li 
    className="flex items-start gap-3"
    variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
  >
    <CheckCircle className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" />
    <span className="text-sm text-white/80">{children}</span>
  </motion.li>
);

/* 🚀 REDESIGNED: Expandable accordion section with animation */
const ExpandableSection = ({ title, features }: { title: string; features: string[] }) => {
  const [open, setOpen] = useState(false);
  
  // ✅ FIXED: Explicitly typed variants for TypeScript to resolve the error
  const contentVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    show: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.05, duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="border-b border-white/10 last:border-b-0 py-3">
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-2 text-left"
        whileHover={{ x: 2 }}
      >
        <span className="font-semibold text-white">{title}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown className="text-cyan-400"/>
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            key="content"
            variants={contentVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-3 pl-2 space-y-2 overflow-hidden"
          >
            {features.map((f, idx) => <Feature key={idx}>{f}</Feature>)}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

/* 🚀 REDESIGNED: Pricing Card with animation */
const PricingCard = ({ title, price, per, popular = false, expandableSections = [], variants }: { title: string; price: string; per?: string; popular?: boolean; expandableSections?: { title: string; features: string[] }[]; variants: Variants }) => {
  const navigate = useNavigate();
  const handleContactUs = () => {
    localStorage.setItem("selectedService", title);
    navigate("/contact");
  };

  return (
    <motion.div 
      className={`relative rounded-3xl border ${popular ? 'border-cyan-500/50' : 'border-white/10'} p-8 shadow-2xl bg-black/40 backdrop-blur-xl group`}
      variants={variants}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-500/30">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title.split('–')[0].trim()}</h3>
        <div className="text-5xl font-bold text-white">{price}</div>
        {per && <div className="text-sm text-white/70">{per}</div>}
      </div>
      <div className="mb-6">{expandableSections.map((s, i) => <ExpandableSection key={i} {...s} />)}</div>
      <div className="mt-8 flex flex-col space-y-3">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button onClick={handleContactUs} className="w-full bg-white text-black hover:bg-white/90 px-6 py-4 text-lg font-semibold rounded-lg">Contact Us</Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="https://calendly.com/team-thegrowthgenie/30min" target="_blank" rel="noopener noreferrer" className="w-full block">
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 px-6 py-4 text-lg font-semibold rounded-lg">Book a Meeting</Button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PricingPage: React.FC = () => {
  const pricingSchema = { /* ... (schema data remains unchanged) ... */ };
  const breadcrumbSchema = { /* ... (schema data remains unchanged) ... */ };

  // ✅ FIXED: Explicitly typed all variants for TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8 } },
  };
  const popularCardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', duration: 0.8, delay: 0.1 } },
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      <Helmet>
        <title>Pricing Plans | The Growth Genie – YouTube Automation & Content Services</title>
        <meta name="description" content="Choose from our Starter, Growth, and Scale plans for YouTube automation, content creation, and channel management. Transparent pricing to help you grow."/>
        <link rel="canonical" href="https://www.thegrowthgenie.com/pricing" />
        <script type="application/ld+json">{JSON.stringify(pricingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <div className="absolute -top-1/4 left-0 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-3xl animate-pulse-slow opacity-20"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slower opacity-20"></div>
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slower opacity-20"></div>
      </div>
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 container mx-auto px-6">
        <section className="py-28 text-center">
          <AnimatedText text="Transparent Plans for Your Growth" el="h1" className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"/>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-xl text-white/80 max-w-3xl mx-auto">
            Choose the perfect package to kickstart, grow, or scale your content empire. No hidden fees, just pure value.
          </motion.p>
        </section>

        <motion.section 
          className="grid gap-8 grid-cols-1 lg:grid-cols-3 items-start mb-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <PricingCard
            title="Starter – $699/month"
            price="$699"
            per="/month"
            variants={cardVariants}
            expandableSections={[
              { title: "🎥 Content Production", features: ["4 high-quality videos per month", "Scriptwriting included", "Professional editing with smooth cuts & pacing", "1 custom thumbnail per video", "Copyright-free background music & sound effects"] },
              { title: "📌 Channel Setup & Optimization", features: ["Basic channel optimization checklist (titles, tags, descriptions, end screens)", "Initial content strategy call (one-time) to align on niche & style"] },
              { title: "🎯 Support & Guidance", features: ["Monthly progress check-in (15 mins) to review performance & next steps", "Access to starter resources library (thumbnail templates, title formulas, growth tips)"] },
              { title: "💡 Positioning / Pitch", features: ["👉 “Perfect if you’re just starting out and want consistent, professional uploads with the right strategy from day one.”"] },
              { title: "⚡ Bonus Upgrade Ideas", features: ["Add 1 free repurposed short per month → shows extra love without much work", "Offer a 'launch boost' guide PDF → quick wins for new creators", "Optional upgrade to Growth plan anytime with priority onboarding"] },
            ]}
          />
          <PricingCard
            title="Growth – $1499/month"
            price="$1499"
            per="/month"
            popular
            variants={popularCardVariants}
            expandableSections={[
              { title: "🎥 Content Production", features: ["6 high-quality videos per month", "Scriptwriting included", "Professional editing with pro effects", "Voiceover included (up to 10 min per video)", "Premium thumbnails (2 versions for A/B testing)"] },
              { title: "🔍 Channel Growth Tools", features: ["Detailed channel audit (one-time at onboarding)", "Monthly analytics report with growth suggestions", "Basic retention & CTR optimization guidance"] },
              { title: "🤝 Community & Mentorship", features: ["Access to private creator community (Slack/Discord) for networking", "Bi-weekly group calls → Q&A, growth strategies, and accountability", "Learn from other creators scaling alongside you"] },
              { title: "📈 Positioning / Pitch", features: ["👉 “More than just videos — this package gives you pro-level content, ongoing channel insights, and a community of like-minded creators to keep you growing consistently.”"] },
              { title: "⚡ Bonus Ideas (Optional Upgrades)", features: ["Add short-form repurposed clips (2 per video) → great for YouTube Shorts/TikTok", "Quarterly mini-workshop: trend breakdowns & content hacks", "“Next-level support” upgrade → priority edit requests"] },
            ]}
          />
          <PricingCard
            title="Scale – $2999/month"
            price="$2999"
            per="/month"
            variants={cardVariants}
            expandableSections={[
              { title: "🎥 Content Production (Baseline)", features: ["8 high-quality long-form videos per month", "End-to-end done-for-you (script → edit → voiceover → thumbnail → publish-ready)", "Advanced editing with motion graphics", "Premium thumbnails with CTR testing", "Dedicated channel manager"] },
              { title: "📈 Business Consulting (Growth Layer)", features: ["2× monthly YouTube Business Consulting Calls", "Monetization roadmap (ads, affiliates, products, sponsorships)", "Brand positioning & growth hacks", "Audience retention + scaling systems"] },
              { title: "🛠️ Productization Help", features: ["Guidance to create digital products (courses, eBooks, merch)", "Funnels, landing pages & email marketing basics", "Plug-and-play templates for product launches"] },
              { title: "💰 Sponsorship & Revenue Streams", features: ["Sponsor-ready media kit", "Brand deal negotiation guidance", "Monthly Revenue Opportunities Report (brands & affiliates in your niche)"] },
              { title: "🏆 Creator Mentorship & Support", features: ["Private 1-on-1 mentorship with our team (automation, outsourcing, scaling)", "Access to private Slack/Discord creator community", "Weekly accountability check-ins & performance reviews"] },
              { title: "⚡ Bonus Value", features: ["Done-for-you YouTube product funnels (mini course/eBook as your first offer)", "Lifetime asset ownership (scripts, edits, templates are yours forever)", "90-day growth roadmap (views, subscribers, monetization projections)"] },
            ]}
          />
        </motion.section>

        <motion.section 
          className="text-center pb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h3>
            <p className="text-white/70 mb-6 leading-relaxed">Have unique requirements or need an enterprise plan? We're here to build the perfect solution for you.</p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg">Contact Sales</Button>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PricingPage;