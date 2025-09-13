// src/pages/Index.tsx
import { useEffect, useState, useRef } from "react";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, Variants, useInView, animate } from "framer-motion";

// ✨ Counter animation
const Counter = ({ from, to, suffix = "" }: { from: number; to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, suffix]);

  return <span ref={ref} />;
};

// ✨ Animated text
const AnimatedText = ({ text, el: Wrapper = "p", className }: { text: string; el?: keyof JSX.IntrinsicElements; className?: string }) => {
  const textVariants: Variants = {
    hidden: { opacity: 0 },
    show: (i = 1) => ({ opacity: 1, transition: { staggerChildren: 0.08, delayChildren: i * 0.1 } }),
  };
  const charVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
  };
  return (
    <Wrapper className={className}>
      <motion.span variants={textVariants} initial="hidden" animate="show">
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={charVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

const Index = () => {
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const service = localStorage.getItem("selectedService");
    if (service) {
      setSelectedService(service);
      localStorage.removeItem("selectedService");
    }
  }, []);

  const featuredServices = [
    {
      title: "YouTube Automation",
      description: "End-to-end YouTube channel management, from scripting and editing to branding and analytics reporting.",
      features: ["Video scripting and editing", "Thumbnail design and SEO", "Channel branding and strategy", "Performance analytics"],
    },
    {
      title: "Professional Copywriting",
      description: "Conversion-focused copywriting for digital platforms, optimized for engagement, clarity, and brand voice.",
      features: ["Social media ghostwriting", "Blog and article writing", "Email campaigns and sales copy", "Landing page optimization"],
    },
    {
      title: "Content Strategy & More",
      description: "Custom content strategies tailored for creators and brands, including planning, research, and execution.",
      features: ["Content repurposing and planning", "Research and fact-checking", "Podcast support services", "Digital product creation"],
    },
  ];

  // ✅ Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Growth Genie",
    url: "https://www.thegrowthgenie.com",
    logo: "https://www.thegrowthgenie.com/logo.png",
    sameAs: ["https://x.com/Thegrowthgenie9", "https://www.linkedin.com/company/thegrowthgenie"],
    contactPoint: [{ "@type": "ContactPoint", email: "team@thegrowthgenie.com", contactType: "Customer Support", availableLanguage: "English" }],
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thegrowthgenie.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.thegrowthgenie.com/#services" },
      { "@type": "ListItem", position: 3, name: "Contact", item: "https://www.thegrowthgenie.com/contact" },
    ],
  };

  const containerVariants: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const fadeInUp: Variants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } } };

  return (
    <div className="relative min-h-screen bg-[#010101] text-white overflow-x-hidden">
      <Helmet>
        <title>The Growth Genie | YouTube Automation, Copywriting & Content Services</title>
        <meta name="description" content="The Growth Genie helps creators and businesses scale with YouTube automation, faceless video editing, copywriting, and growth strategies. Trusted by 100+ creators worldwide." />
        <link rel="canonical" href="https://www.thegrowthgenie.com/" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ✅ HERO SECTION (unchanged) */}
      <section className="relative py-28 lg:py-40 overflow-hidden z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 text-sm text-white/80">
              100% Premium Content Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Unlimited Content, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Single Monthly Charge</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10">
              TheGrowthGenie delivers professional content & YouTube services within budget — ensuring accessibility for everyone.
            </p>
            <div className="flex justify-center mb-6 gap-4">
              <Button onClick={() => navigate("/pricing")} className="px-10 py-5 text-lg bg-gradient-to-r from-indigo-500 to-blue-600 hover:opacity-90 shadow-lg hover:shadow-indigo-500/40 transition-all duration-300">Our Pricing</Button>
              <Button onClick={() => navigate("/our-work")} className="px-10 py-5 text-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 shadow-lg hover:shadow-pink-500/40 transition-all duration-300">Our Work</Button>
            </div>
            <p className="text-sm text-white/60">Pause or cancel anytime. No hidden commitments.</p>
          </div>
        </div>
      </section>

      {/* 🚀 Floating Marquee */}
      <div className="relative overflow-hidden py-6 border-y border-white/10 bg-black/40 z-10">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 text-white/80 text-lg font-medium">
          {["▶️ YouTube Automation", "🎬 Video Editing", "✍️ Copywriting", "📊 Analytics", "🖼️ Thumbnail Design", "🚀 Growth Strategy",
            "▶️ YouTube Automation", "🎬 Video Editing", "✍️ Copywriting", "📊 Analytics", "🖼️ Thumbnail Design", "🚀 Growth Strategy"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">{item}</div>
          ))}
        </div>
      </div>

      {/* 🚀 Counters */}
      <section className="py-24 relative z-10 bg-[#010101]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div variants={fadeInUp} className="bg-white/5 rounded-2xl p-10 border border-white/10 shadow-lg">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"><Counter from={0} to={100} suffix="+" /></div>
              <div className="text-xl font-semibold mb-2">Creators Served</div>
              <p className="text-white/70">Across all platforms</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/5 rounded-2xl p-10 border border-white/10 shadow-lg">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"><Counter from={0} to={6} suffix="+" /></div>
              <div className="text-xl font-semibold mb-2">Years of Trust</div>
              <p className="text-white/70">Proven track record</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/5 rounded-2xl p-10 border border-white/10 shadow-lg">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"><Counter from={0} to={98} suffix="%" /></div>
              <div className="text-xl font-semibold mb-2">Satisfaction Rate</div>
              <p className="text-white/70">Happy creators</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🛠 Services */}
      <section id="services" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Content Solutions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">From YouTube automation to professional copywriting, we handle every aspect of your content strategy with precision and creativity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {featuredServices.map((service, idx) => <ServiceCard key={idx} {...service} />)}
          </div>
          <div className="text-center">
            <p className="text-xl text-white/70 mb-8">Ready to transform your content strategy?</p>
            <Button onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })} className="bg-gradient-primary hover:opacity-90 px-10 py-6 text-lg shadow-glow hover:shadow-elevated transition-all duration-300 font-semibold">Get Your Free Consultation</Button>
          </div>
        </div>
      </section>

      {/* 🎯 Why Choose Us Funky */}
      <section className="py-24 relative z-10 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={containerVariants} className="text-center mb-20">
            <AnimatedText text="Why Choose The Growth Genie?" el="h2" className="text-4xl md:text-5xl font-bold mb-6" />
            <motion.p variants={fadeInUp} className="text-xl text-white/70 max-w-3xl mx-auto">We blend creativity, strategy, and proven results — making sure your content stands out and drives growth.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "✓", title: "Proven Results", desc: "Track record of growing channels and converting audiences.", gradient: "from-green-400 to-emerald-600" },
              { icon: "⚡", title: "Fast Turnaround", desc: "Quick delivery without compromising on quality.", gradient: "from-yellow-400 to-orange-500" },
              { icon: "🎯", title: "Tailored Strategy", desc: "Custom approaches based on your goals and audience.", gradient: "from-pink-500 to-red-500" },
              { icon: "📈", title: "Growth Focused", desc: "Every piece of content is optimized for growth & engagement.", gradient: "from-cyan-400 to-blue-600" },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} whileHover={{ scale: 1.05, rotate: -1 }} className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition duration-500`}></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-20 h-20 flex items-center justify-center rounded-xl text-4xl font-bold text-white shadow-lg shadow-black/40 bg-gradient-to-br ${item.gradient}`}>{item.icon}</div>
                  <h3 className="text-2xl font-semibold mt-6 mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 📩 Contact */}
      <section id="contact-form" className="py-24 relative overflow-hidden z-10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={containerVariants} className="max-w-3xl mx-auto text-center">
            <AnimatedText text="Let's Work Together" el="h2" className="text-4xl md:text-5xl font-bold text-white mb-6" />
            <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">Ready to take your content to the next level? Get in touch and let’s create something amazing together.</motion.p>
            <motion.div variants={fadeInUp}><ContactForm subject={selectedService ? `Interest in ${selectedService}` : ""} /></motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
