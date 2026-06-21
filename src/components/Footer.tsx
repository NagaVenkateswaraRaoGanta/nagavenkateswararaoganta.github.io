import { Linkedin, Github, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/venkateswararao-ganta", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/NagaVenkateswaraRaoGanta", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/nani___natural__?igsh=ZW5peGFpaXUyc3c5", label: "Instagram" },
];

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-heading font-bold text-lg">
            Nani<span className="text-primary">.</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © 2026 Ganta Naga Venkateswara Rao. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {["Home", "About", "Skills", "Projects", "Certifications", "Achievements", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="flex gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <s.icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
