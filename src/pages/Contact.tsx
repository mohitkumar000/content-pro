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
    <div className="min-h-screen bg-background flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-card/90 rounded-2xl shadow-md p-6 md:p-10 overflow-hidden">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-center">Contact Us</h1>
          <p className="text-center mb-6 text-muted-foreground">
            Have questions or need our services? Fill out the form below and we’ll get back to you.
          </p>

          {/* Grid: left = pricing select, right = form.
              Use min-w-0 on children so they can shrink inside flex/grid. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left: Optional pricing select */}
            <div className="min-w-0"> {/* allows child to shrink */}
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Interested in a pricing plan? (optional)
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full border rounded-lg p-2 bg-white max-w-full"
              >
                <option value="">Select a plan (optional)</option>
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
            <div className="min-w-0"> {/* critical: allows form inputs to shrink on small screens */}
              <ContactForm subject={selectedPlan ? `Interest in ${selectedPlan}` : ""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
