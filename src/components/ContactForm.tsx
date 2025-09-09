// src/components/ContactForm.tsx
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

interface ContactFormProps {
  subject?: string; // e.g. "Interest in Starter – $500/month"
}

const SELECTED_PREFIX = "Selected plan: ";

// (Full expanded country list)
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
  { name: "Azerbaijan", code: "AZ", dial_code: "+994" },
  { name: "Bangladesh", code: "BD", dial_code: "+880" },
  { name: "Belgium", code: "BE", dial_code: "+32" },
  { name: "Belarus", code: "BY", dial_code: "+375" },
  { name: "Bulgaria", code: "BG", dial_code: "+359" },
  { name: "Brazil", code: "BR", dial_code: "+55" },
  { name: "Canada", code: "CA", dial_code: "+1" },
  { name: "Chile", code: "CL", dial_code: "+56" },
  { name: "China", code: "CN", dial_code: "+86" },
  { name: "Colombia", code: "CO", dial_code: "+57" },
  { name: "Costa Rica", code: "CR", dial_code: "+506" },
  { name: "Croatia", code: "HR", dial_code: "+385" },
  { name: "Cyprus", code: "CY", dial_code: "+357" },
  { name: "Czech Republic", code: "CZ", dial_code: "+420" },
  { name: "Denmark", code: "DK", dial_code: "+45" },
  { name: "Ecuador", code: "EC", dial_code: "+593" },
  { name: "Egypt", code: "EG", dial_code: "+20" },
  { name: "El Salvador", code: "SV", dial_code: "+503" },
  { name: "Estonia", code: "EE", dial_code: "+372" },
  { name: "Finland", code: "FI", dial_code: "+358" },
  { name: "France", code: "FR", dial_code: "+33" },
  { name: "Georgia", code: "GE", dial_code: "+995" },
  { name: "Germany", code: "DE", dial_code: "+49" },
  { name: "Ghana", code: "GH", dial_code: "+233" },
  { name: "Greece", code: "GR", dial_code: "+30" },
  { name: "Guatemala", code: "GT", dial_code: "+502" },
  { name: "Honduras", code: "HN", dial_code: "+504" },
  { name: "Hong Kong", code: "HK", dial_code: "+852" },
  { name: "Hungary", code: "HU", dial_code: "+36" },
  { name: "Iceland", code: "IS", dial_code: "+354" },
  { name: "India", code: "IN", dial_code: "+91" },
  { name: "Indonesia", code: "ID", dial_code: "+62" },
  { name: "Iran", code: "IR", dial_code: "+98" },
  { name: "Iraq", code: "IQ", dial_code: "+964" },
  { name: "Ireland", code: "IE", dial_code: "+353" },
  { name: "Israel", code: "IL", dial_code: "+972" },
  { name: "Italy", code: "IT", dial_code: "+39" },
  { name: "Jamaica", code: "JM", dial_code: "+1" },
  { name: "Japan", code: "JP", dial_code: "+81" },
  { name: "Jordan", code: "JO", dial_code: "+962" },
  { name: "Kazakhstan", code: "KZ", dial_code: "+7" },
  { name: "Kenya", code: "KE", dial_code: "+254" },
  { name: "Kuwait", code: "KW", dial_code: "+965" },
  { name: "Kyrgyzstan", code: "KG", dial_code: "+996" },
  { name: "Laos", code: "LA", dial_code: "+856" },
  { name: "Latvia", code: "LV", dial_code: "+371" },
  { name: "Lebanon", code: "LB", dial_code: "+961" },
  { name: "Lithuania", code: "LT", dial_code: "+370" },
  { name: "Luxembourg", code: "LU", dial_code: "+352" },
  { name: "Malaysia", code: "MY", dial_code: "+60" },
  { name: "Malta", code: "MT", dial_code: "+356" },
  { name: "Mexico", code: "MX", dial_code: "+52" },
  { name: "Morocco", code: "MA", dial_code: "+212" },
  { name: "Myanmar", code: "MM", dial_code: "+95" },
  { name: "Nepal", code: "NP", dial_code: "+977" },
  { name: "Netherlands", code: "NL", dial_code: "+31" },
  { name: "New Zealand", code: "NZ", dial_code: "+64" },
  { name: "Nicaragua", code: "NI", dial_code: "+505" },
  { name: "Nigeria", code: "NG", dial_code: "+234" },
  { name: "Norway", code: "NO", dial_code: "+47" },
  { name: "Oman", code: "OM", dial_code: "+968" },
  { name: "Pakistan", code: "PK", dial_code: "+92" },
  { name: "Panama", code: "PA", dial_code: "+507" },
  { name: "Paraguay", code: "PY", dial_code: "+595" },
  { name: "Peru", code: "PE", dial_code: "+51" },
  { name: "Philippines", code: "PH", dial_code: "+63" },
  { name: "Poland", code: "PL", dial_code: "+48" },
  { name: "Portugal", code: "PT", dial_code: "+351" },
  { name: "Qatar", code: "QA", dial_code: "+974" },
  { name: "Romania", code: "RO", dial_code: "+40" },
  { name: "Russia", code: "RU", dial_code: "+7" },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966" },
  { name: "Serbia", code: "RS", dial_code: "+381" },
  { name: "Singapore", code: "SG", dial_code: "+65" },
  { name: "Slovakia", code: "SK", dial_code: "+421" },
  { name: "Slovenia", code: "SI", dial_code: "+386" },
  { name: "South Africa", code: "ZA", dial_code: "+27" },
  { name: "South Korea", code: "KR", dial_code: "+82" },
  { name: "Spain", code: "ES", dial_code: "+34" },
  { name: "Sri Lanka", code: "LK", dial_code: "+94" },
  { name: "Sweden", code: "SE", dial_code: "+46" },
  { name: "Switzerland", code: "CH", dial_code: "+41" },
  { name: "Taiwan", code: "TW", dial_code: "+886" },
  { name: "Tanzania", code: "TZ", dial_code: "+255" },
  { name: "Thailand", code: "TH", dial_code: "+66" },
  { name: "Tunisia", code: "TN", dial_code: "+216" },
  { name: "Turkey", code: "TR", dial_code: "+90" },
  { name: "Uganda", code: "UG", dial_code: "+256" },
  { name: "Ukraine", code: "UA", dial_code: "+380" },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971" },
  { name: "United Kingdom", code: "GB", dial_code: "+44" },
  { name: "United States", code: "US", dial_code: "+1" },
  { name: "Uruguay", code: "UY", dial_code: "+598" },
  { name: "Venezuela", code: "VE", dial_code: "+58" },
  { name: "Vietnam", code: "VN", dial_code: "+84" },
  { name: "Yemen", code: "YE", dial_code: "+967" },
  { name: "Zambia", code: "ZM", dial_code: "+260" },
  { name: "Zimbabwe", code: "ZW", dial_code: "+263" },
];

