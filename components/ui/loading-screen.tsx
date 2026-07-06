"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#0b0f19]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative h-10 w-10">
              <span className="absolute inset-0 rounded-full border-2 border-white/10" />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-sky-400 border-r-emerald-400"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
            <span className="font-mono text-xs tracking-widest text-ink-subtle">
              LOADING
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
