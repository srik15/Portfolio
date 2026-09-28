import { motion } from "framer-motion";
import { skillLayers } from "../constants";

const Skills = () => {
  return (
    <section className="py-[76px]">
      <div className="wrap">
        <div className="mb-9">
          <div className="section-tag indigo">STACK I BUILD</div>
          <h2 className="type-section">How I think about AI infrastructure.</h2>
        </div>

        <div className="flex flex-col gap-3">
          {skillLayers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid gap-5 rounded-2xl border border-line bg-paper-2 px-[26px] py-[22px] sm:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="type-label text-indigo">{layer.name}</p>
                <p className="type-meta mt-1 font-normal">{layer.sub}</p>
              </div>
              <p className="type-body text-sm leading-relaxed">{layer.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
