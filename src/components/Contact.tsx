import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Check } from "lucide-react";
import { personal } from "../data/resumeData";
import { DoodleUnderline, DoodleHeart, FloatingDoodle } from "./Doodles";

interface ContactProps {
  reduceMotion: boolean;
}

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact({ reduceMotion }: ContactProps) {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (field: keyof typeof initialForm) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // This portfolio has no backend, so the form hands off to the visitor's
    // email client with the message pre-filled. Replace this with an API
    // call to a form service (e.g. Formspree) if you add a backend later.
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    const subject = encodeURIComponent(form.subject || "Portfolio contact");
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28">
      <FloatingDoodle
        reduceMotion={reduceMotion}
        delay={0.4}
        className="pointer-events-none absolute right-[8%] top-10 text-brand-purple/40"
      >
        <DoodleHeart className="h-6 w-6" />
      </FloatingDoodle>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mb-4 inline-block"
        >
          <h2 className="font-display text-3xl font-bold text-ink-100 sm:text-4xl">
            Let&apos;s Build Something Great
          </h2>
          <DoodleUnderline className="mt-1 h-3 w-full text-brand-violet/60" />
        </motion.div>
        <p className="mb-12 max-w-xl text-ink-300">
          Have a project, opportunity, or collaboration in mind? I&apos;d love to
          connect.
        </p>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-2"
          >
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-900/50 p-4 text-sm text-ink-100 transition-colors hover:border-brand-cyan/40"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-cyan">
                <Mail size={18} />
              </span>
              {personal.email}
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-900/50 p-4 text-sm text-ink-100 transition-colors hover:border-brand-cyan/40"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-cyan">
                <Phone size={18} />
              </span>
              {personal.phone}
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-900/50 p-4 text-sm text-ink-100">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-cyan">
                <MapPin size={18} />
              </span>
              {personal.location}
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-ink-100 transition-colors hover:border-brand-violet/50 hover:text-brand-violet"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-ink-100 transition-colors hover:border-brand-violet/50 hover:text-brand-violet"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-500">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-500 focus:border-brand-violet/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-500 focus:border-brand-violet/60"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-500">
                Subject
              </label>
              <input
                id="subject"
                value={form.subject}
                onChange={handleChange("subject")}
                className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-500 focus:border-brand-violet/60"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-500">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                className="w-full resize-none rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-500 focus:border-brand-violet/60"
                placeholder="Tell me about the opportunity..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              {sent ? <Check size={16} /> : <Send size={16} />}
              {sent ? "Opening your email app..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
