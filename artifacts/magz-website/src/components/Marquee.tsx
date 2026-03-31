import { motion } from "framer-motion";

const words = [
  "UNLOCKING", "NEW", "AVENUES", "FOR", "GROWTH", "THROUGH",
  "STRATEGIC", "PARTNERSHIPS", "IN", "COLLEGIATE", "AND",
  "PROFESSIONAL", "SPORTS"
];

function MarqueeContent() {
  return (
    <div className="flex items-center shrink-0">
      <span className="text-secondary text-3xl md:text-5xl mx-3 font-bold">●</span>
      {words.map((word, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display font-extrabold text-4xl md:text-7xl text-white uppercase tracking-wide mx-2">
            {word}
          </span>
        </span>
      ))}
      <span className="text-secondary text-3xl md:text-5xl mx-3 font-bold">●</span>
      <span className="font-display font-extrabold text-4xl md:text-7xl text-white/60 uppercase tracking-wide mx-8">
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
      <div
        className="flex whitespace-nowrap animate-[marquee-scroll_20s_linear_infinite]"
        style={{ willChange: "transform" }}
      >
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </motion.div>
  );
}
