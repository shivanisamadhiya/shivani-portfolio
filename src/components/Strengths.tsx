import { motion } from "framer-motion";
import { Layers, Plug, KeyRound, Wrench, Bug, GitBranch } from "lucide-react";
import { strengths } from "../data/resumeData";
import { DoodleUnderline } from "./Doodles";

const icons = [Layers, Plug, KeyRound, Wrench, Bug, GitBranch];

export default function Strengths() {
  return (
    <section className="relative py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mb-14 inline-block"
        >
          <h2 className="font-display text-3xl font-bold text-ink-100 sm:text-4xl">What I Bring</h2>
          <DoodleUnderline className="mt-1 h-3 w-full text-brand-cyan/60" />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-navy-900/50 p-6 transition-colors hover:border-brand-violet/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-violet">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-base font-semibold text-ink-100">{strength.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{strength.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
