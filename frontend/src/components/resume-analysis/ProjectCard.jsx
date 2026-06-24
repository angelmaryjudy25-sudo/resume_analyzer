import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const ProjectCard = ({ name, tech, description, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="premium-card p-6"
    >
        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
            <Code2 size={20} />
        </div>
        <h4 className="font-bold text-slate-800 mb-1">{name}</h4>
        <div className="flex flex-wrap gap-2 mb-3">
            {tech.map((t, i) => (
                <span key={i} className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md">
                    {t}
                </span>
            ))}
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </motion.div>
);

export default ProjectCard;
