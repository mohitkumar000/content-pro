// src/pages/Index.tsx
import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedService, setSelectedService] = useState("");

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
      description: "Complete YouTube channel management from scripting to analytics",
      features: [
        "Video scripting and editing",
        "Thumbnail design and SEO",
        "Channel branding and strategy",
        "Performance analytics",
      ],
    },
    {
      title: "Professional Copywriting",
      description: "High-converting copy for all your marketing needs",
      features: [
        "Social media ghostwriting",
        "Blog and article writing",
        "Email campaigns and sales copy",
        "Landing page optimization",
      ],
    },
    {
      title: "Content Strategy & More",
      description: "Specialized content solutions for complete digital presence",
      features: [
        "Content repurposing and planning",
        "Research and fact-checking",
        "Podcast support services",
        "Digital product creation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* NOTE: Header is provided globally in App.tsx - do NOT add it here */}

      {/* Hero Section */}
      <section className="relative bg-black py-24 lg:py-40 overflow-hidden">
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Content That
              <span className="block bg-white text-black px-6 py-4 rounded-2xl mt-4 border border-black/10 shadow-elevated">
                Converts & Engages
              </span>
            </h1>

            <div className="text-2xl md:text-4xl font-semibold text-white/95 mb-8 leading-relaxed">
              From Scripts to Growth – Your All-in-One Content Partner.
            </div>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Professional content creation services to grow your brand, engage your audience,
              and drive real business results across all platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-black hover:bg-white/90 px-10 py-6 text-lg shadow-elevated hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold"
              >
                Start Your Project
              </Button>

              <Button
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                className="border-white/50 text-white bg-white/10 hover:bg-white/20 px-10 py-6 text-lg transition-all duration-300 backdrop-blur-sm hover:scale-105 font-semibold"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted by Creators Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of successful creators who trust us with their content and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-card rounded-3xl p-10 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">100+</div>
              <div className="text-xl text-foreground font-semibold mb-2">Creators Served</div>
              <div className="text-muted-foreground">Across all platforms</div>
            </div>

            <div className="bg-gradient-card rounded-3xl p-10 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">6+</div>
              <div className="text-xl text-foreground font-semibold mb-2">Years of Trust</div>
              <div className="text-muted-foreground">Proven track record</div>
            </div>

            <div className="bg-gradient-card rounded-3xl p-10 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">98%</div>
              <div className="text-xl text-foreground font-semibold mb-2">Satisfaction Rate</div>
              <div className="text-muted-foreground">Happy creators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Content Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From YouTube automation to professional copywriting, we handle every aspect
              of your content marketing strategy with precision and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your content strategy?
            </p>
            <Button
              onClick={() => {
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-primary hover:opacity-90 px-10 py-6 text-lg shadow-glow hover:shadow-elevated hover:scale-105 transition-all duration-300 font-semibold"
            >
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose thegrowthgenie?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine creativity, strategy, and proven results to deliver content that truly works
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Proven Results</h3>
              <p className="text-muted-foreground leading-relaxed">Track record of growing channels and converting audiences across all platforms</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Fast Turnaround</h3>
              <p className="text-muted-foreground leading-relaxed">Quick delivery without compromising on quality or attention to detail</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Tailored Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">Custom approaches based on your unique goals and target audience</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Growth Focused</h3>
              <p className="text-muted-foreground leading-relaxed">Every piece of content is optimized for growth and engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Ready to take your content to the next level? Get in touch and let's create something amazing together.
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

export default Index;
