import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ImageOff } from "lucide-react";
import { cardReveal, revealTransition, revealViewport, sectionReveal, staggeredCards } from "@/lib/motion";

const certifications = [
  {
    name: "SAP Certified Backend Developer - ABAP Cloud",
    organization: "SAP",
    image: `${import.meta.env.BASE_URL}assets/cert-sap-abap.jpg`,
    credential: "https://drive.google.com/file/d/1FinT3m9nxBqDUq9D4bZPzLck55OPIo8j/view",
  },
  {
    name: "Salesforce Certified Platform Developer",
    organization: "Salesforce",
    image: `${import.meta.env.BASE_URL}assets/cert-salesforce-pd.jpg`,
    credential: "https://drive.google.com/file/d/1tNbvlngNr1-v5SnP1icJ8XYnT4gDORzz/view",
  },
  {
    name: "ServiceNow Certified System Administrator (CSA)",
    organization: "ServiceNow",
    image: `${import.meta.env.BASE_URL}assets/cert-servicenow-csa.jpg`,
    credential: "https://drive.google.com/file/d/1WAg_KNSw3pre3x_orCHO1b3DPbAybgX4/view",
  },
  {
    name: "Google Cloud Certified Associate Cloud Engineer",
    organization: "Google Cloud",
    image: `${import.meta.env.BASE_URL}assets/cert-google-ace.jpg`,
    credential: "https://drive.google.com/file/d/1Qyv7KTa5KPKZ1kVawnHFIfst00Rg1ygd/view",
  },
  {
    name: "Salesforce Certified Agentforce Specialist",
    organization: "Salesforce",
    image: `${import.meta.env.BASE_URL}assets/cert-salesforce-agentforce.jpg`,
    credential: "https://drive.google.com/file/d/1u2rcX1B0PGGDJM5TICVxm90JCDO2_AN_/view",
  },
  {
    name: "ServiceNow Certified Implementation Specialist (CMDM & CSDM)",
    organization: "ServiceNow",
    image: `${import.meta.env.BASE_URL}assets/cert-servicenow-cis.jpg`,
    credential: "https://drive.google.com/file/d/1qq8Y2u_Dwpb6sIXlZzMsIRzylqNnel9T/view",
  },
  {
    name: "Zscaler Zero Trust Cloud Associate (ZTCA)",
    organization: "Zscaler",
    image: `${import.meta.env.BASE_URL}assets/cert-zscaler-ztca.jpg`,
    credential: "https://drive.google.com/file/d/1h0u4GyonXwN_nH4v0OUtBastnmgkwYLR/view",
  },
  {
    name: "Aviatrix Multi-Cloud Network Associate",
    organization: "Aviatrix",
    image: `${import.meta.env.BASE_URL}assets/cert-aviatrix.jpg`,
    credential: "https://drive.google.com/file/d/1IRKbyBz2e-k5Nw47qxb0ryU3wRg-cZjy/view",
  },
];

const CertificationImage = ({ src, name }: { src: string; name: string }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center text-muted-foreground" role="img" aria-label={`${name} image unavailable`}>
        <ImageOff size={30} className="text-primary" />
        <span className="text-xs font-medium">Credential image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} certification badge`}
      className="w-full h-full object-contain p-4"
      width={480}
      height={360}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
};

const CertificationsSection = () => (
  <section id="certifications" className="py-20 bg-section-grey">
    <div className="container mx-auto px-6">
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        transition={revealTransition}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
          <Award size={32} className="text-primary" /> Certifications
        </h2>
        <div className="w-16 h-1 bg-primary mb-8 rounded-full" />

        <motion.div
          variants={staggeredCards}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((certification) => (
            <motion.article
              key={certification.name}
              variants={cardReveal}
              className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <CertificationImage src={certification.image} name={certification.name} />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{certification.organization}</p>
                <h3 className="font-heading font-semibold text-sm leading-snug mb-5">{certification.name}</h3>
                <a
                  href={certification.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View credential for ${certification.name}`}
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors mt-auto"
                >
                  View Credential <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
