import { motion } from "framer-motion";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="relative px-6 py-24 sm:px-10 sm:py-32">
      <span className="hash-span">&nbsp;</span>
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl"
        >
          Selected builds
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 max-w-xl text-slate-soft"
        >
          From conservation vision models to patient-care voice agents and
          IoT infrastructure — applied AI with a systems mindset.
        </motion.p>

        <div className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid gap-6 py-12 transition-colors hover:bg-fog/40 sm:grid-cols-[140px_1fr] sm:gap-10 lg:grid-cols-[160px_1fr_280px]"
            >
              <p className="font-mono text-xs text-slate-mist">
                {String(i + 1).padStart(2, "0")}
              </p>

              <div>
                <h3 className="font-display text-2xl font-bold text-ink transition-colors group-hover:text-accent sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-secondary">
                  {project.tagline}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-soft sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-2 sm:col-span-2 lg:col-span-1 lg:justify-end">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
