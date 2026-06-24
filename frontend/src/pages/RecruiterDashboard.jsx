import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLocation, Link } from 'react-router-dom';
import RecruiterSidebar from '../components/recruiter/RecruiterSidebar';
import AppShell from '../components/layout/AppShell';
import { motion } from 'framer-motion';
import { Bell, User, Search, Settings, ArrowLeft } from 'lucide-react';

// Sub-components
import RecruiterMetrics from '../components/recruiter/RecruiterMetrics';
import { RecentCandidatesTable, OpenJobsCard } from '../components/recruiter/RecruiterTables';
import { TopCandidatesLeaderboard, HiringPipeline, RecruiterInsights } from '../components/recruiter/RecruiterInsights';
import { TaskWidget, ActivityTimeline, QuickActionsPanel } from '../components/recruiter/RecruiterWidgets';
import { mockRecruiterDashboard } from '../mocks/recruiterDashboard';

const RecruiterDashboard = () => {
    const { user } = useAuth();
    const location = useLocation();
    const currentPath = location.pathname;

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

    const getHeaderInfo = () => {
        switch (currentPath) {
            case '/recruiter/candidates':
                return { title: 'Talent Registry', subtitle: 'Registry of candidates matched or analyzed for your active roles.' };
            case '/recruiter/jd':
                return { title: 'Job Description Manager', subtitle: 'Manage job requirements, track applicants, and rank resumes.' };
            case '/recruiter/ai-insights':
                return { title: 'AI Talent Insights', subtitle: 'Automated skill suggestions, market availability, and sourcing advice.' };
            default:
                return { title: 'Recruiter Command Center', subtitle: `Welcome back, ${user?.username || 'Recruiter'}. Here's what's happening today.` };
        }
    };

    const headerInfo = getHeaderInfo();
    const showBackButton = currentPath !== '/recruiter/dashboard';

    return (
        <AppShell sidebar={<RecruiterSidebar />} className="bg-slate-50 font-sans">
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
                        <div className="flex items-center gap-4">
                            {showBackButton && (
                                <Link to="/recruiter/dashboard" className="p-2.5 hover:bg-slate-200 rounded-xl text-slate-600 transition-colors">
                                    <ArrowLeft size={20} />
                                </Link>
                            )}
                            <div>
                                <h1 className="text-2xl font-black text-slate-800 tracking-tight">{headerInfo.title}</h1>
                                <p className="text-slate-500 font-medium text-sm">{headerInfo.subtitle}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-black shadow-sm hover:bg-slate-50 transition-all">Download Reports</button>
                            <Link to="/recruiter/ranking" className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-black shadow-lg shadow-primary/20 hover:scale-105 transition-all text-center">Run Candidate Ranking</Link>
                        </div>
                    </div>

                    {/* DYNAMIC VIEW ROUTING */}
                    {(() => {
                        // 1. DEFAULT DASHBOARD
                        if (currentPath === '/recruiter/dashboard') {
                            return (
                                <>
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
                                </>
                            );
                        }

                        // 2. CANDIDATES REGISTRY
                        if (currentPath === '/recruiter/candidates') {
                            return (
                                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                                    <div className="xl:col-span-2 space-y-8">
                                        <RecentCandidatesTable candidates={recentCandidates} />
                                    </div>
                                    <div className="xl:col-span-1 space-y-8">
                                        <TopCandidatesLeaderboard candidates={topCandidates} />
                                    </div>
                                </div>
                            );
                        }

                        // 3. JOB DESCRIPTION POOL
                        if (currentPath === '/recruiter/jd') {
                            return (
                                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                                    <div className="xl:col-span-2">
                                        <OpenJobsCard jobs={openJobs} />
                                    </div>
                                    <div className="xl:col-span-1 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                        <h3 className="font-bold text-slate-800 text-sm mb-4">JD Best Practices</h3>
                                        <p className="text-slate-500 text-xs leading-relaxed mb-4">
                                            For high accuracy AI ranking, ensure your uploaded JDs include:
                                        </p>
                                        <ul className="list-disc list-inside text-xs font-semibold text-slate-600 space-y-2">
                                            <li>Core technical skills list</li>
                                            <li>Minimum education criteria</li>
                                            <li>Experience levels in years</li>
                                            <li>Specific tool stacks</li>
                                        </ul>
                                    </div>
                                </div>
                            );
                        }

                        // 4. AI INSIGHTS
                        if (currentPath === '/recruiter/ai-insights') {
                            return (
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <RecruiterInsights insights={insights} />
                                    </div>
                                    <div className="lg:col-span-1">
                                        <TaskWidget tasks={tasks} />
                                    </div>
                                </div>
                            );
                        }

                        return <div>Not configured</div>;
                    })()}
                </main>
        </AppShell>
    );
};

export default RecruiterDashboard;
