import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const countries = [
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇦🇪", name: "Dubai" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇨🇦", name: "Canada" },
];

const skills = [
  "Communication Skills",
  "Patience & Mentorship",
  "Problem Simplification",
  "Cross-cultural Interaction",
  "Adaptive Teaching",
];

export default function TeachingSection() {
  return (
    <section id="teaching" className="bg-cream section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="Beyond the Lab"
          title="Teaching Experience"
          subtitle="Sharing knowledge across borders, bridging gaps through education."
          centered
        />

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="card border border-accent/10 p-8 md:p-12 mb-10"
        >
          {/* Tutoring heading */}
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-text-primary text-center mb-6">
            Tutoring
          </h3>

          {/* Description */}
          <p className="font-inter text-text-secondary text-base md:text-lg leading-[1.85] text-center mb-10">
            Alongside academics and projects, I worked as a part-time tutor during college,
            teaching{" "}
            <span className="font-medium text-text-primary">Mathematics and Science</span>{" "}
            to students from 5th to 10th grade across multiple countries.
          </p>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Students from */}
            <div>
              <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-accent mb-5 text-center">
                Students from
              </p>
              <div className="space-y-3">
                {countries.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-cream-secondary border border-accent/10"
                  >
                    <span className="text-xl">{c.flag}</span>
                    <span className="font-inter text-sm font-medium text-text-primary">{c.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills developed */}
            <div>
              <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-accent mb-5 text-center">
                Skills Developed
              </p>
              <div className="space-y-3">
                {skills.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="font-inter text-sm text-text-secondary">{s}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
