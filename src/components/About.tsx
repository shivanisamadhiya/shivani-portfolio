import { motion } from "framer-motion";
import { GraduationCap, Code2, ShieldCheck, Sparkles } from "lucide-react";
import { aboutHighlights, education, professionalSummary } from "../data/resumeData";
import { DoodleUnderline, DoodleCircleOutline } from "./Doodles";

const iconFor = [Code2, ShieldCheck, Sparkles];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mb-14 inline-block"
        >
          <h2 className="font-display text-3xl font-bold text-ink-100 sm:text-4xl">
            A little about me
          </h2>
          <DoodleUnderline className="mt-1 h-3 w-full text-brand-violet/60" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-base leading-relaxed text-ink-300 lg:col-span-3 sm:text-lg"
          >
            {professionalSummary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-glow-sm lg:col-span-2"
          >
            <DoodleCircleOutline className="pointer-events-none absolute -right-3 -top-3 h-10 w-10 text-brand-cyan/40" />
            <div className="mb-3 flex items-center gap-2 text-brand-cyan">
              <GraduationCap size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">Education</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-ink-100">{education.degree}</h3>
            <p className="mt-1 text-sm text-ink-300">{education.college}</p>
            <p className="mt-1 text-sm text-ink-500">{education.period}</p>
            <div className="mt-4 flex gap-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-500">CGPA</p>
                <p className="font-display text-xl font-semibold text-ink-100">{education.cgpa}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-500">Current SGPA</p>
                <p className="font-display text-xl font-semibold text-gradient">{education.currentSgpa}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {aboutHighlights.map((highlight, index) => {
            const Icon = iconFor[index % iconFor.length];
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-navy-900/50 p-6 transition-colors hover:border-brand-violet/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-cyan">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-base font-semibold text-ink-100">{highlight.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
