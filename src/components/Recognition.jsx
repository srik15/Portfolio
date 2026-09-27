import { motion } from "framer-motion";
import { certifications, education, recognition } from "../constants";

function TitleWithHighlight({ title, highlight }) {
  if (!highlight || !title.includes(highlight)) return title;

  const [before, ...rest] = title.split(highlight);
  return (
    <>
      {before}
      <span className="text-signal">{highlight}</span>
      {rest.join(highlight)}
    </>
  );
}

const ColumnHeading = ({ children }) => (
  <div className="mb-5 flex items-center gap-3">
    <h3 className="font-display text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-indigo">
      {children}
    </h3>
    <span className="h-px flex-1 bg-indigo/40" aria-hidden="true" />
  </div>
);

const IconWrap = ({ children }) => (
  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-tint text-indigo">
    {children}
  </span>
);

const GraduationIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3z" />
    <path d="M5 13.18V17.5c0 1.66 3.13 3 7 3s7-1.34 7-3v-4.32l-7 3.82-7-3.82z" />
  </svg>
);

const BadgeIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M8.5 14.5 7 21l5-2.5L17 21l-1.5-6.5" />
    <path d="M5 9.5 3 8l2-1.5L5 4l2 1.5L9 4l.2 2.5L11.5 8 9.2 9.5 9 12 7 10.5 5 12z" strokeWidth="1.4" />
  </svg>
);

const DocIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-6Z" />
    <path d="M14 2v6h6" />
    <path d="M9 13h6M9 17h6" />
  </svg>
);

const Recognition = () => {
  return (
    <section
      id="recognition"
      className="border-t border-line bg-paper-2 py-[76px]"
    >
      <div className="wrap">
        <div className="mb-10">
          <div className="section-tag signal">05 · CREDENTIALS</div>
          <h2 className="type-section">Education, certifications &amp; recognition.</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ColumnHeading>Education</ColumnHeading>
            <div className="flex gap-3 rounded-2xl border border-line bg-paper px-4 py-4">
              <IconWrap>
                <GraduationIcon />
              </IconWrap>
              <div>
                <p className="font-display text-sm font-bold leading-snug text-ink">
                  {education.degree}
                </p>
                <p className="mt-1.5 type-body text-sm">{education.school}</p>
                <p className="type-meta mt-2">{education.dates}</p>
                <p className="mt-1 font-display text-xs font-semibold text-indigo">
                  {education.detail}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <ColumnHeading>Certifications</ColumnHeading>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex gap-3">
                  <IconWrap>
                    <BadgeIcon />
                  </IconWrap>
                  <div>
                    <p className="font-sans text-sm font-medium leading-snug text-ink">
                      {cert.name}
                    </p>
                    <p className="type-meta mt-1">{cert.provider}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ColumnHeading>Publications &amp; Awards</ColumnHeading>
            <ul className="space-y-4">
              {recognition.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <IconWrap>
                    <DocIcon />
                  </IconWrap>
                  <div>
                    <p className="font-sans text-sm font-medium leading-snug text-ink">
                      <TitleWithHighlight
                        title={item.title}
                        highlight={item.highlight}
                      />
                    </p>
                    <p className="type-meta mt-1">{item.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
