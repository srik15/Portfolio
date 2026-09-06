import { motion } from "framer-motion";
import { exploreTiles, profile } from "../constants";
import HeroPipeline from "./HeroPipeline";

const tileTone = {
  signal: {
    bg: "bg-signal-tint",
    label: "text-signal",
    link: "text-signal",
  },
  amber: {
    bg: "bg-amber-tint",
    label: "text-amber",
    link: "text-amber",
  },
  indigo: {
    bg: "bg-indigo-tint",
    label: "text-indigo",
    link: "text-indigo",
  },
};

const Hero = () => {
  return (
    <header className="pb-2 pt-16">
      <div className="wrap">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-eyebrow"
        >
          {profile.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="type-hero max-w-[860px]"
        >
          {profile.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="type-lede mt-6 max-w-[580px]"
        >
          {profile.lede}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-8 flex flex-wrap gap-3.5"
        >
          <a href="#contact" className="btn-round btn-primary">
            Get in touch
          </a>
          <a href="#work" className="btn-round btn-ghost">
            See the work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <HeroPipeline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {exploreTiles.map((tile) => {
            const tone = tileTone[tile.tone];
            return (
              <div key={tile.label} className={`tile ${tone.bg}`}>
                <div>
                  <div className={`tile-label ${tone.label}`}>{tile.label}</div>
                  <h3 className="type-title mb-2">{tile.title}</h3>
                  <p className="type-body text-sm">{tile.description}</p>
                </div>
                <a
                  href={tile.href}
                  className={`type-button mt-3.5 inline-block no-underline ${tone.link}`}
                >
                  {tile.linkText}
                </a>
              </div>
            );
          })}
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
