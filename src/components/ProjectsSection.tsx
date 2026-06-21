import { motion } from "framer-motion";
import { ExternalLink, FileText, Github } from "lucide-react";
import { cardReveal, revealTransition, revealViewport, sectionReveal, staggeredCards } from "@/lib/motion";

type Project = {
  title: string;
  category?: string;
  image: string;
  imageFit?: "cover" | "contain";
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  demo?: string;
  documentation?: string;
  details?: string;
};

const projects: Project[] = [
  {
    title: "College Institute Management System",
    category: "Salesforce CRM Project",
    image: `${import.meta.env.BASE_URL}assets/project-salesforce.jpg`,
    imageFit: "contain",
    description:
      "Developed a Salesforce-based student management system that automates admissions, student records, and roll number generation using declarative Salesforce tools.",
    features: [
      "Student Admission Management",
      "Automated Roll Number Generation",
      "Record Triggered Flows",
      "Validation Rules",
      "Dependent Picklists",
      "Lightning Record Pages",
      "Reports and Dashboards",
      "Data Integrity Controls",
    ],
    tech: ["Salesforce CRM", "Flow Builder", "Object Manager", "Validation Rules", "Formula Fields", "Lightning App Builder", "Reports & Dashboards"],
    documentation: "https://docs.google.com/document/d/10_Cjl3U7bh45gNuUR4Jk9BO-Sa2vB9cC/edit",
    details: "https://drive.google.com/file/d/1x66gjKR4J9Rdhiw_G5wz2LLUG-uTByS4/view",
  },
  {
    title: "DevInsight AI PRO",
    category: "AI Repository Intelligence",
    image: `${import.meta.env.BASE_URL}assets/project-devinsight.jpg`,
    imageFit: "contain",
    description:
      "AI-powered Repository Intelligence Platform built for deep codebase analysis, contextual AI assistance and semantic exploration.",
    features: [
      "GitHub Repository Analysis",
      "AI Chat with Repository Context",
      "Semantic Code Search",
      "Embedding Visualization",
      "Repository Persistence",
      "Real-time Streaming Responses",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Prisma", "Ollama", "FAISS", "Sentence Transformers", "Tailwind CSS"],
    github: "https://github.com/NagaVenkateswaraRaoGanta/devinsight-ai-pro",
    demo: "https://devinsight-ai-pro.vercel.app/",
  },
  {
    title: "Gesture Volume Control",
    category: "Computer Vision Project",
    image: `${import.meta.env.BASE_URL}assets/project-gesture.jpg`,
    imageFit: "contain",
    description:
      "Computer Vision project that controls system volume using hand gestures through real-time webcam interaction.",
    features: ["Real-time Hand Tracking", "Gesture Recognition", "Volume Control Automation", "OpenCV Integration", "MediaPipe Integration"],
    tech: ["Python", "OpenCV", "MediaPipe", "Pycaw"],
    github: "https://github.com/NagaVenkateswaraRaoGanta/Gesture-Volume-Control",
  },
  {
    title: "Aadhaar Card OCR & Passcode Generator",
    category: "OCR & Visitor Management",
    image: `${import.meta.env.BASE_URL}assets/project-aadhaar.png`,
    imageFit: "contain",
    description:
      "OCR-based visitor management system that extracts Aadhaar information and generates secure visitor passcodes automatically.",
    features: ["Aadhaar OCR Processing", "Visitor Registration", "Automatic Passcode Generation", "Data Validation", "Secure Information Handling"],
    tech: ["Python", "OCR", "OpenCV", "SQLite"],
    github: "https://github.com/NagaVenkateswaraRaoGanta/Aadhaar-OCR-Visitor-Pass-System",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        transition={revealTransition}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Projects</h2>
        <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

        <motion.div
          variants={staggeredCards}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardReveal}
              className="border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 group bg-background flex flex-col"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={`${project.title} project interface`}
                  className={`w-full h-full ${project.imageFit === "contain" ? "object-contain p-2" : "object-cover"} group-hover:scale-105 transition-transform duration-300`}
                  width={640}
                  height={360}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                {project.category && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{project.category}</p>
                )}
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1.5 mb-4">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((technology) => (
                    <span key={technology} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full">
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-md text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                    >
                      <Github size={15} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open the ${project.title} live demo`}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                  {project.documentation && (
                    <a
                      href={project.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View documentation for ${project.title}`}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <FileText size={15} /> View Documentation
                    </a>
                  )}
                  {project.details && (
                    <a
                      href={project.details}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View project details for ${project.title}`}
                      className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-md text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                    >
                      <ExternalLink size={15} /> View Project Details
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
