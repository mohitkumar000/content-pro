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
    <div className="min-h-screen bg-background">
      {/* NOTE: Header is provided globally in App.tsx - do NOT add it here */}

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Content That
            <span className="block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl mt-2">
              Converts & Engages
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-white/95 mb-6">
            From Scripts to Growth – Your All-in-One Content Partner.
          </div>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Professional content creation services to grow your brand, engage your audience,
            and drive real business results across all platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg shadow-glow"
            >
              Start Your Project
            </Button>

            <Button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              className="border-white text-white bg-white/20 hover:bg-white/30 px-8 py-6 text-lg transition-all"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-surface/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trusted by Creators Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful creators who trust us with their content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card/70 rounded-2xl p-8 border border-border shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg text-foreground font-medium mb-1">Creators Served</div>
              <div className="text-sm text-muted-foreground">Across all platforms</div>
            </div>

            <div className="bg-card/70 rounded-2xl p-8 border border-border shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">6+</div>
              <div className="text-lg text-foreground font-medium mb-1">Years of Trust</div>
              <div className="text-sm text-muted-foreground">Proven track record</div>
            </div>

            <div className="bg-card/70 rounded-2xl p-8 border border-border shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg text-foreground font-medium mb-1">Satisfaction Rate</div>
              <div className="text-sm text-muted-foreground">Happy creators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Content Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From YouTube automation to professional copywriting, we handle every aspect
              of your content marketing strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your content strategy?
            </p>
            <Button
              onClick={() => {
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-primary hover:opacity-90 px-8 py-6 text-lg shadow-glow"
            >
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ContentPro?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">Track record of growing channels and converting audiences</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-muted-foreground">Quick delivery without compromising on quality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tailored Strategy</h3>
              <p className="text-muted-foreground">Custom approaches based on your unique goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Focused</h3>
              <p className="text-muted-foreground">Every piece of content is optimized for growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (higher contrast) */}
      <section id="contact-form" className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Let’s Work Together
            </h2>
            <ContactForm subject={selectedService ? `Interest in ${selectedService}` : ""} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
