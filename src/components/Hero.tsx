import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Floating Data Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-accent/20 rounded-lg animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-data-teal/30 rounded-full animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-tech-blue/20 rounded-lg animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-accent/25 rounded-full animate-float" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <BarChart3 className="w-16 h-16 text-accent mr-4" />
            <div className="h-16 w-1 bg-accent"></div>
            <div className="ml-4">
              <h1 className="text-6xl md:text-7xl font-bold text-primary-foreground mb-2">Arvindh</h1>
              <div className="text-xl md:text-2xl text-accent font-semibold">Data Analyst & Insights Architect</div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">I transform complex data into clear, actionable insights that drive business decisions. Specializing in data visualization, statistical analysis, and predictive modeling.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="btn-hero">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button className="btn-outline-hero">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-primary-foreground/70">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>;
};
export default Hero;