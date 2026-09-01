import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "../data/resumeData";
import { DoodleUnderline } from "./Doodles";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mb-14 inline-block"
        >
          <h2 className="font-display text-3xl font-bold text-ink-100 sm:text-4xl">
            Experience
          </h2>
          <DoodleUnderline className="mt-1 h-3 w-full text-brand-violet/60" />
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-glow-sm transition-colors hover:border-brand-violet/40 sm:p-8"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-cyan">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-100 sm:text-xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-cyan sm:text-base">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-4 text-xs text-ink-400 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>

              <ul className="space-y-2.5">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}