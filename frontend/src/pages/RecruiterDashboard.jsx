import React from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import { useAuth } from '../context/AuthContext';
import RecruiterSidebar from '../components/recruiter/RecruiterSidebar';
import { motion } from 'framer-motion';
import { Bell, User, Search, Settings } from 'lucide-react';

// Sub-components
import RecruiterMetrics from '../components/recruiter/RecruiterMetrics';
import { RecentCandidatesTable, OpenJobsCard } from '../components/recruiter/RecruiterTables';
import { TopCandidatesLeaderboard, HiringPipeline, RecruiterInsights } from '../components/recruiter/RecruiterInsights';
import { TaskWidget, ActivityTimeline, QuickActionsPanel } from '../components/recruiter/RecruiterWidgets';
import { mockRecruiterDashboard } from '../mocks/recruiterDashboard';

const RecruiterDashboard = () => {
    const { user } = useAuth();
    const { 
        metrics, 
        recentCandidates, 
        openJobs, 
        topCandidates, 
        pipeline, 
        insights, 
        tasks, 
        activity 
    } = mockRecruiterDashboard;

    return (
        <div className="flex bg-slate-50 min-h-screen font-sans">
            <RecruiterSidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* RECRUITER TOP NAVBAR */}
                <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0 relative z-20">
                    <div className="flex-1 max-w-xl relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Universal search (candidates, jobs, analytics)..." 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-2.5 text-sm font-medium focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative p-2 text-slate-400 hover:text-primary cursor-pointer transition-colors">
                            <Bell size={22} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-white" />
                        </div>
                        
                        <div className="h-10 w-[1px] bg-slate-200 mx-2" />

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-800 leading-tight">{user?.username || 'Recruiter'}</p>
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest">{user?.company_name || 'Enterprise'}</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200 group-hover:border-primary/50 transition-all">
                                <User size={20} />
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
                    {/* HERO SECTION */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-2xl font-black text-slate-800 tracking-tight">Recruiter Command Center</h1>
                            <p className="text-slate-500 font-medium text-sm">Welcome back, {user?.username}. Here's what's happening today.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-black shadow-sm hover:bg-slate-50 transition-all">Download Reports</button>
                            <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-black shadow-lg shadow-primary/20 hover:scale-105 transition-all">+ Create New Job</button>
                        </div>
                    </div>

                    {/* KPI CARDS */}
                    <RecruiterMetrics metrics={metrics} />

                    {/* QUICK ACTIONS */}
                    <QuickActionsPanel />

                    {/* MAIN CONTENT GRID */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        {/* LEFT AND MIDDLE COLUMNS */}
                        <div className="xl:col-span-2 space-y-8">
                            <RecentCandidatesTable candidates={recentCandidates} />
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <HiringPipeline pipeline={pipeline} />
                                <OpenJobsCard jobs={openJobs} />
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="xl:col-span-1 space-y-8">
                            <TopCandidatesLeaderboard candidates={topCandidates} />
                            <RecruiterInsights insights={insights} />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                                <TaskWidget tasks={tasks} />
                                <ActivityTimeline activity={activity} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default RecruiterDashboard;
