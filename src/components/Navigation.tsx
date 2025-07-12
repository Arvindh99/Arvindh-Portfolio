import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3 } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#skills",
    label: "Skills"
  }, {
    href: "#projects",
    label: "Projects"
  }, {
    href: "#about",
    label: "About"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <BarChart3 className="w-8 h-8 text-accent mr-2" />
            <span className="text-xl font-bold text-slate-50">Arvindh's Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-foreground hover:text-accent transition-colors font-medium">
                {link.label}
              </a>)}
            <Button variant="outline" size="sm">
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border/50">
              {navLinks.map(link => <a key={link.href} href={link.href} className="block px-3 py-2 text-foreground hover:text-accent transition-colors font-medium" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>)}
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="w-full">
                  Download CV
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;