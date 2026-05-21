import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const skillGroups = [
  {
    category: "Programming",
    icon: "💻",
    skills: ["JavaScript", "Python", "C++", "SQL"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React.js", "Recoil", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM"],
  },
  {
    category: "AI & ML",
    icon: "🧠",
    skills: ["CNN", "OpenAI APIs", "Gemini APIs", "Computer Vision"],
  },
  {
    category: "Embedded Systems",
    icon: "🔧",
    skills: ["Arduino", "ZYNQ", "Vivado", "IoT Systems"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Vercel", "Claude CLI", "Postman"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-cream-secondary section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Technical Arsenal"
          title="Skills"
          subtitle="A broad stack spanning hardware, software, AI, and creative tools."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
              whileHover={{ y: -4 }}
              className="card p-7 border border-accent/10"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-playfair text-xl font-semibold text-text-primary">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIdx * 0.08 + skillIdx * 0.05 }}
                    className="font-inter text-xs font-medium px-3 py-1.5 rounded-full bg-cream-secondary text-text-secondary border border-accent/15 hover:border-accent hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
