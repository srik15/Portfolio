import { motion } from "framer-motion";
import { profile } from "../constants";

const Hero = () => {
  return (
    <section className="hero-atmosphere relative min-h-screen overflow-hidden">
      <div className="hero-grid absolute inset-0 animate-grid-drift opacity-70" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:px-10 sm:pb-24 lg:justify-center lg:pb-0">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-accent"
            >
              {profile.location} · Available for collaboration
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display text-[clamp(3.25rem,9vw,6.5rem)] font-extrabold leading-[0.92] tracking-tight text-ink"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-5 max-w-xl font-display text-xl font-semibold text-ink/80 sm:text-2xl"
            >
              {profile.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-slate-soft sm:text-lg"
            >
              Production-grade RAG and multi-agent systems on GCP — built for
              industrial workflows, not demos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
              >
                View projects
              </a>
              <a
                href="#experience"
                className="rounded-full border border-ink/15 bg-white/50 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:bg-accent-soft"
              >
                Work history
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative hidden min-h-[320px] lg:block"
            aria-hidden="true"
          >
            <div className="absolute inset-0 animate-float">
              <svg
                viewBox="0 0 420 420"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="210"
                  cy="210"
                  r="160"
                  stroke="rgba(var(--accent-rgb), 0.2)"
                  strokeWidth="1"
                />
                <circle
                  cx="210"
                  cy="210"
                  r="110"
                  stroke="rgba(var(--accent-bright-rgb), 0.35)"
                  strokeWidth="1"
                  strokeDasharray="6 8"
                />
                <circle cx="210" cy="50" r="7" fill="var(--accent-bright)" />
                <circle cx="350" cy="210" r="7" fill="var(--ink)" />
                <circle cx="210" cy="370" r="7" fill="var(--secondary)" />
                <circle cx="70" cy="210" r="7" fill="var(--accent-bright)" />
                <path
                  d="M210 50 L350 210 L210 370 L70 210 Z"
                  stroke="rgba(var(--ink-rgb), 0.35)"
                  strokeWidth="1.5"
                />
                <path
                  d="M210 110 C260 140 280 180 280 210 C280 260 240 300 210 310 C180 300 140 260 140 210 C140 180 160 140 210 110Z"
                  fill="rgba(var(--accent-bright-rgb), 0.12)"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                />
                <circle cx="210" cy="210" r="18" fill="var(--ink)" />
                <circle cx="210" cy="210" r="8" fill="var(--accent-bright)" />
                <text
                  x="210"
                  y="400"
                  textAnchor="middle"
                  fill="var(--slate-mist)"
                  style={{ fontFamily: "IBM Plex Mono", fontSize: "11px" }}
                >
                  RAG · AGENTS · GCP
                </text>
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-mist sm:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="block h-8 w-px bg-accent"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
