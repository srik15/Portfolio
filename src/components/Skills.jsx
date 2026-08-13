import { motion } from "framer-motion";
import { skillGroups } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="relative bg-ink px-6 py-24 text-paper sm:px-10 sm:py-32">
      <span className="hash-span">&nbsp;</span>
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent-bright"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl"
        >
          Stack & craft
        </motion.h2>

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-bright/80">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-paper/85 transition-colors hover:border-accent-bright/40 hover:bg-accent/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
