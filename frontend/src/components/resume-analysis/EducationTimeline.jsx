import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EducationTimeline = ({ education }) => (
    <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
        {education.map((item, index) => (
            <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-10"
            >
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white border-4 border-white shadow-sm z-10">
                    <GraduationCap size={12} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800">{item.degree}</h4>
                    <p className="text-sm text-primary font-bold">{item.college}</p>
                    <div className="flex items-center gap-4 mt-1 text-xs text-slate-400 font-bold uppercase tracking-wider">
                        <span>{item.year}</span>
                        <span>CGPA: {item.cgpa}</span>
                    </div>
                </div>
            </motion.div>
        ))}
    </div>
);

export default EducationTimeline;
