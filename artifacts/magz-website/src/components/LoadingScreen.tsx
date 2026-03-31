import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINE_WORDS = ["MAGZ", "MARKETING"];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const minTime = new Promise((r) => setTimeout(r, 2200));
    const loaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") return resolve();
      window.addEventListener("load", () => resolve(), { once: true });
    });

    Promise.all([minTime, loaded]).then(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    });

    const maxTimeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 5000);

    return () => clearTimeout(maxTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,148,29,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,107,198,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

          {/* Top accent line sweep */}
          <motion.div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Bottom accent line sweep (delayed) */}
          <motion.div
            className="absolute bottom-0 right-0 h-1 bg-gradient-to-l from-accent via-secondary to-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Corner brackets — top left */}
          <motion.div
            className="absolute top-8 left-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="w-12 h-12 border-l-2 border-t-2 border-accent" />
          </motion.div>

          {/* Corner brackets — bottom right */}
          <motion.div
            className="absolute bottom-8 right-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="w-12 h-12 border-r-2 border-b-2 border-secondary" />
          </motion.div>

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo with reveal animation */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2,
              }}
            >
              {/* Geometric frame around logo */}
              <motion.div
                className="absolute -inset-6 border-2 border-accent/20"
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.div
                className="absolute -inset-10 border border-secondary/10"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              />

              <img
                src="https://magz.s3.us-east-1.amazonaws.com/MAGZ+Logos/Colorful+M.png"
                alt="MAGZ"
                className="w-20 h-20 md:w-28 md:h-28 object-contain relative z-10"
              />
            </motion.div>

            {/* Staggered word reveal */}
            <div className="flex gap-4 overflow-hidden">
              {LINE_WORDS.map((word, i) => (
                <motion.span
                  key={word}
                  className="font-display text-2xl md:text-4xl tracking-[0.2em] text-foreground"
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.8 + i * 0.15,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Animated progress bar */}
            <motion.div
              className="w-48 md:w-64 h-[2px] bg-foreground/10 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-secondary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
              />
            </motion.div>

            {/* Mono label */}
            <motion.p
              className="font-mono text-[10px] tracking-[0.4em] text-foreground/30 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              EST. 2021 // DALLAS, TX
            </motion.p>
          </div>

          {/* Floating geometric accents */}
          <motion.div
            className="absolute top-1/4 right-[15%] w-3 h-3 bg-accent/20"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 45 }}
            transition={{ delay: 1, duration: 0.6 }}
          />
          <motion.div
            className="absolute bottom-1/3 left-[12%] w-2 h-2 bg-secondary/20"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 45 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
