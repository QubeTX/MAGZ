import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "ABOUT", id: "about" },
    { name: "BRANDS", id: "brands" },
    { name: "CAREERS", id: "careers" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b-2",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer z-50 flex items-center gap-4"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img 
            src="https://magz.s3.us-east-1.amazonaws.com/MAGZ+Logos/Colorful+M.png" 
            alt="MAGZ Logo" 
            className="h-8 md:h-12 object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-mono text-sm font-bold tracking-widest uppercase">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="relative group hover:text-accent transition-colors py-2"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => scrollTo('footer')}
            className="brutalist-button text-sm"
          >
            FIND US
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <ul className="flex flex-col items-center gap-8 font-display text-5xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollTo(link.id)}
                className="hover:text-accent transition-colors hover:italic"
              >
                {link.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo('footer')}
              className="text-accent hover:text-foreground transition-colors"
            >
              FIND US
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
