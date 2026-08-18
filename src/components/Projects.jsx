import { motion } from "framer-motion";
import { projects } from "../constants";

const ArrowIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="relative px-6 py-16 sm:px-10 sm:py-20">
      <span className="hash-span">&nbsp;</span>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title mt-1">Featured Projects</h2>
          </div>
          <a
            href="#projects"
            className="text-sm font-semibold text-accent transition-colors hover:text-accent-bright"
          >
            View All Projects →
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group card card-hover flex flex-col overflow-hidden p-0"
            >
              <div
                className={`relative h-36 bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-30">
                  <svg className="h-full w-full" viewBox="0 0 200 120" fill="none">
                    <circle cx="40" cy="60" r="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <circle cx="100" cy="40" r="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <circle cx="160" cy="70" r="25" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                    <path d="M20 100 Q60 60 100 80 T180 50" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-soft line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  View Project
                  <ArrowIcon />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
