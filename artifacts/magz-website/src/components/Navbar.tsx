import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const isHome = location === "/" || location === "";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLenis = () => (window as any).__lenis;

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const lenis = getLenis();
    if (isHome) {
      const el = document.getElementById(id);
      if (el && lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setLocation("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        const l = getLenis();
        if (el && l) {
          l.scrollTo(el, { offset: -80 });
        } else {
          el?.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  };

  const goHome = () => {
    setIsMobileMenuOpen(false);
    const lenis = getLenis();
    if (isHome) {
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      setLocation("/");
    }
  };

  const navLinks = [
    { name: "ABOUT", id: "about" },
    { name: "BRANDS", id: "brands" },
    { name: "CAREERS", href: "/careers" },
  ];

  const handleNavClick = (link: { name: string; id?: string; href?: string }) => {
    setIsMobileMenuOpen(false);
    if (link.href) {
      setLocation(link.href);
      window.scrollTo({ top: 0 });
    } else if (link.id) {
      scrollTo(link.id);
    }
  };

  return (
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b-2",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-accent/30 py-3"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          className="cursor-pointer z-50 flex items-center gap-4"
          onClick={goHome}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://magz.s3.us-east-1.amazonaws.com/assets/magz_marketing.png"
            alt="MAGZ Marketing"
            className="h-6 md:h-10 object-contain"
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-mono text-sm font-bold tracking-widest uppercase">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <button
                  onClick={() => handleNavClick(link)}
                  className={cn(
                    "relative group py-2 transition-colors",
                    link.href && location === link.href ? "text-accent" : "hover:text-accent"
                  )}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-accent to-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </motion.li>
            ))}
          </ul>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onClick={() => window.open('https://linktr.ee/magzsports', '_blank', 'noopener,noreferrer')}
            className="brutalist-button text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            FIND US
          </motion.button>
        </div>

        <motion.button
          className="md:hidden z-50 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9, rotate: 90 }}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.button>
      </div>

    </motion.nav>

    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
        >
          <ul className="flex flex-col items-center gap-8 font-display text-5xl">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
              >
                <button
                  onClick={() => handleNavClick(link)}
                  className="hover:text-accent transition-colors"
                >
                  {link.name}
                </button>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <button
                onClick={() => { setIsMobileMenuOpen(false); window.open('https://linktr.ee/magzsports', '_blank', 'noopener,noreferrer'); }}
                className="text-accent hover:text-secondary transition-colors"
              >
                FIND US
              </button>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
