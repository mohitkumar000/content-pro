// src/pages/Copywriting.tsx
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

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 -z-10"></div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Copywriting Services
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                From social media to blogs, ads, and emails — we deliver copy
                that converts.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Copy?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Let's create copy that converts, engages, and drives the results
                you're looking for.
              </p>

              {/* ✅ Directly use ContactForm without extra wrapper */}
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Copywriting;
