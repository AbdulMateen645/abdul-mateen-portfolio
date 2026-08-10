
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col h-full rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 overflow-hidden backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map(tech => (
            <span key={tech} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
          {project.problem}
        </p>

        <p className="text-zinc-500 text-xs mb-4 line-clamp-2">
          <span className="text-emerald-400 font-semibold">Outcome:</span> {project.outcome}
        </p>

        <div className="mt-auto pt-4 border-t border-zinc-700/50 flex items-center justify-between">
          <span className="text-xs font-mono text-emerald-400/70 italic">Role: {project.role}</span>
          <div className="flex gap-3">
            <motion.button 
              whileHover={{ scale: 1.2 }}
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Github size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.2 }}
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <ExternalLink size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
