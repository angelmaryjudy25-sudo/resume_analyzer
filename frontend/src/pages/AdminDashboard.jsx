import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLocation, Link } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import AppShell from '../components/layout/AppShell';
import { mockAdminDashboard } from '../mocks/adminDashboard';

// Sub-components
import PlatformOverview from '../components/admin/PlatformOverview';
import { UserManagementTable } from '../components/admin/AdminManagementTables';
import { AIModelMonitor, SystemHealthPanel } from '../components/admin/AIAndHealth';
import { AuditLogsTable, PlatformAnalytics } from '../components/admin/AuditAndAnalytics';
import { AdminActionsPanel, NotificationCenter } from '../components/admin/AdminPanels';
import { Bell, User, Search, Settings, ShieldCheck, SearchCode, ArrowLeft } from 'lucide-react';

const AdminDashboard = () => {
    const { user } = useAuth();
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    
    const { overview, users, aiModels, systemHealth, auditLogs, growth, notifications } = mockAdminDashboard;

    // Filter users list based on sub-routes
    const getFilteredUsers = () => {
        if (currentPath === '/admin/candidates') {
            return users.filter(u => u.role === 'candidate' || u.role === 'Candidate');
        }
        if (currentPath === '/admin/recruiters') {
            return users.filter(u => u.role === 'recruiter' || u.role === 'Recruiter');
        }
        return users;
    };

    // Render title/subtitle based on active route
    const getHeaderInfo = () => {
        switch (currentPath) {
            case '/admin/users':
                return { title: 'User Control Panel', subtitle: 'Manage all candidate and recruiter accounts registered on the platform.' };
            case '/admin/candidates':
                return { title: 'Candidate Accounts', subtitle: 'Detailed registry of all platform candidates.' };
            case '/admin/recruiters':
                return { title: 'Recruiter Accounts', subtitle: 'Detailed registry of all employer and recruiter partner accounts.' };
            case '/admin/jobs':
                return { title: 'Job Pool Manager', subtitle: 'Monitor active and closed job descriptions, matchings, and analytics.' };
            case '/admin/models':
                return { title: 'AI Model Controller', subtitle: 'Monitor LLM tokens, accuracy rates, latency levels, and fine-tuning health.' };
            case '/admin/analytics':
                return { title: 'Platform Performance Insights', subtitle: 'Deep dive into user growth patterns and system conversion metrics.' };
            case '/admin/health':
                return { title: 'System Infrastructure Monitor', subtitle: 'Real-time CPU, Memory, Disk, and Database API health signals.' };
            case '/admin/audit':
                return { title: 'Security Audit Logs', subtitle: 'Immutable trail of administrative actions and platform activities.' };
            default:
                return { title: 'Platform Command Console', subtitle: `Version 2.4.0-Stable • ${new Date().toLocaleDateString()}` };
        }
    };

    const headerInfo = getHeaderInfo();
    const showBackButton = currentPath !== '/admin/dashboard' && currentPath !== '/admin';

    return (
        <AppShell sidebar={<AdminSidebar />} className="bg-slate-50 font-sans">
                {/* ADMIN TOP NAVBAR */}
                <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0 relative z-30">
                    <div className="flex items-center gap-2">
                        <div className="p-1 px-2 bg-slate-900 text-white rounded text-[10px] font-black uppercase tracking-widest">
                            Super Admin
                        </div>
                        <div className="h-4 w-[1px] bg-slate-200 mx-2" />
                        <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 uppercase tracking-tighter">
                            <ShieldCheck size={14} className="text-primary" />
                            Security Protocol: Active
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <button 
                                onClick={() => setIsNotifOpen(!isNotifOpen)}
                                className={`p-2 rounded-lg transition-colors relative ${isNotifOpen ? 'bg-slate-100 text-slate-950' : 'text-slate-400 hover:text-slate-950'}`}
                            >
                                <Bell size={18} />
                                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-danger rounded-full border-2 border-white" />
                            </button>
                            <NotificationCenter notifications={notifications} isOpen={isNotifOpen} />
                        </div>
                        
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
                            <div className="text-right hidden sm:block">
                                <p className="text-[11px] font-black text-slate-950 uppercase leading-none">{user?.username || 'SuperAdmin'}</p>
                                <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">Platform Overseer</p>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-white">
                                <User size={16} />
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
                    {/* BREADCRUMB / TITLE */}
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4">
                            {showBackButton ? (
                                <Link to="/admin/dashboard" className="p-2 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors">
                                    <ArrowLeft size={20} />
                                </Link>
                            ) : (
                                <SearchCode size={24} className="text-slate-300" />
                            )}
                            <div>
                                <h1 className="text-xl font-black text-slate-950 tracking-tight">{headerInfo.title}</h1>
                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">{headerInfo.subtitle}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-900 rounded-lg text-xs font-black hover:bg-slate-50 transition-all shadow-sm">View Cluster</button>
                            <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-black shadow-lg shadow-slate-900/10 hover:scale-105 transition-all">Console Actions</button>
                        </div>
                    </div>

                    {/* ROUTE SPECIFIC CONTENT RENDERING */}
                    {(() => {
                        // 1. DEFAULT OVERVIEW VIEW (SHOW EVERYTHING)
                        if (currentPath === '/admin/dashboard' || currentPath === '/admin') {
                            return (
                                <>
                                    {/* KPI CARDS */}
                                    <PlatformOverview data={overview} />

                                    {/* ROW 2: ANALYTICS & HEALTH */}
                                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                                        <div className="xl:col-span-2">
                                            <PlatformAnalytics growth={growth} />
                                        </div>
                                        <div className="xl:col-span-1">
                                            <SystemHealthPanel health={systemHealth} />
                                        </div>
                                    </div>

                                    {/* ROW 3: USER TABLE & AI MONITORING */}
                                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                                        <div className="xl:col-span-3">
                                            <UserManagementTable users={users} />
                                        </div>
                                        <div className="xl:col-span-1 space-y-8 mt-8">
                                            <AIModelMonitor models={aiModels} />
                                            <AdminActionsPanel />
                                        </div>
                                    </div>

                                    {/* ROW 4: AUDIT LOGS */}
                                    <div className="grid grid-cols-1 gap-8 pb-12">
                                        <AuditLogsTable logs={auditLogs} />
                                    </div>
                                </>
                            );
                        }

                        // 2. USER CONTROL / REGISTRY VIEWS
                        if (currentPath === '/admin/users' || currentPath === '/admin/candidates' || currentPath === '/admin/recruiters') {
                            return (
                                <div className="space-y-6">
                                    <PlatformOverview data={{
                                        ...overview,
                                        // Focus overview metrics specifically for users
                                        cards: overview.cards.filter(c => c.title.toLowerCase().includes('user') || c.title.toLowerCase().includes('candidate') || c.title.toLowerCase().includes('recruiter'))
                                    }} />
                                    <UserManagementTable users={getFilteredUsers()} />
                                </div>
                            );
                        }

                        // 3. JOB POOL MANAGER VIEW
                        if (currentPath === '/admin/jobs') {
                            return (
                                <div className="space-y-6">
                                    <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                                        <h3 className="font-bold text-slate-800 text-base mb-4">Job Descriptions Pool</h3>
                                        <p className="text-slate-500 text-sm mb-6">Showing all jobs uploaded by recruiters. Platform admins can delete or suspend jobs violating policies.</p>
                                        
                                        <div className="border border-slate-100 rounded-xl overflow-hidden">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase border-b border-slate-100">
                                                        <th className="p-4">Job ID</th>
                                                        <th className="p-4">Title</th>
                                                        <th className="p-4">Company</th>
                                                        <th className="p-4">Candidates Matched</th>
                                                        <th className="p-4">Status</th>
                                                        <th className="p-4">Created Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                                                    {[
                                                        { id: 'JOB-901', title: 'Senior React Engineer', company: 'Google', matches: 45, status: 'Active', date: '2026-06-20' },
                                                        { id: 'JOB-902', title: 'Python Backend Developer', company: 'Meta', matches: 38, status: 'Active', date: '2026-06-18' },
                                                        { id: 'JOB-903', title: 'Product Manager (AI)', company: 'OpenAI', matches: 92, status: 'Active', date: '2026-06-15' },
                                                        { id: 'JOB-904', title: 'DevOps Lead', company: 'Stripe', matches: 12, status: 'Closed', date: '2026-06-10' },
                                                    ].map((job) => (
                                                        <tr key={job.id} className="hover:bg-slate-50 transition-colors">
                                                            <td className="p-4 font-black text-xs">{job.id}</td>
                                                            <td className="p-4 font-bold">{job.title}</td>
                                                            <td className="p-4">{job.company}</td>
                                                            <td className="p-4 font-bold text-slate-900">{job.matches}</td>
                                                            <td className="p-4">
                                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${job.status === 'Active' ? 'bg-success/10 text-success' : 'bg-slate-100 text-slate-500'}`}>
                                                                    {job.status}
                                                                </span>
                                                            </td>
                                                            <td className="p-4 text-xs font-semibold text-slate-400">{job.date}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        // 4. AI MODELS VIEW
                        if (currentPath === '/admin/models') {
                            return (
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <AIModelMonitor models={aiModels} />
                                    </div>
                                    <div className="lg:col-span-1 space-y-8">
                                        <AdminActionsPanel />
                                    </div>
                                </div>
                            );
                        }

                        // 5. PLATFORM ANALYTICS VIEW
                        if (currentPath === '/admin/analytics') {
                            return (
                                <div className="space-y-6">
                                    <PlatformAnalytics growth={growth} />
                                </div>
                            );
                        }

                        // 6. SYSTEM HEALTH VIEW
                        if (currentPath === '/admin/health') {
                            return (
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <SystemHealthPanel health={systemHealth} />
                                    </div>
                                    <div className="lg:col-span-1 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                        <h3 className="font-bold text-slate-800 text-sm mb-4">Instance Information</h3>
                                        <div className="space-y-4 text-xs font-medium text-slate-600">
                                            <div className="flex justify-between border-b border-slate-50 pb-2">
                                                <span>Region</span>
                                                <span className="font-bold text-slate-800">us-east-1</span>
                                            </div>
                                            <div className="flex justify-between border-b border-slate-50 pb-2">
                                                <span>Instance Type</span>
                                                <span className="font-bold text-slate-800">t3.xlarge</span>
                                            </div>
                                            <div className="flex justify-between border-b border-slate-50 pb-2">
                                                <span>Virtual CPUs</span>
                                                <span className="font-bold text-slate-800">4 vCPUs</span>
                                            </div>
                                            <div className="flex justify-between border-b border-slate-50 pb-2">
                                                <span>IP Address</span>
                                                <span className="font-bold text-slate-800">54.210.45.192</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        // 7. AUDIT LOGS VIEW
                        if (currentPath === '/admin/audit') {
                            return (
                                <div className="space-y-6">
                                    <AuditLogsTable logs={auditLogs} />
                                </div>
                            );
                        }

                        return <div>Route not configured</div>;
                    })()}
                </main>
        </AppShell>
    );
};

export default AdminDashboard;
