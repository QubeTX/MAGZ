import { motion } from "framer-motion";

const brands = [
  { name: "Buffalo Wild Wings", url: "https://www.buffalowildwings.com/", logo: "/brandLogos/buffalo-wild-wings-logo.png", fullColor: true },
  { name: "PGA of America", url: "https://www.pga.com/", logo: "/brandLogos/pga.png" },
  { name: "Panini", url: "https://www.paniniamerica.net/", logo: "/brandLogos/panini-group-logo.png", fullColor: true },
  { name: "Scheels", url: "https://www.scheels.com/", logo: "/brandLogos/ScheelsLogo.svg" },
  { name: "Raising Cane's", url: "https://raisingcanes.com/", logo: "/brandLogos/raising-canes-logo.png", fullColor: true },
  { name: "Bad Birdie", url: "https://badbirdiegolf.com/", logo: "/brandLogos/bad-birdie-logo.png" },
  { name: "Charlie Hustle", url: "https://www.charliehustle.com/", logo: "/brandLogos/charlie-hustle-logo.png" },
  { name: "Fore All", url: "https://www.foreall.com/", logo: "/brandLogos/fore-all-logo.png" },
  { name: "Planet Euphoria", url: "https://planeteuphoria.com/", logo: "/brandLogos/euphoria-sports-logo.png" },
  { name: "No Rivals", url: "https://shopnorivals.com/", logo: "/brandLogos/no-rivals-black.svg" },
  { name: "Monarc", url: "https://monarcsport.com/", logo: "/brandLogos/monarc-sport-logo.png" },
  { name: "Q30 Innovations", url: "https://q30.com/", logo: "/brandLogos/q30.webp" },
  { name: "Socialpruf", url: "https://socialpruf.com/", logo: "/brandLogos/socialpruf-logo.png" },
  { name: "UpNext", url: "https://upnext.team/", textLogo: "UPNEXT" },
  { name: "Undrafted", url: "https://www.theundrafted.org/", logo: "/brandLogos/undrafted-logo.png" },
  { name: "CFB Alerts", url: "https://www.instagram.com/cfbalerts", logo: "/brandLogos/cfb-alerts-logo.png" }
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
};

export function Brands() {
  return (
    <section id="brands" className="pt-24 pb-0 md:pt-32">
      <motion.div
        className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-5xl md:text-7xl leading-none">
          BRANDS WE <br/>
          <span className="text-outline-accent">WORK WITH</span>
        </h2>
      </motion.div>

      <div className="border-t-4 border-accent w-full">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 border-l-4 border-accent/50 mx-auto max-w-[1920px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {brands.map((brand, i) => (
            <motion.a
              key={i}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative flex items-center justify-center aspect-video border-r-4 border-b-4 border-accent/20 p-8 overflow-hidden bg-background hover:bg-accent transition-all duration-300"
              whileHover={{ scale: 0.96 }}
              whileTap={{ scale: 0.94 }}
            >
              {brand.textLogo ? (
                <span className="font-display text-4xl tracking-wider text-foreground transition-colors z-10 relative">
                  {brand.textLogo}
                </span>
              ) : (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`max-w-[80%] max-h-[70%] object-contain z-10 relative transition-all duration-300 ${
                    brand.fullColor
                      ? ''
                      : brand.fullColorOnHover
                        ? 'brightness-0 invert group-hover:brightness-100 group-hover:invert-0'
                        : 'brightness-0 invert'
                  }`}
                />
              )}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/0 to-secondary/0 group-hover:from-accent/10 group-hover:to-secondary/10 transition-all duration-300"
              />
              <div className="absolute bottom-2 left-2 font-mono text-[10px] text-foreground/0 group-hover:text-white/60 transition-colors tracking-widest uppercase">
                {brand.name}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
