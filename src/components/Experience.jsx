import { motion } from "framer-motion";
import { certificates, education, experiences } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="relative px-6 py-16 sm:px-10 sm:py-20">
      <span className="hash-span">&nbsp;</span>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <p className="section-label">Career</p>
            <h2 className="section-title mt-1">Experience</h2>

            <div className="relative mt-10 space-y-0">
              <div className="timeline-line absolute left-[7px] top-3 bottom-3 w-0.5 sm:left-[11px]" />

              {experiences.map((job, index) => (
                <motion.article
                  key={`${job.company}-${job.role}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative grid gap-4 border-b border-ink/5 py-8 pl-10 last:border-0 sm:grid-cols-[180px_1fr] sm:gap-6 sm:pl-14"
                >
                  <div className="absolute left-0 top-10 h-4 w-4 rounded-full border-[3px] border-accent bg-white sm:top-10 sm:h-5 sm:w-5" />

                  <div>
                    <p className="text-xs font-medium text-accent">{job.date}</p>
                    <h3 className="mt-1 font-display text-base font-bold text-ink">
                      {job.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-slate-soft">
                      {job.company}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-2">
                      {job.highlights.slice(0, 2).map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-slate-soft"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.tech.slice(0, 4).map((t) => (
                        <span key={t} className="tag-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6 content-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              id="education"
              className="card"
            >
              <span className="hash-span">&nbsp;</span>
              <h2 className="section-title">Education</h2>
              <h3 className="mt-4 font-display text-base font-bold text-ink">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {education.school}
              </p>
              <p className="mt-1 text-sm text-slate-soft">
                {education.location} · {education.period}
              </p>
              <p className="mt-3 text-sm font-semibold text-ink">
                {education.gpa}
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-mist">
                Relevant Coursework
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <span key={course} className="tag-pill">
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              id="certifications"
              className="card"
            >
              <span className="hash-span">&nbsp;</span>
              <h2 className="section-title">Certifications</h2>
              <ul className="mt-5 space-y-4">
                {certificates.slice(0, 4).map((cert) => (
                  <li key={cert.title} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-light text-xs font-bold text-accent">
                      {cert.org.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {cert.title}
                      </p>
                      <p className="text-xs text-slate-soft">
                        {cert.org} · {cert.year}
                      </p>
                      {cert.note && (
                        <p className="text-xs font-medium text-accent">
                          {cert.note}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
