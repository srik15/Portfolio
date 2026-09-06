import { motion } from "framer-motion";
import { projects } from "../constants";

const accentClass = {
  signal: "bg-signal",
  amber: "bg-amber",
  indigo: "bg-indigo",
  muted: "bg-muted",
};

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
          {projects.map((project, i) => (
            <motion.article
              key={project.name + project.meta}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`rounded-card p-[26px] ${
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
