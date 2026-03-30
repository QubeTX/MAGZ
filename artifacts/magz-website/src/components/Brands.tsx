import { motion } from "framer-motion";

const brands = [
  { name: "Buffalo Wild Wings", url: "https://www.buffalowildwings.com/", logo: "/brandLogos/buffalo-wild-wings-logo.png", fullColor: true, logoClass: "max-w-[65%] max-h-[55%]" },
  { name: "PGA of America", url: "https://www.pga.com/", logo: "/brandLogos/pga.png", logoClass: "max-w-[42%] max-h-[55%]" },
  { name: "Panini", url: "https://www.paniniamerica.net/", logo: "/brandLogos/panini-group-logo.png", fullColor: true, logoClass: "max-w-[78%] max-h-[40%]" },
  { name: "Scheels", url: "https://www.scheels.com/", logo: "/brandLogos/ScheelsLogo.svg", logoClass: "max-w-[82%] max-h-[35%]" },
  { name: "Raising Cane's", url: "https://raisingcanes.com/", logo: "/brandLogos/raising-canes-logo.png", fullColor: true, logoClass: "max-w-[42%] max-h-[55%]" },
  { name: "Bad Birdie", url: "https://badbirdiegolf.com/", logo: "/brandLogos/bad-birdie-logo.png", logoClass: "max-w-[48%] max-h-[55%]" },
  { name: "Charlie Hustle", url: "https://www.charliehustle.com/", logo: "/brandLogos/charlie-hustle-logo.png", logoClass: "max-w-[72%] max-h-[50%]" },
  { name: "Fore All", url: "https://www.foreall.com/", logo: "/brandLogos/fore-all-logo.png", logoClass: "max-w-[72%] max-h-[50%]" },
  { name: "Planet Euphoria", url: "https://planeteuphoria.com/", logo: "/brandLogos/euphoria-sports-logo.png", logoClass: "max-w-[55%] max-h-[55%]" },
  { name: "No Rivals", url: "https://shopnorivals.com/", logo: "/brandLogos/no-rivals-black.svg", logoClass: "w-[80%] max-h-[30%]" },
  { name: "Monarc", url: "https://monarcsport.com/", logo: "/brandLogos/monarc-sport-logo.png", logoClass: "max-w-[82%] max-h-[35%]" },
  { name: "Q30 Innovations", url: "https://q30.com/", logo: "/brandLogos/q30.webp", logoClass: "w-[65%] max-h-[35%]" },
  { name: "Socialpruf", url: "https://socialpruf.com/", logo: "/brandLogos/socialpruf-logo.png", logoClass: "w-[80%] max-h-[35%]" },
  { name: "UpNext", url: "https://upnext.team/", textLogo: "UPNEXT" },
  { name: "Undrafted", url: "https://www.theundrafted.org/", logo: "/brandLogos/undrafted-logo.png", logoClass: "w-[80%] max-h-[30%]" },
  { name: "CFB Alerts", url: "https://www.instagram.com/cfbalerts", logo: "/brandLogos/cfb-alerts-logo.png", logoClass: "max-w-[42%] max-h-[55%]" }
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } }
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
                  className={`${brand.logoClass || 'max-w-[80%] max-h-[70%]'} object-contain z-10 relative transition-all duration-300 ${
                    brand.fullColor ? '' : 'brightness-0 invert'
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
