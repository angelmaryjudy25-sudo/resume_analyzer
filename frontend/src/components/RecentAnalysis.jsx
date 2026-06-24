import React from 'react';
import { motion } from 'framer-motion';
import { mockRecentAnalysis } from '../mocks/candidateData';
import { History, FileText, ChevronRight } from 'lucide-react';

const RecentAnalysis = () => {
    return (
        <div className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <History size={20} className="text-primary-400" />
                    Recent Analysis
                </h3>
                <button className="text-primary-400 text-sm font-bold hover:underline">View All</button>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-slate-500 text-xs uppercase tracking-wider border-b border-slate-800">
                            <th className="pb-4 font-bold">Resume Name</th>
                            <th className="pb-4 font-bold">Analysis Date</th>
                            <th className="pb-4 font-bold">Match Score</th>
                            <th className="pb-4 font-bold text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {mockRecentAnalysis.map((item, index) => (
                            <motion.tr 
                                key={item.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group hover:bg-slate-800/30 transition-colors"
                            >
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
                                            <FileText size={16} className="text-slate-400" />
                                        </div>
                                        <span className="text-slate-200 font-medium">{item.name}</span>
                                    </div>
                                </td>
                                <td className="py-4 text-slate-400 text-sm">{item.date}</td>
                                <td className="py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary-500" style={{ width: `${item.score}%` }} />
                                        </div>
                                        <span className="text-slate-200 font-bold text-sm">{item.score}%</span>
                                    </div>
                                </td>
                                <td className="py-4 text-right">
                                    <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors inline-block text-slate-400 hover:text-slate-100">
                                        <ChevronRight size={18} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentAnalysis;
