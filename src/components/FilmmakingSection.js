import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { FiFilm } from "react-icons/fi";

const films = [
  {
    title: "That's How It Began",
    poster: "/pictures/Thatshowitbeganposter.jpeg",
    year: "First Film",
    tag: "Drama · Romance",
    description:
      "My first ever short film and the beginning of my storytelling journey. This project taught me every foundational aspect of filmmaking — scriptwriting, casting, cinematography, shot division, editing, sound design, and color grading.",
    story:
      "Shot entirely on a phone, the film follows a man recalling his college love story and eventually realising that genuine effort in life never goes wasted.",
  },
  {
    title: "Tiniest Regrets in Life",
    poster: "/pictures/TiniestRegretsinLifeposter.jpeg",
    year: "Experimental",
    tag: "Experimental · Emotional",
    description:
      "An experimental short film created spontaneously with my friend Ankush. A major learning experience in sound design, atmosphere creation, and emotional storytelling.",
    story:
      "The story revolves around a seemingly small regret of forgetting an umbrella on a rainy day, while symbolically exploring deeper emotional regrets in life.",
  },
  {
    title: "Until Next Time",
    poster: "/pictures/untilnexttimeposter.jpeg",
    year: "15,000+ Views",
    tag: "Drama · Romance · Festival",
    highlight: true,
    description:
      "A dream project developed over one and a half years of ideation and eight months of execution. Gained 15,000+ views, screened at college film events, and received appreciation from directors of the Telugu Film Industry.",
    story:
      "Two individuals with unspoken feelings spend one final night together before life separates them — a story of ambition, circumstance, and the things left unsaid.",
  },
  {
    title: "A Day After / A Day Before",
    poster: "/pictures/Adayafter:adaybeforeposter.jpeg",
    year: "Professional Production",
    tag: "Drama · Professional",
    description:
      "A professionally produced short film providing hands-on exposure to real production environments — advanced equipment, larger-scale execution, and collaborative filmmaking.",
    story:
      "A tea shop owner struggling with slow business unknowingly misses the opportunities that could change his journey. The screenplay structure mirrors recursion and backtracking in code.",
  },
];

/* All BTS images — 6 total → 2 rows × 3 columns */
const btsImages = [
  { src: "/pictures/That'showitbeganBTS.jpeg", caption: "That's How It Began" },
  { src: "/pictures/UntilNextTimeBTS.jpeg",    caption: "Until Next Time" },
  { src: "/pictures/UntilNextTimeBTS2.jpeg",   caption: "Until Next Time" },
  { src: "/pictures/UntilNextTimeBTS3.jpeg",   caption: "Until Next Time" },
  { src: "/pictures/withDirector.jpeg",        caption: "A Day After / A Day Before" },
  { src: "/pictures/Editing.jpeg",             caption: "Post-production" },
];

export default function FilmmakingSection() {
  return (
    <section id="filmmaking" className="bg-[#111008] section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Behind the Camera"
          title="Filmmaking Journey"
          subtitle="Stories told through the lens — where technology meets raw human emotion."
          titleClassName="text-[#F5EFE0]"
          subtitleClassName="text-[#F5EFE0]/55"
          accentClassName="text-accent/75"
        />

        {/* Film cards */}
        <div className="space-y-20 mb-24">
          {films.map((film, i) => (
            <FilmCard key={film.title} film={film} reverse={i % 2 !== 0} />
          ))}
        </div>

        {/* ── BTS Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px flex-1 bg-white/8" />
            <p className="font-inter text-[10px] font-medium tracking-[0.25em] uppercase text-accent/60">
              Behind the Scenes
            </p>
            <span className="h-px flex-1 bg-white/8" />
          </div>

          {/* 3-column grid → 2 rows of 3 squares */}
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {btsImages.map((item, i) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 flex items-end p-3">
                  <p className="font-inter text-[9px] text-white/0 group-hover:text-white/80 transition-colors duration-300 tracking-[0.12em] uppercase leading-snug">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FilmCard({ film, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start ${
        reverse ? "md:grid-flow-dense" : ""
      }`}
    >
      {/* ── Poster ── */}
      <motion.div
        className={`relative ${reverse ? "md:col-start-2" : ""}`}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative overflow-hidden rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] bg-[#0a0806] aspect-square flex items-center justify-center">
          <img
            src={film.poster}
            alt={`${film.title} poster`}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-2 mb-1.5">
              <FiFilm size={12} className="text-cream/50" />
              <span className="font-inter text-[10px] text-cream/50 tracking-[0.15em]">
                {film.tag}
              </span>
            </div>
            {film.highlight && (
              <span className="inline-block font-inter text-[9px] font-semibold uppercase tracking-[0.18em] px-3 py-1 bg-accent/90 text-cream rounded-full">
                {film.year}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* ── Text ── */}
      <div
        className={`${
          reverse ? "md:col-start-1 md:row-start-1" : ""
        } flex flex-col justify-center gap-6 pt-2`}
      >
        <div>
          <p className="font-inter text-[10px] font-medium tracking-[0.22em] uppercase text-accent/70 mb-3">
            {film.year}
          </p>
          <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-[#F5EFE0] leading-[1.1]">
            {film.title}
          </h3>
        </div>

        <p className="font-inter text-[#F5EFE0]/55 text-sm md:text-base leading-[1.85]">
          {film.description}
        </p>

        <div className="border-l-2 border-accent/35 pl-5 py-1">
          <p className="font-playfair italic text-[#F5EFE0]/70 text-sm md:text-base leading-[1.8]">
            {film.story}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
