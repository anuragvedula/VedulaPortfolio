import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  titleClassName = "text-text-primary",
  subtitleClassName = "text-text-secondary",
  accentClassName = "text-accent",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`${accentClassName} font-inter font-medium tracking-widest uppercase text-sm mb-3`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-playfair text-4xl md:text-5xl font-semibold ${titleClassName} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <div className={`mt-4 ${subtitleClassName} font-inter text-base md:text-lg max-w-2xl leading-relaxed`}>
          {subtitle}
        </div>
      )}
      <div
        className={`mt-5 h-px bg-gradient-to-r from-accent via-accent/30 to-transparent w-20 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
