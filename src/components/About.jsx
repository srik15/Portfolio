import { motion } from "framer-motion";
import { focusAreas, profile } from "../constants";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 },
};

const About = () => {
  return (
    <section id="about" className="relative px-6 py-24 sm:px-10 sm:py-32">
      <span className="hash-span">&nbsp;</span>
      <div className="mx-auto max-w-6xl">
        <motion.p
          {...fade}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          About
        </motion.p>
        <motion.h2
          {...fade}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl text-balance"
        >
          Building AI that holds up in production
        </motion.h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.p
            {...fade}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-lg leading-relaxed text-slate-soft sm:text-xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col justify-center gap-4 border-l border-ink/10 pl-6"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-slate-mist">
              Currently
            </p>
            <p className="font-display text-xl font-semibold text-ink">
              AI Engineer @ GGS Information Services
            </p>
            <p className="text-sm text-slate-soft">
              Automotive OEM aftermarket · Agentic RAG on GCP
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group"
            >
              <div className="mb-3 h-px w-10 bg-accent transition-all group-hover:w-16" />
              <h3 className="font-display text-lg font-semibold text-ink">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
