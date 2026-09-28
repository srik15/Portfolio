import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "../constants";

const hashSectionIds = navLinks.filter((link) => link.href).map((link) => link.id);

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/what-i-think-about-ai-stack") {
      setActive("What I Think");
      return undefined;
    }

    const onScroll = () => {
      const offset = 100;
      let current = "";
      for (const id of [...hashSectionIds, "contact"]) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      const match = navLinks.find((link) => link.id === current);
      if (match) setActive(match.title);
      else if (!current) setActive("");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur-[6px]">
      <nav className="wrap flex h-[68px] items-center justify-between">
        <Link
          to="/"
          className="font-display text-lg font-bold text-ink no-underline"
          onClick={() => {
            setActive("");
            setOpen(false);
          }}
        >
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-[30px] md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.to ? (
                <Link
                  to={link.to}
                  onClick={() => setActive(link.title)}
                  className={`type-nav no-underline transition-colors ${
                    active === link.title
                      ? "text-signal"
                      : "text-ink-soft hover:text-signal"
                  }`}
                >
                  {link.title}
                </Link>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => setActive(link.title)}
                  className={`type-nav no-underline transition-colors ${
                    active === link.title
                      ? "text-signal"
                      : "text-ink-soft hover:text-signal"
                  }`}
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
          <li>
            <a
              href={profile.links.resume}
              download="Srinithi_K_Resume.pdf"
              className="btn-pill"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
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
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-b border-line bg-paper px-6 py-6 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to || link.href}
                    className="type-nav text-base text-ink no-underline"
                    onClick={() => {
                      setActive(link.title);
                      setOpen(false);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={profile.links.resume}
                  download="Srinithi_K_Resume.pdf"
                  className="btn-pill mt-1 inline-flex"
                  onClick={() => setOpen(false)}
                >
                  Resume
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
