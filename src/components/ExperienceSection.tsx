import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, CalendarDays, Code2, MapPin } from "lucide-react";
import naxritaLogo from "@/assets/naxrita-logo.png";
import { revealTransition, revealViewport, sectionReveal } from "@/lib/motion";

const experiences = [
  {
    title: "DevCon Associate - SAP Application Development Track",
    org: "Naxrita",
    type: "Internship",
    period: "May 2026 - June 2026",
    duration: "2 mos",
    location: "Hyderabad, Telangana, India",
    workMode: "On-site",
    description:
      "Training under NAXRITA with expert mentors, focused on developing strong practical skills in SAP ABAP through the DevCon Associate SAP Development Track. Worked on real-time business scenarios and SAP ABAP projects, gaining hands-on experience in report development, Data Dictionary objects, internal tables, modularization techniques, and debugging. Strengthened technical expertise by applying SAP development concepts to practical use cases and enterprise-level requirements.",
    skills: ["SAP ABAP", "Report Development", "Data Dictionary"],
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
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        transition={revealTransition}
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
                viewport={revealViewport}
                transition={{ ...revealTransition, delay: i * 0.08 }}
                className="md:pl-12 relative"
              >
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary hidden md:block" />

                <TiltCard>
                  <article className="bg-background border border-border rounded-xl p-5 md:p-7 hover:shadow-xl hover:border-primary/30 transition-all">
                    <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5">
                      <div className="w-14 h-14 rounded-xl bg-foreground overflow-hidden shrink-0 shadow-sm">
                        <img
                          src={naxritaLogo}
                          alt="Naxrita company logo"
                          className="w-full h-full object-cover"
                          width={56}
                          height={56}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start gap-2">
                          <Briefcase size={18} className="text-primary mt-1 shrink-0 sm:hidden" />
                          <h3 className="font-heading font-semibold text-lg md:text-xl leading-snug">{exp.title}</h3>
                        </div>

                        <p className="text-sm text-foreground mt-1">
                          <span className="font-medium text-primary">{exp.org}</span>
                          <span className="text-muted-foreground"> · {exp.type}</span>
                        </p>

                        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays size={15} className="text-primary" />
                            {exp.period} · {exp.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={15} className="text-primary" />
                            {exp.location} · {exp.workMode}
                          </span>
                        </div>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-5">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 mt-5" aria-label="Skills used in this experience">
                          <Code2 size={17} className="text-primary mr-1" />
                          {exp.skills.map((skill) => (
                            <span key={skill} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
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
