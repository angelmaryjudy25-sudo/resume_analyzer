import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const SkillGapHeatmap = ({ heatmapData }) => {
    // Extract job names (columns) from first item minus 'skill' key
    const jobKeys = Object.keys(heatmapData[0]).filter(k => k !== 'skill');

    return (
        <div className="premium-card bg-white p-6">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8">Skill Gap Comparison Across Jobs</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="pb-4 pt-2"></th>
                            {jobKeys.map((job, i) => (
                                <th key={i} className="pb-4 pt-2 px-2 text-center align-bottom">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight whitespace-nowrap rotate-[-15deg] transform origin-bottom-left pb-4">
                                        {job.replace('_', ' ')}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {heatmapData.map((row, i) => (
                            <motion.tr 
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="group hover:bg-slate-50/50"
                            >
                                <td className="py-4 text-xs font-black text-slate-700">{row.skill}</td>
                                {jobKeys.map((job, j) => (
                                    <td key={j} className="py-4 px-2">
                                        <div className="flex justify-center">
                                            {row[job] === 1 ? (
                                                <div className="w-8 h-8 rounded-lg bg-success/10 text-success flex items-center justify-center border border-success/10 group-hover:scale-110 transition-transform">
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 rounded-lg bg-danger/5 text-danger/30 flex items-center justify-center border border-slate-50">
                                                    <X size={14} strokeWidth={3} />
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                ))}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-success/10 border border-success/20" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Skill Present</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-danger/5 border border-slate-100" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Skill Missing</span>
                </div>
            </div>
        </div>
    );
};

export default SkillGapHeatmap;
