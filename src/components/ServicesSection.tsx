import { motion } from "framer-motion";
import { Globe, Code, Cloud, BrainCircuit } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Building responsive, modern websites using HTML, CSS, and JavaScript." },
  { icon: Code, title: "Software Development", desc: "Developing scalable applications using Python and Java with strong engineering principles." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Designing cloud-based solutions using modern cloud technologies and automation tools." },
  { icon: BrainCircuit, title: "AI / ML Applications", desc: "Building intelligent systems using AI models, automation workflows, and data processing." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-section-grey">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Services</h2>
        <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-lg p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
