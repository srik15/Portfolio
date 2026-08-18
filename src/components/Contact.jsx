import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { profile } from "../constants";

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const MailIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      window.location.href = `mailto:${profile.email}?subject=Portfolio inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + "\n\n— " + form.email)}`;
      return;
    }

    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        publicKey
      )
      .then(() => {
        setLoading(false);
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
      });
  };

  const socialLinks = [
    { label: "LinkedIn", href: profile.links.linkedin, icon: LinkedInIcon },
    { label: "GitHub", href: profile.links.github, icon: GitHubIcon },
    { label: "Email", href: `mailto:${profile.email}`, icon: MailIcon },
  ];

  return (
    <section id="contact" className="relative px-6 py-16 sm:px-10 sm:py-20">
      <span className="hash-span">&nbsp;</span>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Let&apos;s build something intelligent together.
              </h2>
              <p className="mt-3 text-sm text-slate-soft">
                Open to conversations about RAG platforms, agentic systems, and
                cloud-native AI roles.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="contact-pill w-full justify-start"
              >
                <MailIcon />
                {profile.email}
              </a>
              <span className="contact-pill w-full justify-start">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {profile.phone}
              </span>
              <span className="contact-pill w-full justify-start">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {profile.location}
              </span>
            </div>

            <div className="flex gap-3 lg:justify-end">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noreferrer" : undefined}
                  aria-label={label}
                  className="card-hover flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-ink shadow-sm transition-all hover:border-accent hover:text-accent"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-10 grid gap-4 border-t border-ink/5 pt-10 sm:grid-cols-2"
          >
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-slate-mist">Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-xl border border-ink/10 bg-fog/50 px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-slate-mist focus:border-accent focus:ring-1 focus:ring-accent/20"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-slate-mist">Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="rounded-xl border border-ink/10 bg-fog/50 px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-slate-mist focus:border-accent focus:ring-1 focus:ring-accent/20"
              />
            </label>
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-xs font-medium text-slate-mist">Message</span>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="What are you building?"
                className="resize-y rounded-xl border border-ink/10 bg-fog/50 px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-slate-mist focus:border-accent focus:ring-1 focus:ring-accent/20"
              />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="mt-3 text-sm text-accent">Message sent — thank you.</p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-secondary">
                  Something went wrong. Email me directly instead.
                </p>
              )}
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
