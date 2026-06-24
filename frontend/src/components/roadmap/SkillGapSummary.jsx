import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Flame, Workflow, Calendar } from 'lucide-react';

const SkillGapSummary = ({ gaps }) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Identified Skill Gaps</h3>
                <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{gaps.length} Critical Gaps</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {gaps.map((gap, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="premium-card p-5 bg-white group hover:border-primary/30 transition-all cursor-default"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-slate-50 text-slate-400 group-hover:text-primary transition-colors rounded-lg">
                                <Brain size={18} />
                            </div>
                            <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-md ${
                                gap.priority === 'High' ? 'bg-danger/10 text-danger' : 'bg-warning/10 text-warning'
                            }`}>
                                {gap.priority} Priority
                            </span>
                        </div>
                        
                        <h4 className="font-bold text-slate-800 mb-4">{gap.skill}</h4>
                        
                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-[10px] font-bold">
                                <div className="flex items-center gap-1.5 text-slate-400">
                                    <Flame size={12} /> Difficulty
                                </div>
                                <span className={gap.difficulty === 'Hard' ? 'text-danger' : 'text-warning'}>{gap.difficulty}</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px] font-bold">
                                <div className="flex items-center gap-1.5 text-slate-400">
                                    <Calendar size={12} /> Learning Time
                                </div>
                                <span className="text-slate-700">{gap.estTime}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillGapSummary;
