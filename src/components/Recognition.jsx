import { motion } from "framer-motion";
import { recognition } from "../constants";

function TitleWithHighlight({ title, highlight }) {
  if (!highlight || !title.includes(highlight)) return title;

  const [before, ...rest] = title.split(highlight);
  return (
    <>
      {before}
      <span className="text-indigo">{highlight}</span>
      {rest.join(highlight)}
    </>
  );
}

const Recognition = () => {
  return (
    <section
      id="recognition"
      className="border-t border-line bg-paper-2 py-[76px]"
    >
      <div className="wrap">
        <div className="mb-6">
          <div className="section-tag signal">04 · RECOGNITION</div>
          <h2 className="type-section">Publications &amp; awards.</h2>
        </div>

        <div>
          {recognition.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line py-4"
            >
              <p className="font-sans text-base font-medium text-ink">
                <TitleWithHighlight
                  title={item.title}
                  highlight={item.highlight}
                />
              </p>
              <p className="type-meta whitespace-nowrap">{item.meta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
