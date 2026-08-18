import { motion } from "framer-motion";
import { achievements } from "../constants";

const AchievementIcon = ({ index }) => {
  const colors = [
    "text-violet-500",
    "text-indigo-500",
    "text-purple-500",
    "text-blue-500",
  ];
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light ${colors[index % colors.length]}`}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    </div>
  );
};

const Recognition = () => {
  return (
    <section className="relative px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-8"
        >
          Achievements
        </motion.h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card flex items-start gap-4 !p-5"
            >
              <AchievementIcon index={i} />
              <div>
                <h3 className="font-display text-sm font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-soft">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
