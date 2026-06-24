import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronLeft, ChevronRight, MoreHorizontal, User, FileText, BarChart } from 'lucide-react';

const CandidateRankingTable = ({ candidates, onSelectCandidate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filtered = candidates.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.recommendedRole.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const displayedItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="premium-card bg-white overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Candidate Rankings</h3>
                
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                        <input 
                            type="text" 
                            placeholder="Search name or role..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs font-medium focus:ring-4 focus:ring-primary/10 transition-all outline-none md:w-64"
                        />
                    </div>
                    <button className="p-2.5 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors">
                        <Filter size={18} />
                    </button>
                    <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all">
                        Export Report
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                            <th className="px-6 py-4">Rank</th>
                            <th className="px-6 py-4">Candidate</th>
                            <th className="px-6 py-4">Match %</th>
                            <th className="px-6 py-4">ATS Score</th>
                            <th className="px-6 py-4">Experience</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Recommended Role</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {displayedItems.map((candidate, i) => (
                            <tr 
                                key={candidate.id} 
                                onClick={() => onSelectCandidate(candidate)}
                                className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                            >
                                <td className="px-6 py-4">
                                    <span className="text-xs font-black text-slate-400">#{(currentPage - 1) * itemsPerPage + i + 1}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                            <User size={14} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold text-slate-800 truncate">{candidate.name}</p>
                                            <p className="text-[10px] text-slate-400 truncate">{candidate.education}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-1 bg-slate-100 rounded-full max-w-[40px]">
                                            <div className="h-full bg-primary rounded-full" style={{ width: `${candidate.match}%` }} />
                                        </div>
                                        <span className="text-xs font-black text-slate-800">{candidate.match}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-xs font-bold text-slate-600">{candidate.atsScore}</span>
                                </td>
                                <td className="px-6 py-4 text-xs font-bold text-slate-500">{candidate.experience} Years</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                                        candidate.status === 'Shortlisted' ? 'bg-success/10 text-success' :
                                        candidate.status === 'Rejected' ? 'bg-danger/10 text-danger' : 
                                        candidate.status === 'Interview' ? 'bg-warning/10 text-warning' : 'bg-primary/10 text-primary'
                                    }`}>
                                        {candidate.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-bold text-[10px] text-slate-500 uppercase tracking-tight">
                                    {candidate.recommendedRole}
                                </td>
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

            <div className="p-6 border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filtered.length)} of {filtered.length}
                </p>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="p-2 border border-slate-200 rounded-xl disabled:opacity-50 hover:bg-slate-50 transition-colors"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => (
                            <button 
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-8 h-8 rounded-xl text-[10px] font-black transition-all ${
                                    currentPage === i + 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-slate-50 text-slate-500'
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    <button 
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-slate-200 rounded-xl disabled:opacity-50 hover:bg-slate-50 transition-colors"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CandidateRankingTable;
