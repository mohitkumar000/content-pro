// src/pages/YoutubeServices.tsx
import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet-async";

const YoutubeServices = () => {
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const service = localStorage.getItem("selectedService");
    if (service) {
      setSelectedService(service);
      localStorage.removeItem("selectedService");
    }
  }, []);

  const youtubeServices = [
    {
      title: "YouTube Automation (Done-for-You)",
      description:
        "Complete channel management from scripting to publishing, all handled by our expert team.",
      features: [
        "Video scripting and editing",
        "Thumbnail design and SEO optimization",
        "Channel branding and growth strategy",
        "Analytics and performance tracking",
      ],
    },
    {
      title: "Video Scripting",
      description:
        "Engaging, researched, audience-tailored scripts that convert",
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
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* ✅ SEO */}
      <Helmet>
        <title>YouTube Automation | The Growth Genie – DFY Channels & Growth</title>
        <meta
          name="description"
          content="The Growth Genie provides YouTube automation, video editing, AI agents, web apps, and scalable digital solutions to grow creators, startups, and businesses."
        />
        <link
          rel="canonical"
          href="https://www.thegrowthgenie.com/youtube-services"
        />
      </Helmet>

      {/* Background */}
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 -z-10"></div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight break-words">
              YouTube{" "}
              <span className="block mt-4 sm:mt-6 bg-white text-black px-4 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-2xl border border-black/10 shadow-lg inline-block">
                Automation
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 mb-6 md:mb-8 leading-relaxed px-2">
              Scripts → Edits → Growth —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 block sm:inline">
                all done-for-you by TheGrowthGenie 🚀
              </span>
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
              From YouTube to AI agents, apps, websites, and automation —
              everything you need to grow under one roof.
            </p>
          </div>
        </section>

        {/* YouTube Automation Services */}
        <section id="services" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                YouTube Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {youtubeServices.map((service, index) => (
                <div
                  key={index}
                  className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition-all group"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        

        {/* Contact Section */}
       <section id="contact-form" className="py-24 relative overflow-hidden">
  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Ready to Scale Your Business?
      </h2>
      <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
        From YouTube growth to AI automation and web apps — let’s build
        something extraordinary together.
      </p>
      {/* ✅ Just use ContactForm */}
      <ContactForm />
    </div>
  </div>
</section>

      </div>
    </div>
  );
};

export default YoutubeServices;
