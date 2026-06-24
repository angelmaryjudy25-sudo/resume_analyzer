import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Circle, Info } from 'lucide-react';

export const CertificationRoadmap = ({ certifications }) => (
    <div className="premium-card p-6 bg-white shrink-0">
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Certification Roadmap</h3>
        <div className="space-y-4">
            {certifications.map((cert, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100"
                >
                    <div className="p-3 bg-white text-primary rounded-xl shadow-sm"><Award size={20} /></div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-black text-slate-800 truncate mb-1">{cert.name}</h4>
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-black text-primary uppercase">{cert.priority} PRioRITY</span>
                            <span className="text-[9px] font-bold text-slate-400">{cert.estTime} Complete</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-slate-400">
            <Info size={14} />
            <p className="text-[10px] font-medium leading-tight">These certs can increase your match rate by up to 15%</p>
        </div>
    </div>
);

export const InterviewPrepChecklist = ({ checklist }) => (
    <div className="premium-card p-6 bg-white h-full">
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Interview Preparation</h3>
        <div className="space-y-3">
            {checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
                    <div className={item.done ? "text-success" : "text-slate-200 group-hover:text-primary transition-colors"}>
                        {item.done ? <CheckCircle size={20} /> : <Circle size={20} />}
                    </div>
                    <span className={`text-xs font-bold ${item.done ? "text-slate-400 line-through" : "text-slate-700"}`}>
                        {item.topic}
                    </span>
                </div>
            ))}
        </div>
    </div>
);
