import { motion } from "framer-motion";
import { experiences } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="relative bg-fog/60 px-6 py-24 sm:px-10 sm:py-32">
      <span className="hash-span">&nbsp;</span>
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl"
        >
          Where the systems shipped
        </motion.h2>

        <div className="relative mt-16 space-y-0">
          <div className="timeline-line absolute left-[7px] top-3 bottom-3 w-px sm:left-[11px]" />

          {experiences.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative grid gap-4 border-b border-ink/8 py-10 pl-10 last:border-0 sm:grid-cols-[220px_1fr] sm:gap-10 sm:pl-14"
            >
              <div className="absolute left-0 top-12 h-4 w-4 rounded-full border-2 border-accent bg-paper sm:top-12 sm:h-6 sm:w-6" />

              <div>
                <p className="font-mono text-xs text-slate-mist">{job.date}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
                <p className="mt-1 text-xs text-slate-mist">{job.location}</p>
              </div>

              <div>
                <ul className="space-y-3">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 text-sm leading-relaxed text-slate-soft before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent/60"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span key={t} className="skill-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
