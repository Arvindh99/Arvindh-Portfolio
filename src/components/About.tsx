import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar,
  BookOpen,
  Coffee,
  Download,
  Mail
} from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "Stanford University",
      year: "2019",
      description: "Specialized in Machine Learning and Statistical Analysis"
    },
    {
      degree: "Bachelor of Science in Mathematics",
      school: "UC Berkeley",
      year: "2017",
      description: "Concentration in Applied Statistics and Computer Science"
    }
  ];

  const certifications = [
    "Google Data Analytics Professional Certificate",
    "AWS Certified Data Analytics",
    "Tableau Desktop Specialist",
    "Microsoft Azure Data Scientist Associate"
  ];

  const experience = [
    {
      title: "Senior Data Analyst",
      company: "TechCorp Analytics",
      period: "2021 - Present",
      description: "Leading data initiatives for Fortune 500 clients, managing a team of 5 analysts."
    },
    {
      title: "Data Analyst",
      company: "StartupXYZ",
      period: "2019 - 2021",
      description: "Built analytics infrastructure from ground up, established data-driven culture."
    },
    {
      title: "Junior Data Scientist",
      company: "Research Institute",
      period: "2017 - 2019",
      description: "Conducted research on predictive modeling and statistical analysis methods."
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-header">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about turning data into actionable insights that drive business success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Personal Info & Story */}
          <div className="lg:col-span-2">
            <div className="card-elegant mb-8">
              <div className="flex items-center mb-6">
                <Coffee className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-2xl font-semibold text-primary">My Story</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey into data analytics began during my undergraduate studies in mathematics, 
                  where I discovered the power of statistical modeling to solve real-world problems. 
                  What started as curiosity about patterns in numbers has evolved into a passion for 
                  transforming complex datasets into strategic business insights.
                </p>
                
                <p>
                  Over the past 5+ years, I've had the privilege of working with diverse industries, 
                  from e-commerce and healthcare to finance and technology. Each project has taught me 
                  that behind every dataset lies a story waiting to be discovered—stories that can 
                  drive innovation, improve customer experiences, and create meaningful impact.
                </p>
                
                <p>
                  I believe that the best data analysis combines technical expertise with business acumen 
                  and clear communication. My goal is always to bridge the gap between complex analytical 
                  findings and actionable business strategies that stakeholders can understand and implement.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-accent" />
                  San Francisco, CA
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2 text-accent" />
                  5+ Years Experience
                </div>
                <div className="flex items-center text-muted-foreground">
                  <BookOpen className="w-4 h-4 mr-2 text-accent" />
                  Continuous Learner
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="card-elegant">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-2xl font-semibold text-primary">Professional Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-accent/20 last:border-l-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="font-semibold text-primary">{exp.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-accent font-medium">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div className="card-elegant">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-primary">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-primary text-sm">{edu.degree}</h4>
                    <div className="text-accent font-medium text-sm">{edu.school}</div>
                    <div className="text-muted-foreground text-xs mb-2">{edu.year}</div>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card-elegant">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-primary">Certifications</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <div className="space-y-4">
              <Button className="w-full btn-hero">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;