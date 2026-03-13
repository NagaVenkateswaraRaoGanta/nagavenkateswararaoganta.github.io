import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, X } from "lucide-react";

const certifications = [
  {
    name: "Salesforce Certified Platform Developer",
    image: "https://i.postimg.cc/qBwGyg91/Screenshot-2026-03-13-180945.png",
  },
  {
    name: "Google Cloud Certified Associate Cloud Engineer",
    image: "https://i.postimg.cc/8cfPp7WS/Screenshot-2026-03-13-181016.png",
  },
  {
    name: "Zscaler Zero Trust Associate (ZTCA) Certification",
    image: "https://i.postimg.cc/SKwmZy3w/Screenshot-2026-03-13-181157.png",
  },
  {
    name: "Aviatrix Multi-Cloud Network Associate",
    image: "https://i.postimg.cc/zfRrHsvc/Screenshot-2026-03-13-181047.png",
  },
];

const otherCerts = [
  "Salesforce AI Associate",
  "Salesforce Agentforce Specialist",
  "NPTEL Cloud IoT Edge ML Certification",
];

const achievements = [
  "Secured 2nd Rank in III B.Tech I Semester",
  "Participated in International Data Science Workshop",
  "Completed National Civil 3D Workshop (IIT Varanasi)",
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
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

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <Award size={32} className="text-primary" /> Certifications
          </h2>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {certifications.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TiltCard>
                  <div
                    className="bg-background border-2 border-primary/20 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all cursor-pointer group"
                    onClick={() => setSelectedCert(c.image)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-foreground text-center">{c.name}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Other certifications as badges */}
          <div className="flex flex-wrap gap-3">
            {otherCerts.map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
              >
                <Award size={14} /> {c}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievements - separate section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <Trophy size={32} className="text-primary" /> Achievements
          </h2>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

          <div className="grid sm:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-section-grey border border-border rounded-lg px-5 py-4 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                <span className="text-sm font-medium">{a}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-10 right-0 text-primary-foreground hover:text-primary transition-colors"
              >
                <X size={28} />
              </button>
              <img src={selectedCert} alt="Certificate" className="w-full rounded-xl shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
