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
    // If user came from Pricing page, PricingPage saves selectedService in localStorage
    const fromPricing = localStorage.getItem("selectedService");
    if (fromPricing) {
      setSelectedPlan(fromPricing);
      localStorage.removeItem("selectedService");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-8">
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="bg-card/90 rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">Contact Us</h1>
          <p className="text-center mb-6 text-muted-foreground">
            Have questions or need our services? Fill out the form below and we’ll get back to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Optional pricing select */}
            <div className="flex flex-col justify-start">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Interested in a pricing plan? (optional)
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full border rounded-lg p-2 bg-white"
              >
                <option value="">— Select a plan (optional) —</option>
                {PRICING_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <div className="mt-4 text-sm text-muted-foreground">
                Selecting a plan will automatically include it in your message and in the email we receive.
              </div>
            </div>

            {/* Right: Form (passes subject prop) */}
            <div>
              {/* ContactForm will show the selected plan banner and prepend it to the message textarea */}
              <ContactForm subject={selectedPlan ? `Interest in ${selectedPlan}` : ""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
