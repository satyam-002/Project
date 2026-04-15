import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import EducationCard from '@/components/EducationCard';
import TimelineItem from '@/components/TimelineItem';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import JobTitle from '@/components/JobTitle';
import CertificationCard from '@/components/CertificationCard';

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS (EC2, S3, IAM, VPC, EKS)', 'Linux (Ubuntu)', 'Windows']
    },
    {
      title: 'Containerization & Orchestration',
      skills: ['Docker', 'Docker Compose', 'Kubernetes (Minikube)', 'Nginx Ingress']
    },
    {
      title: 'CI/CD & Automation',
      skills: ['Jenkins', 'GitHub Actions (Basic)', 'Git', 'GitHub']
    },
    {
      title: 'Monitoring & Observability',
      skills: ['Prometheus', 'Grafana']
    },
    {
      title: 'Infrastructure as Code',
      skills: ['Terraform (Basic)', 'Ansible (Basic)', 'YAML']
    },
    {
      title: 'Scripting & Networking',
      skills: ['Bash (Basic)', 'Python (Basic)', 'Networking Fundamentals', 'Load Balancing']
    }
  ];

  const projectsData = [
    {
      title: 'Cloud-Native Monitoring & Deployment (AWS EKS)',
      description: 'Deployed Kubernetes workloads on AWS EKS with Prometheus & Grafana for real-time monitoring and observability.',
      technologies: ['AWS (EKS, EC2, IAM)', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'Linux'],
      imageUrl: '/assets/P1.jpg',
      projectUrl: 'https://github.com/satyam-002'
    },
    {
      title: 'Scalable Kubernetes Deployment',
      description: 'Deployed a multi-tier application using Kubernetes with Ingress, persistent storage, and zero-downtime updates.',
      technologies: ['Kubernetes', 'Docker', 'Minikube', 'Nginx Ingress', 'YAML', 'Linux'],
      imageUrl: '/assets/P2.jpg',
      projectUrl: 'https://github.com/satyam-002'
    },
    {
      title: 'CI/CD Pipeline for Containerized App',
      description: 'Built a Jenkins CI/CD pipeline integrating GitHub webhooks for automated build, test, and deployment workflows.',
      technologies: ['Jenkins', 'Docker', 'GitHub', 'Git', 'Linux'],
      imageUrl: '/assets/P3.jpg',
      projectUrl: 'https://github.com/satyam-002'
    }
  ];

  const educationData = [
    {
      institution: 'Lovely Professional University',
      degree: 'B.Tech in Computer Science',
      period: '2022 - Present',
      description: 'CGPA: 7.05'
    },
    {
      institution: 'Levana Public School',
      degree: '10th and 12th',
      period: '2018 - 2022',
      description: 'Percentage: 88.6% | 80.2% '
    }
  ];

  const timelineData = [
    {
      date: 'June-July 2024',
      title: 'Ranked among Top 100 in LPU',
      description: 'Ranked among Top 100 for Summer Competetive Batch.',
    },
    {
      date: 'June 2025',
      title: 'HackFest 2025 – Regional Round Participant',
      description: 'Selected through screening and advanced to the regional round, where we developed and presented a functional prototype as part of a 4-member team.'
    },
    {
      date: 'October 2025',
      title: 'Received Offer Letter in First Interview',
      description: 'Received an offer letter from CodeYoung with a package of 9.74 LPA.',
    }
  ];

  const certificationsData = [
    {
      title: "Cloud Practioner",
      issuer: "AWS",
      date: "May' 2026",
      credentialUrl: "#"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "July - November' 2024",
      credentialUrl: "#"
    },
    {
      title: "MongoDB",
      issuer: "Atlas",
      date: "June - July' 2024",
      credentialUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gradient mb-4"
            >
              Satyam Raj
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Developer
            </motion.div>
          </motion.div>
        ) : (
          <>
            <Navbar />

            <section 
              id="home" 
              className="min-h-screen flex items-center justify-center px-4 pt-20"
            >
              <div className="text-center flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full">
                <div className="flex-1 text-left md:pr-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="heading-xl mb-4">
                      Hi, I'm <span className="text-gradient">Satyam Raj</span>
                    </h1>
                    <JobTitle />
                    <p className="max-w-2xl mb-12 text-lg">
                    I am passionate about learning new things.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="group"
                      >
                        <a href="#contact">
                          Get In Touch
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="group"
                      >
                        <a href="https://drive.google.com/file/d/1eX2pvgdGQ1JzSVZAX9jCGUfRBmHMcFME/view?usp=drive_link" download className="flex items-center gap-2">
                          Download Resume
                          <Download size={16} className="transition-transform group-hover:-translate-y-1" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 md:flex-none md:w-96 mt-8 md:mt-0"
                >
                  <div className="relative w-72 h-72 mx-auto">
                    <img
                      src="./assets/I1.png"
                      alt="Satyam Raj"
                      className="rounded-full w-full h-full object-cover shadow-xl"
                    />
                    <div className="absolute inset-0 rounded-full glass opacity-20"></div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              >
                <a
                  href="#about"
                  className="flex flex-col items-center animate-bounce"
                >
                  <span className="text-sm mb-2">Scroll Down</span>
                  <ArrowDown size={20} />
                </a>
              </motion.div>
            </section>

           <AnimatedSection id="about" className="container">
  <SectionTitle 
    title="About Me" 
    subtitle="Here's a brief introduction about myself and my journey as a developer."
  />

  <div className="flex justify-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card p-8 rounded-xl max-w-5xl w-full"
    >
      {/* 🚀 My Journey */}
      <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <span>🚀</span> My Journey
      </h1>

      <p className="text-lg leading-relaxed text-gray-700">
        I started my journey in tech with one simple goal — to build things from scratch and truly understand how they work.
        <br /><br />
        Instead of limiting myself to a single domain, I explored areas like C++, Python, web development, cloud computing, and data tools. This phase was driven by curiosity and experimentation — figuring out what genuinely interested me.
        <br /><br />
        A key turning point was building games using C++, where I developed systems from the ground up. It shaped my problem-solving approach — breaking complex systems into smaller, manageable parts.
        <br /><br />
        Over time, I realized I enjoy not just building applications, but also understanding how they run, scale, and operate in real environments.
        <br /><br />
        That realization led me to DevOps — where I now focus on building, monitoring, and managing systems end-to-end.
      </p>

      {/* ⚙️ What I’ve Been Doing */}
      <h1 className="text-3xl font-semibold mt-10 mb-4 text-center flex items-center justify-center gap-2">
        <span>⚙️</span> What I’ve Been Doing
      </h1>

      <p className="text-lg leading-relaxed text-gray-700">
        I started focusing on DevOps by working hands-on with real tools and workflows instead of just theory.
        <br /><br />
        I’ve built and experimented with:
        <br />
        • Containerization using Docker <br />
        • Container orchestration with Kubernetes (Minikube) <br />
        • Monitoring systems using Prometheus & Grafana <br />
        • Version control and collaboration using Git & GitHub <br />
        • Deploying and managing applications in controlled environments
        <br /><br />
        Rather than following tutorials blindly, I prefer setting up systems myself, breaking them, and fixing them — because that’s where real learning happens.
      </p>

      {/* 🎯 Current Focus */}
      <h1 className="text-3xl font-semibold mt-10 mb-4 text-center flex items-center justify-center gap-2">
        <span>🎯</span> Current Focus
      </h1>

      <p className="text-lg leading-relaxed text-gray-700">
        Right now, I am focused on strengthening my DevOps skills by:
        <br />
        • Building end-to-end projects that simulate real-world workflows <br />
        • Improving my understanding of system design and infrastructure <br />
        • Creating a portfolio that reflects practical implementation, not just knowledge
      </p>

      {/* 🔍 Looking Ahead */}
      <h1 className="text-3xl font-semibold mt-10 mb-4 text-center flex items-center justify-center gap-2">
        <span>🔍</span> Looking Ahead
      </h1>

      <p className="text-lg leading-relaxed text-gray-700">
        My goal is to become someone who can:
        <br />
        • Build systems from scratch <br />
        • Automate and optimize workflows <br />
        • Bridge the gap between development and operations
        <br /><br />
        I am still exploring, still learning — but now with a clear direction.
      </p>
    </motion.div>
  </div>
</AnimatedSection>

            <AnimatedSection id="projects" className="container">
              <SectionTitle 
                title="My Projects" 
                subtitle="Take a look at some of the projects I've worked on."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    imageUrl={project.imageUrl}
                    projectUrl={project.projectUrl}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection id="education" className="container bg-primary/5">
              <SectionTitle 
                title="Education" 
                subtitle="My academic background and qualifications."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {educationData.map((education, index) => (
                  <EducationCard
                    key={index}
                    institution={education.institution}
                    degree={education.degree}
                    period={education.period}
                    description={education.description}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection id="achievements" className="container">
              <SectionTitle 
                title="Achievements" 
                subtitle="My journey and key milestones in chronological order."
              />
              <div className="max-w-4xl mx-auto">
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection id="certifications" className="container">
              <SectionTitle 
                title="Certifications" 
                subtitle="Professional certifications and courses I've completed."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificationsData.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    credentialUrl={cert.credentialUrl}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection id="contact" className="container">
              <SectionTitle 
                title="Contact Me" 
                subtitle="Feel free to reach out for collaborations or just a friendly hello."
              />
              <ContactForm />
            </AnimatedSection>

            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndexPage;
