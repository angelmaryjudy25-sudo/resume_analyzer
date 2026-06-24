import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Lightbulb, AlertCircle } from 'lucide-react';

export const TopCandidatesLeaderboard = ({ candidates }) => (
    <div className="premium-card p-6 bg-white h-full">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">Top Matches Today</h3>
        <div className="space-y-4">
            {candidates.map((cand, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:shadow-sm transition-all">
                    <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary font-black text-xs">
                        {cand.rank}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-black text-slate-800 truncate">{cand.name}</h4>
                        <p className="text-[10px] font-bold text-slate-400 truncate">{cand.recommendedJob}</p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-black text-success">{cand.match}%</div>
                        <p className="text-[8px] font-black text-slate-300 uppercase tracking-tighter">Match Score</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const HiringPipeline = ({ pipeline }) => (
    <div className="premium-card p-6 bg-white h-full">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-8 text-center">Hiring Pipeline</h3>
        <div className="flex justify-between items-end gap-1 px-4 mb-4 h-48">
            {pipeline.map((step, i) => {
                const height = (step.count / 450) * 100; // normalized to max 450
                return (
                    <div key={i} className="flex-1 flex flex-col items-center group relative">
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            className="w-full rounded-t-lg transition-all group-hover:brightness-110"
                            style={{ backgroundColor: step.color }}
                        />
                        <div className="absolute top-[-30px] opacity-0 group-hover:opacity-100 transition-opacity text-xs font-black" style={{ color: step.color }}>
                            {step.count}
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="flex justify-between gap-1">
            {pipeline.map((step, i) => (
                <div key={i} className="flex-1 text-[8px] font-black text-slate-400 uppercase tracking-tighter text-center leading-tight">
                    {step.label}
                </div>
            ))}
        </div>
    </div>
);

export const RecruiterInsights = ({ insights }) => (
    <div className="premium-card p-6 bg-white shrink-0">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">AI Recruitment Insights</h3>
        <div className="space-y-4">
            {insights.map((insight, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className={`flex items-start gap-4 p-4 rounded-2xl border ${
                        insight.type === 'critical' ? 'bg-danger/5 border-danger/10' : 
                        insight.type === 'trend' ? 'bg-primary/5 border-primary/10' : 'bg-success/5 border-success/10'
                    }`}
                >
                    <div className="mt-1 shrink-0">
                        {insight.type === 'critical' ? <AlertCircle size={16} className="text-danger" /> :
                         insight.type === 'trend' ? <TrendingUp size={16} className="text-primary" /> : <Lightbulb size={16} className="text-success" />}
                    </div>
                    <p className="text-xs font-bold text-slate-700 leading-relaxed">{insight.text}</p>
                </motion.div>
            ))}
        </div>
    </div>
);
