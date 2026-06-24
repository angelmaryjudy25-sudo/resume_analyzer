import React from 'react';
import { motion } from 'framer-motion';
import { mockSkills } from '../mocks/candidateData';
import { Cpu } from 'lucide-react';

const SkillsOverview = () => {
    return (
        <div className="glass-card p-6 h-full">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Cpu size={20} className="text-amber-400" />
                Technical Skills
            </h3>
            <div className="space-y-6">
                {mockSkills.map((skill, index) => (
                    <div key={index} className="group">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-200 font-medium">{skill.name}</span>
                            <span className="text-slate-400 text-sm font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
            
            <button className="w-full mt-8 py-2 text-primary-400 text-sm font-bold hover:text-primary-300 transition-colors">
                View Full Skill Matrix →
            </button>
        </div>
    );
};

export default SkillsOverview;
