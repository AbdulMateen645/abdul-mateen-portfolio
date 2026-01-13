
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants';
import { Briefcase } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-emerald-500/0 before:via-emerald-500/50 before:to-emerald-500/0">
      {EXPERIENCES.map((exp, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          {/* Icon node */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-emerald-500/50 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform">
            <Briefcase size={20} />
          </div>

          {/* Content Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] group/card relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="relative p-6 rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white text-lg group-hover/card:text-emerald-400 transition-colors">{exp.role}</h3>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {exp.period}
                </span>
              </div>
              <p className="text-emerald-500/90 font-semibold text-sm mb-4">{exp.company}</p>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-zinc-300 text-sm flex gap-3">
                    <span className="text-emerald-400 shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
