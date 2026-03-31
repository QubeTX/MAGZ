import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLocation } from "wouter";

export function Careers() {
  const [, setLocation] = useLocation();

  return (
    <section id="careers" className="py-24 md:py-32 border-t-4 border-secondary/30">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-6xl md:text-8xl leading-none mb-8">
            JOIN THE <br />
            <span className="text-outline-accent">TEAM</span>
          </h2>
          <motion.div
            className="h-4 bg-gradient-to-r from-secondary to-accent mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="font-sans text-lg md:text-xl leading-relaxed text-foreground/80 max-w-xl mb-8">
            We're building the future of sports marketing at the intersection of AI, athlete influence, and social distribution. If you're driven, creative, and ready to move fast — we want to hear from you.
          </p>
          <motion.button
            onClick={() => {
              setLocation("/careers");
              window.scrollTo({ top: 0 });
            }}
            className="brutalist-button text-base flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            EXPLORE CAREERS <ArrowUpRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
