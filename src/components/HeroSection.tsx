import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";
import PortraitFrame from "@/components/PortraitFrame";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-background via-hero-blue to-background">
      {/* Trendy background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-40 h-40 border border-primary/10 rotate-45 hidden lg:block" />
        <div className="absolute top-20 right-40 w-20 h-20 border border-primary/8 rotate-12 hidden lg:block" />
        <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-primary/10 rotate-45 hidden lg:block" />
        {/* Dotted pattern */}
        <div className="absolute top-10 left-10 grid grid-cols-5 gap-3 opacity-20 hidden lg:grid">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          ))}
        </div>
        <div className="absolute bottom-20 right-20 grid grid-cols-4 gap-3 opacity-20 hidden lg:grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-hero-blue px-4 py-2 rounded-sm mb-6">
              <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Hello there, nice to meet you
              </p>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight mb-2">
              <motion.span
                className="inline-block cursor-pointer"
                whileHover={{ scale: 1.05, color: "hsl(217, 91%, 52%)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Ganta Naga
              </motion.span>
            </h1>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary leading-tight mb-4">
              <motion.span
                className="inline-block cursor-pointer"
                whileHover={{ scale: 1.05, textShadow: "0 0 20px hsl(217, 91%, 52%, 0.4)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Venkateswara Rao
              </motion.span>
            </h1>

            <p className="text-lg font-medium text-muted-foreground mb-4">
              Salesforce Platform Developer | SAP ABAP Cloud Developer | Google Cloud ACE | ServiceNow CSA
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Full Stack, Cloud, AI and CRM developer graduating in 2026, with hands-on experience in Salesforce, SAP ABAP, FastAPI, React and modern cloud technologies. Open to software engineering opportunities.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}assets/GantaNagaVenkateswaraRao_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the latest resume in a new tab"
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 rounded-sm font-medium text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-muted-foreground px-6 py-3 rounded-sm font-medium text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <Mail size={16} /> Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <PortraitFrame
              src={profilePhoto}
              alt="Ganta Naga Venkateswara Rao"
              className="w-72 h-80 md:w-96 md:h-[28rem]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
