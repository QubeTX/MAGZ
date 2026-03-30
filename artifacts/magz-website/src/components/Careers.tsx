import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLocation } from "wouter";

export function Careers() {
  const [, setLocation] = useLocation();

  return (
    <section id="careers" className="py-24 md:py-32 border-t-4 border-secondary/30">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2 className="font-display text-6xl md:text-8xl leading-none mb-8">
              JOIN THE <br />
              <span className="text-secondary">TEAM</span>
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative overflow-hidden border-4 border-foreground/20 max-h-[500px] self-center"
          >
            <img
              src="https://magz.s3.us-east-1.amazonaws.com/assets/Deck+Albert's+Media/ALL+AMERICAN+BOWL-23.webp"
              alt="All American Bowl event"
              className="w-full h-full object-cover object-top min-h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="font-mono text-xs tracking-[0.3em] text-accent mb-2 uppercase">Live Event Activation</p>
              <p className="font-display text-2xl md:text-3xl text-foreground leading-tight">ALL AMERICAN BOWL</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
