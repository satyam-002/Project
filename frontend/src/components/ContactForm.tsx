import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
        <p className="text-muted-foreground mb-8">
          I'm interested in freelance opportunities – especially ambitious or large projects. 
          However, if you have other requests or questions, don't hesitate to use the form.
        </p>
        
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="text-primary" />
            <span>satyamraj86978@gmail.com</span>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <a href="https://github.com/Satyam12217960" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:bg-primary/20 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/-satyamraj/" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:bg-primary/20 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
      
      <motion.form
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="glass-card p-6 rounded-xl"
      >
        <div className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-white/50"
            />
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-white/50"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="bg-white/50 resize-none"
            />
          </div>
          
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
