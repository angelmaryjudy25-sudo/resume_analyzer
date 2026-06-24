import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceCard = ({ company, role, duration, description, index }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.15 }}
        className="p-5 rounded-2xl border border-slate-100 bg-slate-50/30 hover:border-primary/20 transition-all hover:bg-white hover:shadow-premium"
    >
        <div className="flex justify-between items-start mb-3">
            <div>
                <h4 className="font-black text-slate-800 tracking-tight">{role}</h4>
                <p className="text-sm text-primary font-bold">{company}</p>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-100">
                {duration}
            </span>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </motion.div>
);

export default ExperienceCard;
