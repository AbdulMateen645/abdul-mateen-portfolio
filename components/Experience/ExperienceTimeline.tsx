
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants';
import { Briefcase } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
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
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Briefcase size={18} />
          </div>

          {/* Content Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-white text-lg">{exp.role}</h3>
              <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                {exp.period}
              </span>
            </div>
            <p className="text-emerald-500/80 font-medium text-sm mb-4">{exp.company}</p>
            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-zinc-400 text-sm flex gap-2">
                  <span className="text-emerald-500 shrink-0 mt-1.5 w-1 h-1 rounded-full bg-emerald-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
