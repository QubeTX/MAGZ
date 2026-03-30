import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const errorWords = [
  "OUT", "OF", "BOUNDS", "///", "PAGE", "NOT", "FOUND", "///", "ERROR", "404", "///"
];

const navCards = [
  { num: "01", title: "HOME", desc: "Back to the starting lineup", route: "/" },
  { num: "02", title: "CAREERS", desc: "Join the team", route: "/careers" },
  { num: "03", title: "FIND US", desc: "Connect on our socials", external: "https://linktr.ee/magzsports" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

function MarqueeContent() {
  return (
    <div className="flex items-center shrink-0">
      {errorWords.map((word, i) => (
        <span key={i} className="flex items-center">
          {word === "///" ? (
            <span className="font-display font-extrabold text-4xl md:text-7xl text-secondary/60 uppercase tracking-wide mx-8">
              ///
            </span>
          ) : (
            <>
              <span className="font-display font-extrabold text-4xl md:text-7xl text-black uppercase tracking-wide mx-2">
                {word}
              </span>
              {i < errorWords.length - 1 && errorWords[i + 1] !== "///" && (
                <span className="text-secondary text-3xl md:text-5xl mx-3 font-bold">
                  ●
                </span>
              )}
            </>
          )}
        </span>
      ))}
    </div>
  );
}

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,148,29,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,107,198,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <motion.h1
              className="font-display font-black text-[30vw] md:text-[25vw] leading-[0.8] gradient-text glow-accent select-none"
              animate={{ x: [0, -3, 5, -2, 0], skewX: [0, -2, 1, 3, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 4, duration: 0.4 }}
            >
              404
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.1em", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-display text-4xl md:text-7xl text-outline tracking-wide uppercase mt-4"
          >
            OUT OF BOUNDS
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
            className="font-sans text-lg md:text-xl text-foreground/70 max-w-2xl text-center mt-8"
          >
            The page you're looking for has left the field. It might have been traded, moved, or never existed.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
            onClick={() => setLocation("/")}
            className="brutalist-button text-base flex items-center gap-3 mt-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft size={20} />
            BACK TO HOME
          </motion.button>
        </div>

        {/* Corner label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-6 md:left-12 font-mono text-xs text-foreground/40 tracking-widest hidden md:block"
        >
          ERROR 404 // PAGE NOT FOUND
        </motion.div>

        {/* Rotating geometric shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-12 right-6 md:right-12 hidden md:flex gap-2"
        >
          <motion.div className="w-4 h-4 bg-accent" animate={{ rotate: [0, 90, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
          <motion.div className="w-4 h-4 bg-secondary" animate={{ rotate: [0, -90, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }} />
          <motion.div className="w-4 h-4 border-2 border-foreground" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
        </motion.div>
      </section>

      {/* Error Marquee Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full bg-gradient-to-r from-accent via-accent to-[#F5A623] border-y-4 border-foreground py-4 md:py-6 overflow-hidden flex items-center relative z-20"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap"
        >
          <MarqueeContent />
          <MarqueeContent />
        </motion.div>
      </motion.div>

      {/* Navigation Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-display text-4xl md:text-6xl leading-none">
              LOST?<br />
              <span className="text-accent">TRY THESE</span>
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-accent to-secondary mt-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-[2px]"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {navCards.map((card) => (
              <motion.div
                key={card.num}
                variants={fadeUp}
                className="border-4 border-foreground/20 p-8 md:p-10 group cursor-pointer transition-all duration-300 hover:border-accent hover:bg-accent/5 relative overflow-hidden"
                whileHover={{ x: 4 }}
                onClick={() => {
                  if (card.external) {
                    window.open(card.external, "_blank", "noopener,noreferrer");
                  } else if (card.route) {
                    setLocation(card.route);
                  }
                }}
              >
                <span className="font-mono text-2xl text-secondary/60 font-bold">{card.num}</span>
                <h3 className="font-display text-3xl mt-2">{card.title}</h3>
                <p className="font-sans text-foreground/60 mt-2">{card.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
