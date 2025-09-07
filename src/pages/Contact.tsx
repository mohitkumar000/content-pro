import ContactForm from "@/components/ContactForm";


const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-center mb-8 text-muted-foreground">
        Have questions or need our services? Fill out the form below and we’ll
        get back to you.
      </p>
      <div className="max-w-md mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
