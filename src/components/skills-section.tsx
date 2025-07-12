import { motion } from "framer-motion";
import { Code, Brain, BarChart, Database, Wrench } from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-5 h-5" />,
    color: "text-blue-600",
    bg: "bg-blue-100",
    skills: ["Python", "R", "SQL", "Regex", "Linux"],
  },
  {
    title: "Data Science",
    icon: <Brain className="w-5 h-5" />,
    color: "text-green-600",
    bg: "bg-green-100",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Databricks"],
  },
  {
    title: "Visualization",
    icon: <BarChart className="w-5 h-5" />,
    color: "text-purple-600",
    bg: "bg-purple-100",
    skills: ["Tableau", "Power BI", "Plotly", "Streamlit", "Gradio"],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    color: "text-red-600",
    bg: "bg-red-100",
    skills: ["MySQL", "SSMS", "Render", "Sqlite"],
  },
  {
    title: "Productivity",
    icon: <Wrench className="w-5 h-5" />,
    color: "text-amber-600",
    bg: "bg-amber-100",
    skills: ["VS Code", "Jupyter", "Excel", "Notion", "Notepad++"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Skills & Technologies</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My toolkit for transforming raw data into actionable insights
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all"
            >
              <div className="p-6">
                <div className={`w-12 h-12 ${category.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <div className={category.color}>
                    {category.icon}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full ${category.bg} ${category.color}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <span className="text-[20rem] font-black text-slate-300 select-none">
            SKILLS
          </span>
        </motion.div>
      </div>
    </section>
  );
}