import { Github, Linkedin } from "lucide-react";
import { personal } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="section-container flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-base font-semibold text-ink-100">{personal.name}</p>
          <p className="text-sm text-ink-500">{personal.title}</p>
        </div>

        <p className="max-w-xs text-sm text-ink-300">
          Building things with code, curiosity, and a little creativity ✨
        </p>

        <div className="flex gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-ink-100 transition-colors hover:border-brand-violet/50 hover:text-brand-violet"
          >
            <Github size={17} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-ink-100 transition-colors hover:border-brand-violet/50 hover:text-brand-violet"
          >
            <Linkedin size={17} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-ink-500">
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </p>
    </footer>
  );
}