const ContactForm = ({ subject }: ContactFormProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "", // compatibility, we use phoneLocal + country
    message: "",
  });

  const [phoneLocal, setPhoneLocal] = useState<string>(""); // digits only local part
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);

  // keep the selected plan text (without "Interest in " prefix)
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  // status: 'idle' | 'sending' | 'sent'
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  // track whether we've programmatically inserted the planNotice into the message
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
    if (name === "message") {
      insertedRef.current = true;
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    const country = COUNTRIES.find((c) => c.code === code) || COUNTRIES[0];
    setSelectedCountry(country);
  };

  const handlePhoneLocalChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const digitsOnly = e.target.value.replace(/[^0-9]/g, "");
    setPhoneLocal(digitsOnly);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (status === "sending") return;

    // Basic validation
    if (!form.name || !form.email || !phoneLocal || !form.message) {
      alert("Please fill all required fields (name, email, phone, message).");
      return;
    }

    // Build full phone with country dial code
    const fullPhone = `${selectedCountry.dial_code}${phoneLocal}`;

    // Prepare final message (ensure plan is included)
    const planNotice = selectedPlan ? `${SELECTED_PREFIX}${selectedPlan}\n\n` : "";
    const finalMessage = form.message.startsWith(SELECTED_PREFIX)
      ? form.message
      : `${planNotice}${form.message}`;

    try {
      setStatus("sending");

      // send (EmailJS)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: fullPhone,
          message: finalMessage,
          subject: selectedPlan ? `Interest in ${selectedPlan}` : "General inquiry",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // success
      setStatus("sent");
      alert("✅ Your message has been sent successfully!");

      // reset form
      setForm({ name: "", email: "", phone: "", message: "" });
      setPhoneLocal("");
      setSelectedCountry(COUNTRIES[0]);
      setSelectedPlan("");
      insertedRef.current = false;

      // allow new submissions after a short confirmation period
      setTimeout(() => setStatus("idle"), 1500);
    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      alert("Something went wrong while sending your message. Please try again.");
      setStatus("idle");
    }
  };

  const isDisabled = status === "sending" || status === "sent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full min-w-0" aria-live="polite">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full border rounded-lg px-3 h-10 min-w-0"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full border rounded-lg px-3 h-10 min-w-0"
      />

      {/* Country + phone: select smaller text & shorter width, phone input matched height */}
      <div className="flex flex-col sm:flex-row gap-2 items-stretch">
        <select
          aria-label="Country code"
          value={selectedCountry.code}
          onChange={handleCountryChange}
          disabled={isDisabled}
          className="w-full sm:w-40 md:w-44 lg:w-44 max-w-full border rounded-lg px-3 h-10 bg-white min-w-0 text-sm"
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
          placeholder="Mobile number"
          value={phoneLocal}
          onChange={handlePhoneLocalChange}
          required
          disabled={isDisabled}
          className="flex-1 border rounded-lg px-3 h-10 min-w-0 text-base"
        />
      </div>

      {/* Show selected plan banner if any (non-editable) */}
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
        className="w-full border rounded-lg p-2 h-36 min-w-0"
      />

      <Button
        type="submit"
        className="w-full bg-gradient-primary flex items-center justify-center gap-2"
        disabled={isDisabled}
        aria-disabled={isDisabled}
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
