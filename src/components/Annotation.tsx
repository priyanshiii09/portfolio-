import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function Annotation({
  children,
  rotate = -2,
  className = "",
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`hand ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </motion.p>
  );
}
