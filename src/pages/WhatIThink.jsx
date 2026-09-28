import { motion } from "framer-motion";
import HeroPipeline from "../components/HeroPipeline";
import Skills from "../components/Skills";

const WhatIThink = () => {
  return (
    <main className="pb-16 pt-16">
      <header className="wrap">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-eyebrow"
        >
          HOW I BUILD
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="type-hero max-w-[860px]"
        >
          What I think about the AI stack.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="type-lede mt-6 max-w-[580px]"
        >
          A production request is never just a prompt — it moves through
          retrieval, agents, safety, and generation. Here&apos;s how I map that
          path, layer by layer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          <HeroPipeline />
        </motion.div>
      </header>

      <Skills />
    </main>
  );
};

export default WhatIThink;
