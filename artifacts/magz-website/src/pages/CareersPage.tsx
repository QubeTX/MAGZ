import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const expertise = [
  {
    num: "01",
    title: "ATHLETE & BRAND ACTIVATION",
    bullets: [
      "Strategic Talent Alignment: Match athletes with brands based on audience fit, performance data, and cultural relevance to ensure authentic partnerships.",
      "NIL & Sponsorship Execution: Develop and manage NIL and brand campaigns from concept through execution, ensuring clear deliverables and timelines.",
      "Live Event Activation: Deploy athletes for live events, appearances, and experiential marketing that drive real-time engagement.",
      "Content & Storytelling: Create and distribute athlete-led content designed to resonate with fans and amplify brand messaging.",
      "Performance Measurement: Track campaign performance across reach, engagement, and conversion to quantify impact and optimize future activations."
    ]
  },
  {
    num: "02",
    title: "AGENCY & TRANSFER PORTAL OPERATIONS",
    bullets: [
      "Direct Agency Collaboration: Work alongside agencies nationwide to support athlete movement, visibility, and opportunity throughout the transfer portal lifecycle.",
      "AI-Backed Talent Identification: Use data and performance insights to identify high-potential athletes and align them with agency, event, and brand needs.",
      "Transfer Portal Efficiency: Streamline communication, sourcing, and activation to help agencies move faster during high-volume portal windows.",
      "Opportunity Deployment: Activate athletes quickly for NIL deals, live events, media moments, and brand partnerships as movement occurs.",
      "Strategic Positioning: Build momentum and visibility for athletes entering the portal through targeted media, content, and distribution strategies."
    ]
  },
  {
    num: "03",
    title: "MEDIA DISTRIBUTION & LIVE EVENT AMPLIFICATION",
    bullets: [
      "Elite Media Network Access: Leverage some of the largest college football and sports social media accounts to scale reach instantly.",
      "Cross-Platform Distribution: Deploy content across multiple social platforms to maximize visibility and audience overlap.",
      "Audience Growth Strategy: Drive sustained follower growth and engagement through data-informed posting and activation strategies.",
      "Performance Tracking & Optimization: Measure reach, engagement, and momentum in real time to refine distribution and maximize impact."
    ]
  }
];

const faqs = [
  {
    q: "What is the company culture like at MAGZ?",
    a: "MAGZ fosters a collaborative, fast-paced, and athlete-centric culture (#TeamMAGZ). We value authenticity, innovation, and strategic thinking. Expect a dynamic environment where you'll work closely with colleagues, athletes, and leading brands in the sports industry."
  },
  {
    q: "What types of roles are typically available?",
    a: "We look for talent across various functions, including Brand Strategy, Creative Design, Social Media Management, Sponsorship Coordination, and Client Relations. Roles often involve cross-functional collaboration to deliver comprehensive marketing solutions for our athletes and partners."
  },
  {
    q: "What is the application process?",
    a: "We primarily manage our recruitment through LinkedIn. Please visit our LinkedIn page for current openings and application instructions. We look for candidates who are passionate about sports, marketing, and driving results."
  },
  {
    q: "Are there opportunities for growth?",
    a: "Absolutely. MAGZ is committed to professional development. Working in the dynamic NIL and sports marketing space provides constant learning opportunities. We encourage innovation and support our team members in expanding their skills and advancing their careers within the company."
  }
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } }
};

