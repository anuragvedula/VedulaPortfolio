import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const stats = [
  {
    value: "15K+",
    label: "Views on Short Film",
    sub: "Until Next Time — Screened at college film events",
    icon: "🎬",
  },
  {
    value: "4+",
    label: "Countries Tutored",
    sub: "UK, Dubai, USA & Canada — International teaching experience",
    icon: "🌍",
  },
  {
    value: "6+",
    label: "AI & Embedded Projects",
    sub: "From Arduino to CNN — full spectrum of hardware and AI",
    icon: "⚡",
  },
  {
    value: "2+",
    label: "Years of Leadership",
    sub: "Outreach Head, VIT Film Society — events, sponsorships, campaigns",
    icon: "🏆",
  },
  {
    value: "1",
    label: "Full-Stack AI Platform",
    sub: "Apply Intern — built with React, Node.js, OpenAI, Gemini, Claude",
    icon: "🚀",
  },
  {
    value: "4",
    label: "Short Films Directed",
    sub: "Festival screenings & appreciation from Telugu Film Industry directors",
    icon: "🎞️",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="bg-cream section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Milestones"
          title="Achievements"
          subtitle="A snapshot of impact across engineering, cinema, and community."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="card p-8 border border-accent/10 text-center flex flex-col items-center gap-4"
            >
              <span className="text-4xl">{stat.icon}</span>
              <div>
                <p className="font-playfair text-4xl font-bold text-accent">{stat.value}</p>
                <p className="font-playfair text-lg font-semibold text-text-primary mt-1">
                  {stat.label}
                </p>
              </div>
              <p className="font-inter text-xs text-text-secondary leading-relaxed">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
