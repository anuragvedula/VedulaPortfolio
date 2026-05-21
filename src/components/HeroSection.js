import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function HeroSection() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream flex items-center overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#8B5E3C 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-28 pb-20 md:pt-32 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 md:gap-20 items-center">

        {/* ── Left: Text ── */}
        <div className="order-2 md:order-1 max-w-xl">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
            <span className="block h-px w-8 bg-accent" />
            <span className="font-inter text-xs font-medium tracking-[0.2em] uppercase text-accent">
              Portfolio
            </span>
          </motion.div>

          {/* Name — editorial, same color */}
          <motion.h1
            {...fadeUp(0.22)}
            className="font-playfair text-[clamp(3.2rem,8vw,6rem)] font-semibold text-text-primary leading-[0.95] tracking-tight mb-6"
          >
            Anurag
            <br />
            <span className="font-playfair italic font-normal text-text-primary">Vedula</span>
          </motion.h1>

          {/* Thin rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
            className="origin-left h-px bg-accent/40 w-24 mb-6"
          />

          {/* Role */}
          <motion.p
            {...fadeUp(0.44)}
            className="font-inter text-sm md:text-base font-medium text-text-secondary tracking-wide mb-1"
          >
            Electronics & Communication Engineer
          </motion.p>
          <motion.p
            {...fadeUp(0.5)}
            className="font-inter text-xs tracking-widest text-accent/70 uppercase mb-8"
          >
            AI &nbsp;·&nbsp; Software &nbsp;·&nbsp; Filmmaker
          </motion.p>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.58)}
            className="font-inter text-text-secondary text-base md:text-lg leading-[1.8] max-w-md mb-10"
          >
            Blending technology, storytelling, and creativity to build impactful
            experiences across engineering, software, and cinema.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo("#projects")} className="btn-primary">
              View Projects
            </button>
            <button onClick={() => scrollTo("#contact")} className="btn-outline">
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* ── Right: Portrait ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-sm" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-sm" />

            {/* Portrait — file: src/pictures/HomepagePhoto.jpeg */}
            <img
              src="/pictures/HomepagePhoto.jpeg"
              alt="Anurag Vedula"
              className="w-64 h-80 md:w-80 md:h-[26rem] lg:w-[22rem] lg:h-[29rem] rounded-2xl object-cover object-top shadow-warm-lg"
            />

          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-secondary/50 hover:text-accent transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="font-inter text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FiArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
