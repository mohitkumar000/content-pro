import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
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

          {/* Duplicate for smooth loop */}
          <div className="flex items-center gap-2">▶️ YouTube Automation</div>
          <div className="flex items-center gap-2">🎬 Video Editing</div>
          <div className="flex items-center gap-2">✍️ Copywriting</div>
          <div className="flex items-center gap-2">📊 Analytics</div>
          <div className="flex items-center gap-2">🖼️ Thumbnail Design</div>
          <div className="flex items-center gap-2">🚀 Growth Strategy</div>
        </div>
      </div>

      {/* Social Proof Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted by Creators Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of successful creators who trust us with their
              content and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-card rounded-3xl p-10 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                100+
              </div>
              <div className="text-xl text-foreground font-semibold mb-2">
                Creators Served
              </div>
              <div className="text-muted-foreground">Across all platforms</div>
            </div>

            <div className="bg-gradient-card rounded-3xl p-10 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                6+
              </div>
              <div className="text-xl text-foreground font-semibold mb-2">
                Years of Trust
              </div>
              <div className="text-muted-foreground">Proven track record</div>
            </div>

            <div className="bg-gradient-card rounded-3xl p-10 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                98%
              </div>
              <div className="text-xl text-foreground font-semibold mb-2">
                Satisfaction Rate
              </div>
              <div className="text-muted-foreground">Happy creators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Content Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From YouTube automation to professional copywriting, we handle
              every aspect of your content marketing strategy with precision and
              creativity.
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
                document.getElementById("contact-form")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="bg-gradient-primary hover:opacity-90 px-10 py-6 text-lg shadow-glow hover:shadow-elevated hover:scale-105 transition-all duration-300 font-semibold"
            >
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose thegrowthgenie?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine creativity, strategy, and proven results to deliver
              content that truly works
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Proven Results
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Track record of growing channels and converting audiences across
                all platforms
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Fast Turnaround
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Quick delivery without compromising on quality or attention to
                detail
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Tailored Strategy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Custom approaches based on your unique goals and target audience
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Growth Focused
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every piece of content is optimized for growth and engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
  id="contact-form"
  className="py-24 relative overflow-hidden z-10"
>
  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Let's Work Together
      </h2>
      <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
        Ready to take your content to the next level? Get in touch and
        let's create something amazing together.
      </p>

      {/* 🚀 Directly render ContactForm, no extra frame */}
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
