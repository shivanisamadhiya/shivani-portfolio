import { motion } from "framer-motion";
import { skillCategories } from "../data/resumeData";
import { DoodleUnderline, DoodleSparkle } from "./Doodles";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mb-4 inline-block"
        >
          <h2 className="font-display text-3xl font-bold text-ink-100 sm:text-4xl">My Tech Stack</h2>
          <DoodleUnderline className="mt-1 h-3 w-full text-brand-cyan/60" />
        </motion.div>
        <p className="mb-14 max-w-2xl text-ink-300">
          Technologies I use to build full-stack web applications, grouped by where
          they fit in the stack.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/50 p-5 transition-colors hover:border-brand-violet/50 hover:shadow-glow-sm"
            >
              <DoodleSparkle className="pointer-events-none absolute -right-2 -top-2 h-8 w-8 text-brand-violet/0 transition-colors group-hover:text-brand-violet/30" />

              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand-cyan">
                  {category.title}
                </h3>
                {category.level === "fundamentals" && (
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-ink-500">
                    Fundamentals
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-300 transition-colors group-hover:text-ink-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
