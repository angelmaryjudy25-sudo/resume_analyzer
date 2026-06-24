import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MoreHorizontal, User } from 'lucide-react';

export const RecentCandidatesTable = ({ candidates }) => (
    <div className="premium-card bg-white overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Recent Candidates</h3>
            <div className="flex items-center gap-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input 
                        type="text" 
                        placeholder="Search candidates..." 
                        className="bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs font-medium focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                </div>
                <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
                    <Filter size={14} />
                </button>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                        <th className="px-6 py-4">Candidate</th>
                        <th className="px-6 py-4">Target Role</th>
                        <th className="px-6 py-4 text-center">Match %</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    {candidates.map((candidate, i) => (
                        <tr key={candidate.id} className="hover:bg-slate-50/50 transition-colors group">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                        <User size={14} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700">{candidate.name}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-bold text-xs text-slate-600">{candidate.role}</td>
                            <td className="px-6 py-4 text-center">
                                <span className={`text-xs font-black ${
                                    candidate.match >= 90 ? 'text-success' : 'text-primary'
                                }`}>{candidate.match}%</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                                    candidate.status === 'Shortlisted' ? 'bg-success/10 text-success' :
                                    candidate.status === 'Rejected' ? 'bg-danger/10 text-danger' : 'bg-primary/10 text-primary'
                                }`}>{candidate.status}</span>
                            </td>
                            <td className="px-6 py-4 text-[10px] font-bold text-slate-400">{candidate.date}</td>
                            <td className="px-6 py-4 text-right">
                                <button className="p-1 text-slate-300 hover:text-slate-600 transition-colors">
                                    <MoreHorizontal size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export const OpenJobsCard = ({ jobs }) => (
    <div className="premium-card bg-white p-6 h-full">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">Open Jobs Overview</h3>
        <div className="space-y-4">
            {jobs.map((job) => (
                <div key={job.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all group">
                    <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xs font-black text-slate-800 leading-tight">{job.title}</h4>
                        <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded ${
                            job.status === 'Urgent' ? 'bg-danger text-white' : 'bg-slate-200 text-slate-600'
                        }`}>{job.status}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold">
                        <div className="flex items-center gap-4 text-slate-400">
                            <div>Applicants: <span className="text-slate-700">{job.applicants}</span></div>
                            <div>Avg Match: <span className="text-primary">{job.avgMatch}%</span></div>
                        </div>
                        <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Pool</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
