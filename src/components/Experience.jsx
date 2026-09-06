import { motion } from "framer-motion";
import { experiences, impactMetrics } from "../constants";

const JobCompany = ({ job }) => {
  if (job.companyParts?.length === 2) {
    return (
      <>
        <span className="text-indigo">{job.companyParts[0]}</span>
        {" & "}
        <span className="text-indigo">{job.companyParts[1]}</span>
      </>
    );
  }
  return <span className="text-indigo">{job.company}</span>;
};

const Experience = () => {
  return (
    <section id="work" className="py-[76px]">
      <span className="hash-span">&nbsp;</span>
      <div className="wrap">
        <div className="impact-grid">
          {impactMetrics.map((metric, i) => (
            <motion.div
              key={metric.value + metric.description}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="impact-cell"
            >
              <div className="impact-num">{metric.value}</div>
              <div className="impact-desc">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-9 mt-[60px]">
          <div className="section-tag signal">01 · EXPERIENCE</div>
          <h2 className="type-section">Where I've built this.</h2>
        </div>

        <div>
          {experiences.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="mb-4 rounded-card border border-line bg-paper-2 px-[30px] py-7"
            >
              <div className="mb-3.5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="type-title">
                  {job.role}, <JobCompany job={job} />
                </h3>
                <p className="type-meta">{job.date}</p>
              </div>
              <ul className="list-disc space-y-2 pl-[18px]">
                {job.highlights.map((item) => (
                  <li key={item} className="type-body">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
