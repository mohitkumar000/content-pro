import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

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
        "Cross-platform integration"
      ]
    },
    {
      title: "Content Repurposing",
      description: "Transform YouTube videos into blogs, tweets, and reels",
      features: [
        "Multi-format content creation",
        "Platform optimization",
        "SEO adaptation",
        "Visual asset creation",
        "Content series development"
      ]
    },
    {
      title: "Podcast Show Notes & Summaries",
      description: "SEO-friendly transcripts and engaging descriptions",
      features: [
        "Professional transcription",
        "SEO-optimized show notes",
        "Episode summaries",
        "Timestamp creation",
        "Social media snippets"
      ]
    },
    {
      title: "Research & Fact-Checking",
      description: "Thorough research for niche content in finance, health, tech",
      features: [
        "Academic source verification",
        "Industry expert consultation",
        "Statistical analysis",
        "Compliance checking",
        "Citation and reference formatting"
      ]
    },
    {
      title: "Ghostwriting (Books/Guides)",
      description: "eBooks, lead magnets, and comprehensive digital products",
      features: [
        "Full-length eBook writing",
        "Lead magnet creation",
        "Course material development",
        "White paper writing",
        "Industry report creation"
      ]
    },
    {
      title: "Script-to-Blog Conversion",
      description: "Transform video and podcast content into engaging articles",
      features: [
        "Video script adaptation",
        "SEO optimization",
        "Article structuring",
        "Visual content suggestions",
        "Call-to-action integration"
      ]
    },
    {
      title: "Content Calendar Management",
      description: "Organized, scheduled posting systems across platforms",
      features: [
        "Multi-platform scheduling",
        "Content theme planning",
        "Seasonal content preparation",
        "Performance tracking setup",
        "Team collaboration tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
     
      {/* Hero Section */}
      <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Services That
              <span className="block bg-white text-black px-6 py-4 rounded-2xl mt-4 border border-black/10 shadow-elevated">
                Complete & Scale
              </span>
            </h1>

            <div className="text-2xl md:text-4xl font-semibold text-white/95 mb-8 leading-relaxed">
              From Research to Repurposing – Your Complete Content Ecosystem Partner.
            </div>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Specialized content solutions to complete your digital marketing ecosystem.
              From research to repurposing, we've got every aspect of your content strategy covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-black hover:bg-white/90 px-10 py-6 text-lg shadow-elevated hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold"
              >
                Start Your Project
              </button>

              <button
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
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
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Content Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized services to amplify your content across all channels and platforms
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
      <section id="contact-form" className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Expand Your Content Strategy?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let's discuss how our specialized services can help you achieve your content goals.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-elevated">
              <ContactForm subject={selectedService ? `Interest in ${selectedService}` : ""} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherServices;
