import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function JournalCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState<string | null>(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (matchMedia("(pointer: coarse)").matches) {
      setTouch(true);
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const tag = t?.closest("[data-cursor]");
      setHover(tag?.getAttribute("data-cursor") || null);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (touch) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100]"
    >
      <motion.div
        animate={{
          width: hover ? 80 : 10,
          height: hover ? 80 : 10,
          x: hover ? -40 : -5,
          y: hover ? -40 : -5,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex items-center justify-center rounded-full bg-ink text-paper"
        style={{ fontFamily: "Courier Prime, monospace", fontSize: 11, letterSpacing: "0.1em" }}
      >
        {hover && <span className="uppercase">{hover}</span>}
      </motion.div>
    </motion.div>
  );
}
