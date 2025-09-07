import Header from "@/components/layout/Header";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

const OtherServices = () => {
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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Additional Content Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Specialized content solutions to complete your digital marketing ecosystem.
            From research to repurposing, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "mailto:contact@contentservices.com?subject=Additional Services Inquiry"}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-lg transition-all"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Content Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized services to amplify your content across all channels
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
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherServices;