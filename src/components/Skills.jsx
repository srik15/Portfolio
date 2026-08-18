import { motion } from "framer-motion";
import { skillGroups } from "../constants";

const Skills = () => {
  return (
    <section className="relative px-6 pb-16 sm:px-10 sm:pb-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
        >
          <h2 className="section-title">Tech Stack</h2>
          <p className="mt-2 text-sm text-slate-soft">
            Tools and technologies I work with across AI, cloud, and backend systems.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {group.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
