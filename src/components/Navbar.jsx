import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "../constants";

const DownloadIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const sectionIds = navLinks.map((link) => link.id);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const offset = 120;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      const match = navLinks.find((link) => link.id === current);
      if (match) setActive(match.title);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          to="/"
          className="relative z-10 font-display text-2xl font-bold text-ink"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {profile.name.split(" ")[0].charAt(0)}.
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 xl:gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                className={`whitespace-nowrap text-sm font-medium transition-colors ${
                  active === link.title
                    ? "text-accent"
                    : "text-slate-soft hover:text-accent"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative z-10 flex items-center gap-3">
          <a
            href={profile.links.resume}
            download="Srinithi_K_Resume.pdf"
            className="btn-primary hidden lg:inline-flex"
          >
            <DownloadIcon />
            Download Resume
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-5 bg-ink transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-0 top-full border-b border-gray-100 bg-white px-6 py-6 shadow-lg lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-lg font-semibold text-ink"
                    onClick={() => {
                      setActive(link.title);
                      setOpen(false);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.links.resume}
                  download="Srinithi_K_Resume.pdf"
                  className="btn-primary mt-2"
                  onClick={() => setOpen(false)}
                >
                  <DownloadIcon />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
