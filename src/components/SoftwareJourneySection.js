import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const concepts = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Computer Networks",
  "Operating Systems",
];

export default function SoftwareJourneySection() {
  return (
    <section id="software-journey" className="bg-cream section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Evolution"
          title="Software Development Journey"
          subtitle="From circuits to code — expanding into the world of scalable software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-5 font-inter text-text-secondary text-base leading-relaxed"
          >
            <p>
              As my interest in technology expanded, I gradually transitioned into software
              engineering and full-stack development.
            </p>
            <p>
              I started exploring core Computer Science concepts and building a strong
              theoretical foundation before moving into applied software projects.
            </p>
            <p>
              This curiosity eventually led me towards building scalable applications and
              experimenting with AI-powered software products.
            </p>
          </motion.div>

          {/* Core concepts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="space-y-3"
          >
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Core Concepts Explored
            </p>
            {concepts.map((concept, i) => (
              <motion.div
                key={concept}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card-bg border border-accent/10 hover:border-accent/30 transition-colors duration-200"
              >
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="font-inter text-sm font-medium text-text-primary">
                  {concept}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
