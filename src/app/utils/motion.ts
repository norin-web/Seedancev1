import { useEffect, useState } from "react";

export const reduced = () => typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Cycles through `count` items every `ms`, pausing while `paused` is true,
 * while the tab is hidden and for reduced motion. Returns [index, setIndex].
 */
export function useAutoCycle(count: number, ms: number, paused = false) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (paused || reduced()) return;
    const t = setTimeout(() => {
      if (!document.hidden) setI((v) => (v + 1) % count);
    }, ms);
    return () => clearTimeout(t);
  }, [i, count, ms, paused]);
  return [i, setI] as const;
}
