import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, FolderOpen } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";
export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen bg-gradient-to-br from-white to-blue-50 pt-20 flex items-center justify-center">
      <div className="max-w-6xl w-full px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <motion.div initial={{
        opacity: 0,
        x: -30
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6
      }} className="flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-md border-4 border-primary/20">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Right: Text & Buttons */}
        <motion.div initial={{
        opacity: 0,
        x: 30
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6
      }} className="text-center md:text-left">
          <motion.span className="inline-block mb-3 text-xl font-medium bg-primary/10 px-3 py-1 rounded-full text-blue-600">
            👋 Hello, I'm Arvindh
          </motion.span>

          <motion.h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Data Analyst & <span className="text-blue-600">Insight</span> Architect
          </motion.h1>

          <motion.p className="text-base text-gray-600 mb-6 max-w-md text-justify">
            I transform complex data into clear, actionable insights that drive business decisions. 
            Specializing in data visualization, statistical analysis, and predictive modeling.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button onClick={() => scrollToSection("projects")} className="bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg transition-all font-medium flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              View Projects
            </Button>
            <Button variant="outline" onClick={() => scrollToSection("contact")} className="border border-primary text-primary px-6 py-4 rounded-lg hover:bg-primary hover:text-white transition-all font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>;
}