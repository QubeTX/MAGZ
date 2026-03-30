import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PretextHeading } from "./PretextHeading";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <video
          src="https://magz.s3.us-east-1.amazonaws.com/assets/magz_VIDEO_optimized.webm"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 scale-110 origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-secondary/10"></div>
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="w-full"
        >
          <motion.p
            initial={{ letterSpacing: "0.8em", opacity: 0 }}
            animate={{ letterSpacing: "0.3em", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-mono text-xl md:text-2xl text-accent mb-0 relative z-20 glow-accent"
          >
            WE ARE
          </motion.p>
          <PretextHeading
            text="MAGZ"
            font="bold 120px Anton"
            className="font-display text-[22vw] md:text-[20vw] leading-[0.8] text-foreground select-none glow-accent"
          />
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 md:mt-8 max-w-3xl relative"
        >
          <div className="h-1 w-full bg-gradient-to-r from-accent via-accent to-secondary mb-6"></div>
          <p className="font-sans font-bold text-lg md:text-2xl leading-relaxed uppercase text-foreground/90">
            Magz Marketing sits at the intersection of{" "}
            <motion.span
              className="text-accent inline-block"
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              AI
            </motion.span>
            ,{" "}
            <motion.span
              className="text-secondary inline-block"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Athlete Influence
            </motion.span>
            , and{" "}
            <motion.span
              className="text-accent inline-block"
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Social Distribution
            </motion.span>
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-6 md:left-12 font-mono text-xs text-foreground/40 tracking-widest hidden md:block"
      >
        EST. 2021 // DALLAS, TX
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-12 right-6 md:right-12 hidden md:flex gap-2"
      >
        <motion.div className="w-4 h-4 bg-accent" animate={{ rotate: [0, 90, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}></motion.div>
        <motion.div className="w-4 h-4 bg-secondary" animate={{ rotate: [0, -90, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}></motion.div>
        <motion.div className="w-4 h-4 border-2 border-foreground" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}></motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/30 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent"></div>
          <svg width="12" height="8" viewBox="0 0 12 8" className="text-accent mt-1">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="square" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
