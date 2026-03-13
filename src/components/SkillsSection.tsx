import { motion } from "framer-motion";
import { Code, Globe, Database, GitBranch, Brain, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Core CS",
    icon: Brain,
    skills: ["Data Structures & Algorithms", "OOP"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "MS Excel"],
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Skills</h2>
        <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
