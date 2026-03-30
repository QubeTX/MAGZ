import { motion } from "framer-motion";

const brands = [
  { name: "Buffalo Wild Wings", url: "https://www.buffalowildwings.com/", logo: "https://magzmarketing.com/brandLogos/buffalo-wild-wings-logo.png" },
  { name: "PGA of America", url: "https://www.pga.com/", logo: "https://magzmarketing.com/brandLogos/pga.png" },
  { name: "Panini", url: "https://www.paniniamerica.net/", logo: "https://magzmarketing.com/brandLogos/panini-group-logo.png" },
  { name: "Scheels", url: "https://www.scheels.com/", logo: "https://magzmarketing.com/brandLogos/ScheelsLogo.svg" },
  { name: "Raising Cane's", url: "https://raisingcanes.com/", logo: "https://magzmarketing.com/brandLogos/raising-canes-logo.png" },
  { name: "Bad Birdie", url: "https://badbirdiegolf.com/", logo: "https://magzmarketing.com/brandLogos/bad-birdie-logo.png" },
  { name: "Charlie Hustle", url: "https://www.charliehustle.com/", logo: "https://magzmarketing.com/brandLogos/charlie-hustle-logo.png" },
  { name: "Fore All", url: "https://www.foreall.com/", logo: "https://magzmarketing.com/brandLogos/fore-all-logo.png" },
  { name: "Planet Euphoria", url: "https://planeteuphoria.com/", logo: "https://magzmarketing.com/brandLogos/euphoria-sports-logo.png" },
  { name: "No Rivals", url: "https://shopnorivals.com/", logo: "https://magzmarketing.com/brandLogos/no-rivals-black.svg", invert: true },
  { name: "Monarc", url: "https://monarcsport.com/", logo: "https://magzmarketing.com/brandLogos/monarc-sport-logo.png" },
  { name: "Q30 Innovations", url: "https://q30.com/", logo: "https://magzmarketing.com/brandLogos/q30.webp" },
  { name: "Socialpruf", url: "https://socialpruf.com/", logo: "https://magzmarketing.com/brandLogos/socialpruf-logo.png", invert: true },
  { name: "UpNext", url: "https://upnext.team/", textLogo: "UPNEXT" },
  { name: "Undrafted", url: "https://www.theundrafted.org/", logo: "https://magzmarketing.com/brandLogos/undrafted-logo.png" },
  { name: "CFB Alerts", url: "https://www.instagram.com/cfbalerts", logo: "https://magzmarketing.com/brandLogos/cfb-alerts-logo.png" }
];

export function Brands() {
  return (
    <section id="brands" className="pt-24 pb-0 md:pt-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12">
        <h2 className="font-display text-5xl md:text-7xl leading-none">
          BRANDS WE <br/>
          <span className="text-outline">WORK WITH</span>
        </h2>
      </div>

      {/* Brutalist Grid */}
      <div className="border-t-4 border-foreground w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 border-l-4 border-foreground mx-auto max-w-[1920px]">
          {brands.map((brand, i) => (
            <motion.a
              key={i}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center aspect-video border-r-4 border-b-4 border-foreground p-8 overflow-hidden bg-background hover:bg-accent transition-colors duration-300"
              whileHover={{ scale: 0.98 }}
            >
              {brand.textLogo ? (
                <span className="font-display text-4xl tracking-wider text-foreground group-hover:text-black transition-colors z-10 relative">
                  {brand.textLogo}
                </span>
              ) : (
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className={`max-w-[80%] max-h-[70%] object-contain z-10 relative transition-all duration-300 filter ${
                    brand.invert ? 'invert brightness-0' : 'grayscale brightness-150 contrast-150 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100'
                  } group-hover:invert-0`}
                />
              )}
              {/* Decorative crosshair on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/20"></div>
                <div className="absolute left-1/2 top-0 w-[1px] h-full bg-black/20"></div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
