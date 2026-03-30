import { motion } from "framer-motion";

export function Marquee() {
  const text = "UNLOCKING NEW AVENUES FOR GROWTH THROUGH STRATEGIC PARTNERSHIPS IN COLLEGIATE AND PROFESSIONAL SPORTS ";
  
  return (
    <div className="w-full bg-accent border-y-4 border-foreground py-4 md:py-6 overflow-hidden flex items-center relative z-20">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
        className="flex whitespace-nowrap"
      >
        <div className="flex items-center">
          <span className="font-display text-4xl md:text-7xl text-black uppercase tracking-wide">
            {text}
          </span>
          <span className="font-display text-4xl md:text-7xl text-black uppercase tracking-wide mx-8">
            ///
          </span>
          <span className="font-display text-4xl md:text-7xl text-black uppercase tracking-wide text-outline">
            {text}
          </span>
          <span className="font-display text-4xl md:text-7xl text-black uppercase tracking-wide mx-8">
            ///
          </span>
        </div>
      </motion.div>
    </div>
  );
}
