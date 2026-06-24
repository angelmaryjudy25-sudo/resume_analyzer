import React from 'react';
import { motion } from 'framer-motion';

const SkillGapTable = ({ skillGaps }) => {
    return (
        <div className="premium-card bg-white p-6">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Skill Gap Analysis</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] font-black text-slate-400 uppercase tracking-wider border-b border-slate-100">
                            <th className="pb-4">Required Skill</th>
                            <th className="pb-4">Current Status</th>
                            <th className="pb-4 text-right">Action Priority</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {skillGaps.map((gap, i) => (
                            <motion.tr 
                                key={i}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <td className="py-4 text-sm font-bold text-slate-800">{gap.skill}</td>
                                <td className="py-4">
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                                        gap.status === 'Missing' ? 'bg-danger/10 text-danger' : 'bg-warning/10 text-warning'
                                    }`}>
                                        {gap.status}
                                    </span>
                                </td>
                                <td className="py-4 text-right">
                                    <span className={`text-xs font-bold ${
                                        gap.priority === 'High' ? 'text-danger' : 
                                        gap.priority === 'Medium' ? 'text-warning' : 'text-primary'
                                    }`}>
                                        {gap.priority}
                                    </span>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SkillGapTable;
