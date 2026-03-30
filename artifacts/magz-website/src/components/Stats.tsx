import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Athletes" },
  { value: 50, suffix: "+", label: "Brands" },
  { value: 75, suffix: "+", label: "Universities" },
  { value: 500, suffix: "M+", label: "Social Impressions" },
  { value: 30, suffix: "+", label: "Sports Agencies" },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="border-y-4 border-foreground bg-foreground text-background py-24 overflow-hidden relative">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-mono font-bold text-xl md:text-2xl tracking-widest uppercase mb-4">
            Since 2021 We Have Worked With
          </h2>
          <div className="w-full h-1 bg-background"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-start lg:items-center relative"
            >
              <div className="font-display text-7xl md:text-8xl lg:text-[7rem] leading-none tracking-tight flex items-baseline">
                {isInView ? (
                  <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    useEasing={true}
                    separator=","
                  />
                ) : (
                  "0"
                )}
                <span className="text-4xl lg:text-6xl text-background/50 ml-1">{stat.suffix}</span>
              </div>
              <div className="font-mono font-bold text-sm md:text-base tracking-widest uppercase mt-4 border-t-2 border-background pt-2 w-full lg:text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
