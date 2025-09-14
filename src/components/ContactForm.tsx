// src/components/ContactForm.tsx
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

interface ContactFormProps {
  subject?: string;
}

const SELECTED_PREFIX = "Selected plan: ";

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
    "Enterprise – Custom Pricing",
  ],
};

const REFERRAL_CODES: string[] = [
  "A1B2C3", "X9Y8Z7", "HELLO1", "CODE45", "GIFT99",
  "REF001", "REF002", "REF003", "REF004", "REF005",
  "REF099", "REF100",
];

const ContactForm = ({ subject }: ContactFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "", referral: "" });
  const [phone, setPhone] = useState<string>("");

  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [referralStatus, setReferralStatus] = useState<"idle" | "valid" | "invalid">("idle");

  // ✅ Handle subject prefill (from Pricing redirect)
  useEffect(() => {
    if (subject) {
      const planText = subject.replace(/^Interest in\s*/i, "");
      setSelectedPlan(planText);
      setForm((f) => ({
        ...f,
        message: `${SELECTED_PREFIX}${planText}\n\n`,
      }));
    }
  }, [subject]);

  // ✅ Always inject selectedPlan freshly
  const injectPlanIntoMessage = (rawMessage: string, plan: string) => {
    const cleaned = rawMessage.replace(new RegExp(`^${SELECTED_PREFIX}.*\\n\\n`), "");
    return plan ? `${SELECTED_PREFIX}${plan}\n\n${cleaned}` : cleaned;
  };

  // ✅ Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));

    if (name === "referral") {
      if (!value) setReferralStatus("idle");
      else if (REFERRAL_CODES.includes(value.trim().toUpperCase())) setReferralStatus("valid");
      else setReferralStatus("invalid");
    }
  };

  // ✅ Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    if (!form.name || !form.email || !phone || !form.message) {
      alert("Please fill all required fields.");
      return;
    }
    if (form.referral && referralStatus !== "valid") {
      alert("Referral code is invalid.");
      return;
    }

    const formattedPhone = phone.startsWith("+") ? phone : `+${phone}`;
    const finalMessage = injectPlanIntoMessage(form.message, selectedPlan);

    try {
      setStatus("sending");

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: formattedPhone,
          message: finalMessage,
          referral: form.referral || "—",
          subject: selectedPlan
            ? `Interest in ${selectedService} – ${selectedPlan}`
            : selectedService
            ? `Interest in ${selectedService}`
            : "General inquiry",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      alert("✅ Your message has been sent successfully!");

      setForm({ name: "", email: "", message: "", referral: "" });
      setPhone("");
      setSelectedPlan("");
      setSelectedService("");
      setReferralStatus("idle");

      setTimeout(() => setStatus("idle"), 1500);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  const isDisabled = status === "sending"; // ✅ Lock during sending

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 w-full min-w-0 bg-white/5 backdrop-blur-xl rounded-none md:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border border-transparent md:border-white/20"
    >
      {/* ✅ Service dropdown */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">Service</label>
        <select
          value={selectedService}
          onChange={(e) => {
            setSelectedService(e.target.value);
            setSelectedPlan("");
            setForm((f) => ({ ...f, message: "" }));
          }}
          disabled={isDisabled}
          className="w-full h-14 px-4 rounded-lg border border-gray-300 bg-white text-black text-base"
        >
          <option value="">Select a service</option>
          {Object.keys(SERVICE_PLANS).map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Plan dropdown */}
      {selectedService && (
        <div>
          <label className="block text-sm font-medium text-white mb-2">Plan</label>
          <select
            value={selectedPlan}
            onChange={(e) => {
              const newPlan = e.target.value;
              setSelectedPlan(newPlan);
              setForm((f) => ({
                ...f,
                message: injectPlanIntoMessage(f.message, newPlan),
              }));
            }}
            disabled={isDisabled}
            className="w-full h-14 px-4 rounded-lg border border-gray-300 bg-white text-black text-base"
          >
            <option value="">Select a plan</option>
            {SERVICE_PLANS[selectedService].map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Inputs */}
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full h-14 px-4 rounded-lg border border-gray-300 bg-white text-black"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full h-14 px-4 rounded-lg border border-gray-300 bg-white text-black"
      />
      <PhoneInput
        country={"us"}
        value={phone}
        onChange={(value: string) => setPhone(value)}
        disabled={isDisabled}
        inputProps={{ name: "phone", required: true }}
        inputStyle={{
          height: 56,
          width: "100%",
          fontSize: 16,
          paddingLeft: 60,
          borderRadius: 10,
          backgroundColor: "#fff",
          color: "#000",
          border: "1px solid #ccc",
        }}
        buttonStyle={{
          height: 56,
          width: 60,
          borderRadius: 10,
          backgroundColor: "#f9f9f9",
          borderRight: "1px solid #ccc",
        }}
        containerStyle={{ width: "100%" }}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full h-40 px-4 rounded-lg border border-gray-300 bg-white text-black"
      />

      <Button
        type="submit"
        disabled={isDisabled}
        className="w-full h-14 text-lg bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg shadow-md"
      >
        {status === "sending" ? "Sending..." : status === "sent" ? "✅ Sent" : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
