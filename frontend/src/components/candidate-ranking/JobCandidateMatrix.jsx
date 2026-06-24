import React from 'react';
import { motion } from 'framer-motion';

const JobCandidateMatrix = ({ matrix, jobs }) => {
    return (
        <div className="premium-card bg-white p-6 overflow-hidden">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-8">Job-to-Candidate Suitability Matrix</h3>
            
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b border-slate-100"></th>
                            {jobs.map((job, i) => (
                                <th key={i} className="px-4 py-4 border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-tighter text-center min-w-[120px]">
                                    {job}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {matrix.map((row, i) => (
                            <tr key={i} className="group">
                                <td className="px-4 py-4 border-b border-slate-50 text-xs font-black text-slate-700 whitespace-nowrap bg-slate-50 group-hover:bg-primary group-hover:text-white transition-all sticky left-0 z-10">
                                    {row.candidate}
                                </td>
                                {row.scores.map((score, idx) => {
                                    const opacity = score / 100;
                                    return (
                                        <td 
                                            key={idx} 
                                            className="p-1 border border-slate-50 text-center relative"
                                        >
                                            <motion.div 
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: (i * 0.1) + (idx * 0.05) }}
                                                className="w-full h-12 flex items-center justify-center text-xs font-black rounded-lg transition-all hover:ring-2 hover:ring-primary/50 cursor-pointer"
                                                style={{ 
                                                    backgroundColor: `rgba(79, 70, 229, ${opacity})`,
                                                    color: opacity > 0.5 ? 'white' : 'rgb(30, 41, 59)'
                                                }}
                                            >
                                                {score}%
                                            </motion.div>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 flex items-center gap-6 justify-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Heatmap Legend:</span>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary/20 rounded" />
                        <span className="text-[10px] font-bold text-slate-500">LOW MATCH</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary/60 rounded" />
                        <span className="text-[10px] font-bold text-slate-500">MODERATE</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary rounded" />
                        <span className="text-[10px] font-bold text-slate-500">HIGH MATCH</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCandidateMatrix;
