import { 
  Database, 
  BarChart3, 
  Brain, 
  Code, 
  PieChart, 
  TrendingUp,
  FileSpreadsheet,
  GitBranch,
  Server,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Statistics",
      icon: BarChart3,
      skills: ["Statistical Analysis", "Hypothesis Testing", "A/B Testing", "Regression Analysis", "Time Series Analysis"],
      color: "accent"
    },
    {
      title: "Programming & Tools",
      icon: Code,
      skills: ["Python", "R", "SQL", "JavaScript", "Pandas", "NumPy", "Scikit-learn"],
      color: "tech-blue"
    },
    {
      title: "Data Visualization",
      icon: PieChart,
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "D3.js", "Plotly"],
      color: "data-teal"
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "AWS", "Azure", "Google Cloud"],
      color: "primary"
    },
    {
      title: "Business Intelligence",
      icon: TrendingUp,
      skills: ["KPI Development", "Dashboard Design", "Reporting", "Business Strategy"],
      color: "accent"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Predictive Modeling", "Classification", "Clustering", "Feature Engineering"],
      color: "tech-blue"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-header">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for transforming raw data into meaningful insights and strategic recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-elegant group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-${category.color}/10 text-${category.color} mr-4`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed", icon: FileSpreadsheet },
            { number: "5+", label: "Years Experience", icon: TrendingUp },
            { number: "15+", label: "Tools Mastered", icon: Zap },
            { number: "100%", label: "Client Satisfaction", icon: TrendingUp }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;