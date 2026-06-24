import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import PageHeader from '../components/common/PageHeader';
import StatCard from '../components/common/StatCard';
import LoadingSkeleton from '../components/common/LoadingSkeleton';
import ScoreRing from '../components/common/ScoreRing';
import ResumeUploader from '../components/ResumeUploader';
import { mockDashboardData } from '../mocks/candidateDashboard';
import { motion } from 'framer-motion';
import { History, FileText, ChevronRight, MapPin, Map } from 'lucide-react';

const CandidateDashboard = () => {
    const [loading, setLoading] = useState(true);
    const { stats, skills, analyses, roadmap } = mockDashboardData;

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex bg-background min-h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <TopNavbar />
                    <div className="p-8"><LoadingSkeleton type="card" count={4} /></div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex bg-background min-h-screen font-sans">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <TopNavbar />

                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-8">
                        
                        <PageHeader 
                            title="Candidate Dashboard" 
                            subtitle="Overview of your career progress and AI insights."
                            action={
                                <button className="btn-saas bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90">
                                    New Analysis
                                </button>
                            }
                        />

                        {/* Stats Grid */}
                        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {stats.map((stat, i) => (
                                <StatCard key={i} {...stat} />
                            ))}
                        </section>

                        {/* Middle Section: Upload & Analysis */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-8">
                                <section className="premium-card p-1">
                                    <ResumeUploader />
                                </section>
                                
                                {/* Recent Analysis List */}
                                <section className="premium-card bg-white p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                            <History size={18} className="text-primary" />
                                            Recent Analyses
                                        </h3>
                                        <button className="text-sm font-bold text-primary hover:underline">View All</button>
                                    </div>
                                    <div className="space-y-4">
                                        {analyses.map((item) => (
                                            <div key={item.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-primary transition-all">
                                                        <FileText size={20} />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-800 text-sm">{item.name}</p>
                                                        <p className="text-xs text-slate-400 font-medium">{item.date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <div className="text-right">
                                                        <p className="font-black text-slate-800">{item.score}%</p>
                                                        <p className="text-[10px] uppercase font-black text-primary tracking-tighter">{item.status}</p>
                                                    </div>
                                                    <ChevronRight size={20} className="text-slate-300 group-hover:text-primary transition-all" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar Widgets */}
                            <div className="space-y-8">
                                {/* Match Score Component (Reusable) */}
                                <section className="premium-card p-8 flex flex-col items-center">
                                    <ScoreRing score={82} label="Candidate Fit" size={180} />
                                    <p className="mt-4 text-center text-sm text-slate-400 font-medium">Your profile is currently matching <b className="text-slate-800">Top 5%</b> of applicants in your niche.</p>
                                </section>

                                {/* Technical Skills */}
                                <section className="premium-card p-6">
                                    <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <Target size={18} className="text-primary" />
                                        Skill Strengths
                                    </h3>
                                    <div className="space-y-4">
                                        {skills.map((skill, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-xs font-bold mb-1.5">
                                                    <span className="text-slate-600 uppercase tracking-wide">{skill.name}</span>
                                                    <span className="text-slate-400">{skill.level}%</span>
                                                </div>
                                                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1, delay: i * 0.1 }}
                                                        className="h-full bg-primary"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* Bottom Section: Roadmap */}
                        <section className="premium-card bg-white p-6">
                             <h3 className="font-bold text-slate-800 mb-8 flex items-center gap-2">
                                <Map size={18} className="text-primary" />
                                Personalized Career Roadmap
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative border-t-2 border-slate-100 pt-8 mt-4">
                                {roadmap.map((item, i) => (
                                    <div key={i} className="relative">
                                        <div className={`absolute -top-[42px] left-0 w-5 h-5 rounded-full border-4 border-white shadow-sm z-10 ${item.status === 'completed' ? 'bg-success' : item.status === 'in-progress' ? 'bg-primary' : 'bg-slate-300'}`} />
                                        <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-400 font-medium">{item.date}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default CandidateDashboard;
