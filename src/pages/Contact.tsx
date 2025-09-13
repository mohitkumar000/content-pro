// src/pages/Contact.tsx
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet-async";  // ✅ Add Helmet

const PRICING_OPTIONS = [
  "Starter – $699/month",
  "Growth – $1499/month",
  "Scale – $2999/month",
  "Custom / Enterprise",
];

const Contact = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  useEffect(() => {
    const fromPricing = localStorage.getItem("selectedService");
    if (fromPricing) {
      setSelectedPlan(fromPricing);
      localStorage.removeItem("selectedService");
    }
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* ✅ Organization Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Growth Genie",
            "url": "https://www.thegrowthgenie.com/",
            "logo": "https://www.thegrowthgenie.com/assets/logo.png",
            "sameAs": [
              "https://x.com/Thegrowthgenie9",
              "https://www.youtube.com/@geekbotai",
              "https://www.youtube.com/@ThinkverseAI1",
              "https://www.youtube.com/@MeghnaThinks"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "team@thegrowthgenie.com",
              "contactType": "customer support",
              "availableLanguage": ["English"]
            }
          })}
        </script>
      </Helmet>

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <canvas id="starfield" className="w-full h-full"></canvas>
      </div>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
            Contact Us
          </h2>

          {/* Grid: Pricing (optional) + Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Pricing Select */}
            <div className="w-full">
              <label className="block text-lg font-semibold text-white mb-4">
                Interested in a pricing plan? (optional)
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full border border-white/20 rounded-xl p-4 bg-black/60 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              >
                <option value="">Select a plan (optional)</option>
                {PRICING_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Selecting a plan will automatically include it in your message
                and in the email we receive.
              </p>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full">
              <ContactForm
                subject={selectedPlan ? `Interest in ${selectedPlan}` : ""}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
