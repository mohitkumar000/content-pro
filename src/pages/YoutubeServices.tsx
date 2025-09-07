import Header from "@/components/layout/Header";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

const YoutubeServices = () => {
  const services = [
    {
      title: "Video Scripting",
      description: "Engaging, researched, audience-tailored scripts that convert",
      features: [
        "Audience research and targeting",
        "Hook writing and storytelling",
        "SEO-optimized scripts",
        "Call-to-action integration",
        "Multiple revision rounds"
      ]
    },
    {
      title: "Video Editing",
      description: "Professional edits with perfect pacing and effects",
      features: [
        "Professional cuts and transitions",
        "Color grading and audio mixing",
        "Motion graphics and effects",
        "Captions and subtitles",
        "Thumbnail creation included"
      ]
    },
    {
      title: "Thumbnail Design",
      description: "Click-worthy, high-CTR thumbnails that get views",
      features: [
        "A/B tested designs",
        "Eye-catching visuals",
        "Platform optimization",
        "Brand consistency",
        "Fast 24-hour turnaround"
      ]
    },
    {
      title: "SEO Optimization",
      description: "Keyword research and metadata for maximum reach",
      features: [
        "Keyword research and analysis",
        "Optimized titles and descriptions",
        "Strategic tag placement",
        "Hashtag strategies",
        "Competitor analysis"
      ]
    },
    {
      title: "Channel Setup & Branding",
      description: "Complete channel branding for professional presence",
      features: [
        "Channel banner design",
        "Profile optimization",
        "Playlist organization",
        "Brand guideline creation",
        "Channel trailer scripting"
      ]
    },
    {
      title: "Content Strategy",
      description: "Data-driven content planning for consistent growth",
      features: [
        "Niche research and analysis",
        "Content calendar creation",
        "Trend analysis and forecasting",
        "Competitor research",
        "Performance tracking setup"
      ]
    },
    {
      title: "YouTube Shorts Creation",
      description: "Viral-style vertical videos for maximum engagement",
      features: [
        "Fast-paced editing style",
        "Trending audio integration",
        "Viral hook techniques",
        "Platform-specific optimization",
        "Batch content creation"
      ]
    },
    {
      title: "Voiceover Services",
      description: "Professional narration in different tones and styles",
      features: [
        "AI and human voiceover options",
        "Multiple tone variations",
        "Script timing optimization",
        "Audio quality enhancement",
        "Multiple language support"
      ]
    },
    {
      title: "End Screens & Cards",
      description: "Strategic viewer retention and conversion setup",
      features: [
        "End screen optimization",
        "Card placement strategy",
        "Conversion funnel design",
        "Viewer retention analysis",
        "A/B testing setup"
      ]
    },
    {
      title: "Analytics & Growth Reports",
      description: "Monthly performance breakdowns and insights",
      features: [
        "Detailed analytics reports",
        "Growth trend analysis",
        "Performance optimization tips",
        "Competitor benchmarking",
        "Monthly strategy sessions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            YouTube Automation Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From scripting to analytics, we handle every aspect of your YouTube success. 
            Focus on your vision while we handle the execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "mailto:contact@contentservices.com?subject=YouTube Services Inquiry"}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-lg transition-all"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete YouTube Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, grow, and monetize your YouTube channel
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

export default YoutubeServices;