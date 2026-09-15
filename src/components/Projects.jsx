import { motion } from "framer-motion";
import { projects } from "../constants";

const accentClass = {
  signal: "bg-signal",
  amber: "bg-amber",
  indigo: "bg-indigo",
  muted: "bg-muted",
};

const GitHubIcon = () => (
  <svg
    className="h-5 w-5 text-ink"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.367 6.839 9.722.5.094.682-.222.682-.493 0-.243-.009-.888-.014-1.743-2.782.616-3.369-1.37-3.369-1.37-.454-1.178-1.11-1.491-1.11-1.491-.908-.635.069-.622.069-.622 1.004.072 1.532 1.055 1.532 1.055.892 1.563 2.341 1.111 2.91.85.091-.66.35-1.111.636-1.366-2.22-.259-4.555-1.138-4.555-5.067 0-1.119.39-2.034 1.029-2.751-.103-.259-.446-1.302.098-2.714 0 0 .84-.274 2.75 1.05A9.35 9.35 0 0 1 12 7.064c.85.004 1.705.117 2.504.343 1.909-1.324 2.747-1.05 2.747-1.05.546 1.412.203 2.455.1 2.714.64.717 1.028 1.632 1.028 2.751 0 3.939-2.339 4.805-4.566 5.058.359.317.679.942.679 1.9 0 1.371-.012 2.476-.012 2.812 0 .273.18.592.688.492C19.138 20.617 22 16.78 22 12.253 22 6.586 17.523 2 12 2z" />
  </svg>
);

const Projects = () => {
  return (
    <section
      id="systems"
      className="border-y border-line bg-paper-2 py-[76px]"
    >
      <span className="hash-span">&nbsp;</span>
      <div className="wrap">
        <div className="mb-9">
          <div className="section-tag amber">02 · SELECTED SYSTEMS</div>
          <h2 className="type-section">Things I've shipped.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => {
            const projectHref = project.href || project.github;

            return (
              <motion.article
                key={project.name + project.meta}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`flex flex-col rounded-card p-[26px] ${
                  project.building
                    ? "border-[1.5px] border-dashed border-line bg-transparent"
                    : "border border-line bg-paper-2"
                }`}
              >
                <div
                  className={`mb-4 h-[5px] w-[38px] rounded-pill ${
                    accentClass[project.accent] || accentClass.muted
                  }`}
                />
                <h3 className="type-title">{project.name}</h3>
                <p className="type-meta mb-3 mt-2">{project.meta}</p>
                <p className="type-body text-sm">{project.description}</p>

                {project.tech?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {(projectHref || project.github) && (
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    {projectHref ? (
                      <a
                        href={projectHref}
                        target="_blank"
                        rel="noreferrer"
                        className="type-button inline-flex items-center gap-1.5 text-indigo no-underline hover:underline"
                      >
                        View Project
                        <span aria-hidden="true">→</span>
                      </a>
                    ) : (
                      <span />
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        className="inline-flex rounded-full p-1.5 no-underline transition-opacity hover:opacity-70"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
