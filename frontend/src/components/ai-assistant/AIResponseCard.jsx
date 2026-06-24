import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Award, Briefcase, ListTodo, AlertTriangle } from 'lucide-react';

export const AIResponseCard = ({ type, data }) => {
    if (type === 'job_recommendation') {
        return (
            <div className="space-y-3">
                {data.map((job, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-4 hover:border-primary/20 transition-all cursor-pointer group"
                    >
                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                            <span className="text-xs font-black text-primary">{job.score}%</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h5 className="text-xs font-black text-slate-800">{job.title}</h5>
                            <p className="text-[10px] text-slate-500 truncate">{job.reasoning}</p>
                        </div>
                        <ChevronRight size={14} className="text-slate-300 group-hover:text-primary transition-colors" />
                    </motion.div>
                ))}
            </div>
        );
    }

    if (type === 'roadmap') {
        return (
            <div className="space-y-4 pt-2">
                {data.map((step, i) => (
                    <div key={i} className="relative pl-6 pb-2">
                        <div className="absolute left-0 top-1 bottom-0 w-0.5 bg-slate-100" />
                        <div className="absolute left-[-3px] top-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_0_3px_rgba(79,70,229,0.1)]" />
                        <h5 className="text-[10px] font-black text-primary uppercase mb-1">{step.month}: {step.title}</h5>
                        <div className="flex flex-wrap gap-2">
                            {step.tasks.map((t, idx) => (
                                <span key={idx} className="text-[9px] font-bold text-slate-500 bg-white border border-slate-100 px-2 py-0.5 rounded shadow-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === 'interview_prep') {
        return (
            <div className="space-y-3">
                {data.map((q, i) => (
                    <div key={i} className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Question {i + 1}</span>
                            <span className={`text-[9px] font-black uppercase ${
                                q.difficulty === 'Hard' ? 'text-danger' : 'text-warning'
                            }`}>{q.difficulty}</span>
                        </div>
                        <p className="text-xs font-bold text-slate-800">{q.question}</p>
                    </div>
                ))}
            </div>
        );
    }

    if (type === 'ats_advice') {
        return (
            <div className="space-y-2">
                {data.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <div className={tip.priority === 'High' ? 'text-danger mt-0.5' : 'text-warning mt-0.5'}>
                            <AlertTriangle size={14} />
                        </div>
                        <p className="text-xs font-medium text-slate-700">{tip.tip}</p>
                    </div>
                ))}
            </div>
        );
    }

    return null;
};
