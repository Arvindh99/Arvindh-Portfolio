import { BarChart3, Mail, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-8 h-8 text-accent mr-2" />
              <span className="text-2xl font-bold">Sarah Chen</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Transforming complex data into actionable insights. Helping businesses 
              make data-driven decisions that drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#skills" className="text-primary-foreground/80 hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-primary-foreground/80">Data Analysis</span></li>
              <li><span className="text-primary-foreground/80">Business Intelligence</span></li>
              <li><span className="text-primary-foreground/80">Machine Learning</span></li>
              <li><span className="text-primary-foreground/80">Data Visualization</span></li>
              <li><span className="text-primary-foreground/80">Consulting</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-accent" />
            <span>© 2024 Sarah Chen. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;