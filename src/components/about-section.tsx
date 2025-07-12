import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
export function AboutSection() {
  const experienceData = [{
    title: "Senior Associate - Data Analytics",
    company: "Sutherland Global Services",
    duration: "Jun 2021 – May 2025",
    description: "Developed a Gen AI-powered analytics system using Python (Transformers, Scikit-learn) to enable natural language querying in healthcare dashboards, building tools that convert human language to SQL (Gemini Pro, SQLAlchemy) and creating dynamic visualizations (Streamlit, Plotly) while automating PDF data extraction, statistical alerts, and Excel reporting to optimize revenue cycle management."
  }, {
    title: "Intern – Data Analyst",
    company: "Sutherland Global Services",
    duration: "Jan 2021 – May 2021",
    description: "Analyzed hospital readmission rates by processing large healthcare datasets with Python (Pandas, NumPy), identifying key trends through groupby techniques to enable data-driven interventions, and effectively communicating insights through interactive Matplotlib and Plotly visualizations."
  }];
  const skills = ["Python", "SQL", "Power BI", "Tableau", "Machine Learning", "Data Visualization", "Statistical Analysis"];
  return <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-medium bg-primary/10 px-3 py-1 rounded-full text-blue-600">
            ABOUT ME
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Turning Data Into Decisions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Transforming complex datasets into strategic insights that drive
            business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio + Skills */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 text-justify">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Data Analyst | Insight Architect
              </h3>
              <div className="space-y-4">
                <p className="text-slate-600 text-[15px]">
                  I'm a passionate analyst with 4+ years of experience across
                  global tech environments. With a background in Health Data
                  Science and Business Analytics, I turn numbers into narratives
                  using tools like Python, SQL, Power BI, and machine learning.
                </p>
                <p className="text-slate-600 text-[15px]">
                  My core strength lies in translating complex data into
                  actionable stories that drive strategy. From building scalable
                  dashboards to automating ETL workflows, I bring both business
                  acumen and technical depth to every project.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
              <h4 className="font-medium text-slate-800 mb-3">
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-2 bg-inherit">
                {skills.map(skill => <motion.span key={skill} whileHover={{
                scale: 1.05
              }} className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                    {skill}
                  </motion.span>)}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-[4px] pb-[4px] pl-[175px] pr-[175px] px-[90px]">
              <SocialIcon icon={<Linkedin size={18} className="mx-0 my-0 py-0" />} href="https://www.linkedin.com/in/arvindh22199" label="LinkedIn" />
              <SocialIcon icon={<Github size={18} />} href="https://github.com/Arvindh99" label="GitHub" />
              <SocialIcon icon={<Mail size={18} />} href="mailto:cvarvindh@gmail.com" label="Email" />
              <SocialIcon icon={<Phone size={18} />} href="https://wa.me/919444422199" label="Phone" />
            </div>
          </motion.div>

          {/* Right: Experience Timeline */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="relative">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                  Professional Journey
                </h3>

                <div className="relative space-y-8 border-l-2 border-primary/20 pl-6">
                  {experienceData.map((exp, index) => <div key={index} className="relative group">
                      <div className="absolute -left-[13px] top-3 w-4 h-4 rounded-full bg-primary border-4 border-white group-hover:scale-125 transition-transform"></div>
                      <div className="bg-blue-50/50 group-hover:bg-blue-50 p-5 rounded-lg transition-all">
                        <h4 className="text-lg font-semibold text-slate-900">
                          {exp.title}
                        </h4>
                        <p className="text-sm text-primary font-medium mb-2">
                          {exp.company} &mdash; {exp.duration}
                        </p>
                        <p className="text-sm text-slate-600 text-justify">
                          {exp.description}
                        </p>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}

// Enhanced Social Icon Component
function SocialIcon({
  icon,
  href,
  label
}: {
  icon: JSX.Element;
  href: string;
  label: string;
}) {
  return <motion.a href={href} target="_blank" rel="noopener noreferrer" whileHover={{
    y: -2
  }} className="flex flex-col items-center group">
      <div className="w-12 h-12 text-primary group-hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 mb-1 bg-slate-600">
        {icon}
      </div>
      <span className="text-xs text-slate-500 group-hover:text-primary transition-colors">
        {label}
      </span>
    </motion.a>;
}