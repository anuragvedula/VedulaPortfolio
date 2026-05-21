import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const responsibilities = [
  "Social Media Promotions",
  "Marketing Campaigns",
  "Sponsorship Handling",
  "Guest Invitations",
  "Event Coordination",
];

const events = [
  { icon: "🎬", label: "Short Film Competitions" },
  { icon: "🎭", label: "Cosplay Events" },
  { icon: "🎞️", label: "Movie Screening Events" },
  { icon: "📹", label: "Advertisement Making Competitions" },
];

/* 3 square photos shown below the main row */
const squarePhotos = [
  { src: "/pictures/CompetitionOutreachHead.jpeg", caption: "Competition" },
  { src: "/pictures/Promotions.jpeg",              caption: "Promotions" },
  { src: "/pictures/ADmakingcompetition.jpeg",     caption: "Ad Making" },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="bg-cream-secondary section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Community Impact"
          title="Leadership & Community"
          subtitle="Building communities, managing events, and driving creative culture at VIT."
        />

        {/* ── Row 1: Content + OutreachHead photo side by side ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">

          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            {/* Role card */}
            <div className="card p-8 border border-accent/12 space-y-6">
              <div>
                <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-accent mb-1.5">
                  Role & Organisation
                </p>
                <h3 className="font-playfair text-2xl font-semibold text-text-primary">
                  Outreach Head
                </h3>
                <p className="font-playfair italic text-text-secondary text-base mt-0.5">
                  VIT Film Society
                </p>
              </div>

              <div className="h-px bg-accent/10" />

              <div>
                <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                  Core Responsibilities
                </p>
                <div className="space-y-2.5">
                  {responsibilities.map((r, i) => (
                    <motion.div
                      key={r}
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.07 * i }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="font-inter text-sm text-text-secondary">{r}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Events grid */}
            <div>
              <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                Events Managed
              </p>
              <div className="grid grid-cols-2 gap-3">
                {events.map((e, i) => (
                  <motion.div
                    key={e.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.09 * i }}
                    whileHover={{ y: -3 }}
                    className="card p-4 border border-accent/10 flex items-start gap-3"
                  >
                    <span className="text-xl flex-shrink-0">{e.icon}</span>
                    <span className="font-inter text-xs font-medium text-text-primary leading-snug">
                      {e.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="font-inter text-text-secondary text-sm leading-relaxed">
              This role built my{" "}
              <span className="font-medium text-text-primary">
                leadership, branding, public relations,
              </span>{" "}
              and large-scale organisational skills across high-visibility student events.
            </p>
          </motion.div>

          {/* Right — OutreachHead full image (no crop) */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="overflow-hidden rounded-2xl border border-accent/10 shadow-warm-sm"
          >
            <img
              src="/pictures/OutreachHead.jpeg"
              alt="Outreach Head — VIT Film Society"
              className="w-full h-auto block"
            />
          </motion.div>
        </div>

        {/* ── Row 2: 3 equal square photos ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-3 md:gap-4"
        >
          {squarePhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl aspect-square border border-accent/10 shadow-warm-sm"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-3">
                <p className="font-inter text-[9px] text-white/0 group-hover:text-white/80 transition-colors duration-300 tracking-[0.12em] uppercase">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
