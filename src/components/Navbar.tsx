import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navItems, personal } from "../data/resumeData";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navItems.map((item) => item.toLowerCase());

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  const handleNavClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-container">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/5 bg-navy-900/70 px-4 py-3 shadow-glow-sm backdrop-blur-md sm:px-6">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 font-display text-lg font-semibold text-ink-100"
            aria-label="Go to home section"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-sm text-white">
              SS
            </span>
            <span className="hidden sm:inline">Shivani</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeId === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-ink-300 hover:text-white"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/5 ring-1 ring-brand-violet/40"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href={personal.resumeFile}
              download
              className="hidden items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-sm font-medium text-white shadow-glow-sm transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              <Download size={15} />
              Resume
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg p-2 text-ink-100 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10}}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, }}
              transition={{ duration: 0.25 }}
              className="mt-2 rounded-2xl border border-white/5 bg-navy-900/95 p-3 backdrop-blur-md md:hidden"
              aria-label="Mobile"
            >
            <          {navItems.map((item) => {
                const id = item.toLowerCase();
                const isActive = activeId === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium ${
                      isActive ? "bg-white/5 text-white" : "text-ink-300"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
              <a
                href={personal.resumeFile}
                download
                className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-brand-gradient px-4 py-3 text-sm font-medium text-white"
              >
                <Download size={15} />
                Download Resume
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
