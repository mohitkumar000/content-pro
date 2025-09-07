import Header from "@/components/layout/Header";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

const Copywriting = () => {
  const services = [
    {
      title: "X (Twitter) Ghostwriting",
      description: "Viral threads, engaging hooks, and growth-focused tweets",
      features: [
        "Viral thread creation",
        "Engaging hook development",
        "Personal brand voice development", 
        "Hashtag and timing optimization",
        "Community engagement strategies"
      ]
    },
    {
      title: "Blog Writing",
      description: "SEO-friendly blogs, long-form storytelling, and tutorials",
      features: [
        "SEO-optimized content",
        "Long-form storytelling",
        "Technical tutorials",
        "Keyword research integration",
        "Content series planning"
      ]
    },
    {
      title: "News & Articles",
      description: "Timely, researched, professional articles for your industry",
      features: [
        "Industry news coverage",
        "Research-backed articles",
        "Expert interviews",
        "Fact-checking and verification",
        "Publication-ready formatting"
      ]
    },
    {
      title: "Email Copywriting",
      description: "High-converting newsletters, sequences, and sales emails",
      features: [
        "Newsletter campaigns",
        "Email sequence automation",
        "Sales funnel emails",
        "Subject line optimization",
        "A/B testing strategies"
      ]
    },
    {
      title: "Landing Page Copy",
      description: "High-converting web copy for sales pages and funnels",
      features: [
        "Sales page optimization",
        "Conversion funnel copy",
        "Headline and CTA testing",
        "Psychology-driven copy",
        "Mobile optimization"
      ]
    },
    {
      title: "Ad Copy",
      description: "Facebook, Instagram, Google Ads text for campaigns",
      features: [
        "Platform-specific ad copy",
        "A/B testing variations",
        "Audience targeting copy",
        "Campaign optimization",
        "Performance tracking setup"
      ]
    },
    {
      title: "Storytelling Copy",
      description: "Compelling hooks and narratives for brands and businesses",
      features: [
        "Brand story development",
        "Customer journey narratives",
        "Emotional hook creation",
        "Brand voice consistency",
        "Multi-platform adaptation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Copywriting Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Words that convert, engage, and inspire action. From social media to sales pages,
            we craft copy that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-lg transition-all"
            >
              Get Your Copy Today
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Words That Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From viral social media posts to high-converting sales copy
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
      <section id="contact-form" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Copywriting;