// src/pages/Contact.tsx
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet-async"; // ✅ Helmet for SEO

// ✅ Plans grouped by service
const SERVICE_PLANS: Record<string, string[]> = {
  "YouTube Automation": [
    "Starter – $699/month",
    "Growth – $1499/month",
    "Scale – $2999/month",
    "Custom / Enterprise",
  ],
  "Website & App Development": [
    "Starter Website – $599+",
    "Standard Package – $1,499",
    "Pro Package – $3,499",
    "Custom Development",
  ],
  "Personalized AI Agent": [
    "Baseline Agent – $3,000+",
    "Enterprise Agent – Custom Pricing",
  ],
  "Influencer Campaigns": [
    "Starter – $5,000",
    "Growth – $10,000",
    "Enterprise – Let’s Talk",
  ],
};

const Contact = () => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  // ✅ Load from localStorage if redirected from Pricing
  useEffect(() => {
    const fromPricing = localStorage.getItem("selectedService");
    if (fromPricing) {
      setSelectedPlan(fromPricing);
      localStorage.removeItem("selectedService");
    }
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* ✅ Schema.org Structured Data */}
      <Helmet>
        <title>Contact Us | The Growth Genie</title>
        <meta
          name="description"
          content="Get in touch with The Growth Genie for YouTube automation, app development, influencer campaigns, and AI agent solutions. Let’s build something amazing together."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The Growth Genie",
            url: "https://www.thegrowthgenie.com/",
            logo: "https://www.thegrowthgenie.com/assets/logo.png",
            sameAs: [
              "https://x.com/Thegrowthgenie9",
              "https://www.youtube.com/@geekbotai",
              "https://www.youtube.com/@ThinkverseAI1",
              "https://www.youtube.com/@MeghnaThinks",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "team@thegrowthgenie.com",
              contactType: "customer support",
              availableLanguage: ["English"],
            },
          })}
        </script>
      </Helmet>

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <canvas id="starfield" className="w-full h-full"></canvas>
      </div>

      {/* Main Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
            Contact Us
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Service & Plan Selection */}
            <div className="w-full space-y-6">
              {/* Dropdown 1: Service */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4">
                  Select a Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    setSelectedPlan(""); // reset plan if service changes
                  }}
                  className="w-full border border-white/20 rounded-xl p-4 bg-black/60 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                >
                  <option value="">Select a service</option>
                  {Object.keys(SERVICE_PLANS).map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dropdown 2: Plan (depends on service) */}
              {selectedService && (
                <div>
                  <label className="block text-lg font-semibold text-white mb-4">
                    Select a Plan (optional)
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full border border-white/20 rounded-xl p-4 bg-black/60 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  >
                    <option value="">Select a plan</option>
                    {SERVICE_PLANS[selectedService].map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                  </select>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed">
                    Selecting a plan will automatically include it in your
                    message and in the email we receive.
                  </p>
                </div>
              )}
            </div>

            {/* Right: Contact Form */}
            <div className="w-full">
              <ContactForm
                subject={
                  selectedPlan
                    ? `Interest in ${selectedService} – ${selectedPlan}`
                    : selectedService
                    ? `Interest in ${selectedService}`
                    : ""
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
