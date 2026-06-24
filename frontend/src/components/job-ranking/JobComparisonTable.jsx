import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown, MapPin, DollarSign, Clock } from 'lucide-react';

const JobComparisonTable = ({ jobs }) => {
    const [sortConfig, setSortConfig] = useState({ key: 'score', direction: 'desc' });

    const sortedJobs = [...jobs].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'desc';
        if (sortConfig.key === key && sortConfig.direction === 'desc') {
            direction = 'asc';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="premium-card bg-white overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Full Jobs Comparison</h3>
                <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded-md uppercase">Showing {jobs.length} Results</span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                            <th className="px-6 py-4 cursor-pointer hover:text-primary transition-colors" onClick={() => requestSort('title')}>
                                <div className="flex items-center gap-2">Job Title <ArrowUpDown size={12} /></div>
                            </th>
                            <th className="px-6 py-4 cursor-pointer hover:text-primary transition-colors text-center" onClick={() => requestSort('score')}>
                                <div className="flex items-center justify-center gap-2">Match % <ArrowUpDown size={12} /></div>
                            </th>
                            <th className="px-6 py-4">Financials</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4">Experience</th>
                            <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {sortedJobs.map((job, i) => (
                            <motion.tr 
                                key={job.id} 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ delay: i * 0.05 }}
                                className="hover:bg-slate-50/50 transition-colors group"
                            >
                                <td className="px-6 py-5">
                                    <p className="text-sm font-black text-slate-800">{job.title}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{job.company}</p>
                                </td>
                                <td className="px-6 py-5 text-center">
                                    <span className={`text-sm font-black ${
                                        job.score >= 90 ? 'text-success' : job.score >= 75 ? 'text-primary' : 'text-warning'
                                    }`}>
                                        {job.score}%
                                    </span>
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                                        <DollarSign size={14} className="text-slate-400" />
                                        {job.salary}
                                    </div>
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                                        <MapPin size={14} className="text-slate-400" />
                                        {job.location}
                                    </div>
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                                        <Clock size={14} className="text-slate-400" />
                                        {job.experience}
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-center">
                                    <button className="text-primary font-black text-[10px] uppercase hover:underline">Apply</button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobComparisonTable;
