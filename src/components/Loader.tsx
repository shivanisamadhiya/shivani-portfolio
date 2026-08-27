import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  visible: boolean;
}

/**
 * Brief developer-themed loading sequence shown on first paint.
 * Purely decorative and skipped instantly for prefers-reduced-motion users
 * since App.tsx shortens the timer in that case.
 */
export default function Loader({ visible }: LoaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="flex items-center gap-1 font-display text-4xl font-semibold text-ink-100 sm:text-5xl"
            initial="hidden"
            animate="show"
          >
            <span className="text-brand-violet">{"{"}</span>
            <motion.span
              className="text-gradient"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              SS
            </motion.span>
            <span className="text-brand-blue">{"}"}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
