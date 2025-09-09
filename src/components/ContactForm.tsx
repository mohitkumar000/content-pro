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

const ContactForm = ({ subject }: ContactFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [phone, setPhone] = useState<string>("");

  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
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
    if (name === "message") insertedRef.current = true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    if (!form.name || !form.email || !phone || !form.message) {
      alert("Please fill all required fields.");
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
          subject: selectedPlan ? `Interest in ${selectedPlan}` : "General inquiry",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      alert("✅ Your message has been sent successfully!");

      setForm({ name: "", email: "", message: "" });
      setPhone("");
      setSelectedPlan("");
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
            height: 40, // same as other inputs
            width: "100%",
            fontSize: 15,
            paddingLeft: 80, // enough space for flag box
            borderRadius: 8,
          }}
          buttonStyle={{
            height: 40, // align with inputs
            width: 72,  // bigger flag box
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
