import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { FiAward, FiMapPin, FiHash, FiCalendar } from "react-icons/fi";
import vitVellore from "../pictures/VitVellore.jpeg";

export default function EducationSection() {
  return (
    <section id="education" className="bg-cream section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Academic Background"
          title="Education"
          subtitle="Building the foundation at one of India's premier technical institutions."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="card grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden border border-accent/10"
        >
          {/* Campus photo */}
          <div className="relative h-72 md:h-auto min-h-[280px] overflow-hidden">
            <img
              src={vitVellore}
              alt="VIT Vellore Campus"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-white/70">Est. 1984</p>
            </div>
          </div>

          {/* Details */}
          <div className="p-9 md:p-12 flex flex-col justify-center gap-7">
            <div>
              <p className="font-inter text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
                Undergraduate Degree
              </p>
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-text-primary leading-snug">
                Vellore Institute of Technology
              </h3>
              <p className="font-playfair text-base italic text-text-secondary mt-1">
                Vellore Campus, Tamil Nadu
              </p>
            </div>

            <div className="h-px bg-accent/10" />

            <div className="space-y-4">
              <InfoRow icon={<FiCalendar />} label="Duration" value="2022 — 2026" />
              <InfoRow
                icon={<FiAward />}
                label="Degree"
                value="B.Tech — Electronics and Communication Engineering"
              />
              <InfoRow icon={<FiHash />} label="Registration No." value="22BEC0768" />
              <InfoRow icon={<FiMapPin />} label="CGPA" value="8.18 / 10.00" highlight />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value, highlight = false }) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="text-accent mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <p className="font-inter text-[10px] text-text-secondary uppercase tracking-[0.12em] mb-0.5">
          {label}
        </p>
        <p
          className={`font-inter text-sm font-medium leading-snug ${
            highlight ? "text-accent text-base font-semibold" : "text-text-primary"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
