import { motion } from "framer-motion";
import { profile } from "../constants";

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-[76px]">
        <span className="hash-span">&nbsp;</span>
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-between gap-6 rounded-[24px] bg-ink px-8 py-12 sm:px-[46px] sm:py-[52px]"
          >
            <h2 className="type-section max-w-[480px] !text-white">
              {profile.contactHeadline}
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="btn-round bg-white text-ink hover:bg-signal-tint hover:text-ink hover:no-underline"
            >
              Email me
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="pb-11 pt-[52px]">
        <div className="wrap">
          <div className="mb-9 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h4 className="footer-heading">Contact</h4>
              <a
                href={`mailto:${profile.email}`}
                className="type-footer-link mb-2 block no-underline hover:text-signal"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <h4 className="footer-heading">Elsewhere</h4>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="type-footer-link mb-2 block no-underline hover:text-signal"
              >
                LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="type-footer-link mb-2 block no-underline hover:text-signal"
              >
                GitHub
              </a>
              <a
                href={profile.links.kaggle}
                target="_blank"
                rel="noreferrer"
                className="type-footer-link mb-2 block no-underline hover:text-signal"
              >
                Kaggle
              </a>
            </div>
            <div>
              <h4 className="footer-heading">Code</h4>
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="type-footer-link mb-2 block no-underline hover:text-signal"
              >
                LeetCode
              </a>
              <a
                href={profile.links.skillrack}
                target="_blank"
                rel="noreferrer"
                className="type-footer-link mb-2 block no-underline hover:text-signal"
              >
                Skillrack
              </a>
              <a
                href={profile.links.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="type-footer-link mb-2 block no-underline hover:text-signal"
              >
                Hackerrank
              </a>
            </div>
            <div>
              <h4 className="footer-heading">Based in</h4>
              <p className="type-footer-link">{profile.location}</p>
            </div>
          </div>
          <p className="border-t border-line pt-5 font-sans text-xs text-muted">
            {profile.footNote}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
