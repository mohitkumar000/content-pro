import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

interface ContactFormProps {
  subject?: string;
}

const SELECTED_PREFIX = "Selected plan: ";

const REFERRAL_CODES: string[] = [
  "A1B2C3", "X9Y8Z7", "HELLO1", "CODE45", "GIFT99",
  "REF001", "REF002", "REF003", "REF004", "REF005",
  "REF099", "REF100"
];

const ContactForm = ({ subject }: ContactFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "", referral: "" });
  const [phone, setPhone] = useState<string>("");

  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [referralStatus, setReferralStatus] = useState<"idle" | "valid" | "invalid">("idle");
  const insertedRef = useRef(false);

  useEffect(() => {
    if (subject) {
      const planText = subject.replace(/^Interest in\s*/i, "");
      setSelectedPlan(planText);

      const currentMsg = form.message || "";
      if (!currentMsg.startsWith(`${SELECTED_PREFIX}${planText}`)) {
        const newMsg = `${SELECTED_PREFIX}${planText}\n\n${currentMsg.replace(
          new RegExp(`^${SELECTED_PREFIX}.*\\n\\n`),
          ""
        )}`;
        setForm((f) => ({ ...f, message: newMsg }));
        insertedRef.current = true;
      }
    } else {
      setSelectedPlan("");
      const cleaned = form.message.replace(new RegExp(`^${SELECTED_PREFIX}.*\\n\\n`), "");
      setForm((f) => ({ ...f, message: cleaned }));
      insertedRef.current = false;
    }
  }, [subject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));

    if (name === "referral") {
      if (!value) {
        setReferralStatus("idle");
      } else if (REFERRAL_CODES.includes(value.trim().toUpperCase())) {
        setReferralStatus("valid");
      } else {
        setReferralStatus("invalid");
      }
    }

    if (name === "message") insertedRef.current = true;
  };

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
    const planNotice = selectedPlan ? `${SELECTED_PREFIX}${selectedPlan}\n\n` : "";
    const finalMessage = form.message.startsWith(SELECTED_PREFIX)
      ? form.message
      : `${planNotice}${form.message}`;

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
          subject: selectedPlan ? `Interest in ${selectedPlan}` : "General inquiry",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      alert("✅ Your message has been sent successfully!");

      setForm({ name: "", email: "", message: "", referral: "" });
      setPhone("");
      setSelectedPlan("");
      setReferralStatus("idle");
      insertedRef.current = false;

      setTimeout(() => setStatus("idle"), 1500);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  const isDisabled = status === "sending" || status === "sent";

  return (
    <form
      onSubmit={handleSubmit}
      className="
        space-y-5 w-full min-w-0
        bg-white/5 backdrop-blur-xl
        rounded-none md:rounded-2xl
        shadow-lg
        p-6 sm:p-8 md:p-10
        border border-transparent md:border-white/20
      "
      aria-live="polite"
    >
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full h-14 px-4 rounded-lg border border-gray-300 
                   bg-white text-black placeholder-gray-500 
                   focus:ring-2 focus:ring-indigo-500 text-base"
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full h-14 px-4 rounded-lg border border-gray-300 
                   bg-white text-black placeholder-gray-500 
                   focus:ring-2 focus:ring-indigo-500 text-base"
      />

      {/* Phone Input */}
      <div className="w-full">
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
          dropdownStyle={{
            zIndex: 9999,
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Referral Code */}
      <div>
        <input
          name="referral"
          type="text"
          placeholder="Referral Code (Optional)"
          value={form.referral}
          onChange={handleChange}
          disabled={isDisabled}
          className="w-full h-14 px-4 rounded-lg border border-gray-300 
                     bg-white text-black placeholder-gray-500 
                     focus:ring-2 focus:ring-indigo-500 text-base"
        />
        {referralStatus === "valid" && (
          <p className="text-green-600 text-sm mt-1">✅ Referral code valid</p>
        )}
        {referralStatus === "invalid" && (
          <p className="text-red-600 text-sm mt-1">❌ Referral code invalid</p>
        )}
      </div>

      {selectedPlan && (
        <div className="p-4 rounded-md bg-yellow-100 border border-yellow-300 text-sm text-yellow-900 shadow-inner">
          <strong>Selected plan:</strong> {selectedPlan}
          <div className="text-xs text-gray-700 mt-1">
            This plan is included in your message and will be visible to our team.
          </div>
        </div>
      )}

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full h-40 px-4 rounded-lg border border-gray-300 
                   bg-white text-black placeholder-gray-500 
                   focus:ring-2 focus:ring-indigo-500 text-base"
      />

      <Button
        type="submit"
        disabled={isDisabled}
        className="w-full h-14 text-lg
                   bg-gradient-to-r from-indigo-500 to-blue-600 
                   text-white rounded-lg shadow-md 
                   hover:shadow-lg hover:scale-[1.02] 
                   transition-all duration-300 font-semibold"
      >
        {status === "sending" ? (
          <>
            <svg
              className="animate-spin h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                strokeWidth="4"
                stroke="currentColor"
                className="opacity-25"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Sending...
          </>
        ) : status === "sent" ? (
          "✅ Sent"
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
