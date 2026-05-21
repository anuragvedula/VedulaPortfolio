import { motion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiPhone,
} from "react-icons/fi";

const contacts = [
  {
    icon: <FiMail size={22} />,
    label: "Email",
    value: "anuragvedula02@gmail.com",
    href: "mailto:anuragvedula02@gmail.com",
  },
  {
    icon: <FiLinkedin size={22} />,
    label: "LinkedIn",
    value: "linkedin.com/in/anuragvedula",
    href: "https://www.linkedin.com/in/anurag-vedula-8a3b72254",
  },
  {
    icon: <FiGithub size={22} />,
    label: "GitHub",
    value: "github.com/vedulaanurag",
    href: "https://github.com/vedulaanurag",
  },
  {
    icon: <FiPhone size={22} />,
    label: "Phone",
    value: "+91 • Available on request",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-cream-secondary section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-inter text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Let's Connect
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-text-primary leading-tight mb-6">
            Get in Touch
          </h2>
          <p className="font-inter text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-14">
            Whether it's an exciting project, a collaboration idea, or just a conversation —
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card block p-7 border border-accent/10 hover:border-accent/40 transition-all duration-300 text-left"
                >
                  <ContactInner c={c} />
                </a>
              ) : (
                <div className="card p-7 border border-accent/10 text-left">
                  <ContactInner c={c} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="border-t border-accent/15 pt-10"
        >
          <p className="font-playfair text-2xl italic text-text-secondary mb-3">
            "Blending technology, storytelling, and creativity."
          </p>
          <p className="font-inter text-xs text-text-secondary/60">
            © {new Date().getFullYear()} Anurag Vedula · Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInner({ c }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-cream flex items-center justify-center text-accent flex-shrink-0 border border-accent/15">
        {c.icon}
      </div>
      <div>
        <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent mb-0.5">
          {c.label}
        </p>
        <p className="font-inter text-sm text-text-primary font-medium">{c.value}</p>
      </div>
    </div>
  );
}
