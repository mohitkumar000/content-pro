// src/pages/Contact.tsx
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";

const PRICING_OPTIONS = [
  "Starter – $500/month",
  "Growth – $1,500/month",
  "Scale – $3,000/month",
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
    <div className="min-h-screen bg-black">
      <section className="py-12 px-6">
        <div className="w-full max-w-5xl mx-auto">
          {/* NOTE: overflow-visible so the phone dropdown is not clipped */}
          <div className="bg-black rounded-3xl shadow-elevated p-8 md:p-12 overflow-visible border border-white/10">
            
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
              Contact Us
            </h2>

            {/* Grid: left = pricing select, right = form. min-w-0 allows children to shrink properly */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left: Optional pricing select */}
              <div className="min-w-0">
                <div className="bg-black rounded-2xl p-6 border border-white/10">
                  <label className="block text-lg font-semibold text-white mb-4">
                    Interested in a pricing plan? (optional)
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full border border-white/20 rounded-xl p-4 bg-black text-white max-w-full focus:ring-2 focus:ring-white focus:border-white transition-all"
                    aria-label="Select pricing plan (optional)"
                  >
                    <option value="">Select a plan (optional)</option>
                    {PRICING_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  <div className="mt-6 text-sm text-white/70 leading-relaxed">
                    Selecting a plan will automatically include it in your message and in the email we receive, helping us provide more targeted assistance.
                  </div>
                </div>
              </div>

              {/* Right: Form (passes subject prop) */}
              <div className="min-w-0">
                <ContactForm subject={selectedPlan ? `Interest in ${selectedPlan}` : ""} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
