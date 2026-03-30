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
      <motion.div
        className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12 flex justify-between items-end border-b-4 border-accent pb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-5xl md:text-7xl leading-none">
          HIGHLIGHTING <br/>
          <span className="text-secondary">ATHLETES</span>
        </h2>
      </motion.div>

      <div className="w-full bg-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.76, 0, 0.24, 1] }}
              className="relative group aspect-[4/5] bg-background overflow-hidden cursor-pointer"
            >
              <motion.img
                src={src}
                alt={`Athlete ${i+1}`}
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <motion.div
                className="absolute top-4 left-4 font-mono text-xs font-bold text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={false}
              >
                <span className="bg-accent text-black px-2 py-1">FILE_{String(i+1).padStart(3, '0')}</span>
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
