import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 300, suffix: "+", label: "Athletes", color: "text-accent" },
  { value: 80, suffix: "+", label: "Brands", color: "text-secondary" },
  { value: 45, suffix: "+", label: "Universities", color: "text-accent" },
  { value: 3, suffix: "B+", label: "Social Impressions", color: "text-accent" },
  { value: 15, suffix: "+", label: "Sports Agencies", color: "text-accent" },
];

function useViewAmount() {
  const [amount, setAmount] = useState(0.3);
  useEffect(() => {
    const update = () => {
      // On tall viewports (desktop), require more of the grid visible
      // On short viewports (mobile), trigger earlier since grid stacks vertically
      const vh = window.innerHeight;
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setAmount(0.08); // just the first stat needs to peek in
      } else if (vh > 900) {
        setAmount(0.4); // tall desktop: numbers well in view
      } else {
        setAmount(0.2); // shorter desktop/laptop
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return amount;
}

export function Stats() {
  const sectionRef = useRef(null);
  const numbersRef = useRef(null);
  const viewAmount = useViewAmount();
  const isInView = useInView(numbersRef, { once: true, amount: viewAmount });

  return (
    <section id="stats" className="border-y-4 border-accent bg-background text-foreground py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,148,29,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,107,198,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-mono font-bold text-xl md:text-2xl tracking-widest uppercase mb-4">
            Since 2021 We Have Worked With
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-foreground via-foreground/50 to-transparent"></div>
        </motion.div>

        <div ref={numbersRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-start lg:items-center relative group"
            >
              <motion.div
                className="font-display font-extrabold text-7xl md:text-8xl lg:text-[7rem] leading-none tracking-tight flex items-baseline"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isInView ? (
                  <CountUp end={stat.value} duration={stat.value <= 15 ? 4 : 5} useEasing separator="," />
                ) : (
                  "0"
                )}
                {stat.suffix === "B+" ? (
                  <>
                    <span className="text-foreground">B</span>
                    <span className="text-accent text-4xl lg:text-6xl opacity-80">+</span>
                  </>
                ) : (
                  <span className={`text-4xl lg:text-6xl ml-1 ${stat.color} opacity-80`}>{stat.suffix}</span>
                )}
              </motion.div>
              <div className="font-mono font-bold text-sm md:text-base tracking-widest uppercase mt-4 border-t-2 border-foreground/20 group-hover:border-foreground pt-2 w-full lg:text-center transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
