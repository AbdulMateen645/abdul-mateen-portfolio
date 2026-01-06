
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
// Add missing icons: Code2, Cpu, Layout, Settings, CheckCircle2
import { 
  Menu, 
  X, 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  MapPin, 
  Send,
  Code2,
  Cpu,
  Layout,
  Settings,
  CheckCircle2
} from 'lucide-react';

import { PROFILE, SKILL_GROUPS, PROJECTS, EDUCATION_DATA, SOFT_SKILLS } from './constants';
import Button from './components/UI/Button';
import Section from './components/Layout/Section';
import ExperienceTimeline from './components/Experience/ExperienceTimeline';
import ProjectCard from './components/Projects/ProjectCard';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="relative min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[100]" 
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a 
            href="#home" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-white flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-sm">AM</span>
            <span className="group-hover:text-emerald-500 transition-colors">Mateen Hashmi</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <Button size="sm" variant="outline">Resume</Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-zinc-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-zinc-950 flex flex-col p-12 gap-8"
          >
            <button className="self-end text-zinc-400" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-4xl font-bold text-white hover:text-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24 overflow-hidden">
          {/* Background Mesh Gradient */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for remote work
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Building scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">web systems</span> with Laravel & AI
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Empowering businesses with efficient backend architectures and future-ready AI automation workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                  View Projects <ArrowRight size={20} />
                </Button>
                <Button variant="secondary" size="lg" className="gap-2">
                  <Download size={20} /> Download CV
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 border border-zinc-800 rounded-3xl -rotate-6" />
                <div className="absolute -inset-4 border border-emerald-500/20 rounded-3xl rotate-3" />
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl">
                   <img src="https://app.skfinancial.com/uploads/employees/0n43oJnfelAtXcjiUqqFz1H6ProcIkMtC0s7Y2SQ.jpg" alt="Abdul Mateen Hashmi" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <Section id="about" title="The Developer Behind the Code">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-zinc-300 text-lg leading-relaxed">
                Hello! I'm <span className="text-white font-bold">Abdul Mateen Hashmi</span>, a Web Developer driven by the potential of backend systems and automation. Over the last {PROFILE.experience}, I've refined my skills in the Laravel ecosystem, creating tools that solve real business problems.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                My approach focuses on clean code, scalability, and seamless integration. Recently, I've been deep-diving into <span className="text-emerald-500">AI automation</span> helping teams leverage LLMs and automated workflows to reduce manual overhead and increase productivity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50">
                  <div className="text-3xl font-bold text-white mb-1">2+</div>
                  <div className="text-zinc-500 text-sm">Years Exp.</div>
                </div>
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50">
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-zinc-500 text-sm">Projects Delivered</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
               <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Core Philosophy</h4>
               <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Code2 size={64} />
                  </div>
                  <h5 className="text-white font-bold mb-2 text-xl italic">"Simplicity is the ultimate sophistication."</h5>
                  <p className="text-zinc-400">I believe the best backend systems are the ones that work so reliably they go unnoticed, while the best interfaces are those that make complex tasks feel effortless.</p>
               </div>
            </div>
          </div>
        </Section>

        {/* SKILLS SECTION */}
        <Section id="skills" title="Technical Expertise" subtitle="A multi-disciplinary toolkit for the modern web." dark>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_GROUPS.map((group, idx) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  {idx === 0 && <Code2 className="text-emerald-500 w-5 h-5" />}
                  {idx === 1 && <Cpu className="text-indigo-500 w-5 h-5" />}
                  {idx === 2 && <Layout className="text-amber-500 w-5 h-5" />}
                  {idx === 3 && <Settings className="text-blue-500 w-5 h-5" />}
                  {group.category}
                </h3>
                <div className="space-y-6">
                  {group.skills.map(skill => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{skill.name}</span>
                        <span className="text-[10px] text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                        />
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE SECTION */}
        <Section id="experience" title="Professional Journey">
          <ExperienceTimeline />
        </Section>

        {/* PROJECTS SECTION */}
        <Section id="projects" title="Featured Work" subtitle="A selection of systems and services built with performance in mind." dark>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg">Explore All Projects on GitHub</Button>
          </div>
        </Section>

        {/* EDUCATION & SOFT SKILLS */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#09090b]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-12">Education</h2>
              <div className="space-y-6">
                {EDUCATION_DATA.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Layout size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                      <p className="text-zinc-400">{edu.school}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-12">Soft Skills</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {SOFT_SKILLS.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/20 transition-all group"
                  >
                    <div className="mb-4 text-emerald-500 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-white mb-2">{skill.name}</h4>
                    <p className="text-sm text-zinc-500">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <Section id="contact" title="Get in Touch" subtitle="Let's discuss how we can build something impactful together." dark>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500 group-hover:border-emerald-500/50 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Me</p>
                    <p className="text-lg">a.mateen2025@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-500 group-hover:border-indigo-500/50 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Call Me</p>
                    <p className="text-lg">+92 311 9756139</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 group-hover:border-amber-500/50 transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Location</p>
                    <p className="text-lg">{PROFILE.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                {[Github, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="your name"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="youremail@gmail.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Subject</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  />
                </div>
                <Button 
                  disabled={formStatus !== 'idle'} 
                  className="w-full py-4 gap-2"
                >
                  {formStatus === 'idle' && <>Send Message <Send size={18} /></>}
                  {formStatus === 'sending' && <>Sending...</>}
                  {formStatus === 'success' && <><CheckCircle2 size={18} /> Message Sent!</>}
                </Button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
          </div>
          {/* <p>Built with React & Tailwind</p> */}
        </div>
      </footer>
    </div>
  );
};

export default App;
