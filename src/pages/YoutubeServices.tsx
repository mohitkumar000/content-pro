// src/pages/YoutubeServices.tsx
import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

const YoutubeServices = () => {
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
      title: "Video Scripting",
      description: "Engaging, researched, audience-tailored scripts that convert",
      features: [
        "Audience research and targeting",
        "Hook writing and storytelling",
        "SEO-optimized scripts",
        "Call-to-action integration",
        "Multiple revision rounds",
      ],
    },
    {
      title: "Video Editing",
      description: "Professional edits with perfect pacing and effects",
      features: [
        "Professional cuts and transitions",
        "Color grading and audio mixing",
        "Motion graphics and effects",
        "Captions and subtitles",
        "Thumbnail creation included",
      ],
    },
    {
      title: "Thumbnail Design",
      description: "Click-worthy, high-CTR thumbnails that get views",
      features: [
        "A/B tested designs",
        "Eye-catching visuals",
        "Platform optimization",
        "Brand consistency",
        "Fast 24-hour turnaround",
      ],
    },
    {
      title: "SEO Optimization",
      description: "Keyword research and metadata for maximum reach",
      features: [
        "Keyword research and analysis",
        "Optimized titles and descriptions",
        "Strategic tag placement",
        "Hashtag strategies",
        "Competitor analysis",
      ],
    },
    {
      title: "Channel Setup & Branding",
      description: "Complete channel branding for professional presence",
      features: [
        "Channel banner design",
        "Profile optimization",
        "Playlist organization",
        "Brand guideline creation",
        "Channel trailer scripting",
      ],
    },
    {
      title: "Content Strategy",
      description: "Data-driven content planning for consistent growth",
      features: [
        "Niche research and analysis",
        "Content calendar creation",
        "Trend analysis and forecasting",
        "Competitor research",
        "Performance tracking setup",
      ],
    },
    {
      title: "YouTube Shorts Creation",
      description: "Viral-style vertical videos for maximum engagement",
      features: [
        "Fast-paced editing style",
        "Trending audio integration",
        "Viral hook techniques",
        "Platform-specific optimization",
        "Batch content creation",
      ],
    },
    {
      title: "Voiceover Services",
      description: "Professional narration in different tones and styles",
      features: [
        "AI and human voiceover options",
        "Multiple tone variations",
        "Script timing optimization",
        "Audio quality enhancement",
        "Multiple language support",
      ],
    },
    {
      title: "End Screens & Cards",
      description: "Strategic viewer retention and conversion setup",
      features: [
        "End screen optimization",
        "Card placement strategy",
        "Conversion funnel design",
        "Viewer retention analysis",
        "A/B testing setup",
      ],
    },
    {
      title: "Analytics & Growth Reports",
      description: "Monthly performance breakdowns and insights",
      features: [
        "Detailed analytics reports",
        "Growth trend analysis",
        "Performance optimization tips",
        "Competitor benchmarking",
        "Monthly strategy sessions",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 -z-10"></div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-20">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                YouTube That
                <span className="block bg-white text-black px-6 py-4 rounded-2xl mt-4 border border-black/10 shadow-elevated">
                  Scales & Converts
                </span>
              </h1>

              <div className="text-2xl md:text-4xl font-semibold text-white/95 mb-8 leading-relaxed">
                From Scripts to Analytics – Your Complete YouTube Growth Partner.
              </div>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Professional YouTube automation services to grow your channel,
                engage your audience, and drive real business results with
                consistent, high-quality content.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-white text-black hover:bg-white/90 px-10 py-6 text-lg shadow-elevated hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-white/50 text-white bg-white/10 hover:bg-white/20 px-10 py-6 text-lg transition-all duration-300 backdrop-blur-sm hover:scale-105 font-semibold"
                >
                  View Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Complete YouTube Solutions
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Everything you need to build, grow, and monetize your YouTube
                channel with professional quality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <div key={index} className="bg-grid-lines rounded-2xl p-1">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-form" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Scale Your YouTube Channel?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your YouTube goals
                with our comprehensive automation services.
              </p>

              {/* ✅ Directly use ContactForm (no outer border/frame) */}
              <ContactForm
                subject={selectedService ? `Interest in ${selectedService}` : ""}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YoutubeServices;
