import { profile } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/8 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-display text-sm font-semibold text-ink">
          {profile.name}
          <span className="ml-2 font-sans font-normal text-slate-mist">
            · {profile.role}
          </span>
        </p>
        <p className="font-mono text-xs text-slate-mist">
          © {year} · Built with intent
        </p>
      </div>
    </footer>
  );
};

export default Footer;
