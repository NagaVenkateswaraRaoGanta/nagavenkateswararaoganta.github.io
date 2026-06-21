import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { revealTransition, revealViewport, sectionReveal } from "@/lib/motion";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const contactEmail = `gn${"ven"}${"ky"}1234@gmail.com`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_1nuw6h8",
        "template_bokc3at",
        formRef.current,
        "CpH1mCwXdOzbC9uF6"
      );
      toast.success("Message Sent", {
        description: "Your message has been sent successfully!",
        icon: <CheckCircle className="text-green-500" size={18} />,
      });
      formRef.current.reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-section-grey">
      <div className="container mx-auto px-6">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          transition={revealTransition}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Contact</h2>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <a href="tel:+919885358998" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary" /> +91 9885358998
                </a>
                <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={18} className="text-primary" /> Email Me
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-primary shrink-0" /> Kakinada, Andhra Pradesh, India
                </div>
              </div>

              <h4 className="font-heading font-semibold mb-3">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/venkateswararao-ganta", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/NagaVenkateswaraRaoGanta", label: "GitHub" },
                  { icon: Instagram, href: "https://www.instagram.com/nani___natural__?igsh=ZW5peGFpaXUyc3c5", label: "Instagram" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                aria-label="Your name"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                aria-label="Your email address"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                aria-label="Your message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label={loading ? "Sending message" : "Send message"}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60 inline-flex items-center gap-2"
              >
                {loading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
