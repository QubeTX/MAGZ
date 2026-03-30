import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-foreground text-background pt-24 pb-8 px-6 md:px-12 border-t-4 border-foreground mt-12 relative overflow-hidden">
      {/* Massive background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <span className="font-display text-[30vw] whitespace-nowrap leading-none select-none">MAGZ</span>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b-4 border-background pb-16">
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="font-display text-6xl md:text-8xl leading-none mb-8">
              READY TO <br/>
              GROW?
            </h2>
            <p className="font-sans font-medium text-xl max-w-md mb-8">
              Connect with us to explore strategic partnerships, athlete integrations, and AI-powered growth campaigns.
            </p>
            <a 
              href="mailto:contact@magzmarketing.com"
              className="inline-flex items-center gap-4 bg-background text-foreground font-mono font-bold text-lg px-8 py-4 uppercase tracking-widest hover:bg-accent hover:text-black transition-colors border-2 border-transparent hover:border-black"
            >
              Contact Us <ArrowUpRight />
            </a>
          </div>

          <div className="md:col-span-3 lg:col-span-3 lg:col-start-7 flex flex-col gap-4">
            <h3 className="font-mono font-bold tracking-widest text-sm border-b-2 border-background/20 pb-2 mb-2 uppercase">Menu</h3>
            {['About', 'Brands', 'Careers'].map(link => (
              <button 
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left font-display text-2xl uppercase hover:text-accent hover:translate-x-2 transition-all w-fit"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-mono font-bold tracking-widest text-sm border-b-2 border-background/20 pb-2 mb-2 uppercase">Socials</h3>
            {[
              { name: 'Instagram', url: 'https://www.instagram.com/magzmarketing/' },
              { name: 'Twitter', url: 'https://twitter.com/magzmarketing' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/company/magzmarketing/' },
              { name: 'TikTok', url: 'https://www.tiktok.com/@magzmarketing' },
            ].map(link => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left font-display text-2xl uppercase hover:text-accent hover:translate-x-2 transition-all w-fit"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm font-bold tracking-widest">
          <p>© 2025 MAGZ MARKETING. ALL RIGHTS RESERVED.</p>
          <button 
            onClick={scrollToTop}
            className="hover:text-accent flex items-center gap-2 border-2 border-background px-4 py-2 hover:bg-background hover:text-foreground transition-colors"
          >
            BACK TO TOP <ArrowUpRight className="rotate-[-45deg]" size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
