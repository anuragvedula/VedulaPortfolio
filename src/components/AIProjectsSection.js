import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { PneumoniaDetectionVisual, VideoEnhancerVisual } from "./ui/ProjectVisual";

const projects = [
  {
    title: "Pneumonia Detection using X-Ray Images and CNN",
    Visual: PneumoniaDetectionVisual,
    category: "Medical AI",
    tech: ["Python", "CNN", "TensorFlow/Keras", "Computer Vision"],
    learnings: [
      "Deep Learning Fundamentals",
      "Image Classification",
      "Medical AI Applications",
      "Data Preprocessing",
    ],
    description:
      "Developed a deep learning-based pneumonia detection model using Convolutional Neural Networks trained on chest X-ray datasets. The model classifies pneumonia-infected lungs from normal scans — bridging medical imaging workflows with modern neural network architectures and quantitative model evaluation.",
  },
  {
    title: "Video Enhancer using Motion Detection & Mean Filtering on ZYNQ/Vivado",
    Visual: VideoEnhancerVisual,
    category: "Hardware Acceleration",
    tech: ["ZYNQ", "Vivado", "FPGA Concepts", "Motion Detection", "Mean Filtering"],
    learnings: [
      "Hardware Acceleration",
      "Real-time Video Processing",
      "FPGA Workflow",
      "System Optimization",
    ],
    description:
      "Built a hardware-accelerated video enhancement system capable of processing CCTV footage using motion detection and mean filtering on ZYNQ architecture via Vivado. The project explores real-time image processing pipelines and hardware-level optimisation for video enhancement at the silicon level.",
  },
];

export default function AIProjectsSection() {
  return (
    <section id="ai-projects" className="bg-cream-secondary section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Intelligent Systems"
          title="AI & Hardware Accelerated Projects"
          subtitle="Exploring the frontier of machine intelligence and silicon-level computation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const { Visual } = project;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="card border border-accent/10 flex flex-col overflow-hidden"
              >
                {/* Conceptual visual */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <Visual />
                  {/* Tech pills over visual */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-1.5 bg-gradient-to-t from-black/40 to-transparent">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-inter text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/50 text-cream/90 backdrop-blur-sm border border-accent/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div>
                    <p className="font-inter text-[10px] font-medium tracking-[0.18em] uppercase text-accent mb-1.5">
                      {project.category}
                    </p>
                    <h3 className="font-playfair text-xl font-semibold text-text-primary leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-inter text-text-secondary text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div>
                    <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.15em] text-text-primary mb-2.5">
                      Key Learnings
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.learnings.map((l) => (
                        <span
                          key={l}
                          className="font-inter text-xs px-3 py-1.5 rounded-full bg-cream border border-accent/15 text-text-secondary"
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
