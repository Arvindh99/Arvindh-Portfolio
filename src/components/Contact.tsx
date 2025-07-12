import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  MessageSquare,
  Send,
  Calendar
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-header">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to turn your data into actionable insights? Let's discuss how I can help drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-elegant">
              <h3 className="text-xl font-semibold text-primary mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">sarah.chen@email.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-elegant">
              <h3 className="text-xl font-semibold text-primary mb-6">Connect Online</h3>
              
              <div className="space-y-4">
                <a href="#" className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors">
                  <Linkedin className="w-5 h-5 text-accent mr-3" />
                  <span>LinkedIn Profile</span>
                </a>
                
                <a href="#" className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors">
                  <Github className="w-5 h-5 text-accent mr-3" />
                  <span>GitHub Portfolio</span>
                </a>
                
                <a href="#" className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors">
                  <Calendar className="w-5 h-5 text-accent mr-3" />
                  <span>Schedule a Meeting</span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="card-elegant">
              <h3 className="text-xl font-semibold text-primary mb-4">Availability</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response Time:</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time Zone:</span>
                  <span className="font-medium">PST (UTC-8)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-accent font-medium">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-elegant">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-2xl font-semibold text-primary">Send a Message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Company (Optional)
                  </label>
                  <Input placeholder="Your company name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Project Type
                  </label>
                  <select className="w-full p-3 border border-input rounded-lg bg-background">
                    <option>Data Analysis & Insights</option>
                    <option>Dashboard Development</option>
                    <option>Machine Learning Model</option>
                    <option>Business Intelligence</option>
                    <option>Data Strategy Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Budget Range (Optional)
                  </label>
                  <select className="w-full p-3 border border-input rounded-lg bg-background">
                    <option>Please select</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000+</option>
                    <option>Discuss during consultation</option>
                  </select>
                </div>
                
                <Button className="w-full btn-hero">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;