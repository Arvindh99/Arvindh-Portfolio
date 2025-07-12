import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/arvindh22199",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Arvindh99",
      label: "GitHub"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "https://wa.me/919444422199",
      label: "WhatsApp"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:cvarvindh@gmail.com",
      label: "Email"
    }
  ];

  const footerLinks = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" }
  ];

  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">ARVINDH C VIGNESH</h3>
            <p className="text-slate-400">
              Data Analyst | Insight Architect | Turning numbers into narratives
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        {/* Freelance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Freelance</h4>
            <p className="text-slate-400">
              Available for select projects in data analytics and visualization
            </p>
            <motion.a
              href="https://www.upwork.com/freelancers/~0107ab8da5feda9e7b?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block mt-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-all"
            >
              Hire Me on Upwork
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-8 text-center"
        >
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Arvindh C Vignesh. All rights reserved.
            <span className="block sm:inline"> Data tells stories when you know how to listen.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}