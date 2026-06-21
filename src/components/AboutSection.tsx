import { motion } from "framer-motion";
import { GraduationCap, BookOpen, CalendarDays, MapPin, Trophy } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";
import { revealTransition, revealViewport, sectionReveal } from "@/lib/motion";
import PortraitFrame from "@/components/PortraitFrame";

const education = [
  {
    level: "Undergraduate",
    degree: "B.Tech - Civil Engineering, CSE Minor",
    school: "Pragati Engineering College (Autonomous)",
    location: "Surampalem, Andhra Pradesh",
    score: "CGPA: 8.61",
    year: "2026",
  },
  {
    level: "Higher Secondary",
    degree: "Intermediate",
    school: "Sri Chaitanya Junior College",
    location: "Kakinada, Andhra Pradesh",
    score: "85.1%",
    year: "2022",
  },
  {
    level: "Secondary School",
    degree: "SSC",
    school: "Madhuri Vidyalaya",
    location: "Gollaprolu, Andhra Pradesh",
    score: "89.3%",
    year: "2020",
  },
];

const educationContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const educationCard = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const AboutSection = () => (
  <section id="about" className="py-20 bg-section-grey">
    <div className="container mx-auto px-6">
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        transition={revealTransition}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

        {/* Photo + Bio layout like reference */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 mb-12 items-start">
          <PortraitFrame
            src={aboutPhoto}
            alt="Ganta Naga Venkateswara Rao"
            className="w-52 h-64 md:w-64 md:h-80 mx-auto lg:mx-0 shrink-0"
          />

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Ganta Naga Venkateswara Rao, a results-driven engineering graduate with hands-on experience in Salesforce CRM, SAP ABAP, Python, Java, SQL, cloud platforms and modern web development. Alongside my Civil Engineering degree, I completed a CSE minor and built a focused software engineering profile.
            </p>
            <p>
              I develop business applications, automate workflows and build data-driven products using Salesforce, SAP, FastAPI, React and AI technologies. My recent work spans repository intelligence, enterprise CRM automation, computer vision and OCR systems.
            </p>
            <p>
              My professional certifications include Salesforce Platform Developer, SAP ABAP Cloud, Google Cloud Associate Cloud Engineer, ServiceNow CSA and other cloud, CRM and security credentials.
            </p>
            <p>
              I am seeking software engineering opportunities where I can contribute across full-stack development, cloud, AI and enterprise platforms while continuing to learn and ship useful products.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background/70 p-5 md:p-7">
          <div className="absolute -right-14 -top-14 w-40 h-40 rounded-full bg-primary/5 subtle-float pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <h3 className="font-heading text-2xl font-semibold flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap size={21} className="text-primary" />
                </span>
                Education
              </h3>
              <p className="text-sm text-muted-foreground mt-2 sm:ml-[52px]">My academic journey and qualifications</p>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 w-20 bg-primary rounded-full origin-left"
            />
          </div>

          <motion.div
            variants={educationContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative grid md:grid-cols-3 gap-5"
          >
            {education.map((e, i) => (
              <motion.article
                key={e.degree}
                variants={educationCard}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="education-card group relative overflow-hidden bg-background rounded-xl p-5 border border-border hover:shadow-xl hover:border-primary/40 transition-[box-shadow,border-color] duration-300"
              >
                <span className="absolute right-4 top-3 font-heading text-5xl font-bold text-primary/[0.04] group-hover:text-primary/[0.08] transition-colors" aria-hidden="true">
                  0{i + 1}
                </span>

                <div className="relative">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <BookOpen size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1.5 rounded-full">
                      <CalendarDays size={13} /> {e.year}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{e.level}</p>
                  <h4 className="font-heading font-semibold text-base leading-snug min-h-12">{e.degree}</h4>
                  <p className="text-sm text-foreground mt-3 leading-snug">{e.school}</p>
                  <p className="flex items-start gap-1.5 text-xs text-muted-foreground mt-2">
                    <MapPin size={13} className="text-primary mt-0.5 shrink-0" /> {e.location}
                  </p>

                  <div className="mt-5 pt-4 border-t border-border flex items-center justify-between gap-3">
                    <span className="text-xs text-muted-foreground">Academic result</span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold">
                      <Trophy size={14} /> {e.score}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
