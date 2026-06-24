import React from 'react';
import { motion } from 'framer-motion';
import { Circle, CheckCircle2 } from 'lucide-react';

const LearningTimeline = ({ timeline }) => {
    return (
        <div className="premium-card bg-white p-8 relative overflow-hidden">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-10">Learning Journey Timeline</h3>
            
            <div className="relative space-y-12">
                {/* Timeline Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-100 hidden md:block" />

                {timeline.map((stage, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="relative pl-0 md:pl-12 group"
                    >
                        {/* Timeline Icon */}
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center z-10 hidden md:flex transition-colors group-hover:border-primary/20">
                            <Circle size={12} className="text-slate-300 group-hover:text-primary transition-colors" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-32 shrink-0">
                                <span className="text-[10px] font-black text-primary p-2 bg-primary/10 rounded-lg inline-block mb-2">MONTH {stage.month}</span>
                            </div>
                            
                            <div className="flex-1 p-6 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-premium transition-all">
                                <h4 className="text-lg font-black text-slate-800 mb-4">{stage.title}</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {stage.tasks.map((task, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                                            {task}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default LearningTimeline;
