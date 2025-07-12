import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  BarChart3, 
  TrendingUp, 
  Users, 
  ShoppingCart,
  Building,
  Heart
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Sales Analytics Dashboard",
      description: "Built an interactive dashboard analyzing customer behavior, sales trends, and product performance for a major retail client. Implemented real-time data processing and predictive analytics.",
      tech: ["Python", "Tableau", "SQL", "AWS"],
      metrics: ["↑ 25% Revenue Growth", "↓ 30% Cart Abandonment", "85% Prediction Accuracy"],
      icon: ShoppingCart,
      color: "accent",
      category: "Business Intelligence"
    },
    {
      title: "Customer Churn Prediction Model",
      description: "Developed a machine learning model to predict customer churn with 92% accuracy. Created actionable insights that reduced churn rate by 40% and increased customer lifetime value.",
      tech: ["Python", "Scikit-learn", "Pandas", "PowerBI"],
      metrics: ["92% Model Accuracy", "↓ 40% Churn Rate", "$2M Revenue Saved"],
      icon: Users,
      color: "tech-blue",
      category: "Machine Learning"
    },
    {
      title: "Financial Risk Assessment Platform",
      description: "Designed and implemented a comprehensive risk assessment system for a fintech company, analyzing transaction patterns and detecting anomalies in real-time.",
      tech: ["R", "SQL Server", "D3.js", "Azure"],
      metrics: ["99.8% Fraud Detection", "↓ 60% False Positives", "Real-time Processing"],
      icon: Building,
      color: "data-teal",
      category: "Risk Analytics"
    },
    {
      title: "Healthcare Outcomes Analysis",
      description: "Analyzed patient treatment outcomes and medication effectiveness using statistical modeling. Contributed to improving treatment protocols and patient care quality.",
      tech: ["R", "Tableau", "PostgreSQL", "SPSS"],
      metrics: ["↑ 15% Treatment Success", "↓ 20% Recovery Time", "500K+ Patients"],
      icon: Heart,
      color: "primary",
      category: "Healthcare Analytics"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-header">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of data science solving complex business challenges and driving measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-elegant group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg bg-${project.color}/10 text-${project.color} mr-4`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-accent font-medium mb-1">{project.category}</div>
                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {project.metrics.map((metric, metricIndex) => (
                  <div 
                    key={metricIndex}
                    className="text-center p-3 bg-gradient-to-br from-background to-accent-soft/20 rounded-lg"
                  >
                    <div className="text-sm font-semibold text-accent">{metric}</div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button size="sm" className="flex-1">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 card-elegant">
            <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Transform Your Data?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Let's collaborate to unlock the insights hidden in your data and drive meaningful business outcomes.
            </p>
            <Button className="btn-hero">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;