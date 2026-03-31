import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="bg-background text-foreground pt-24 pb-8 px-6 md:px-12 border-t-4 border-accent relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
        <span className="font-display text-[30vw] whitespace-nowrap leading-none select-none">MAGZ</span>
      </div>
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b-4 border-foreground/20 pb-16">
          <motion.div
            className="md:col-span-6 lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-6xl md:text-8xl leading-none mb-8">
              READY TO <br/>
              <span className="text-outline-accent">GROW?</span>
            </h2>
            <p className="font-sans font-medium text-xl max-w-md mb-8 text-foreground/80">
              Connect with us to explore strategic partnerships, athlete integrations, and AI-powered growth campaigns.
            </p>
            <motion.a
              href="mailto:contact@magzmarketing.com"
              className="inline-flex items-center gap-4 bg-accent text-background font-mono font-bold text-lg px-8 py-4 uppercase tracking-widest border-2 border-accent hover:border-foreground transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us <ArrowUpRight />
            </motion.a>
          </motion.div>

          <motion.div
            className="md:col-span-3 lg:col-span-3 lg:col-start-7 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-mono font-bold tracking-widest text-sm border-b-2 border-foreground/20 pb-2 mb-2 uppercase">Menu</h3>
            {['About', 'Brands', 'Careers'].map((link, i) => (
              <motion.button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left font-display text-2xl uppercase w-fit transition-colors"
                whileHover={{ x: 8, color: "#F7941D" }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="md:col-span-3 lg:col-span-3 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-mono font-bold tracking-widest text-sm border-b-2 border-foreground/20 pb-2 mb-2 uppercase">Socials</h3>
            {[
              { name: 'Linktree', url: 'https://linktr.ee/magzsports' },
              { name: 'Instagram', url: 'https://www.instagram.com/magzmarketing/' },
              { name: 'X', url: 'https://x.com/magzmarketing' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/company/magzsports/' },
            ].map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left font-display text-2xl uppercase w-fit transition-colors"
                whileHover={{ x: 8, color: "#2D6BC6" }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-8 mb-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-mono text-xs tracking-widest text-foreground/50 uppercase">
            5 Cowboys Way Ste 300, Frisco, TX
          </p>
        </motion.div>

        <motion.div
          className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm font-bold tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} MAGZ MARKETING. ALL RIGHTS RESERVED.</p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 border-2 border-foreground px-4 py-2 transition-colors"
            whileHover={{ backgroundColor: "#F7941D", color: "#0A0A0A", borderColor: "#F7941D" }}
            whileTap={{ scale: 0.95 }}
          >
            BACK TO TOP <ArrowUpRight className="rotate-[-45deg]" size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
