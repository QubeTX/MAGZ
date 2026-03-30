import { motion } from "framer-motion";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/magzsports/",
    icon: "https://magz.s3.us-east-1.amazonaws.com/social_icons/LinkedIn+Icon.svg",
  },
  {
    name: "X",
    url: "https://x.com/magzmarketing",
    icon: "https://magz.s3.us-east-1.amazonaws.com/social_icons/Social+Media+Icons.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/magzmarketing",
    icon: "https://magz.s3.us-east-1.amazonaws.com/social_icons/Instagram+Icon.svg",
  },
  {
    name: "Linktree",
    url: "https://linktr.ee/magzsports",
    icon: "https://magz.s3.us-east-1.amazonaws.com/social_icons/Linktree+Icons.svg",
  },
];

export function EmpoweringAthletes() {
  return (
    <section className="bg-foreground text-background py-24 md:py-32 border-t-4 border-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,148,29,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,107,198,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-none mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          EMPOWERING ATHLETES TO CREATE{" "}
          <span className="text-outline-accent">AUTHENTIC CONNECTIONS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <motion.p
            className="font-sans text-lg md:text-xl leading-relaxed text-background/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From the transfer portal to game day, MAGZ Marketing is redefining how athletes, agencies, and brands connect and activate in modern sports. We work directly with agencies nationwide to streamline talent sourcing, accelerate opportunity, and build traction around live sporting moments using AI-powered analytics and elite social distribution.
          </motion.p>

          <motion.p
            className="font-sans text-lg md:text-xl leading-relaxed text-background/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            By pairing real-time athlete access with some of the largest college football media networks, we help agencies and brands move faster—activating the right talent, amplifying key moments, and driving measurable impact at scale. Our platform supports everything from transfer portal visibility and NIL activations to live events and brand partnerships, creating a seamless ecosystem where athletes gain opportunity, agencies gain efficiency, and brands earn relevance across college football and sports culture.
          </motion.p>
        </div>

        <motion.div
          className="flex items-center justify-center gap-8 md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.08 }}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
