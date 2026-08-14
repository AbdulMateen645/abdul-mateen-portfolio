import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PROFILE, SKILL_GROUPS, PROJECTS, EDUCATION_DATA } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (id: string) => {
    setActiveSection(id.toLowerCase());
    setIsMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            AM
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => window.open('/My CV/Abdul_Mateen_Hashmi_CV.pdf', '_blank')}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black border-t border-white/10"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => window.open('/My CV/Abdul_Mateen_Hashmi_CV.pdf', '_blank')}
                  className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-sm font-medium"
                >
                  Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Abdul Mateen</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Full-stack Web Developer & Laravel Specialist
            </p>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            I build scalable web applications with Laravel, PHP, and Next.js. Passionate about clean code, performance optimization, and creating solutions that make a real impact.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
            >
              View My Work <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-white/20 rounded-lg font-medium hover:border-white/40 transition-colors"
            >
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-8">
            <a
              href="https://github.com/AbdulMateen645"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-mateen-hashmi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:a.mateen2025@gmail.com"
              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 text-gray-400">
                <p>
                  I'm a Web Developer with {PROFILE.experience} of professional experience building production-grade web applications. My expertise spans backend development with Laravel and PHP, frontend development with Next.js, and database design with MySQL.
                </p>
                <p>
                  I specialize in creating scalable, maintainable solutions that solve real business problems. I'm passionate about writing clean code, optimizing performance, and collaborating with teams to deliver high-quality software.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously learning to stay ahead in this fast-paced industry.
                </p>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-blue-400 font-semibold mb-2">Experience</h3>
                  <p className="text-gray-400">2+ years building web applications for startups and enterprises</p>
                </div>
                <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-blue-400 font-semibold mb-2">Focus</h3>
                  <p className="text-gray-400">Backend systems, APIs, performance optimization, and clean architecture</p>
                </div>
                <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-blue-400 font-semibold mb-2">Education</h3>
                  <p className="text-gray-400">BS Computer Science from University of Poonch Rawalakot</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-bold">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {SKILL_GROUPS.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-6 text-blue-400">{group.category}</h3>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-bold">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10"
              >
                <div className="mb-4 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.problem}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mb-4">{project.outcome}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-bold">Experience</h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Web Developer</h3>
                  <p className="text-blue-400">SK Financial (Remote)</p>
                </div>
                <span className="text-sm text-gray-500">Sep 2024 – Jun 2026</span>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Developed and maintained PHP based web applications using Laravel, Next.js, and MySQL</li>
                <li>• Integrated Stripe payment functionality for transaction processing</li>
                <li>• Collaborated with cross-functional teams to ship features on schedule</li>
                <li>• Maintained technical documentation following software development best practices</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Junior Web Developer</h3>
                  <p className="text-blue-400">North Star Multinational Company (Remote)</p>
                </div>
                <span className="text-sm text-gray-500">Apr 2023 – Oct 2023</span>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Maintained and debugged PHP applications, fixing bugs and resolving customer-reported issues</li>
                <li>• Wrote and optimized SQL queries; integrated third-party APIs</li>
                <li>• Participated in testing and deployment cycles</li>
                <li>• Assisted in UI updates using modern CSS frameworks</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-bold">Education</h2>

          <div className="space-y-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
                <p className="text-blue-400">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Let's Work Together</h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="mailto:a.mateen2025@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10 group"
            >
              <Mail className="mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={24} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400">a.mateen2025@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://github.com/AbdulMateen645"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10 group"
            >
              <Github className="mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={24} />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/AbdulMateen645</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/abdul-mateen-hashmi"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10 group"
            >
              <Linkedin className="mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={24} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com/in/abdul-mateen-hashmi</p>
            </motion.a>

            <motion.button
              onClick={() => window.open('/My CV/Abdul_Mateen_Hashmi_CV.pdf', '_blank')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10 group text-left"
            >
              <Download className="mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={24} />
              <h3 className="font-semibold mb-2">Resume</h3>
              <p className="text-gray-400">Download my CV</p>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Abdul Mateen Hashmi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
