import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";

const education = [
  {
    degree: "B.Tech – Civil Engineering",
    school: "Pragati Engineering College (Autonomous), Surampalem, AP",
    score: "CGPA: 8.61",
    year: "Expected June 2026",
  },
  {
    degree: "Intermediate",
    school: "Sri Chaitanya Junior College, Kakinada",
    score: "85.1%",
    year: "2022",
  },
  {
    degree: "SSC",
    school: "Madhuri Vidyalaya, Gollaprolu",
    score: "89.3%",
    year: "2020",
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

const AboutSection = () => (
  <section id="about" className="py-20 bg-section-grey">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

        {/* Photo + Bio layout like reference */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 mb-12 items-start">
          <TiltCard className="shrink-0">
            <div className="relative w-52 h-64 md:w-64 md:h-80 mx-auto lg:mx-0">
              <img
                src={aboutPhoto}
                alt="Venkateswara Rao"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Accent border like reference */}
              <div className="absolute -left-2 top-2 bottom-2 w-1 bg-primary rounded-full" />
              <div className="absolute left-2 right-2 -bottom-2 h-1 bg-destructive rounded-full" />
            </div>
          </TiltCard>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate aspiring Software Engineer with deep interests in Cloud Computing, Artificial Intelligence, and Software Development. Currently pursuing my B.Tech in Civil Engineering at Pragati Engineering College (Autonomous), I combine my engineering background with modern technology to build efficient and impactful digital solutions.
            </p>
            <p>
              I enjoy solving problems, developing scalable applications, and exploring emerging technologies. My learning journey includes working on software projects, automation tools, and innovative solutions that focus on improving efficiency and usability.
            </p>
            <p>
              I have also earned certifications in cloud and AI technologies, which helped me gain a better understanding of modern computing environments and intelligent systems.
            </p>
            <p>
              I am committed to continuous learning, collaboration, and innovation, and I aim to grow as a software engineer building scalable, intelligent, and user-focused applications.
            </p>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
            <GraduationCap size={20} className="text-primary" /> Education
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {education.map((e, i) => (
              <TiltCard key={i}>
                <div className="bg-background rounded-lg p-4 border border-border hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-3">
                    <BookOpen size={16} className="text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{e.degree}</p>
                      <p className="text-sm text-muted-foreground">{e.school}</p>
                      <div className="flex gap-4 mt-1 text-sm">
                        <span className="text-primary font-medium">{e.score}</span>
                        <span className="text-muted-foreground">{e.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
