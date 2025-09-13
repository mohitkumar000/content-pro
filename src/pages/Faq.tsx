// src/pages/Faq.tsx
import React, { useState } from "react";

const faqs = [
  { q: "Can you also help me start a face channel?", a: "Yes! If you choose a face channel, we’ll provide you with a word-by-word script. All you need to do is record yourself reading it on camera. Our team will handle editing, thumbnail design, and complete channel management." },
  { q: "How will you help me choose the right niche?", a: "During the onboarding call, our experts will guide you based on your passion, interests, and profit potential. We’ll also show real examples of viral channels that monetized within a month, so you can pick the best niche with confidence." },
  { q: "Who handles the content research?", a: "Our research team constantly tracks trends and analyzes YouTube content around the clock. You don’t need to worry about topics — we’ll deliver high-quality, trend-backed videos on time." },
  { q: "Do you also create YouTube Shorts?", a: "Yes, our team is capable of creating Shorts. While we don’t have a fixed Shorts policy, we can tailor it to your needs and decide together during the call." },
  { q: "Can I take only scripting or editing services instead of a full package?", a: "Absolutely. If you need just one or two services, you can discuss your requirements on a call. We’ll create a custom package for you at a lower price." },
  { q: "What’s included in the mentorship program?", a: "Our mentorship calls share secret strategies, growth frameworks, and proven work ethics. Many students from our mentorship program have achieved incredible results. These calls are included in our $3000/month package." },
  { q: "Do you also handle brand deals, sponsorships, or affiliate marketing?", a: "Yes, our team works with multiple clients on brand deals, sponsorships, product promotions, and affiliate marketing. These advanced services are included in the $3000/month package." },
  { q: "Can you guarantee results on YouTube?", a: "YouTube is unpredictable, so we don’t guarantee results. However, 95% of our clients have achieved success with us. Even those who didn’t see quick results appreciated our guidance and mentorship. If you want, we can connect you with past clients for honest feedback." },
  { q: "Do you offer refunds?", a: "No. We follow a strict no-refund policy because we clarify everything in the onboarding call and show you demos before you pay. Once we start, our team invests significant effort and resources into your channel." },
  { q: "Will I need to share my YouTube login details?", a: "No. If you already have a channel, we only request manager access. If you don’t have one, we’ll guide you to create a new channel and then simply make us the manager." },
  { q: "Can I run both faceless and face channels at the same time?", a: "Yes, we can create a custom package for you if you want both. You can also upgrade or downgrade your plan anytime. Our 24/7 support ensures that any issue is resolved within 24 hours through a single email." },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* 🔲 Background grid like other pages */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(transparent 97%, rgba(255,255,255,0.08) 100%),
              linear-gradient(90deg, transparent 97%, rgba(255,255,255,0.08) 100%)
            `,
            backgroundSize: "50px 50px",
            transform: "perspective(600px) rotateX(60deg)",
            transformOrigin: "center top",
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
          Everything you need to know before getting started.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="mb-6 bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg text-white hover:text-indigo-400 transition-all duration-300"
              >
                {faq.q}
                <span className="ml-4 text-indigo-400 text-2xl font-bold">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === idx
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
      </section>
    </div>
  );
};

export default Faq;
