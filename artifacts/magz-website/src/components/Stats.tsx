import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Athletes", color: "text-accent" },
  { value: 50, suffix: "+", label: "Brands", color: "text-secondary" },
  { value: 75, suffix: "+", label: "Universities", color: "text-accent" },
  { value: 500, suffix: "M+", label: "Social Impressions", color: "text-secondary" },
  { value: 30, suffix: "+", label: "Sports Agencies", color: "text-accent" },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="border-y-4 border-accent bg-foreground text-background py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,148,29,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,107,198,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-mono font-bold text-xl md:text-2xl tracking-widest uppercase mb-4">
            Since 2021 We Have Worked With
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-start lg:items-center relative group"
            >
              <motion.div
                className="font-display text-7xl md:text-8xl lg:text-[7rem] leading-none tracking-tight flex items-baseline"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isInView ? (
                  <CountUp end={stat.value} duration={2.5} useEasing separator="," />
                ) : (
                  "0"
                )}
                <span className={`text-4xl lg:text-6xl ml-1 ${stat.color} opacity-80`}>{stat.suffix}</span>
              </motion.div>
              <div className="font-mono font-bold text-sm md:text-base tracking-widest uppercase mt-4 border-t-2 border-background/20 group-hover:border-background pt-2 w-full lg:text-center transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
