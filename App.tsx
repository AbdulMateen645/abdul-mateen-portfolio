import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import { PROFILE, SKILL_GROUPS, PROJECTS, EDUCATION_DATA } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-110 transition-transform"
          >
            AM
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                  activeNav === item
                    ? 'bg-white/10 text-blue-400'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/80 border-t border-white/10"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors capitalize"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm text-gray-300"
              >
                Welcome to my portfolio
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Abdul Mateen
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                Full-stack Web Developer specializing in Laravel, PHP, and Next.js
              </p>

              <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                I build scalable web applications with clean code and modern technologies. Passionate about solving complex problems and creating exceptional user experiences.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:border-white/40 hover:bg-white/5 transition-all"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center pt-8"
            >
              <a
                href="https://github.com/AbdulMateen645"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group"
              >
                <Github size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-mateen-hashmi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group"
              >
                <Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="mailto:a.mateen2025@gmail.com"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group"
              >
                <Mail size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="pt-12"
            >
              <div className="text-gray-500 text-sm">Scroll to explore</div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center py-20 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold">About Me</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 text-gray-400 text-lg leading-relaxed"
                >
                  <p>
                    I'm a passionate Web Developer with {PROFILE.experience} of professional experience building production-grade web applications. My journey in web development has been driven by a love for clean code, scalable architecture, and solving real-world problems.
                  </p>
                  <p>
                    Specializing in Laravel and PHP for backend development, I create robust APIs and server-side logic. On the frontend, I work with Next.js and modern JavaScript to build responsive, performant user interfaces.
                  </p>
                  <p>
                    I believe in continuous learning and staying updated with the latest technologies. When I'm not coding, you'll find me exploring new frameworks, contributing to open-source, or mentoring junior developers.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-white/10 transition-all group">
                    <h3 className="text-blue-400 font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      Backend Development
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Expert in Laravel, PHP, MySQL, and RESTful API design
                    </p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-white/10 transition-all group">
                    <h3 className="text-blue-400 font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      Frontend Development
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Proficient in Next.js, React, TypeScript, and Tailwind CSS
                    </p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-white/10 transition-all group">
                    <h3 className="text-blue-400 font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      Tools & DevOps
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Git, Docker, Linux, Postman, and deployment best practices
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center py-20 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold">Skills & Expertise</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {SKILL_GROUPS.map((group, idx) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-xl font-semibold mb-8 text-blue-400">
                      {group.category}
                    </h3>
                    <div className="space-y-6">
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
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-2">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center py-20 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold">Featured Projects</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {PROJECTS.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 hover:bg-white/10 transition-all"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.problem}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-400">{project.outcome}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center py-20 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-white/10 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold">Web Developer</h3>
                      <p className="text-blue-400 font-medium">SK Financial (Remote)</p>
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap">Sep 2024 – Jun 2026</span>
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
                  className="p-8 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-white/10 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold">Junior Web Developer</h3>
                      <p className="text-blue-400 font-medium">North Star Multinational Company (Remote)</p>
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap">Apr 2023 – Oct 2023</span>
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
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center py-20 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold">Let's Connect</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>

              <p className="text-gray-400 text-lg max-w-2xl">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of these channels.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.a
                  href="mailto:a.mateen2025@gmail.com"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-white/10 transition-all group"
                >
                  <Mail className="mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-400 text-sm">a.mateen2025@gmail.com</p>
                </motion.a>

                <motion.a
                  href="https://github.com/AbdulMateen645"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-white/10 transition-all group"
                >
                  <Github className="mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-400 text-sm">github.com/AbdulMateen645</p>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/abdul-mateen-hashmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-white/10 transition-all group"
                >
                  <Linkedin className="mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-400 text-sm">linkedin.com/in/abdul-mateen-hashmi</p>
                </motion.a>

                <motion.button
                  onClick={() => window.open('/My CV/Abdul_Mateen_Hashmi_CV.pdf', '_blank')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-white/10 transition-all group text-left"
                >
                  <Download className="mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-semibold mb-2">Resume</h3>
                  <p className="text-gray-400 text-sm">Download my CV</p>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Abdul Mateen Hashmi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
