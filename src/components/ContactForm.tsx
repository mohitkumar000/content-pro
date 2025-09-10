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

// ✅ Static 100 referral codes
const REFERRAL_CODES: string[] = [
  "A1B2C3", "X9Y8Z7", "HELLO1", "CODE45", "GIFT99",
  "REF001", "REF002", "REF003", "REF004", "REF005",
  "REF006", "REF007", "REF008", "REF009", "REF010",
  "REF011", "REF012", "REF013", "REF014", "REF015",
  "REF016", "REF017", "REF018", "REF019", "REF020",
  "REF021", "REF022", "REF023", "REF024", "REF025",
  "REF026", "REF027", "REF028", "REF029", "REF030",
  "REF031", "REF032", "REF033", "REF034", "REF035",
  "REF036", "REF037", "REF038", "REF039", "REF040",
  "REF041", "REF042", "REF043", "REF044", "REF045",
  "REF046", "REF047", "REF048", "REF049", "REF050",
  "REF051", "REF052", "REF053", "REF054", "REF055",
  "REF056", "REF057", "REF058", "REF059", "REF060",
  "REF061", "REF062", "REF063", "REF064", "REF065",
  "REF066", "REF067", "REF068", "REF069", "REF070",
  "REF071", "REF072", "REF073", "REF074", "REF075",
  "REF076", "REF077", "REF078", "REF079", "REF080",
  "REF081", "REF082", "REF083", "REF084", "REF085",
  "REF086", "REF087", "REF088", "REF089", "REF090",
  "REF091", "REF092", "REF093", "REF094", "REF095",
  "REF096", "REF097", "REF098", "REF099", "REF100"
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          referral: form.referral || "—", // ✅ include referral in email
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
    <form onSubmit={handleSubmit} className="space-y-4 w-full min-w-0" aria-live="polite">
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full border rounded-lg px-3 h-10"
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full border rounded-lg px-3 h-10"
      />

      {/* Phone Input */}
      <div className="w-full">
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(value: string) => setPhone(value)}
          disabled={isDisabled}
          inputProps={{
            name: "phone",
            required: true,
          }}
          inputStyle={{
            height: 40,
            width: "100%",
            fontSize: 15,
            paddingLeft: 80,
            borderRadius: 8,
          }}
          buttonStyle={{
            height: 40,
            width: 72,
            borderRadius: 8,
            backgroundColor: "#fff",
          }}
          containerStyle={{
            width: "100%",
          }}
          dropdownStyle={{
            zIndex: 9999,
          }}
        />
      </div>

      {/* ✅ Referral Code Field */}
      <div>
        <input
          name="referral"
          type="text"
          placeholder="Referral Code"
          value={form.referral}
          onChange={handleChange}
          disabled={isDisabled}
          className="w-full border rounded-lg px-3 h-10"
        />
        {referralStatus === "valid" && (
          <p className="text-green-600 text-sm mt-1">✅ Referral code valid</p>
        )}
        {referralStatus === "invalid" && (
          <p className="text-red-600 text-sm mt-1">❌ Referral code invalid</p>
        )}
      </div>

      {selectedPlan && (
        <div className="p-3 rounded-md bg-yellow-50 border border-yellow-200 text-sm text-yellow-900">
          <strong>Selected plan:</strong> {selectedPlan}
          <div className="text-xs text-muted-foreground mt-1">
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
        className="w-full border rounded-lg p-2 h-36"
      />

      <Button
        type="submit"
        disabled={isDisabled}
        className="w-full bg-gradient-primary flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" className="opacity-25" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Sending...
          </>
        ) : status === "sent" ? (
          "Sent"
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
