import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const traits = [
  { icon: "⚡", label: "Engineering" },
  { icon: "🧠", label: "Artificial Intelligence" },
  { icon: "🎬", label: "Filmmaking" },
  { icon: "🤝", label: "Leadership" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-cream-secondary section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Who I am"
          title="About Me"
          subtitle="An engineer, developer, and filmmaker driven by curiosity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-5 font-inter text-text-secondary text-base md:text-lg leading-relaxed"
          >
            <p>
              I am <span className="font-semibold text-text-primary">Anurag Vedula</span>, an
              Electronics and Communication Engineering student at{" "}
              <span className="text-accent font-medium">VIT Vellore</span> with a CGPA of 8.18.
            </p>
            <p>
              Over the years, my journey has evolved from embedded systems and IoT into
              artificial intelligence, software engineering, and filmmaking.
            </p>
            <p>
              What began with building Arduino-based systems slowly transformed into exploring
              AI-powered solutions, scalable web applications, and creative storytelling through
              cinema.
            </p>
            <p>
              I enjoy solving problems that sit at the intersection of technology and creativity.
              Whether it is developing intelligent systems, architecting modern full-stack
              applications, directing films, or managing large student events, I am driven by
              curiosity, execution, and continuous learning.
            </p>
          </motion.div>

          {/* Trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -4 }}
                className="card p-6 flex flex-col gap-3 border border-accent/10"
              >
                <span className="text-3xl">{t.icon}</span>
                <p className="font-playfair text-lg font-semibold text-text-primary">
                  {t.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
