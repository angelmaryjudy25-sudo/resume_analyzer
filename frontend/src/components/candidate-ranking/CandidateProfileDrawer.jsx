import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Award, BookOpen, Briefcase, Code, CheckCircle2, AlertTriangle, BarChart3, Clock, Calendar, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const CandidateProfileDrawer = ({ isOpen, onClose, candidate }) => {
    if (!candidate) return null;

    const radarData = [
        { subject: 'Skills', A: candidate.breakdown.skills, fullMark: 100 },
        { subject: 'Experience', A: candidate.breakdown.experience, fullMark: 100 },
        { subject: 'Education', A: candidate.breakdown.education, fullMark: 100 },
        { subject: 'Certs', A: candidate.breakdown.certification, fullMark: 100 },
        { subject: 'Projects', A: candidate.breakdown.projects, fullMark: 100 },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
                    />
                    <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-white shadow-2xl z-[110] overflow-y-auto"
                    >
                        {/* HEADER */}
                        <div className="sticky top-0 bg-white border-b border-slate-100 p-8 flex items-start justify-between z-10">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400">
                                    <User size={40} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-slate-800">{candidate.name}</h2>
                                    <p className="text-slate-500 font-bold mb-4">{candidate.recommendedRole}</p>
                                    <div className="flex flex-wrap gap-4 text-[10px] font-black text-slate-400 tracking-widest">
                                        <span className="flex items-center gap-1"><Mail size={12} /> EMAIL@HOST.COM</span>
                                        <span className="flex items-center gap-1"><Phone size={12} /> +1 234 567 8900</span>
                                        <span className="flex items-center gap-1"><MapPin size={12} /> CITY, COUNTRY</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-xl transition-all">
                                <X size={24} className="text-slate-400" />
                            </button>
                        </div>

                        <div className="p-8 space-y-12">
                            {/* STATS HERO */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Match Score</p>
                                    <p className="text-2xl font-black text-primary">{candidate.match}%</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">ATS Score</p>
                                    <p className="text-2xl font-black text-slate-800">{candidate.atsScore}</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Experience</p>
                                    <p className="text-2xl font-black text-slate-800">{candidate.experience}Y</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Projects</p>
                                    <p className="text-2xl font-black text-slate-800">{candidate.projects}</p>
                                </div>
                            </div>

                            {/* ANALYSIS GRID */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* RADAR CHART */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Match Breakdown</h3>
                                    <div className="h-64 bg-slate-50 rounded-2xl">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RadarChart cx="50%" cy="50%" outerRadius="60%" data={radarData}>
                                                <PolarGrid stroke="#e2e8f0" />
                                                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fontWeight: 900, fill: '#64748b' }} />
                                                <Radar name={candidate.name} dataKey="A" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.2} />
                                            </RadarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                {/* SUITABILITY */}
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-success">
                                            <ShieldCheck size={18} />
                                            <h3 className="text-xs font-black uppercase tracking-widest">Core Strengths</h3>
                                        </div>
                                        <div className="space-y-2">
                                            {candidate.skills.slice(0, 4).map((s, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 bg-success/5 border border-success/10 rounded-xl">
                                                    <span className="text-xs font-bold text-slate-700">{s}</span>
                                                    <CheckCircle2 size={14} className="text-success" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-amber-500">
                                            <AlertTriangle size={18} />
                                            <h3 className="text-xs font-black uppercase tracking-widest">Gap Analysis</h3>
                                        </div>
                                        <div className="space-y-2">
                                            {candidate.missingSkills.map((s, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 bg-amber-500/5 border border-amber-500/10 rounded-xl">
                                                    <span className="text-xs font-bold text-slate-700">{s}</span>
                                                    <AlertTriangle size={14} className="text-amber-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* AI RECOMMENDATION */}
                            <div className="p-6 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Award size={64} />
                                </div>
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">AI Recruiter Observation</h3>
                                <p className="text-sm font-medium leading-relaxed italic">
                                    "Candidate shows exceptional React competency with {candidate.experience} years of focused delivery. While missing AWS certifications, the project complexity suggests high architectural readiness. <span className="text-primary font-black">Highly recommend for immediate interview.</span>"
                                </p>
                            </div>

                            {/* ACTIONS */}
                            <div className="flex gap-4 pt-4 pb-12">
                                <button className="flex-1 py-4 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                                    Shortlist Candidate
                                </button>
                                <button className="flex-1 py-4 bg-slate-800 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                                    Schedule Interview
                                </button>
                                <button className="p-4 border border-slate-200 rounded-2xl text-danger hover:bg-danger/5 transition-all">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CandidateProfileDrawer;
