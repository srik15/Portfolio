import { motion } from "framer-motion";
import { profile, stats, coreSkills } from "../constants";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 },
};

const StatIcon = () => (
  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const About = () => {
  return (
    <section id="about" className="relative px-6 py-16 sm:px-10 sm:py-20">
      <span className="hash-span">&nbsp;</span>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div {...fade} className="card">
            <h2 className="section-title">About Me</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-soft sm:text-base">
              {profile.summary}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-ink/5 bg-accent-light/40 p-4"
                >
                  <StatIcon />
                  <p className="mt-2 font-display text-xl font-bold text-ink">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-mist">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fade}
            transition={{ duration: 0.55, delay: 0.1 }}
            id="skills"
            className="card"
          >
            <span className="hash-span">&nbsp;</span>
            <h2 className="section-title">Core Skills</h2>
            <div className="mt-6 space-y-5">
              {coreSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-medium text-ink">{skill.name}</span>
                    <span className="text-sm font-semibold text-accent">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="progress-track">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.08 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
