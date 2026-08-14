
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
      <nav className="fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md bg-emerald-600 border-b border-emerald-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.button 
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-white flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-sm font-bold">AM</span>
            <span className="group-hover:text-emerald-100 transition-colors">Mateen Hashmi</span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm font-medium text-white hover:text-emerald-100 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => {
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="text-4xl font-bold text-white hover:text-emerald-500"
              >
                {item}
              </button>
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
                <Button variant="secondary" size="lg" className="gap-2" onClick={() => window.open('/My CV/Abdul_Mateen_Hashmi_CV.pdf', '_blank')}>
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
                   <img src="/Images/image.jpeg" alt="Abdul Mateen Hashmi" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <Section id="about" title="The Developer Behind the Code">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-zinc-300 text-lg leading-relaxed">
                Hello! I'm <span className="text-white font-bold">Abdul Mateen Hashmi</span>, a Web Developer driven by the potential of backend systems and automation. Over the last {PROFILE.experience}, I've refined my skills in the Laravel ecosystem, creating tools that solve real business problems.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                My approach focuses on clean code, scalability, and seamless integration. Recently, I've been deep-diving into <span className="text-emerald-500">AI automation</span> helping teams leverage LLMs and automated workflows to reduce manual overhead and increase productivity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 hover:border-emerald-500/30 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <div className="text-3xl font-bold text-white mb-1">2+</div>
                  <div className="text-zinc-500 text-sm">Years Exp.</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-4 rounded-xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 hover:border-emerald-500/30 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-zinc-500 text-sm">Projects Delivered</div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-700/50 backdrop-blur-xl hover:border-emerald-500/30 transition-all hover:shadow-2xl hover:shadow-emerald-500/10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Core Philosophy</h4>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Code2 size={64} />
                </div>
                <h5 className="text-white font-bold mb-2 text-xl italic">"Simplicity is the ultimate sophistication."</h5>
                <p className="text-zinc-400">I believe the best backend systems are the ones that work so reliably they go unnoticed, while the best interfaces are those that make complex tasks feel effortless.</p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* SKILLS SECTION */}
        <Section id="skills" title="Technical Expertise" subtitle="A multi disciplinary toolkit for the modern web." dark>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {SKILL_GROUPS.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-700/50 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
                      {idx === 0 && <Code2 className="text-emerald-400 w-5 h-5" />}
                      {idx === 1 && <Cpu className="text-indigo-400 w-5 h-5" />}
                      {idx === 2 && <Layout className="text-amber-400 w-5 h-5" />}
                      {idx === 3 && <Settings className="text-blue-400 w-5 h-5" />}
                    </div>
                    <h3 className="text-lg font-bold text-white">{group.category}</h3>
                  </div>

                  <div className="space-y-7 flex-1">
                    {group.skills.map(skill => {
                      const [displayValue, setDisplayValue] = useState(0);
                      const [isHovered, setIsHovered] = useState(false);

                      useEffect(() => {
                        if (!isHovered) return;
                        let current = 0;
                        const interval = setInterval(() => {
                          current += 1;
                          if (current <= skill.level) {
                            setDisplayValue(current);
                          } else {
                            clearInterval(interval);
                          }
                        }, 15);
                        return () => clearInterval(interval);
                      }, [isHovered, skill.level]);

                      return (
                        <motion.div
                          key={skill.name}
                          className="group cursor-pointer"
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => {
                            setIsHovered(false);
                            setDisplayValue(0);
                          }}
                          onTouchStart={() => setIsHovered(true)}
                          onTouchEnd={() => {
                            setIsHovered(false);
                            setDisplayValue(0);
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">{skill.name}</span>
                            <motion.span
                              className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full"
                              animate={{ scale: isHovered ? 1.1 : 1 }}
                            >
                              {displayValue}%
                            </motion.span>
                          </div>
                          <div className="h-2 w-full bg-zinc-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-zinc-600/30">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: isHovered ? `${skill.level}%` : 0 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-400 rounded-full shadow-lg shadow-emerald-500/50"
                            />
                          </div>
                          <motion.p
                            className="text-xs text-zinc-400 mt-2"
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {skill.description}
                          </motion.p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE SECTION */}
        <Section id="experience" title="Professional Journey">
          <ExperienceTimeline />
        </Section>

        {/* EDUCATION & SOFT SKILLS */}
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-[#09090b]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
              <div className="space-y-6">
                {EDUCATION_DATA.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex gap-6 p-6 rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl hover:border-emerald-500/30 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                        <Layout size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                        <p className="text-zinc-400">{edu.school}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Soft Skills</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {SOFT_SKILLS.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-6 rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl hover:border-emerald-500/30 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                      <div className="mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <h4 className="font-bold text-white mb-2">{skill.name}</h4>
                      <p className="text-sm text-zinc-400">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <Section id="contact" title="Get in Touch" subtitle="Let's discuss how we can build something impactful together." dark>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.a
                href="mailto:a.mateen2025@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-700/50 flex items-center justify-center group-hover:scale-110 transition-transform text-emerald-500">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Email Me</p>
                  <p className="text-white font-semibold">a.mateen2025@gmail.com</p>
                </div>
                <ArrowRight size={18} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </motion.a>

              <motion.a
                href="tel:+923119756139"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 8 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-700/50 flex items-center justify-center group-hover:scale-110 transition-transform text-indigo-500">
                  <Phone size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Call Me</p>
                  <p className="text-white font-semibold">Available</p>
                </div>
                <ArrowRight size={18} className="text-zinc-500 group-hover:text-indigo-400 transition-colors" />
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-700/50 flex items-center justify-center text-amber-500">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Location</p>
                  <p className="text-white font-semibold">{PROFILE.location}</p>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-6 flex gap-4"
              >
                <a href="https://github.com/AbdulMateen645" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://wa.me/923119756139" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="group-hover:scale-110 transition-transform">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
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
            </motion.div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-emerald-600 bg-emerald-600 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white text-sm font-semibold">&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
