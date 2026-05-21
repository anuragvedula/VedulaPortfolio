import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { FiAward, FiMapPin, FiHash, FiCalendar } from "react-icons/fi";

/* Architectural campus illustration rendered in SVG */
function CampusIllustration() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#2C2016] via-[#3D2C1A] to-[#1A1208] flex items-end justify-center relative overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B5E3C]/20 via-transparent to-transparent" />

      {/* Stars / dots */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-cream/30"
          style={{
            width: i % 3 === 0 ? 2 : 1,
            height: i % 3 === 0 ? 2 : 1,
            top: `${5 + (i * 13) % 55}%`,
            left: `${3 + (i * 17) % 90}%`,
          }}
        />
      ))}

      {/* Golden horizontal line — horizon */}
      <div className="absolute bottom-[30%] left-0 right-0 h-px bg-accent/20" />

      <svg viewBox="0 0 400 260" className="w-full max-w-md relative z-10" preserveAspectRatio="xMidYMax meet">
        {/* Ground */}
        <rect x="0" y="220" width="400" height="40" fill="#1a1208" />
        <rect x="0" y="218" width="400" height="3" fill="#8B5E3C" opacity="0.4" />

        {/* Main building — central tower */}
        <rect x="155" y="100" width="90" height="120" fill="#2C1F10" stroke="#8B5E3C" strokeWidth="0.5" strokeOpacity="0.4" />
        {/* Tower top */}
        <polygon points="200,55 155,100 245,100" fill="#3D2C1A" stroke="#8B5E3C" strokeWidth="0.5" strokeOpacity="0.5" />
        {/* Spire */}
        <line x1="200" y1="20" x2="200" y2="55" stroke="#8B5E3C" strokeWidth="1" opacity="0.7" />
        <circle cx="200" cy="20" r="2.5" fill="#8B5E3C" opacity="0.8" />

        {/* Central windows */}
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`cw-${row}-${col}`}
              x={167 + col * 24}
              y={108 + row * 30}
              width="14"
              height="18"
              rx="2"
              fill="#8B5E3C"
              opacity={row === 0 && col === 1 ? 0.55 : 0.2}
            />
          ))
        )}
        {/* Door */}
        <rect x="186" y="185" width="28" height="35" rx="3" fill="#8B5E3C" opacity="0.35" />

        {/* Left wing */}
        <rect x="60" y="140" width="95" height="80" fill="#251808" stroke="#8B5E3C" strokeWidth="0.4" strokeOpacity="0.3" />
        {/* Left wing roof */}
        <polygon points="60,140 107,118 155,140" fill="#1e1408" stroke="#8B5E3C" strokeWidth="0.4" strokeOpacity="0.3" />
        {/* Left wing windows */}
        {[0, 1].map((row) =>
          [0, 1, 2].map((col) => (
            <rect key={`lw-${row}-${col}`} x={68 + col * 26} y={148 + row * 30} width="14" height="16" rx="1.5" fill="#8B5E3C" opacity={row === 0 ? 0.18 : 0.1} />
          ))
        )}

        {/* Right wing */}
        <rect x="245" y="140" width="95" height="80" fill="#251808" stroke="#8B5E3C" strokeWidth="0.4" strokeOpacity="0.3" />
        {/* Right wing roof */}
        <polygon points="245,140 293,118 340,140" fill="#1e1408" stroke="#8B5E3C" strokeWidth="0.4" strokeOpacity="0.3" />
        {/* Right wing windows */}
        {[0, 1].map((row) =>
          [0, 1, 2].map((col) => (
            <rect key={`rw-${row}-${col}`} x={253 + col * 26} y={148 + row * 30} width="14" height="16" rx="1.5" fill="#8B5E3C" opacity={row === 0 ? 0.18 : 0.1} />
          ))
        )}

        {/* Pathway */}
        <polygon points="175,220 225,220 240,260 160,260" fill="#2a1e0e" opacity="0.6" />

        {/* Trees */}
        {[40, 350].map((x, i) => (
          <g key={`tree-${i}`}>
            <rect x={x - 3} y="200" width="6" height="20" fill="#3a2810" />
            <circle cx={x} cy="190" r="14" fill="#2a1e0e" />
            <circle cx={x} cy="182" r="10" fill="#341f0c" />
          </g>
        ))}

        {/* VIT text label on ground */}
        <text x="200" y="240" textAnchor="middle" fill="#8B5E3C" fontSize="9" fontFamily="Georgia, serif" opacity="0.7" letterSpacing="4">
          VIT VELLORE
        </text>
      </svg>

      {/* Corner text */}
      <div className="absolute top-5 left-5">
        <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-accent/50">Est. 1984</p>
      </div>
    </div>
  );
}

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
          {/* Campus illustration */}
          <div className="relative h-72 md:h-auto min-h-[280px] overflow-hidden">
            <CampusIllustration />
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
