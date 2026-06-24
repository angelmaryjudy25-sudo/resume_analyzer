import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const RoadmapPreview = ({ roadmap }) => {
    return (
        <div className="premium-card p-6 bg-white overflow-hidden relative">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Improvement Roadmap Preview</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                {roadmap.map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-between"
                    >
                        <div>
                            <span className="text-[10px] font-black text-primary p-2 bg-primary/10 rounded-lg inline-block mb-3">STEP {item.step}</span>
                            <h4 className="text-xs font-black text-slate-800 leading-tight mb-2">{item.title}</h4>
                        </div>
                        <button className="flex items-center gap-1 text-[10px] font-black text-primary hover:gap-2 transition-all">
                            {item.linkText} <ChevronRight size={12} />
                        </button>
                    </motion.div>
                ))}
            </div>
            
            <button className="w-full mt-6 py-3 bg-slate-800 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-900 transition-all">
                View Full Career Roadmap <ArrowRight size={16} />
            </button>
        </div>
    );
};

export default RoadmapPreview;
