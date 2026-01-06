
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
      whileHover={{ y: -5 }}
      className="group relative flex flex-col h-full rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map(tech => (
            <span key={tech} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
          {project.problem}
        </p>

        <div className="mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500 italic">Role: {project.role}</span>
          <div className="flex gap-3">
            <button className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Github size={18} />
            </button>
            <button className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
