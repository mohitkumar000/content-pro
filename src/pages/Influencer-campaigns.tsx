// src/pages/Campaigns.tsx
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Campaigns = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <Helmet>
        <title>AI Creator Campaigns | The Growth Genie</title>
        <meta
          name="description"
          content="Scale launches, fill pipelines, and dominate social with creator-led campaigns. Trusted by AI leaders like Lyzr, HeyBoss, and Revid."
        />
      </Helmet>

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />
      </div>

      {/* Hero */}
          {/* Hero */}
      <section className="relative py-28 text-center z-10 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-700/20 to-pink-600/20 blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            We Work With{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
              AI Companies
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            Scale launches, fill pipelines, and dominate social with
            <span className="text-indigo-300 font-semibold"> creator-led campaigns</span>. 
            We’ve run campaigns with{" "}
            <span className="font-bold text-pink-300">Lyzr AI</span>,{" "}
            <span className="font-bold text-purple-300">HeyBoss AI</span>, and{" "}
            <span className="font-bold text-indigo-300">Revid AI</span>, and partnered with{" "}
            <span className="font-bold text-white">100+ brands</span> across tech.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"
          />
        </div>
      </section>


    {/* What we do */}
<section className="py-20 relative z-10 border-t border-white/10">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      What We Do
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {[
        {
          icon: "🚀",
          title: "End-to-End Campaigns",
          desc: "From strategy → creator casting → posts → reporting. We manage everything.",
        },
        {
          icon: "👥",
          title: "Influencer Network",
          desc: "100+ verified creators across LinkedIn, X, and YouTube — ready to scale your brand.",
        },
        {
          icon: "🎬",
          title: "UGC & Founder Content",
          desc: "Creator collabs, founder-led videos, and paid amplification for max reach.",
        },
        {
          icon: "♻️",
          title: "Multi-Platform Repurposing",
          desc: "We turn your campaign into Shorts, Reels, carousels, and viral threads.",
        },
        {
          icon: "📊",
          title: "Reporting & Dashboards",
          desc: "Track every impression, click, and lead with weekly reports & live dashboards.",
        },
        {
          icon: "🤖",
          title: "AI-Powered Targeting",
          desc: "Smart insights to match the right creators with the right audience — maximizing ROI.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.07 }}
          className="p-8 rounded-3xl bg-gradient-to-b from-black/70 to-black/40 border border-white/10 shadow-lg hover:shadow-indigo-500/30 transition-all text-center group"
        >
          <div className="text-5xl mb-5 transform group-hover:scale-125 transition-transform duration-300">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Credibility */}
       {/* Credibility */}
      <section className="py-20 bg-black/40 border-t border-b border-white/10 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Credibility Snapshots
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                name: "Lyzr AI",
                desc: "Privacy-first agent SDKs; agent-led raise covered in tech media.",
                link: "https://www.lyzr.ai",
                color: "from-purple-500 to-indigo-600",
                icon: "🔒",
              },
              {
                name: "HeyBoss AI",
                desc: "No-code AI builder; widely known for appointing Astra as AI CEO.",
                link: "https://heyboss.ai",
                color: "from-pink-500 to-rose-600",
                icon: "🤖",
              },
              {
                name: "Revid AI",
                desc: "AI video tool to ideate & publish viral shorts across platforms.",
                link: "https://www.revid.ai",
                color: "from-blue-500 to-cyan-600",
                icon: "🎬",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`p-8 rounded-3xl shadow-xl bg-gradient-to-br ${item.color} text-center relative overflow-hidden transition`}
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{item.icon}</div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Glow overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-10 transition rounded-3xl" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>


      {/* Process */}
           {/* Process */}
      <section className="py-20 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Process
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Brief & ICP",
                desc: "Define offer, promise, and proof",
                color: "from-pink-500 to-rose-500",
                icon: "📝",
              },
              {
                step: "2",
                title: "Creator Casting",
                desc: "Shortlist by audience fit & past performance",
                color: "from-indigo-500 to-purple-600",
                icon: "🎭",
              },
              {
                step: "3",
                title: "Creative Sprint",
                desc: "Hooks, scripts, assets",
                color: "from-blue-500 to-cyan-500",
                icon: "⚡",
              },
              {
                step: "4",
                title: "Launch",
                desc: "Orchestrated posting + cross-platform",
                color: "from-emerald-500 to-green-600",
                icon: "🚀",
              },
              {
                step: "5",
                title: "Measure & Optimize",
                desc: "Double down on winning angles",
                color: "from-yellow-500 to-orange-500",
                icon: "📊",
              },
              {
                step: "6",
                title: "Report",
                desc: "Final breakdown & next steps",
                color: "from-red-500 to-pink-600",
                icon: "📑",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`p-8 rounded-3xl text-center shadow-xl bg-gradient-to-br ${item.color} relative overflow-hidden`}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{item.icon}</div>
                {/* Step Number */}
                <span className="absolute top-4 right-4 text-5xl font-bold text-white/20">
                  {item.step}
                </span>
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
            {/* CTA */}
      <section className="py-24 relative z-10">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-700/20 to-pink-600/20 blur-3xl" />

        <div className="container mx-auto px-6 max-w-3xl relative text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
          >
            Ready to Scale with <br /> AI Creator Campaigns?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
          >
            Book a <span className="font-semibold text-indigo-300">20-min strategy call</span> → 
            See creator fits, campaign angles, and a 
            <span className="font-semibold text-pink-300"> sample content calendar</span> for your launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
           <a
  href="https://calendly.com/team-thegrowthgenie/30min"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white px-10 py-5 text-lg md:text-xl font-semibold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
    🚀 Book My Strategy Call
  </Button>
</a>

          </motion.div>

          {/* Sub-note */}
          <p className="mt-6 text-sm text-white/60">
            No spam. No fluff. Just a tailored growth roadmap for your brand.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Campaigns;
