import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personal } from "../data/resumeData";
import {
  DoodleStar,
  DoodleSparkle,
  DoodleBraces,
  DoodleCursor,
  FloatingDoodle,
} from "./Doodles";

interface HeroProps {
  reduceMotion: boolean;
}

export default function Hero({ reduceMotion }: HeroProps) {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-blue/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-brand-violet/20 blur-[100px]" />

      {/* Floating doodles */}
      <FloatingDoodle
        reduceMotion={reduceMotion}
        delay={0}
        className="pointer-events-none absolute left-[8%] top-[22%] text-brand-cyan/50"
      >
        <DoodleStar className="h-6 w-6" />
      </FloatingDoodle>
      <FloatingDoodle
        reduceMotion={reduceMotion}
        delay={1.2}
        className="pointer-events-none absolute right-[12%] top-[18%] text-brand-purple/50"
      >
        <DoodleSparkle className="h-7 w-7" />
      </FloatingDoodle>
      <FloatingDoodle
        reduceMotion={reduceMotion}
        delay={0.6}
        className="pointer-events-none absolute left-[14%] bottom-[18%] text-brand-blue/40"
      >
        <DoodleBraces className="h-9 w-9" />
      </FloatingDoodle>
      <FloatingDoodle
        reduceMotion={reduceMotion}
        delay={1.8}
        className="pointer-events-none absolute right-[10%] bottom-[26%] text-brand-cyan/40"
      >
        <DoodleCursor className="h-6 w-6" />
      </FloatingDoodle>

      <div className="section-container relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-ink-300"
        >
          Hello, I&apos;m Shivani 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink-100 sm:text-6xl lg:text-7xl"
        >
          FULL STACK <span className="text-gradient">DEVELOPER</span>
          <span className="text-brand-cyan">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-base text-ink-300 sm:text-lg"
        >
          I build responsive, user-focused web applications with modern frontend
          technologies, REST APIs, authentication, and full-stack integrations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-3 font-display text-sm font-medium tracking-wide text-brand-cyan sm:text-base"
        >
          React • Node.js • Express • MongoDB
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            View My Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href={personal.resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-ink-100 transition-colors hover:border-brand-violet/60 hover:text-white"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
