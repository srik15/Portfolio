import { motion } from "framer-motion";
import { awards, certificates, coding, education, profile } from "../constants";

const Recognition = () => {
  return (
    <section id="recognition" className="relative px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          Background
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl"
        >
          Education & recognition
        </motion.h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-ink/10 bg-white/70 p-8"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-slate-mist">
              Education
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-ink">
              {education.degree}
            </h3>
            <p className="mt-2 text-accent">{education.school}</p>
            <p className="mt-1 text-sm text-slate-soft">
              {education.location} · {education.period}
            </p>
            <p className="mt-4 font-mono text-sm text-ink">{education.gpa}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="border border-ink/10 bg-white/70 p-8"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-slate-mist">
              Awards
            </p>
            <ul className="mt-4 space-y-4">
              {awards.map((award) => (
                <li key={award.title}>
                  <p className="font-medium text-ink">{award.title}</p>
                  <p className="mt-1 font-mono text-xs text-slate-mist">
                    {award.date}
                  </p>
                </li>
              ))}
            </ul>
            <div className="section-rule my-6" />
            <p className="font-mono text-xs uppercase tracking-wider text-slate-mist">
              Coding
            </p>
            <p className="mt-2 text-sm text-slate-soft">{coding.leetcode}</p>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
            >
              LeetCode profile →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-slate-mist">
            Certificates
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div key={cert.title} className="border-t border-ink/10 pt-4">
                <h4 className="font-display text-base font-semibold text-ink">
                  {cert.title}
                </h4>
                <p className="mt-1 text-sm text-slate-soft">{cert.org}</p>
                {cert.note && (
                  <p className="mt-1 font-mono text-xs text-accent">{cert.note}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Recognition;
