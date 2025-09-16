// src/pages/Contact.tsx
import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet-async";
import { Monitor, Bot, Globe, Rocket, Users } from "lucide-react"; // ✅ Modern icons

const Contact = () => {
  const highlights = [
    {
      icon: <Monitor className="w-8 h-8 text-cyan-400" />,
      title: "YouTube Automation",
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      title: "AI Agents",
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      title: "Websites & Apps",
    },
    {
      icon: <Rocket className="w-8 h-8 text-indigo-400" />,
      title: "Automation",
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      title: "Marketing",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* ✅ Schema.org Structured Data */}
      <Helmet>
        <title>Contact Us | The Growth Genie</title>
        <meta
          name="description"
          content="Get in touch with The Growth Genie for YouTube automation, app development, influencer campaigns, and AI agent solutions. Let’s build something amazing together."
        />
      </Helmet>

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <canvas id="starfield" className="w-full h-full"></canvas>
      </div>

      {/* Main Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Highlights */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Let’s Build Something Amazing 🚀
            </h2>
            <p className="text-lg text-white/80 mb-10">
              From YouTube growth to AI automation and scalable web apps — we
              bring ideas to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:shadow-lg hover:shadow-cyan-500/20 transition"
                >
                  {item.icon}
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-8 border border-white/10">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
