// src/pages/OtherServices.tsx
import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet-async";

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
      title: "Social Media Content Strategy",
      description: "Comprehensive strategies for LinkedIn, Instagram, and TikTok",
      features: [
        "Platform-specific strategies",
        "Content calendar development",
        "Audience analysis and targeting",
        "Hashtag research and optimization",
        "Cross-platform integration",
      ],
    },
    {
      title: "Content Repurposing",
      description: "Transform YouTube videos into blogs, tweets, and reels",
      features: [
        "Multi-format content creation",
        "Platform optimization",
        "SEO adaptation",
        "Visual asset creation",
        "Content series development",
      ],
    },
    {
      title: "Podcast Show Notes & Summaries",
      description: "SEO-friendly transcripts and engaging descriptions",
      features: [
        "Professional transcription",
        "SEO-optimized show notes",
        "Episode summaries",
        "Timestamp creation",
        "Social media snippets",
      ],
    },
    {
      title: "Research & Fact-Checking",
      description: "Thorough research for niche content in finance, health, tech",
      features: [
        "Academic source verification",
        "Industry expert consultation",
        "Statistical analysis",
        "Compliance checking",
        "Citation and reference formatting",
      ],
    },
    {
      title: "Ghostwriting (Books/Guides)",
      description: "eBooks, lead magnets, and comprehensive digital products",
      features: [
        "Full-length eBook writing",
        "Lead magnet creation",
        "Course material development",
        "White paper writing",
        "Industry report creation",
      ],
    },
    {
      title: "Script-to-Blog Conversion",
      description: "Transform video and podcast content into engaging articles",
      features: [
        "Video script adaptation",
        "SEO optimization",
        "Article structuring",
        "Visual content suggestions",
        "Call-to-action integration",
      ],
    },
    {
      title: "Content Calendar Management",
      description: "Organized, scheduled posting systems across platforms",
      features: [
        "Multi-platform scheduling",
        "Content theme planning",
        "Seasonal content preparation",
        "Performance tracking setup",
        "Team collaboration tools",
      ],
    },
  ];

  // ✅ JSON-LD Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Content Strategy & Marketing Services",
    provider: {
      "@type": "Organization",
      name: "The Growth Genie",
      url: "https://www.thegrowthgenie.com",
    },
    serviceType: "Content Services",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.thegrowthgenie.com/other-services",
      priceCurrency: "USD",
      price: "699",
      description:
        "Professional content services including social media strategy, repurposing, podcast notes, ghostwriting, and content calendar management.",
    },
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
        name: "Other Services",
        item: "https://www.thegrowthgenie.com/other-services",
      },
    ],
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Other Services | The Growth Genie – Content Strategy, Repurposing &
          Ghostwriting
        </title>
        <meta
          name="description"
          content="The Growth Genie offers specialized content services including social media strategy, content repurposing, podcast notes, ghostwriting, and calendar management to boost your brand."
        />
        <meta
          name="keywords"
          content="content repurposing, social media strategy, ghostwriting, podcast notes, research, content calendar, The Growth Genie"
        />
        <link
          rel="canonical"
          href="https://www.thegrowthgenie.com/other-services"
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* 3D Grid Background */}
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

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Content Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized services to amplify your content across all channels
              and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Expand Your Content Strategy?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let's discuss how our specialized services can help you achieve
              your content goals.
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

export default OtherServices;
