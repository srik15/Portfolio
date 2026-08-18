import { profile } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/5 px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm font-semibold text-ink">
          {profile.name}
          <span className="ml-2 font-normal text-slate-mist">· {profile.role}</span>
        </p>
        <p className="text-xs text-slate-mist">
          © {year} · Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
