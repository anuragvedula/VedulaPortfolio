import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { CarDetectionVisual, FireDetectionVisual } from "./ui/ProjectVisual";

const projects = [
  {
    title: "Car Detection Gateway using Arduino",
    Visual: CarDetectionVisual,
    category: "Embedded Systems",
    description:
      "Designed and developed an automated vehicle detection gateway system using Arduino and sensor-based detection mechanisms. The system identifies incoming vehicles and automates gate operations with minimal human intervention — embedding real-time hardware communication into an end-to-end physical solution.",
    tags: [
      "Embedded Systems Design",
      "Sensor Integration",
      "Real-time Processing",
      "Arduino Programming",
      "Hardware Troubleshooting",
    ],
  },
  {
    title: "Fire Detection System using Arduino",
    Visual: FireDetectionVisual,
    category: "Safety Automation",
    description:
      "Built a fire detection and alert system using Arduino and flame/smoke detection sensors. The project focused on early hazard detection and safety automation by continuously monitoring environmental conditions and triggering alerts whenever abnormal heat or smoke levels are detected.",
    tags: [
      "Safety Automation",
      "Sensor Calibration",
      "Embedded Logic Design",
      "Hardware-Software Interaction",
    ],
  },
];

/* Exhibition cards for the two technical project photos */
const exhibitionPhotos = [
  {
    src: "/pictures/TechnicalProjects.jpeg",
    label: "Project Exhibition — Hardware Build",
    sub: "Live demonstration of embedded systems at technical events",
  },
  {
    src: "/pictures/TechnicalProject2.jpeg",
    label: "Technical Showcase — Sensor Integration",
    sub: "Circuit assembly and sensor calibration in progress",
  },
];

export default function EmbeddedProjectsSection() {
  return (
    <section id="projects" className="bg-cream section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Hardware Projects"
          title="Embedded Systems & IoT"
          subtitle="Where it all began — building real-world systems with hardware and code."
        />

        {/* Project cards */}
        <div className="space-y-10 mb-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} reverse={i % 2 !== 0} />
          ))}
        </div>

        {/* Exhibition showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px flex-1 bg-accent/20" />
            <p className="font-inter text-xs font-medium tracking-[0.2em] uppercase text-accent">
              Technical Events & Exhibitions
            </p>
            <span className="h-px flex-1 bg-accent/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {exhibitionPhotos.map((photo, i) => (
              <motion.div
                key={photo.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-accent/10 shadow-warm-sm"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5 }}
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-playfair text-base font-semibold text-cream leading-snug">
                      {photo.label}
                    </p>
                    <p className="font-inter text-xs text-cream/60 mt-1">{photo.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, reverse }) {
  const { Visual } = project;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`card grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden border border-accent/10 ${
        reverse ? "md:[direction:rtl]" : ""
      }`}
    >
      {/* Conceptual visual */}
      <div className="h-64 md:h-auto min-h-[280px] [direction:ltr] overflow-hidden">
        <Visual />
      </div>

      {/* Content */}
      <div className="p-8 md:p-10 [direction:ltr] flex flex-col justify-center gap-5">
        <div>
          <p className="font-inter text-xs font-medium tracking-[0.18em] uppercase text-accent mb-2">
            {project.category}
          </p>
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-text-primary leading-snug">
            {project.title}
          </h3>
        </div>

        <p className="font-inter text-text-secondary text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        <div>
          <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.15em] text-text-primary mb-3">
            Key Learnings
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-inter text-xs px-3 py-1.5 rounded-full bg-cream-secondary text-text-secondary border border-accent/15 hover:border-accent/40 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
