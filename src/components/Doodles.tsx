import { motion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

/**
 * A small library of hand-drawn-feeling SVG doodles used sparingly around
 * section content. Each is intentionally minimal (single stroke, no fill)
 * so they read as accents rather than illustrations, and never interfere
 * with text readability.
 */

interface DoodleProps extends HTMLAttributes<SVGSVGElement> {
  className?: string;
}

export function DoodleStar({ className = "", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M12 2L13.8 9.3L21 12L13.8 14.7L12 22L10.2 14.7L3 12L10.2 9.3L12 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSparkle({ className = "", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleHeart({ className = "", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M12 20.5C6 16.5 2.5 12.9 2.5 9.1 2.5 6.3 4.7 4 7.5 4c1.7 0 3.3.9 4.5 2.3C13.2 4.9 14.8 4 16.5 4c2.8 0 5 2.3 5 5.1 0 3.8-3.5 7.4-9.5 11.4z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function DoodleArrowCurl({ className = "", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 24" fill="none" className={className} {...props}>
      <path
        d="M2 6c8-6 20-4 24 4s-6 12-14 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M8 16l4 3-1-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleBraces({ className = "", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M8 3C6 3 5.5 4 5.5 6v3c0 1-.5 1.5-1.5 1.5v1c1 0 1.5.5 1.5 1.5v3c0 2 .5 3 2.5 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16 3c2 0 2.5 1 2.5 3v3c0 1 .5 1.5 1.5 1.5v1c-1 0-1.5.5-1.5 1.5v3c0 2-.5 3-2.5 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleCursor({ className = "", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M5 3l6.5 15.5 2-6 6-2L5 3z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleLaptop({ className = "", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 24" fill="none" className={className} {...props}>
      <rect x="6" y="3" width="20" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 20h28l-2.5-3H4.5L2 20z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleCoffee({ className = "", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path d="M4 9h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 6c0-1 1-1 1-2M12 6c0-1 1-1 1-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleCloud({ className = "", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 20" fill="none" className={className} {...props}>
      <path
        d="M8 16c-3.3 0-6-2.4-6-5.4 0-2.8 2.2-5 5-5.3C7.8 3 10.2 1 13 1c3.2 0 5.8 2.3 6.2 5.3h.3c3.6 0 6.5 2.5 6.5 5.6S23.1 16 19.5 16H8z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function DoodleCircleOutline({ className = "", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" strokeDasharray="3 3" />
    </svg>
  );
}

export function DoodleUnderline({ className = "", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 16" fill="none" preserveAspectRatio="none" className={className} {...props}>
      <path d="M2 10c30-8 140-8 196 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * A floating wrapper that applies a gentle vertical bob to any doodle.
 * Respects prefers-reduced-motion via the `reduceMotion` flag passed down
 * from the parent (see useReducedMotion hook).
 */
export function FloatingDoodle({
  children,
  className = "",
  delay = 0,
  reduceMotion = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  reduceMotion?: boolean;
}) {
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}
