import { motion } from "framer-motion";
import { BrainCircuit, Building2, Code2, Medal, Trophy, Users } from "lucide-react";
import { cardReveal, revealTransition, revealViewport, sectionReveal, staggeredCards } from "@/lib/motion";

const achievements = [
  {
    title: "500+ LeetCode Problems Solved",
    description:
      "Solved 500+ coding problems across Data Structures, Algorithms, Dynamic Programming, Graphs, Trees, and System Design preparation.",
    icon: Code2,
  },
  {
    title: "2nd Rank - III B.Tech I Semester",
    description:
      "Secured 2nd Rank in III B.Tech I Semester (2024-25) at Pragati Engineering College.",
    icon: Trophy,
  },
  {
    title: "NSS Coordinator Leadership",
    description:
      "Served as NSS Coordinator, organizing volunteer initiatives and community service programs.",
    icon: Users,
  },
  {
    title: "Full Stack Project Development",
    description:
      "Built and deployed multiple projects using React, FastAPI, Python, TypeScript, Salesforce, SAP ABAP, and Cloud technologies.",
    icon: Building2,
  },
  {
    title: "Enterprise Technology Certifications",
    description:
      "Earned certifications across Salesforce, SAP, ServiceNow, Google Cloud, Zscaler, and Aviatrix technologies.",
    icon: Medal,
  },
  {
    title: "AI & Repository Intelligence Development",
    description:
      "Designed and developed DevInsight AI PRO, an AI-powered repository intelligence and semantic code analysis platform.",
    icon: BrainCircuit,
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        transition={revealTransition}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
          <Trophy size={32} className="text-primary" /> Achievements
        </h2>
        <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

        <motion.div
          variants={staggeredCards}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((achievement) => (
            <motion.article
              key={achievement.title}
              variants={cardReveal}
              className="relative overflow-hidden bg-background border border-border rounded-xl p-6 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <achievement.icon size={23} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold leading-snug relative mb-3">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative">{achievement.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AchievementsSection;
