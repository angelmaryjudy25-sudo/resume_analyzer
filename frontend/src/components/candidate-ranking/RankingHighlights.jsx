import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Rocket, Award, TrendingUp } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

export const RankingHero = ({ data }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card bg-slate-900 p-8 text-white relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Rocket size={180} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Candidates</p>
                <h3 className="text-4xl font-black"><AnimatedCounter value={data.totalCandidates} /></h3>
                <div className="flex items-center gap-2 text-success text-xs font-bold">
                    <TrendingUp size={14} /> +12% this week
                </div>
            </div>
            
            <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Job Descriptions</p>
                <h3 className="text-4xl font-black"><AnimatedCounter value={data.totalJobs} /></h3>
                <p className="text-xs text-slate-500 font-medium">Currently analyzing 5 roles</p>
            </div>

            <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Top Match Score</p>
                <h3 className="text-4xl font-black text-primary"><AnimatedCounter value={data.topMatch} />%</h3>
                <p className="text-xs text-slate-500 font-medium font-black">{data.bestCandidate}</p>
            </div>

            <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Average Fit</p>
                <h3 className="text-4xl font-black"><AnimatedCounter value={data.avgMatch} />%</h3>
                <div className="w-full h-1 bg-slate-800 mt-2 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${data.avgMatch}%` }}
                        className="h-full bg-success"
                    />
                </div>
            </div>
        </div>
    </motion.div>
);

export const CandidateLeaderboard = ({ topCandidates }) => {
    const getColors = (i) => {
        if (i === 0) return 'from-yellow-400 to-amber-600 shadow-amber-200';
        if (i === 1) return 'from-slate-300 to-slate-500 shadow-slate-200';
        if (i === 2) return 'from-orange-400 to-orange-700 shadow-orange-200';
        return 'from-slate-100 to-slate-200';
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topCandidates.slice(0, 3).map((cand, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="premium-card p-6 bg-white relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
                >
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${getColors(i)} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                    
                    <div className="flex items-center justify-between mb-6">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getColors(i)} flex items-center justify-center text-white shadow-lg`}>
                            <Award size={20} />
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">RANK #{i + 1}</span>
                    </div>

                    <h4 className="text-lg font-black text-slate-800 mb-1">{cand.name}</h4>
                    <p className="text-xs font-bold text-slate-400 mb-4">{cand.recommendedRole}</p>
                    
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-slate-800">{cand.match}%</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase">Match Score</span>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(v => (
                                <div key={v} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" />
                            ))}
                        </div>
                        <span className="text-[10px] font-black text-primary uppercase hover:underline">View Full Analysis</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
