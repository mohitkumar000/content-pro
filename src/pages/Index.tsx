// src/pages/Index.tsx
import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
      description:
        "End-to-end YouTube channel management, from scripting and editing to branding and analytics reporting.",
      features: [
        "Video scripting and editing",
        "Thumbnail design and SEO",
        "Channel branding and strategy",
        "Performance analytics",
      ],
    },
    {
      title: "Professional Copywriting",
      description:
        "Conversion-focused copywriting for digital platforms, optimized for engagement, clarity, and brand voice.",
      features: [
        "Social media ghostwriting",
        "Blog and article writing",
        "Email campaigns and sales copy",
        "Landing page optimization",
      ],
    },
    {
      title: "Content Strategy & More",
      description:
        "Custom content strategies tailored for creators and brands, including planning, research, and execution.",
      features: [
        "Content repurposing and planning",
        "Research and fact-checking",
        "Podcast support services",
        "Digital product creation",
      ],
    },
  ];

  // ✅ Schema.org structured data
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Growth Genie",
    url: "https://www.thegrowthgenie.com",
    logo: "https://www.thegrowthgenie.com/assets/logo.png",
    sameAs: [
      "https://x.com/Thegrowthgenie9",
      "https://www.linkedin.com/company/thegrowthgenie",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "team@thegrowthgenie.com",
        contactType: "Customer Support",
        availableLanguage: "English",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.thegrowthgenie.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.thegrowthgenie.com/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: "https://www.thegrowthgenie.com/contact",
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ✅ SEO Meta */}
      <Helmet>
        <title>
          The Growth Genie | YouTube Automation, Copywriting & Content Services
        </title>
        <meta
          name="description"
          content="The Growth Genie helps creators and businesses scale with YouTube automation, faceless video editing, copywriting, and growth strategies. Trusted by 100+ creators worldwide."
        />
        <link rel="canonical" href="https://www.thegrowthgenie.com/" />
        <script type="application/ld+json">
          {JSON.stringify(orgSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* 🌌 Starfield Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:40px_40px] animate-twinkle"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-black to-purple-900/40"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-28 lg:py-40 overflow-hidden z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 text-sm text-white/80">
              100% Premium Content Services
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Unlimited Content, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Single Monthly Charge
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10">
              TheGrowthGenie delivers professional content & YouTube services
              within budget — ensuring accessibility for everyone.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center mb-6 gap-4">
              <Button
                onClick={() => navigate("/pricing")}
                className="px-10 py-5 text-lg bg-gradient-to-r from-indigo-500 to-blue-600 hover:opacity-90 shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
              >
                Our Pricing
              </Button>

              <Button
                onClick={() => navigate("/our-work")}
                className="px-10 py-5 text-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
              >
                Our Work
              </Button>
            </div>

            <p className="text-sm text-white/60">
              Pause or cancel anytime. No hidden commitments.
            </p>
          </div>
        </div>
      </section>

      {/* 🚀 Floating Services Line */}
      <div className="relative overflow-hidden py-6 border-y border-white/10 bg-black/40 z-10">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 text-white/80 text-lg font-medium">
          <div className="flex items-center gap-2">▶️ YouTube Automation</div>
          <div className="flex items-center gap-2">🎬 Video Editing</div>
          <div className="flex items-center gap-2">✍️ Copywriting</div>
          <div className="flex items-center gap-2">📊 Analytics</div>
          <div className="flex items-center gap-2">🖼️ Thumbnail Design</div>
          <div className="flex items-center gap-2">🚀 Growth Strategy</div>
          {/* Duplicate for loop */}
          <div className="flex items-center gap-2">▶️ YouTube Automation</div>
          <div className="flex items-center gap-2">🎬 Video Editing</div>
          <div className="flex items-center gap-2">✍️ Copywriting</div>
          <div className="flex items-center gap-2">📊 Analytics</div>
          <div className="flex items-center gap-2">🖼️ Thumbnail Design</div>
          <div className="flex items-center gap-2">🚀 Growth Strategy</div>
        </div>
      </div>

      {/* Social Proof Section */}
      {/* ... ✅ same content (unchanged) ... */}

      {/* Services Overview */}
      {/* ... ✅ same content (unchanged) ... */}

      {/* Why Choose Us */}
      {/* ... ✅ same content (unchanged) ... */}

      {/* Contact Section */}
      <section id="contact-form" className="py-24 relative overflow-hidden z-10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Ready to take your content to the next level? Get in touch and
              let's create something amazing together.
            </p>
            <ContactForm
              subject={selectedService ? `Interest in ${selectedService}` : ""}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
