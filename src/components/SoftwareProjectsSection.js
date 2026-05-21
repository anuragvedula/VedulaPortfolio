import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const projects = [
  {
    number: "01",
    title: "Weekend Planner",
    badge: "Productivity App",
    description:
      "A productivity-focused application designed to help users organise and optimise their weekends efficiently. The project deepened my frontend architecture instincts — particularly around UI structuring, component design patterns, and state management — while sharpening my understanding of user-centric product thinking.",
    tech: ["React", "State Management", "UI/UX Design"],
    highlights: ["Component Architecture", "Responsive Design", "User Flow Optimisation"],
  },
  {
    number: "02",
    title: "Apply Intern",
    subtitle: "AI-Powered Internship Aggregation Platform",
    badge: "Featured Project",
    featured: true,
    description:
      "An AI-powered platform that analyses user resumes and preferences to deliver personalised internship recommendations through intelligent opportunity ranking and application optimisation workflows. Built the frontend with React and Recoil for fast, reactive experiences. Architected the backend using Express.js, Node.js, PostgreSQL, and Prisma ORM. Integrated OpenAI APIs, Google Gemini APIs, and Claude CLI for resume analysis and intelligent recommendation pipelines.",
    tech: [
      "React",
      "Recoil",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "OpenAI APIs",
      "Gemini APIs",
      "Vercel",
      "Git",
    ],
    highlights: ["AI Resume Analysis", "Personalised Recommendations", "Full-Stack Architecture"],
  },
];

export default function SoftwareProjectsSection() {
  return (
    <section id="software-projects" className="bg-cream-secondary section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Featured Work"
          title="Software Projects"
          subtitle="Full-stack applications powered by AI and modern web technologies."
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
              className={`card border overflow-hidden ${
                project.featured ? "border-accent/30" : "border-accent/10"
              }`}
            >
              <div className="p-8 md:p-12">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
                  <div className="flex items-start gap-5">
                    {/* Project number */}
                    <span className="font-playfair text-5xl font-bold text-accent/15 leading-none select-none mt-1">
                      {project.number}
                    </span>
                    <div>
                      <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-accent mb-1.5">
                        {project.badge}
                      </p>
                      <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-text-primary leading-snug">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="font-playfair text-sm italic text-text-secondary mt-1">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Highlights chips */}
                  <div className="flex flex-wrap gap-2 sm:justify-end sm:max-w-xs">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="font-inter text-[10px] font-medium px-3 py-1 rounded-full bg-accent/8 text-accent border border-accent/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-accent/10 mb-7" />

                {/* Description */}
                <p className="font-inter text-text-secondary text-sm md:text-base leading-[1.85] mb-8 max-w-3xl">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div>
                  <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.18em] text-text-secondary mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-inter text-xs px-3.5 py-1.5 rounded-full bg-cream text-text-secondary border border-accent/15 hover:border-accent/40 hover:text-text-primary transition-all duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Featured accent bar */}
              {project.featured && (
                <div className="h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