export default function CareersPage() {
  const [openExpertise, setOpenExpertise] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const expertiseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleExpertiseToggle = useCallback((idx: number) => {
    const isOpen = openExpertise === idx;
    setOpenExpertise(isOpen ? null : idx);
    if (!isOpen) {
      setTimeout(() => {
        const el = expertiseRefs.current[idx];
        const lenis = (window as any).__lenis;
        if (el && lenis) {
          lenis.scrollTo(el, { offset: -100, duration: 1 });
        }
      }, 500);
    }
  }, [openExpertise]);

  const handleFaqToggle = useCallback((idx: number) => {
    const isOpen = openFaq === idx;
    setOpenFaq(isOpen ? null : idx);
    if (!isOpen) {
      setTimeout(() => {
        const el = faqRefs.current[idx];
        const lenis = (window as any).__lenis;
        if (el && lenis) {
          lenis.scrollTo(el, { offset: -100, duration: 1 });
        }
      }, 500);
    }
  }, [openFaq]);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      <section id="careers-hero" className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://magz.s3.us-east-1.amazonaws.com/assets/office.webp"
            alt="MAGZ Office"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-secondary/10"></div>
          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          ></div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <h1 className="font-display text-7xl md:text-[10rem] leading-[0.85] mb-8 text-outline-accent">
              CAREERS
            </h1>
            <motion.div
              className="h-1 bg-gradient-to-r from-accent to-secondary mb-12"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-sans text-xl md:text-2xl leading-relaxed text-foreground/80 max-w-4xl"
          >
            At MAGZ Marketing, we build the engine behind modern sports marketing. From AI-powered analytics and transfer portal strategy to live event activation and massive social distribution, our team works alongside agencies and brands to move faster and create measurable impact in the sports ecosystem.
          </motion.p>
        </div>
      </section>

      <section id="team" className="border-y-4 border-accent/30">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "OUR TEAM",
                subtitle: "THE HEART OF MAGZ",
                text: "At MAGZ, our strength lies in our diverse team of experts. Roles range from Brand Strategists and Creative Designers crafting compelling campaigns, to Social Media Managers amplifying athlete voices, Sponsorship Coordinators forging key partnerships, and Client Relations Specialists ensuring seamless collaboration. We value creativity, strategic thinking, and a deep passion for the sports world. #TeamMAGZ is built on collaboration and mutual respect."
              },
              {
                title: "WORK WITH",
                subtitle: "THE BEST",
                text: "Gain unparalleled experience collaborating directly with elite collegiate and professional athletes, alongside globally recognized brands. Our extensive partner network includes industry leaders like PGA of America, Buffalo Wild Wings, Bad Birdie, and No Rivals, offering unique exposure and the chance to contribute to high-impact campaigns."
              },
              {
                title: "A DAY",
                subtitle: "AT MAGZ",
                text: "Expect a dynamic, fast-paced environment where no two days are the same. You might be brainstorming a creative campaign for a top professional or collegiate athlete, negotiating a sponsorship deal, analyzing social media trends, producing high-quality content, or collaborating with #TeamMAGZ colleagues. It's challenging, rewarding, and deeply immersed in the exciting, ever-evolving world of sports marketing."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="py-16 md:px-8 first:md:pl-0 last:md:pr-0 group"
              >
                <h3 className="font-display text-4xl md:text-5xl leading-none mb-2">
                  {card.title}
                </h3>
                <h4 className="font-display text-2xl md:text-3xl text-accent mb-6">
                  {card.subtitle}
                </h4>
                <p className="font-sans text-base md:text-lg leading-relaxed text-foreground/70">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="expertise" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/FullSizeRender.webp"
            alt="MAGZ Team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-4">
              PARTNERSHIP <br />
              <span className="text-outline-secondary">EXPERTISE</span>
            </h2>
            <p className="font-sans text-lg md:text-xl text-foreground/70 max-w-3xl mt-6">
              At MAGZ Marketing, we don't follow the sports marketing playbook — we're rewriting it. Explore the key areas our team excels:
            </p>
            <motion.div
              className="h-1 bg-gradient-to-r from-secondary to-accent mt-8"
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            {expertise.map((item, idx) => {
              const isOpen = openExpertise === idx;
              return (
                <motion.div
                  key={item.num}
                  ref={(el: HTMLDivElement | null) => { expertiseRefs.current[idx] = el; }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={cn(
                    "border-4 transition-all duration-300",
                    isOpen ? "border-accent bg-accent/5 shadow-[0_0_30px_rgba(247,148,29,0.1)]" : "border-foreground/20 hover:border-accent/50"
                  )}
                >
                  <button
                    onClick={() => handleExpertiseToggle(idx)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-6 md:gap-12">
                      <span className={cn(
                        "font-mono text-2xl md:text-4xl font-bold transition-colors",
                        isOpen ? "text-accent" : "text-secondary/60"
                      )}>
                        {item.num}
                      </span>
                      <h3 className="font-display text-2xl md:text-4xl tracking-wide m-0">
                        {item.title}
                      </h3>
                    </div>
                    <motion.div
                      className={cn(
                        "p-2 border-2 transition-colors shrink-0",
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
                          <ul className="space-y-4">
                            {item.bullets.map((bullet, i) => {
                              const colonIdx = bullet.indexOf(": ");
                              const title = bullet.substring(0, colonIdx);
                              const desc = bullet.substring(colonIdx + 2);
                              return (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
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
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 md:py-32 border-t-4 border-secondary/30">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl leading-none">
              FREQUENTLY ASKED <br />
              <span className="text-outline-accent">QUESTIONS</span>
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-accent to-secondary mt-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="flex flex-col gap-4 max-w-4xl">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  ref={(el: HTMLDivElement | null) => { faqRefs.current[idx] = el; }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className={cn(
                    "border-2 transition-all duration-300",
                    isOpen ? "border-secondary bg-secondary/5" : "border-foreground/15 hover:border-secondary/50"
                  )}
                >
                  <button
                    onClick={() => handleFaqToggle(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none gap-4"
                  >
                    <h3 className="font-display text-xl md:text-2xl tracking-wide">
                      {faq.q}
                    </h3>
                    <motion.div
                      className={cn(
                        "p-1.5 border-2 transition-colors shrink-0",
                        isOpen ? "border-secondary text-secondary" : "border-foreground/30 text-foreground/30"
                      )}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="px-6 pb-6 font-sans text-base md:text-lg leading-relaxed text-foreground/70 border-t border-secondary/20 pt-4"
                        >
                          {faq.a}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cta" className="py-24 md:py-32 border-t-4 border-accent/20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">
              READY TO MAKE AN <span className="text-outline-accent">IMPACT?</span>
            </h2>
            <p className="font-sans text-xl md:text-2xl mb-4 max-w-2xl mx-auto text-foreground/60">
              Connect with us to explore current opportunities.
            </p>
            <p className="font-mono text-sm tracking-widest text-foreground/40 mb-12">
              5 Cowboys Way Ste 300, Frisco, TX
            </p>
            <motion.a
              href="https://www.linkedin.com/company/magzsports/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-accent text-black font-mono font-bold text-lg px-10 py-5 uppercase tracking-widest border-2 border-accent transition-all"
              whileHover={{ backgroundColor: "transparent", color: "#F7941D", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Connect on LinkedIn <ArrowUpRight />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
