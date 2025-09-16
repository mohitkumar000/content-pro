// src/components/ContactForm.tsx
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import { toast } from "sonner";

interface ContactFormProps {
  subject?: string;
  selectedService?: string;
  selectedPlan?: string;
}

const SELECTED_PREFIX = "Selected plan: ";

// ✅ Allowed referral codes
const REFERRAL_CODES: string[] = [
  "A1B2C3", "X9Y8Z7", "HELLO1", "CODE45", "GIFT99",
  "REF001", "REF002", "REF003", "REF004", "REF005",
  "REF099", "REF100",
];

const ContactForm = ({ subject, selectedService = "", selectedPlan = "" }: ContactFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "", referral: "" });
  const [phone, setPhone] = useState<string>("");

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [referralStatus, setReferralStatus] = useState<"idle" | "valid" | "invalid">("idle");

  // ✅ Pre-fill message if subject passed
  useEffect(() => {
    if (subject) {
      const planText = subject.replace(/^Interest in\s*/i, "");
      setForm((f) => ({
        ...f,
        message: `${SELECTED_PREFIX}${planText}\n\n`,
      }));
    }
  }, [subject]);

  // ✅ Add plan prefix in message if selected
  const injectPlanIntoMessage = (rawMessage: string, plan: string) => {
    const cleaned = rawMessage.replace(new RegExp(`^${SELECTED_PREFIX}.*\\n\\n`), "");
    return plan ? `${SELECTED_PREFIX}${plan}\n\n${cleaned}` : cleaned;
  };

  // ✅ Handle inputs + referral validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));

    if (name === "referral") {
      if (!value) setReferralStatus("idle");
      else if (REFERRAL_CODES.includes(value.trim().toUpperCase())) setReferralStatus("valid");
      else setReferralStatus("invalid");
    }
  };

  // ✅ Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    if (!form.name || !form.email || !phone || !form.message) {
      toast.error("⚠️ Missing Info", {
        description: "Please fill all required fields.",
      });
      return;
    }
    if (form.referral && referralStatus !== "valid") {
      toast.error("❌ Invalid Referral Code", {
        description: "Please enter a valid referral code or leave it blank.",
      });
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
      toast.success("✅ Message Sent", {
        description: "Thanks for reaching out! Our team will contact you shortly.",
      });

      setForm({ name: "", email: "", message: "", referral: "" });
      setPhone("");
      setReferralStatus("idle");

      setTimeout(() => setStatus("idle"), 2000);
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("❌ Failed to Send", {
        description: "Something went wrong. Please try again later.",
      });
      setStatus("idle");
    }
  };

  const isDisabled = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 w-full min-w-0 bg-white/5 backdrop-blur-xl rounded-none md:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border border-transparent md:border-white/20"
    >
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
          borderRadius: "10px 0 0 10px",
          backgroundColor: "#f9f9f9",
          borderRight: "1px solid #ccc",
        }}
        containerStyle={{ width: "100%" }}
        dropdownStyle={{
          borderRadius: 10,
          zIndex: 9999,
        }}
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

      {/* Referral Code */}
      <div>
        <input
          name="referral"
          type="text"
          placeholder="Referral Code (optional)"
          value={form.referral}
          onChange={handleChange}
          disabled={isDisabled}
          className={`w-full h-14 px-4 rounded-lg border ${
            referralStatus === "valid"
              ? "border-green-500"
              : referralStatus === "invalid"
              ? "border-red-500"
              : "border-gray-300"
          } bg-white text-black`}
        />
        {referralStatus === "valid" && (
          <p className="text-green-400 text-sm mt-1">✅ Referral code is valid</p>
        )}
        {referralStatus === "invalid" && (
          <p className="text-red-400 text-sm mt-1">❌ Referral code is invalid</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isDisabled}
        className="w-full h-14 text-lg bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg"
      >
        {status === "sending"
          ? "Sending..."
          : status === "sent"
          ? "✅ Sent"
          : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
