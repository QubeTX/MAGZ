import { motion } from "framer-motion";

const words = [
  "UNLOCKING", "NEW", "AVENUES", "FOR", "GROWTH", "THROUGH",
  "STRATEGIC", "PARTNERSHIPS", "IN", "COLLEGIATE", "AND",
  "PROFESSIONAL", "SPORTS"
];

function MarqueeContent() {
  return (
    <div className="flex items-center shrink-0">
      {words.map((word, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display text-4xl md:text-7xl text-black uppercase tracking-wide mx-2">
            {word}
          </span>
          {i < words.length - 1 && (
            <span className="text-secondary text-3xl md:text-5xl mx-3 font-bold">
              {i % 3 === 0 ? "●" : i % 3 === 1 ? "◆" : "▲"}
            </span>
          )}
        </span>
      ))}
      <span className="font-display text-4xl md:text-7xl text-secondary/60 uppercase tracking-wide mx-8">
        ///
      </span>
    </div>
  );
}

export function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full bg-gradient-to-r from-accent via-accent to-[#F5A623] border-y-4 border-foreground py-4 md:py-6 overflow-hidden flex items-center relative z-20"
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
        className="flex whitespace-nowrap"
      >
        <MarqueeContent />
        <MarqueeContent />
      </motion.div>
    </motion.div>
  );
}
