// src/pages/Faq.tsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

type FAQ = { q: string; a: string };

const faqSections: { title: string; faqs: FAQ[] }[] = [
  {
    title: "YouTube Automation",
    faqs: [
      {
        q: "Can you also help me start a face channel?",
        a: "Yes! If you choose a face channel, we’ll provide you with a word-by-word script. You record it on camera, and our team handles editing, thumbnail design, and full management.",
      },
      {
        q: "How will you help me choose the right niche?",
        a: "Onboarding calls guide you based on passion, profit potential, and proven viral niches. We’ll help you choose with confidence.",
      },
      {
        q: "Who handles the content research?",
        a: "Our research team tracks trends daily to deliver high-quality, trend-backed videos on time.",
      },
      {
        q: "Do you also create YouTube Shorts?",
        a: "Yes. We create Shorts tailored to your strategy, discussed during onboarding.",
      },
      {
        q: "Can I take only scripting or editing services?",
        a: "Absolutely. We can create a smaller, custom package at a lower cost.",
      },
    ],
  },
  {
    title: "Full-Stack Development (Websites & Apps)",
    faqs: [
      {
        q: "What kind of websites and apps do you build?",
        a: "From landing pages to SaaS platforms and enterprise systems — responsive, fast, and scalable builds.",
      },
      {
        q: "What technologies do you use?",
        a: "React, Next.js, Node.js, Express, MongoDB, and more. Always modern, secure, and scalable.",
      },
      {
        q: "Do you build MVPs for startups?",
        a: "Yes. We specialize in quick MVPs so startups can validate ideas before scaling.",
      },
      {
        q: "Will my website/app be SEO-friendly and mobile-responsive?",
        a: "Yes. All builds are optimized for SEO, speed, and mobile-first design.",
      },
      {
        q: "Do you offer ongoing support and maintenance?",
        a: "Yes. We provide post-launch support for updates, bug fixes, and upgrades.",
      },
    ],
  },
  {
    title: "Personalized AI Agents & Automation",
    faqs: [
      {
        q: "What are AI agents and how do they help?",
        a: "AI agents automate tasks like customer support, sales follow-ups, data collection, and research — available 24/7.",
      },
      {
        q: "Can you build AI agents specific to my industry?",
        a: "Yes. We customize agents for e-commerce, SaaS, healthcare, finance, and more.",
      },
      {
        q: "Do you integrate AI agents with existing tools?",
        a: "Yes. We integrate with CRMs (Salesforce, HubSpot), project tools (Slack, Notion), or any API-based platform.",
      },
      {
        q: "Are these agents trained in my brand voice?",
        a: "Yes. We fine-tune them with your docs, FAQs, and guidelines for personalized accuracy.",
      },
      {
        q: "Can AI agents replace my customer support team?",
        a: "They automate 70–80% of repetitive queries, freeing humans for complex cases.",
      },
    ],
  },
  {
    title: "Influencer Campaigns & Promotions",
    faqs: [
      {
        q: "Do you run influencer campaigns for AI startups and brands?",
        a: "Yes. We’ve managed campaigns for Lyzr AI, HeyBoss AI, Revid AI, and 100+ other brands.",
      },
      {
        q: "Which platforms do you cover?",
        a: "Mainly LinkedIn, Twitter (X), and YouTube — our 100+ influencer network drives quality engagement.",
      },
      {
        q: "Do you only provide introductions or full management?",
        a: "We handle everything: strategy, creator selection, content, publishing, and reporting.",
      },
      {
        q: "What packages do you offer?",
        a: "Starter ($5k), Growth ($10k), and Enterprise (custom pricing).",
      },
      {
        q: "How do you measure campaign performance?",
        a: "We track impressions, clicks, leads, and conversions via live dashboards and weekly reports.",
      },
    ],
  },
];

const Faq: React.FC = () => {
  const [open, setOpen] = useState<{ section: number | null; faq: number | null }>({
    section: null,
    faq: null,
  });

  const toggle = (sIdx: number, fIdx: number) => {
    if (open.section === sIdx && open.faq === fIdx) {
      setOpen({ section: null, faq: null });
    } else {
      setOpen({ section: sIdx, faq: fIdx });
    }
  };

  // ✅ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      }))
    ),
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* SEO */}
      <Helmet>
        <title>FAQ | The Growth Genie</title>
        <meta
          name="description"
          content="FAQs on YouTube automation, websites, apps, AI agents, and influencer campaigns. Learn more about The Growth Genie services."
        />
        <link rel="canonical" href="https://www.thegrowthgenie.com/faq" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(transparent 97%, rgba(255,255,255,0.06) 100%),
              linear-gradient(90deg, transparent 97%, rgba(255,255,255,0.06) 100%)
            `,
            backgroundSize: "50px 50px",
            transform: "perspective(600px) rotateX(60deg)",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 -z-10" />

      {/* Hero */}
      <section className="py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500">
            Questions
          </span>
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Everything you need to know across our services.
        </p>
      </section>

      {/* FAQ Sections */}
{/* FAQ Sections */}
<section className="relative z-10 py-12">
  <div className="container mx-auto px-6 max-w-5xl space-y-20">
    {faqSections.map((section, sIdx) => {
      // 🎨 Gradient colors based on section index
      const gradients = [
        "from-pink-500 via-red-400 to-orange-400", // YouTube
        "from-green-400 via-emerald-500 to-teal-400", // Websites & Apps
        "from-indigo-400 via-blue-500 to-purple-500", // AI Agents
        "from-yellow-400 via-orange-500 to-pink-500", // Influencer Campaigns
      ];
      const gradient = gradients[sIdx % gradients.length];

      return (
        <div key={sIdx}>
          {/* Section Heading */}
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
          >
            {section.title}
          </h2>

          {/* FAQ Items */}
          {section.faqs.map((faq, fIdx) => (
            <div
              key={fIdx}
              className="mb-4 bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(sIdx, fIdx)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg text-white hover:text-indigo-400 transition-all duration-300"
              >
                {faq.q}
                <span className="ml-4 text-indigo-400 text-2xl font-bold">
                  {open.section === sIdx && open.faq === fIdx ? "−" : "+"}
                </span>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  open.section === sIdx && open.faq === fIdx
                    ? "max-h-screen opacity-100 px-6 pb-6"
                    : "max-h-0 opacity-0 px-6"
                } overflow-hidden`}
              >
                <div className="border-l-4 border-indigo-500 pl-4 text-white/80 leading-relaxed bg-white/5 rounded-lg p-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    })}
  </div>
</section>

    </div>
  );
};

export default Faq;
