import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { profile } from "../constants";

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

  return (
    <section id="contact" className="relative bg-fog/50 px-6 py-24 sm:px-10 sm:py-32">
      <span className="hash-span">&nbsp;</span>
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            Let&apos;s build something that ships
          </h2>
          <p className="mt-5 max-w-md text-slate-soft">
            Open to conversations about RAG platforms, agentic systems, and
            cloud-native AI roles.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="block font-display text-lg font-semibold text-ink transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <div className="flex flex-wrap gap-5 pt-2">
              {[
                ["LinkedIn", profile.links.linkedin],
                ["GitHub", profile.links.github],
                ["Kaggle", profile.links.kaggle],
                ["LeetCode", profile.links.leetcode],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-wider text-slate-mist transition-colors hover:text-accent"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-mist">
              Name
            </span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="border border-ink/10 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-slate-mist focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-mist">
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="border border-ink/10 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-slate-mist focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-mist">
              Message
            </span>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What are you building?"
              className="resize-y border border-ink/10 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-slate-mist focus:border-accent"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 self-start rounded-full bg-ink px-8 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-accent">Message sent — thank you.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-secondary">
              Something went wrong. Email me directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
