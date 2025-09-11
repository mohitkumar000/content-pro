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
        "Community engagement strategies",
      ],
    },
    {
      title: "Blog Writing",
      description: "SEO-friendly blogs, long-form storytelling, and tutorials",
      features: [
        "SEO-optimized content",
        "Long-form storytelling",
        "Technical tutorials",
        "Keyword research integration",
        "Content series planning",
      ],
    },
    {
      title: "News & Articles",
      description: "Timely, researched, professional articles for your industry",
      features: [
        "Industry news coverage",
        "Research-backed articles",
        "Expert interviews",
        "Fact-checking and verification",
        "Publication-ready formatting",
      ],
    },
    {
      title: "Email Copywriting",
      description: "High-converting newsletters, sequences, and sales emails",
      features: [
        "Newsletter campaigns",
        "Email sequence automation",
        "Sales funnel emails",
        "Subject line optimization",
        "A/B testing strategies",
      ],
    },
    {
      title: "Landing Page Copy",
      description: "High-converting web copy for sales pages and funnels",
      features: [
        "Sales page optimization",
        "Conversion funnel copy",
        "Headline and CTA testing",
        "Psychology-driven copy",
        "Mobile optimization",
      ],
    },
    {
      title: "Ad Copy",
      description: "Facebook, Instagram, Google Ads text for campaigns",
      features: [
        "Platform-specific ad copy",
        "A/B testing variations",
        "Audience targeting copy",
        "Campaign optimization",
        "Performance tracking setup",
      ],
    },
    {
      title: "Storytelling Copy",
      description: "Compelling hooks and narratives for brands and businesses",
      features: [
        "Brand story development",
        "Customer journey narratives",
        "Emotional hook creation",
        "Brand voice consistency",
        "Multi-platform adaptation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header is provided globally in App.tsx */}

      {/* Hero Section */}
      {/* <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Copy That
              <span className="block bg-white text-black px-6 py-4 rounded-2xl mt-4 border border-black/10 shadow-elevated">
                Converts & Sells
              </span>
            </h1>

            <div className="text-2xl md:text-4xl font-semibold text-white/95 mb-8 leading-relaxed">
              From Social Media to Sales Pages – Your Complete Copywriting Partner.
            </div>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Professional copywriting services to grow your brand, engage your audience,
              and drive real business results across all platforms and channels.
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
      </section> */}

      {/* Services Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Words That Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From viral social media posts to high-converting sales copy that drives real business results
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
              Ready to Transform Your Copy?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let's create copy that converts, engages, and drives the results you're looking for.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-elevated">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Copywriting;
