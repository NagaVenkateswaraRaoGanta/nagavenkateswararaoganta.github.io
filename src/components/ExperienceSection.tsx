import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "AWS Gen-AI Virtual Internship",
    org: "AWS Academy",
    period: "Oct 2025 – Dec 2025",
    points: [
      "Built Generative AI solutions using AWS services.",
      "Designed AI workflows for cloud-based applications.",
    ],
  },
  {
    title: "Generative AI Virtual Internship",
    org: "Google Cloud",
    period: "Apr 2025 – Jun 2025",
    points: [
      "Worked with Large Language Models and Generative AI.",
      "Built AI-powered automation solutions.",
    ],
  },
  {
    title: "Android Developer Virtual Internship",
    org: "Google for Developers",
    period: "Jul 2024 – Sep 2024",
    points: [
      "Developed Android applications using Java/Kotlin.",
      "Implemented REST APIs and MVVM architecture.",
    ],
  },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x: y, y: x });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.3s ease",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

const ExperienceSection = () => (
  <section id="experience" className="py-20 bg-section-grey">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Experience</h2>
        <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="md:pl-12 relative"
              >
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary hidden md:block" />

                <TiltCard>
                  <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-3">
                      <Briefcase size={18} className="text-primary mt-1 shrink-0 md:hidden" />
                      <div>
                        <h3 className="font-heading font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary text-sm font-medium">{exp.org}</p>
                        <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                        <ul className="space-y-1">
                          {exp.points.map((p, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
