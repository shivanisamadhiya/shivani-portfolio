import { useEffect, useState } from "react";

/**
 * Tracks the user's OS-level "reduce motion" accessibility preference.
 * Components use this to skip decorative animation (floating doodles,
 * gradient movement) while still functioning fully without it.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return reduced;
}
