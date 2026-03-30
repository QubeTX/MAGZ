import { motion } from "framer-motion";

const images = [
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/studio-photo-training-day.webp",
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/IMG_1784.webp",
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/studio-photo-field-team.webp",
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/studio-photo-field-day.webp",
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/studio-photo-dallas.webp",
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/IMG_1790.webp",
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/IMG_1793.webp",
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/newPhotos1.webp",
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/IMG_1802.webp",
  "https://magz.s3.us-east-1.amazonaws.com/assets/golf.jpeg",
  "https://magz.s3.us-east-1.amazonaws.com/assets/baseball_kansas.jpeg",
  "https://magz.s3.us-east-1.amazonaws.com/assets/holding_baseball_bat.jpeg",
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/newPhotos2.webp",
  "https://magz.s3.us-east-1.amazonaws.com/assets/suits.jpeg",
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/newPhotos3.webp",
  "https://magz.s3.us-east-1.amazonaws.com/assets/gross_assets/webp/newPhotos4.webp"
];

export function Gallery() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12 flex justify-between items-end border-b-4 border-foreground pb-6">
        <h2 className="font-display text-5xl md:text-7xl leading-none">
          HIGHLIGHTING <br/>
          <span className="text-accent">ATHLETES</span>
        </h2>
        <div className="hidden md:block font-mono text-sm tracking-widest text-foreground/50">
          [{images.length} ARCHIVED FILES]
        </div>
      </div>

      <div className="w-full bg-border">
        {/* Brutalist gap-1 grid so borders show through */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="relative group aspect-[4/5] bg-background overflow-hidden"
            >
              <img 
                src={src} 
                alt={`Athlete ${i+1}`}
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              {/* Overlay elements */}
              <div className="absolute top-4 left-4 font-mono text-xs font-bold text-white bg-black/50 px-2 py-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                FILE_{String(i+1).padStart(3, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
