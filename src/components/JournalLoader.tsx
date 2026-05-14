import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function JournalLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("journal-opened")) return;
    setShow(true);
    sessionStorage.setItem("journal-opened", "1");
    const t = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ perspective: 2000, background: "var(--paper)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative h-[80vh] w-[60vw] max-w-[600px]"
          >
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: -180 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.645, 0.045, 0.355, 1] }}
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                background:
                  "linear-gradient(135deg, #3a2817 0%, #2a1810 50%, #1a0e08 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 0 40px rgba(0,0,0,0.4)",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="absolute inset-6 border-2"
                style={{ borderColor: "#d4af37", opacity: 0.4 }}
              />
              <div
                style={{
                  fontFamily: "Playfair Display",
                  color: "#d4af37",
                  fontSize: 28,
                  letterSpacing: "0.3em",
                  textAlign: "center",
                }}
              >
                THE
                <br />
                <span style={{ fontSize: 56, display: "block", margin: "8px 0" }}>
                  PORTFOLIO
                </span>
                <span style={{ fontFamily: "Courier Prime", fontSize: 12 }}>EST. MMXVIII</span>
              </div>
            </motion.div>
          </motion.div>
          <div
            className="absolute left-0 top-0 h-full w-2"
            style={{ background: "#1a0e08" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
