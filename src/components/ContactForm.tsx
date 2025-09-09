// src/components/ContactForm.tsx
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

interface ContactFormProps {
  subject?: string; // e.g. "Interest in Starter – $500/month"
}

const SELECTED_PREFIX = "Selected plan: ";

const ContactForm = ({ subject }: ContactFormProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // keep the selected plan text (without "Interest in " prefix)
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  // status: 'idle' | 'sending' | 'sent'
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  // track whether we've programmatically inserted the planNotice into the message
  const insertedRef = useRef(false);

  useEffect(() => {
    if (subject) {
      // remove leading "Interest in " if present
      const planText = subject.replace(/^Interest in\s*/i, "");
      setSelectedPlan(planText);

      // If the message doesn't already start with the selected prefix, prepend it
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
      // subject cleared: remove any existing plan prefix from the message
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
    // If user edits the message manually, consider that as manual change (do not auto-remove)
    if (name === "message") {
      insertedRef.current = true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (status === "sending") return;

    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("Please fill all required fields.");
      return;
    }

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
          phone: form.phone,
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
      setSelectedPlan("");
      insertedRef.current = false;

      // allow new submissions after a short confirmation period
      setTimeout(() => setStatus("idle"), 1800);
    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      alert("Something went wrong while sending your message. Please try again.");
      setStatus("idle");
    }
  };

  const isDisabled = status === "sending" || status === "sent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full" aria-live="polite">
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

      <input
        type="tel"
        name="phone"
        placeholder="Your Phone (with country code)"
        value={form.phone}
        onChange={handleChange}
        required
        disabled={isDisabled}
        className="w-full border rounded-lg p-2"
      />

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
        className="w-full border rounded-lg p-2 h-36"
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
