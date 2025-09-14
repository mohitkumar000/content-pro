// src/pages/OtherServices.tsx
import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet-async";
import { motion, Variants } from "framer-motion";

const OtherServices = () => {
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const service = localStorage.getItem("selectedService");
    if (service) {
      setSelectedService(service);
      localStorage.removeItem("selectedService");
    }
  }, []);

  const services = [
    {
      title: "Personalized Chatbots 🤖",
      description: "AI-powered chatbots customized to your brand voice.",
      features: [
        "Works across websites, WhatsApp, and social media",
        "Handles FAQs, leads, and sales 24/7",
        "Improves customer experience",
        "Reduces manual workload",
      ],
    },
    {
      title: "Web App Development 🌐",
      description: "Custom web apps designed for your business workflow.",
      features: [
        "Built with React, Node.js & Express",
        "Scalable from MVPs to enterprise apps",
        "Automates operations & workflows",
        "Future-ready architecture",
      ],
    },
    {
      title: "Website Development 💻",
      description: "Modern, responsive, and SEO-friendly websites.",
      features: [
        "Frontend + backend development",
        "Landing pages, portals & e-commerce",
        "Optimized for performance & speed",
        "Boosts conversions & trust",
      ],
    },
    {
      title: "Personalized AI Agents 🤝",
      description: "Custom AI agents for sales, marketing, or support.",
      features: [
        "Lead generation & data collection",
        "Automates repetitive tasks",
        "Saves time & costs",
        "Increases productivity",
      ],
    },
  
    {
      title: "Social Media & Marketing 📱",
      description: "Strategies to grow your brand & capture leads.",
      features: [
        "Facebook & Instagram Ads",
        "Social media management & growth",
        "Instagram automation for DMs",
        "Brand presence & engagement",
      ],
    },
    {
      title: "Custom Automation Solutions ⚡",
      description: "Automation to streamline your business.",
      features: [
        "API, Zapier & Make integrations",
        "CRM automation (HubSpot, Salesforce)",
        "AI-powered analytics dashboards",
        "Workflow automation & reporting",
      ],
    },
  ];

  // ✅ Animation settings
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
  };

  // ✅ JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Solutions & Automation",
    provider: {
      "@type": "Organization",
      name: "The Growth Genie",
      url: "https://www.thegrowthgenie.com",
    },
    serviceType: "AI, Automation & Content",
    areaServed: { "@type": "Place", name: "Worldwide" },
    description:
      "The Growth Genie offers AI chatbots, web apps, websites, AI agents, copywriting, social media marketing, and custom automation solutions.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thegrowthgenie.com/" },
      { "@type": "ListItem", position: 2, name: "Other Services", item: "https://www.thegrowthgenie.com/other-services" },
    ],
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* ✅ SEO */}
      <Helmet>
        <title>Other Services | The Growth Genie – AI, Web Apps & Marketing</title>
        <meta
          name="description"
          content="At TheGrowthGenie, we go beyond YouTube automation with AI chatbots, web apps, websites, AI agents, copywriting, social media marketing, and custom automation solutions."
        />
        <link rel="canonical" href="https://www.thegrowthgenie.com/other-services" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* 🌌 Grid Background + Gradient Glow */}
      <div className="absolute inset-0 -z-10 bg-black">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {/* Glowing gradients */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* 🌍 Services Grid */}
      <section className="py-24 relative z-10 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-black opacity-70 animate-gradient-slow"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              End-to-End Digital Solutions
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Developers, marketers, copywriters & AI experts helping you scale faster 🚀
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition-all group"
              >
                {/* Hover glow border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🌟 Why Choose Us */}
      <section className="py-24 relative z-10 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-cyan-900/20 to-black opacity-70 animate-gradient-slow"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Why Choose TheGrowthGeniie?
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {[
              "✔ Full-stack team: developers, designers, copywriters, marketers, AI experts",
              "✔ Scalable solutions for startups and enterprises",
              "✔ Transparent pricing with fast delivery",
              "✔ Continuous support and updates",
            ].map((point, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-500/40 transition-all group"
              >
                {/* Glow border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>
                <p className="text-lg text-white/90 relative z-10">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 📩 Contact Section */}
      <section id="contact-form" className="py-24 relative overflow-hidden z-10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let’s Build Something Extraordinary
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Ready to scale with AI, automation, and modern digital solutions? Let’s talk.
            </p>
            <ContactForm subject={selectedService ? `Interest in ${selectedService}` : ""} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherServices;
