import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, ChevronDown, ChevronUp, CheckCircle, AlertCircle } from 'lucide-react';

const JobLeaderboard = ({ jobs }) => {
    const [expandedId, setExpandedId] = React.useState(null);

    const getRankIcon = (rank) => {
        if (rank === 1) return <Trophy className="text-yellow-500" size={24} />;
        if (rank === 2) return <Medal className="text-slate-400" size={24} />;
        if (rank === 3) return <Medal className="text-amber-600" size={24} />;
        return <span className="text-lg font-black text-slate-300">#{rank}</span>;
    };

    const getRankStyle = (rank) => {
        if (rank === 1) return 'border-yellow-200 bg-yellow-50/30';
        if (rank === 2) return 'border-slate-200 bg-slate-50/30';
        if (rank === 3) return 'border-amber-200 bg-amber-50/30';
        return 'border-slate-100 bg-white';
    };

    return (
        <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 px-2">Job Match Leaderboard</h3>
            <div className="grid gap-4">
                {jobs.map((job, i) => (
                    <motion.div 
                        key={job.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`premium-card border overflow-hidden transition-all duration-300 ${getRankStyle(job.rank)} ${expandedId === job.id ? 'ring-2 ring-primary/20 scale-[1.01]' : ''}`}
                    >
                        <div 
                            className="p-6 cursor-pointer flex items-center gap-6"
                            onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                        >
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                                {getRankIcon(job.rank)}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                                <h4 className="font-black text-slate-800 text-lg leading-tight">{job.title}</h4>
                                <p className="text-sm text-slate-500 font-bold">{job.company}</p>
                            </div>

                            <div className="text-right">
                                <div className={`text-2xl font-black ${
                                    job.score >= 90 ? 'text-success' : job.score >= 75 ? 'text-primary' : 'text-warning'
                                }`}>
                                    {job.score}%
                                </div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{job.matchLabel}</p>
                            </div>

                            <div className="p-2 text-slate-300">
                                {expandedId === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                        </div>

                        {expandedId === job.id && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }} 
                                animate={{ height: 'auto', opacity: 1 }}
                                className="px-6 pb-6 pt-2 border-t border-slate-100 bg-white/50"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-success">
                                            <CheckCircle size={16} />
                                            <span className="text-xs font-black uppercase tracking-widest">Key Strengths</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {job.strengths.map((s, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-success/10 text-success text-[10px] font-bold rounded-lg border border-success/10">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-warning">
                                            <AlertCircle size={16} />
                                            <span className="text-xs font-black uppercase tracking-widest">Missing / Gaps</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {job.gaps.map((g, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-warning/10 text-warning text-[10px] font-bold rounded-lg border border-warning/10">
                                                    {g}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 flex justify-end gap-3">
                                    <button className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition-all">View Details</button>
                                    <button className="px-4 py-2 text-xs font-bold bg-primary text-white rounded-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all">Apply Now</button>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default JobLeaderboard;
