import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const allProjects = [
  {
    title: "Electronic Health Record (EHR) Web Application",
    description: "Streamlit-based web app for managing patient health records with CRUD functionality",
    technologies: ["Python", "Streamlit"],
    liveUrl: "https://arvindh99-elecronic-health-record-ehr-t7spor.streamlit.app/",
    githubUrl: "https://github.com/Arvindh99/Elecronic-Health-Record",
    date: "2022"
  },
  {
    title: "Chat2Data - AI Agent using Gemini Pro",
    description: "Chat2Data is a Streamlit-based AI-powered app that lets you ask questions in natural language and get accurate SQL-generated insights from a global economic dataset.",
    technologies: ["Python", "Generative AI", "Streamlit", "SQL"],
    liveUrl: "https://chat2data.streamlit.app/",
    githubUrl: "https://github.com/Arvindh99/Chat2Data",
    date: "2025"
  },
  {
    title: "Cricket Test Match Predictor",
    description: "A machine learning-powered web app that predicts whether a Test cricket match is likely to end in a draw or not, and if not, suggests which team has the upper hand.",
    technologies: ["Python", "Gradio", "Machine Learning"],
    liveUrl: "https://huggingface.co/spaces/Arvindh22/cricket-match-predictor",
    githubUrl: "https://github.com/Arvindh99/Test-Cricket-Match-Predictor",
    date: "2025"
  },
  {
    title: "Github Wrapped",
    description: "GitHub Wrapped is a fun, interactive Streamlit app that showcases your GitHub stats in a stylish and engaging way. Just like the Spotify Wrapped, this app will visualize your GitHub activity for the year, highlighting your most important stats like followers, repositories, stars, commits, and more.",
    technologies: ["Python", "Streamlit", "API"],
    githubUrl: "https://github.com/Arvindh99/Github-Wrapped",
    liveUrl: "https://codewrapped2024.streamlit.app/",
    date: "2024"
  },
  {
    title: "Online Retail Dashboard",
    description: "A Streamlit-based interactive dashboard for exploring and analyzing customer purchasing behavior in an online retail dataset. The app provides insights through EDA visualizations, machine learning predictions, product recommendations, and RFM customer segmentation.",
    technologies: ["Python", "Plotly", "Cosine Similarity", "Streamlit"],
    githubUrl: "https://github.com/Arvindh99/Online-Retail-CustomerData/tree/main",
    liveUrl: "https://online-retail-dashboard.streamlit.app/",
    date: "2025"
  },
  {
    title: "Pharmacy Inventory Dashboard",
    description: "This Streamlit application provides an interactive dashboard for monitoring and analyzing pharmacy inventory data. The dashboard offers four main sections with comprehensive metrics and visualizations to help pharmacy managers make data-driven decisions.",
    technologies: ["Python", "Streamlit","Plotly"],
    githubUrl: "https://github.com/Arvindh99/Pharmacy-Inventory-Dashboard",
    liveUrl: "https://pharmacy-inventory.streamlit.app/",
    date: "2025"
  },
  {
    title: "Predicting Disease based on the Symptoms and identifying specialist based on predicted disease",
    description: "This ML project provides a concise and informative overview of the predicted disease, its associated likelihood, the recommended doctor, and a brief description to aid in understanding and decision-making regarding the predicted disease. Using a classification model, diseases have been predicted based on the given symptoms.",
    technologies: ["Python", "Machine Learning"],
    githubUrl: "https://github.com/Arvindh99/Disease_Speciality_Recommendation/tree/main",
    date: "2023"
  },
  {
    title: "Predicting Disease based on the patient characteristics and symptoms",
    description: "This project provides valuable insights into the relationship between symptoms, patient characteristics, and disease outcomes. EDA (Exploratory Data Analysis) and classification algorithms were performed on the dataset.",
    technologies: ["Python", "Machine Learning"],
    githubUrl: "https://github.com/Arvindh99/Disease-Symptoms-EDA-ML",
    date: "2023"
  },
    {
      title: "Demonstrating Innovative Charts in Excel",
      description: "This Excel dashboard provides a comprehensive view of COVID-19 statistics for different countries/regions.",
      technologies: ["Microsoft Excel"],
      githubUrl: "https://github.com/Arvindh99/COVID-19-Dashboard",
      date: "2023"
    },
];

const techColors: { [key: string]: string } = {
  Python: "bg-blue-100 text-blue-800",
  Streamlit: "bg-green-100 text-green-800",
  Pandas: "bg-amber-100 text-amber-800",
  "Generative AI": "bg-purple-100 text-purple-800",
  "Power BI": "bg-orange-100 text-orange-800",
  SQL: "bg-yellow-100 text-yellow-800",
  "PDF Extraction": "bg-indigo-100 text-indigo-800",
  Tableau: "bg-cyan-100 text-cyan-800",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/#projects">
            <Button variant="ghost" className="mb-4 group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>
          </Link>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">Project Portfolio</h1>
          <p className="text-slate-600">Complete list of my data analytics projects</p>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 p-4">
            <div className="col-span-7 md:col-span-8 font-medium text-slate-700">Project</div>
            <div className="col-span-2 md:col-span-2 font-medium text-slate-700 text-center">GitHub</div>
            <div className="col-span-3 md:col-span-2 font-medium text-slate-700 text-center">Live</div>
          </div>

          {/* Table Rows */}
          {allProjects.map((project) => (
            <div 
              key={project.title}
              className="grid grid-cols-12 border-b border-slate-200 last:border-b-0 p-4 hover:bg-slate-50 transition-colors"
            >
              {/* Project Name & Description */}
              <div className="col-span-7 md:col-span-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-slate-800">{project.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{project.description}</p>
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded ml-4">
                    {project.date}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className={`text-xs px-2 py-0.5 rounded-full ${techColors[tech] || "bg-slate-100 text-slate-700"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <div className="col-span-2 md:col-span-2 flex items-center justify-center">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 transition-colors flex flex-col items-center"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-xs mt-1">View Code</span>
                  </a>
                )}
              </div>

              {/* Live Link */}
              <div className="col-span-3 md:col-span-2 flex items-center justify-center">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors flex flex-col items-center"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-xs mt-1">View Live</span>
                  </a>
                ) : (
                  <span className="text-slate-400 text-xs">—</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}