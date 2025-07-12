import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
const featuredProjects = [{
  title: "Electronic Health Record (EHR) Web Application",
  description: "A Streamlit-based web app for storing and managing patient health records with CRUD functionality.",
  technologies: ["Python", "Streamlit"],
  liveUrl: "https://arvindh99-elecronic-health-record-ehr-t7spor.streamlit.app/",
  githubUrl: "https://github.com/Arvindh99/Elecronic-Health-Record"
}, {
  title: "Chat2Data - AI Agent using Gemini Pro",
  description: "Chat2Data is a Streamlit-based AI-powered app that lets you ask questions in natural language and get accurate SQL-generated insights from a global economic dataset.",
  technologies: ["Python", "Generative AI", "Streamlit", "SQL"],
  liveUrl: "https://chat2data.streamlit.app/",
  githubUrl: "https://github.com/Arvindh99/Chat2Data"
}, {
  title: "Cricket Test Match Predictor",
  description: "A machine learning-powered web app that predicts whether a Test cricket match is likely to end in a draw or not, and if not, suggests which team has the upper hand.",
  technologies: ["Python", "Gradio", "Machine Learning"],
  liveUrl: "https://huggingface.co/spaces/Arvindh22/cricket-match-predictor",
  githubUrl: "https://github.com/Arvindh99/Test-Cricket-Match-Predictor"
}, {
  title: "Github Wrapped",
  description: "GitHub Wrapped is a fun, interactive Streamlit app that showcases your GitHub stats in a stylish and engaging way. Just like the Spotify Wrapped, this app will visualize your GitHub activity for the year, highlighting your most important stats like followers, repositories, stars, commits, and more.",
  technologies: ["Python", "Streamlit", "API"],
  githubUrl: "https://github.com/Arvindh99/Github-Wrapped",
  liveUrl: "https://codewrapped2024.streamlit.app/"
}];
const techColors: {
  [key: string]: string;
} = {
  Python: "bg-blue-100 text-blue-800",
  Streamlit: "bg-green-100 text-green-800",
  "Generative AI": "bg-purple-100 text-purple-800",
  "Power BI": "bg-orange-100 text-orange-800",
  SQL: "bg-yellow-100 text-yellow-800",
  "Data Visualization": "bg-cyan-100 text-cyan-800",
  "PDF Extraction": "bg-indigo-100 text-indigo-800",
  Gradio: "bg-red-100 text-red-800"
};
export function ProjectsSection() {
  return <section id="projects" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-medium bg-primary/10 px-3 py-1 rounded-full text-blue-600">
            PROJECT SHOWCASE
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Featured Work
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Selected projects demonstrating my expertise in data analytics and
            visualization
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {featuredProjects.map((project, index) => <motion.div key={project.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            y: -5
          }} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                <div className="p-6">
                  {/* Icon Header */}
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg ${techColors[project.technologies[0]]} flex items-center justify-center mr-3`}>
                      <CodeIcon technology={project.technologies[0]} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => <motion.span key={tech} whileHover={{
                  scale: 1.05
                }} className={`text-xs font-medium px-3 py-1 rounded-full ${techColors[tech] || "bg-gray-100 text-gray-800"}`}>
                        {tech}
                      </motion.span>)}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-700 transition-colors">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>}
                  </div>
                </div>
              </motion.div>)}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        delay: 0.4
      }} className="text-center mt-12">
          <Link href="/projects">
            <Button className="group px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all shadow-sm hover:shadow-md">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>;
}

// Helper component for technology icons
function CodeIcon({
  technology
}: {
  technology: string;
}) {
  const iconMap: Record<string, JSX.Element> = {
    Python: <span className="text-lg">🐍</span>,
    Streamlit: <span className="text-lg">📊</span>,
    "Power BI": <span className="text-lg">📈</span>,
    SQL: <span className="text-lg">🗃️</span>,
    default: <span className="text-lg">💻</span>
  };
  return iconMap[technology] || iconMap.default;
}