import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, proficiency, index }) => (
    <div className="group">
        <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm font-bold text-slate-700">{name}</span>
            <span className="text-xs text-slate-400 font-bold">{proficiency}%</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${proficiency}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-primary"
            />
        </div>
    </div>
);

export default SkillCard;
