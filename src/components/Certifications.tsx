import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/resumeData";
import { DoodleUnderline, DoodleStar } from "./Doodles";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mb-14 inline-block"
        >
          <h2 className="font-display text-3xl font-bold text-ink-100 sm:text-4xl">
            Certifications &amp; Achievements
          </h2>
          <DoodleUnderline className="mt-1 h-3 w-full text-brand-purple/60" />
        </motion.div>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-blue/60 via-brand-violet/40 to-transparent sm:block" />

          <ul className="space-y-4">
            {certifications.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="relative flex items-start gap-4 rounded-2xl border border-white/10 bg-navy-900/50 p-5 pl-6 transition-colors hover:border-brand-cyan/40 sm:pl-14"
              >
                <span className="absolute left-4 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient sm:block" />
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-cyan sm:hidden">
                  <Award size={18} />
                </div>
                <DoodleStar className="mt-1 hidden h-4 w-4 flex-shrink-0 text-brand-cyan/60 sm:block" />
                <p className="text-sm leading-relaxed text-ink-100 sm:text-base">{item}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
