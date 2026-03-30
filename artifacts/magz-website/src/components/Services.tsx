import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    num: "01",
    title: "AI-POWERED GROWTH",
    desc: "MAGZ Marketing leverages AI-powered analytics and advanced data modeling to intelligently connect athletes, collectives, and agencies with the most aligned brand partners—driving stronger fit, faster activation, and measurable performance. Our approach prioritizes measurable outcomes, deploying precision-targeted campaigns and custom-built activations that elevate both athlete and brand value.",
    bullets: [
      "AI-Driven Strategy: Utilizes machine learning and advanced analytics to identify optimal athlete–brand alignments based on performance, audience overlap, and brand fit.",
      "Intelligent Targeting: Analyzes engagement trends, fan demographics, content performance, and brand affinity to create precision-matched partnerships.",
      "Performance-Based ROI: Focuses on trackable outcomes through data-backed campaigns that increase visibility, engagement, and conversion.",
      "Custom Activation Design: Develops tailored marketing initiatives that maximize exposure across social, NIL, and experiential channels.",
      "Real-Time Optimization: Campaigns adapt dynamically using live performance data to maximize impact."
    ]
  },
  {
    num: "02",
    title: "ELITE BRAND ACCESS",
    desc: "Tap into an ecosystem of athletes, brands, and agencies across diverse industries and markets. Leverage athlete and influencer reach to penetrate new demographics and expand market presence. Access a curated roster of influential athletes for endorsements, content, and activations. From introductions to execution, we manage every aspect of the collaboration process. Our network includes proven partners with track records of delivering real business results.",
    bullets: [
      "Extensive Network Access: Tap into an ecosystem of athletes, brands, and agencies across diverse industries and markets.",
      "Audience Expansion: Leverage athlete and influencer reach to penetrate new demographics and expand market presence.",
      "Influencer & Athlete Marketing: Access a curated roster of influential athletes for endorsements, content, and activations.",
      "Full-Service Partnership Management: From introductions to execution, we manage every aspect of the collaboration process.",
      "Trusted by Industry Leaders: Our network includes proven partners with track records of delivering real business results."
    ]
  },
  {
    num: "03",
    title: "TALENT. TRACTION. SCALE.",
    desc: "MAGZ Marketing combines real-time athlete access, agency relationships, and elite college football media networks, we help agencies move faster—sourcing the right athletes for events, NIL activations, and brand partnerships while building immediate traction around games, tournaments, and key moments. Our platform bridges talent, brands, and distribution to maximize impact across college football and the broader sports landscape.",
    bullets: [
      "Transfer Portal Acceleration: Partner with agencies to identify, position, and activate talent efficiently as athletes enter or move through the transfer portal.",
      "Agency Talent Sourcing: Source and deploy top athletes for live events, brand activations, and experiential marketing—aligned to campaign goals and timelines.",
      "Live Moment Activation: Build momentum around games, tournaments, and tentpole sporting events through real-time athlete and media integration.",
      "Elite Distribution Network: Leverage some of the largest college football social media accounts to drive immediate exposure and fan engagement.",
      "Brand Entry Strategy: Support brands entering college football and sports by pairing the right talent with proven media reach and cultural relevance."
    ]
  }
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
};

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = useCallback((idx: number) => {
    const isOpen = openIndex === idx;
    setOpenIndex(isOpen ? null : idx);
    if (!isOpen) {
      setTimeout(() => {
        const el = itemRefs.current[idx];
        const lenis = (window as any).__lenis;
        if (el && lenis) {
          lenis.scrollTo(el, { offset: -100, duration: 1 });
        }
      }, 100);
    }
  }, [openIndex]);

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 className="font-display text-6xl md:text-8xl leading-none">
            WHAT <br/>
            <span className="text-accent">WE DO</span>
          </h2>
          <motion.div
            className="h-4 bg-gradient-to-r from-accent to-secondary mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="lg:col-span-8 flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={service.num}
                ref={(el: HTMLDivElement | null) => { itemRefs.current[idx] = el; }}
                variants={slideUp}
                className={cn(
                  "border-4 transition-all duration-300",
                  isOpen ? "border-accent bg-accent/5 shadow-[0_0_30px_rgba(247,148,29,0.1)]" : "border-foreground/20 bg-transparent hover:border-accent/50"
                )}
                whileHover={!isOpen ? { x: 4, borderColor: "rgba(247,148,29,0.5)" } : {}}
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <motion.span
                      className={cn(
                        "font-mono text-2xl md:text-4xl font-bold transition-colors",
                        isOpen ? "text-accent" : "text-secondary/60"
                      )}
                      animate={isOpen ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {service.num}
                    </motion.span>
                    <h3 className="font-display text-3xl md:text-5xl tracking-wide m-0">
                      {service.title}
                    </h3>
                  </div>
                  <motion.div
                    className={cn(
                      "p-2 border-2 transition-colors",
                      isOpen ? "border-accent text-accent" : "border-foreground/40 text-foreground/40"
                    )}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 border-t-2 border-accent/30 mt-4">
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                          className="font-sans text-lg md:text-xl leading-relaxed text-foreground/90 mb-8 max-w-4xl"
                        >
                          {service.desc}
                        </motion.p>
                        <ul className="space-y-4">
                          {service.bullets.map((bullet, i) => {
                            const [title, desc] = bullet.split(": ");
                            return (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                                className="flex gap-4 items-start font-sans text-base md:text-lg"
                              >
                                <span className="text-accent mt-1">■</span>
                                <div>
                                  <strong className="text-accent tracking-wide">{title}:</strong>
                                  <span className="text-foreground/70 ml-2">{desc}</span>
                                </div>
                              </motion.li>
                            );
                          })}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
