import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export function PageTurnTransition({
  pageKey,
  children,
}: {
  pageKey: string;
  children: ReactNode;
}) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = matchMedia("(max-width: 768px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const ease = [0.645, 0.045, 0.355, 1] as const;

  if (mobile) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={pageKey}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-30%", opacity: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="book-perspective">
      <AnimatePresence mode="wait">
        <motion.div
          key={pageKey}
          className="book-page origin-left"
          style={{ transformOrigin: "left center" }}
          initial={{ rotateY: 180, opacity: 0.4 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -180, opacity: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          {children}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.25, 0] }}
            transition={{ duration: 0.8, ease }}
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.3) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
