import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { PretextHeading } from "./PretextHeading";

export function Hero() {
  const ref = useRef(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const [shouldSplit, setShouldSplit] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const lastSubtitleWidthRef = useRef<number>(0);
  const subtitleTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const measureSubtitle = useCallback(async () => {
    if (!subtitleRef.current) return;
    try {
      const containerWidth = subtitleRef.current.offsetWidth;
      if (containerWidth <= 0) return;
      // Skip if width hasn't meaningfully changed
      if (Math.abs(containerWidth - lastSubtitleWidthRef.current) < 2) return;
      lastSubtitleWidthRef.current = containerWidth;

      const pretext = await import("@chenglou/pretext");
      const style = getComputedStyle(subtitleRef.current);
      const fontSize = parseFloat(style.fontSize);
      const fontStr = `bold ${fontSize}px Guton`;
      const secondLine = "AI, ATHLETE INFLUENCE, AND SOCIAL DISTRIBUTION";
      const prepared = pretext.prepare(secondLine, fontStr);
      const result = pretext.layout(prepared, containerWidth, fontSize * 1.6);

      setShouldSplit(result.height <= fontSize * 1.8);
    } catch {
      setShouldSplit(false);
    }
  }, []);

  useEffect(() => {
    const initTimer = setTimeout(measureSubtitle, 50);
    const observer = new ResizeObserver(() => {
      clearTimeout(subtitleTimerRef.current);
      subtitleTimerRef.current = setTimeout(measureSubtitle, 100);
    });
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    return () => {
      clearTimeout(initTimer);
      clearTimeout(subtitleTimerRef.current);
      observer.disconnect();
    };
  }, [measureSubtitle]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
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
            className="font-mono text-xl md:text-2xl text-accent mb-4 relative z-20 glow-accent"
          >
            WE ARE
          </motion.p>
          <PretextHeading
            text="MAGZ"
            font="900 120px Guton"
            className="font-display text-[22vw] md:text-[20vw] leading-[0.8] text-foreground select-none glow-accent"
          />
        </motion.div>

        <motion.div
          ref={subtitleRef}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 md:mt-8 max-w-3xl relative"
        >
          <div className="h-1 w-full bg-gradient-to-r from-accent via-accent to-secondary mb-6"></div>
          <p className="font-sans font-bold text-lg md:text-2xl leading-relaxed uppercase text-foreground/90">
            Magz Marketing sits at the intersection of
            {shouldSplit && <br />}
            {shouldSplit ? " " : " "}
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
        <div className="w-4 h-4 bg-accent animate-[hero-rotate_4s_ease-in-out_infinite]" />
        <div className="w-4 h-4 bg-secondary animate-[hero-rotate-reverse_4s_ease-in-out_0.5s_infinite]" />
        <div className="w-4 h-4 border-2 border-foreground animate-[hero-pulse_2s_ease-in-out_infinite]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/30 uppercase">Scroll</span>
        <div
          className="flex flex-col items-center animate-[hero-bounce-y_1.5s_ease-in-out_infinite]"
        >
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent"></div>
          <svg width="12" height="8" viewBox="0 0 12 8" className="text-accent mt-1">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="square" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
