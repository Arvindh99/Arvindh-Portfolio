import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };
  return <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-medium bg-primary/10 px-3 py-1 rounded-full text-blue-600">
            CONTACT
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Let's Work Together</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to connect, I'd love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
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
        }} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Contact Information</h3>
              <p className="text-slate-600">
                Reach out through any of these channels and I'll respond promptly
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Items */}
              {[{
              icon: <Mail className="w-5 h-5 text-blue-600" />,
              title: "Email",
              value: "cvarvindh@gmail.com",
              href: "mailto:cvarvindh@gmail.com"
            }, {
              icon: <Phone className="w-5 h-5 text-green-600" />,
              title: "Phone",
              value: "+91 9444422199",
              href: "tel:+919444422199"
            }, {
              icon: <MapPin className="w-5 h-5 text-red-600" />,
              title: "Location",
              value: "Chennai, India"
            }].map((item, index) => <motion.div key={index} whileHover={{
              x: 5
            }} className="flex items-start gap-4">
                  <div className={`mt-1 p-2 rounded-lg ${item.icon.props.className.includes('text-blue-600') ? 'bg-blue-100' : item.icon.props.className.includes('text-green-600') ? 'bg-green-100' : 'bg-red-100'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">{item.title}</h4>
                    {item.href ? <a href={item.href} className="text-slate-600 hover:text-primary transition-colors">
                        {item.value}
                      </a> : <p className="text-slate-600">{item.value}</p>}
                  </div>
                </motion.div>)}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-sm font-medium text-slate-500 mb-4">CONNECT WITH ME</h4>
              <div className="flex gap-4 pl-[185px] pr-[185px]">
                {[{
                icon: <Linkedin className="w-5 h-5" />,
                href: "https://www.linkedin.com/in/arvindh22199",
                label: "LinkedIn"
              }, {
                icon: <Github className="w-5 h-5" />,
                href: "https://github.com/Arvindh99",
                label: "GitHub"
              }].map((social, index) => <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{
                y: -3
              }} className="flex flex-col items-center group">
                    <div className="w-12 h-12 text-primary group-hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 mb-1 bg-blue-600">
                      <div className="group-hover:text-white text-slate-600 transition-colors">
                        {social.icon}
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </motion.a>)}
              </div>
            </div>
          </motion.div>

          {/* Freelance Availability */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Briefcase className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Freelance Work</h3>
            </div>

            <p className="text-slate-600 text-justify">
              I'm available for select freelance projects in data analytics, dashboard development, 
              and Python programming. My expertise includes:
            </p>

            <ul className="space-y-2 text-slate-600 list-disc list-inside">
              <li>Data visualization & BI dashboards</li>
              <li>ETL pipelines & data processing</li>
              <li>Automated reporting solutions</li>
              <li>Machine learning implementations</li>
            </ul>

            <div className="pt-4">
              <motion.a href="https://www.upwork.com/freelancers/~0107ab8da5feda9e7b?mp_source=share" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all">
                View Upwork Profile
              </motion.a>
              <p className="text-sm text-slate-500 mt-3">
                * Availability varies - let's discuss your project timeline
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}