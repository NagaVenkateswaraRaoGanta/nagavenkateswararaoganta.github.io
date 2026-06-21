import { motion } from "framer-motion";
import { Code, Globe, Database, GitBranch, Brain, Cloud, Settings, Users } from "lucide-react";
import { cardReveal, revealTransition, revealViewport, sectionReveal, staggeredCards } from "@/lib/motion";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Core CS",
    icon: Brain,
    skills: ["Data Structures & Algorithms", "OOP", "REST APIs", "Version Control"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "SQL", "PostgreSQL", "SQLite", "Prisma"],
  },
  {
    title: "Cloud & CRM",
    icon: Cloud,
    skills: ["Salesforce CRM", "SAP ABAP", "Google Cloud Platform", "ServiceNow"],
  },
  {
    title: "AI & Backend",
    icon: Settings,
    skills: ["FastAPI", "RAG", "FAISS", "Ollama", "Sentence Transformers", "OpenCV", "MediaPipe"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "MS Excel", "Salesforce Flows", "Reports & Dashboards"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Communication", "Teamwork", "Problem Solving", "Time Management"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        transition={revealTransition}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Skills</h2>
        <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

        <motion.div
          variants={staggeredCards}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardReveal}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
