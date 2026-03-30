import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Image with Brutalist Treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://magzmarketing.com/gross_photo_assets/studio_photo_fieldDay.jpg"
          alt="Athlete background"
          className="w-full h-full object-cover grayscale opacity-30 mix-blend-screen scale-105 origin-center"
        />
        {/* Harsh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="w-full"
        >
          <p className="font-mono text-xl md:text-2xl tracking-[0.3em] text-accent mb-4 md:mb-[-2vw] relative z-20">
            WE ARE
          </p>
          <h1 className="font-display text-[22vw] md:text-[20vw] leading-[0.8] text-foreground mix-blend-difference select-none">
            MAGZ
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12 md:mt-8 max-w-3xl border-t-4 border-accent pt-6"
        >
          <p className="font-sans font-bold text-lg md:text-2xl leading-relaxed uppercase text-foreground/90">
            Magz Marketing sits at the intersection of{" "}
            <span className="text-accent">AI</span>,{" "}
            <span className="text-accent">Athlete Influence</span>, and{" "}
            <span className="text-accent">Social Distribution</span>
          </p>
        </motion.div>
      </div>

      {/* Decorative brutalist elements */}
      <div className="absolute bottom-12 left-6 md:left-12 font-mono text-xs text-foreground/40 tracking-widest hidden md:block">
        EST. 2021 // DALLAS, TX
      </div>
      <div className="absolute bottom-12 right-6 md:right-12 hidden md:flex gap-2">
        <div className="w-4 h-4 bg-accent"></div>
        <div className="w-4 h-4 border-2 border-foreground"></div>
        <div className="w-4 h-4 border-2 border-foreground"></div>
      </div>
    </section>
  );
}
