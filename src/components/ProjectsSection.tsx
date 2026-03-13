import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Aadhaar Card Data Extraction System",
    description: "Desktop application that extracts Aadhaar card information using OCR and generates a secure passcode.",
    tech: ["Python", "OpenCV", "Tesseract OCR", "Tkinter"],
  },
  {
    title: "Gesture Based Volume Control System",
    description: "Computer vision application that controls system volume using hand gestures detected via webcam.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "PyCaw"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Projects</h2>
        <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group bg-background"
            >
              <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/NagaVenkateswaraRaoGanta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
              >
                <Github size={14} /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
