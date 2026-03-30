import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Careers() {
  return (
    <section id="careers" className="py-24 md:py-32 border-t-4 border-foreground">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-6xl md:text-8xl leading-none mb-8">
              JOIN THE <br />
              <span className="text-accent">TEAM</span>
            </h2>
            <div className="w-24 h-4 bg-accent mb-8"></div>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-foreground/80 max-w-xl">
              We're building the future of sports marketing at the intersection of AI, athlete influence, and social distribution. If you're driven, creative, and ready to move fast — we want to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {[
              { role: "Growth Strategist", type: "FULL-TIME // DALLAS, TX" },
              { role: "Content & Social Lead", type: "FULL-TIME // REMOTE" },
              { role: "Data Analyst", type: "FULL-TIME // DALLAS, TX" },
              { role: "Partnership Coordinator", type: "FULL-TIME // REMOTE" },
            ].map((job, i) => (
              <a
                key={i}
                href="mailto:careers@magzmarketing.com"
                className="group flex items-center justify-between border-4 border-foreground p-6 hover:bg-accent hover:border-accent hover:text-black transition-all duration-300"
              >
                <div>
                  <h3 className="font-display text-2xl md:text-3xl mb-1">{job.role}</h3>
                  <p className="font-mono text-xs tracking-widest text-foreground/50 group-hover:text-black/50">{job.type}</p>
                </div>
                <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
