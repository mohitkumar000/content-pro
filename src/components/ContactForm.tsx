import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

interface ContactFormProps {
  subject?: string;
}

// Extended list of countries with dial codes (more comprehensive)
// For a full list, consider using an npm package or JSON import.
const COUNTRIES = [
  { name: "Afghanistan", code: "AF", dial_code: "+93" },
  { name: "Albania", code: "AL", dial_code: "+355" },
  { name: "Algeria", code: "DZ", dial_code: "+213" },
  { name: "Andorra", code: "AD", dial_code: "+376" },
  { name: "Angola", code: "AO", dial_code: "+244" },
  { name: "Argentina", code: "AR", dial_code: "+54" },
  { name: "Armenia", code: "AM", dial_code: "+374" },
  { name: "Australia", code: "AU", dial_code: "+61" },
  { name: "Austria", code: "AT", dial_code: "+43" },
  { name: "Bangladesh", code: "BD", dial_code: "+880" },
  { name: "Belgium", code: "BE", dial_code: "+32" },
  { name: "Brazil", code: "BR", dial_code: "+55" },
  { name: "Canada", code: "CA", dial_code: "+1" },
  { name: "China", code: "CN", dial_code: "+86" },
  { name: "Denmark", code: "DK", dial_code: "+45" },
  { name: "Egypt", code: "EG", dial_code: "+20" },
  { name: "France", code: "FR", dial_code: "+33" },
  { name: "Germany", code: "DE", dial_code: "+49" },
  { name: "Greece", code: "GR", dial_code: "+30" },
  { name: "Hong Kong", code: "HK", dial_code: "+852" },
  { name: "India", code: "IN", dial_code: "+91" },
  { name: "Indonesia", code: "ID", dial_code: "+62" },
  { name: "Iran", code: "IR", dial_code: "+98" },
  { name: "Iraq", code: "IQ", dial_code: "+964" },
  { name: "Ireland", code: "IE", dial_code: "+353" },
  { name: "Israel", code: "IL", dial_code: "+972" },
  { name: "Italy", code: "IT", dial_code: "+39" },
  { name: "Japan", code: "JP", dial_code: "+81" },
  { name: "Kenya", code: "KE", dial_code: "+254" },
  { name: "Malaysia", code: "MY", dial_code: "+60" },
  { name: "Mexico", code: "MX", dial_code: "+52" },
  { name: "Nepal", code: "NP", dial_code: "+977" },
  { name: "Netherlands", code: "NL", dial_code: "+31" },
  { name: "New Zealand", code: "NZ", dial_code: "+64" },
  { name: "Nigeria", code: "NG", dial_code: "+234" },
  { name: "Norway", code: "NO", dial_code: "+47" },
  { name: "Pakistan", code: "PK", dial_code: "+92" },
  { name: "Philippines", code: "PH", dial_code: "+63" },
  { name: "Poland", code: "PL", dial_code: "+48" },
  { name: "Portugal", code: "PT", dial_code: "+351" },
  { name: "Russia", code: "RU", dial_code: "+7" },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966" },
  { name: "Singapore", code: "SG", dial_code: "+65" },
  { name: "South Africa", code: "ZA", dial_code: "+27" },
  { name: "South Korea", code: "KR", dial_code: "+82" },
  { name: "Spain", code: "ES", dial_code: "+34" },
  { name: "Sri Lanka", code: "LK", dial_code: "+94" },
  { name: "Sweden", code: "SE", dial_code: "+46" },
  { name: "Switzerland", code: "CH", dial_code: "+41" },
  { name: "Thailand", code: "TH", dial_code: "+66" },
  { name: "Turkey", code: "TR", dial_code: "+90" },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971" },
  { name: "United Kingdom", code: "GB", dial_code: "+44" },
  { name: "United States", code: "US", dial_code: "+1" },
  { name: "Vietnam", code: "VN", dial_code: "+84" },
];

const ContactFormWithCountryCode: React.FC<ContactFormProps> = ({ subject }) => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [phoneLocal, setPhoneLocal] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: subject || "",
  });

  // status: 'idle' | 'optimistic' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState<"idle" | "optimistic" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    if (subject) setForm((p) => ({ ...p, subject }));
  }, [subject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    const country = COUNTRIES.find((c) => c.code === code) || COUNTRIES[0];
    setSelectedCountry(country);
  };

  const handlePhoneLocalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/[^0-9]/g, "");
    setPhoneLocal(digitsOnly);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build full phone number
    const fullPhone = `${selectedCountry.dial_code}${phoneLocal}`;

    // Optimistic UI: show instant success to the user while we send in background.
    // We set status to 'optimistic' and clear the form immediately for snappy UX.
    setStatus("optimistic");
    const prevForm = { ...form };
    setForm({ name: "", email: "", phone: "", message: "", subject: "" });
    setPhoneLocal("");
    setSelectedCountry(COUNTRIES[0]);

    // Call EmailJS but don't block the UI; handle potential failure later.
    setStatus("sending");
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: prevForm.name,
          email: prevForm.email,
          phone: fullPhone,
          message: prevForm.message,
          subject: prevForm.subject,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // success – finalize optimistic state
        setStatus("sent");
        // quick user-visible toast/alert
        try {
          // prefer custom toast if you have one
          alert("✅ Your message has been sent successfully!");
        } catch (err) {
          // fallback silently
          console.log("Message sent");
        }
      })
      .catch((error) => {
        console.error("❌ EmailJS Error:", error);
        setStatus("error");
        setForm(prevForm);
        setPhoneLocal(prevForm.phone || "");
        alert("❌ Failed to send message. Please try again.");
        setStatus("idle");
      });

    if (status !== "sent") {
      alert("✅ Your message has been sent successfully!");
      setStatus("sent");
    }
  };

  const isDisabled = status === "sending" || status === "sent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full border rounded-lg p-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full border rounded-lg p-2"
      />

      <div className="flex gap-2">
        <select
          aria-label="Country code"
          value={selectedCountry.code}
          onChange={handleCountryChange}
          disabled={isDisabled}
          className="w-40 border rounded-lg p-2 bg-white"
        >
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name} ({c.dial_code})
            </option>
          ))}
        </select>

        <input
          type="tel"
          name="phoneLocal"
          placeholder="Phone number without country code"
          value={phoneLocal}
          onChange={handlePhoneLocalChange}
          required
          disabled={isDisabled}
          className="flex-1 border rounded-lg p-2"
        />
      </div>

      {form.subject && (
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
          readOnly
          className="w-full border rounded-lg p-2 bg-gray-100 cursor-not-allowed"
        />
      )}

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full border rounded-lg p-2 h-28"
      />

      <Button type="submit" disabled={isDisabled} className="w-full bg-gradient-primary">
        {status === "sending" ? (
          <span className="inline-flex items-center gap-2">
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
          </span>
        ) : status === "sent" ? (
          "Sent"
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactFormWithCountryCode;
