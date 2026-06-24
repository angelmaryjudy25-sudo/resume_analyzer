import React from 'react';
import { motion } from 'framer-motion';
import { mockRoadmap } from '../mocks/candidateData';
import { Map, CheckCircle2, Circle, Clock } from 'lucide-react';

const CareerRoadmap = () => {
    return (
        <div className="glass-card p-6">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Map size={20} className="text-emerald-400" />
                Career Progress & Roadmap
            </h3>
            
            <div className="space-y-0 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-800">
                {mockRoadmap.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (index * 0.1) }}
                        className="relative pl-10 pb-8 last:pb-0"
                    >
                        {/* Milestone Marker */}
                        <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center border-4 border-slate-950 z-10 
                            ${item.status === 'completed' ? 'bg-emerald-500' : 
                              item.status === 'in-progress' ? 'bg-primary-500' : 'bg-slate-700'}`}
                        >
                            {item.status === 'completed' ? <CheckCircle2 size={12} className="text-white" /> :
                             item.status === 'in-progress' ? <Clock size={12} className="text-white" /> : <Circle size={10} className="text-slate-500" />}
                        </div>
                        
                        <div className={`p-4 rounded-xl border transition-all ${item.status === 'in-progress' ? 'bg-primary-500/5 border-primary-500/50 shadow-[0_0_15px_rgba(99,102,241,0.1)]' : 'bg-slate-900/50 border-slate-800'}`}>
                            <div className="flex justify-between items-start mb-1">
                                <h4 className={`font-bold ${item.status === 'completed' ? 'text-slate-400 line-through' : 'text-slate-100'}`}>
                                    {item.title}
                                </h4>
                                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded
                                    ${item.status === 'completed' ? 'bg-emerald-500/10 text-emerald-500' : 
                                      item.status === 'in-progress' ? 'bg-primary-500/10 text-primary-400' : 'bg-slate-800 text-slate-500'}`}
                                >
                                    {item.status.replace('-', ' ')}
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CareerRoadmap;
