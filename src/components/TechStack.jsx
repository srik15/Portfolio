import { motion } from "framer-motion";
import { technologies } from "../constants";

const toneClass = {
  signal: "border-signal/35 bg-signal-tint text-signal",
  amber: "border-amber/35 bg-amber-tint text-amber",
  indigo: "border-indigo/35 bg-indigo-tint text-indigo",
};

const TechStack = () => {
  return (
    <section id="technologies" className="border-t border-line py-[76px]">
      <span className="hash-span">&nbsp;</span>
      <div className="wrap">
        <div className="mb-9 text-center sm:text-left">
          <div className="section-tag indigo">04 · TECHNOLOGIES</div>
          <h2 className="type-section">Tools I reach for.</h2>
          <p className="type-body mt-3 max-w-xl">
            Languages, frameworks, and infrastructure I use to ship retrieval and
            agent systems.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5 sm:gap-3"
        >
          {technologies.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: 0.3 }}
              className={`rounded-pill border px-3.5 py-2 font-display text-sm font-medium ${
                toneClass[tech.tone] || toneClass.indigo
              }`}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
