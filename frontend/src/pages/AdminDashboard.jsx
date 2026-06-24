import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/admin/AdminSidebar';
import { mockAdminDashboard } from '../mocks/adminDashboard';

// Sub-components
import PlatformOverview from '../components/admin/PlatformOverview';
import { UserManagementTable } from '../components/admin/AdminManagementTables';
import { AIModelMonitor, SystemHealthPanel } from '../components/admin/AIAndHealth';
import { AuditLogsTable, PlatformAnalytics } from '../components/admin/AuditAndAnalytics';
import { AdminActionsPanel, NotificationCenter } from '../components/admin/AdminPanels';
import { Bell, User, Search, Settings, ShieldToggle, SearchCode } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
    const { user } = useAuth();
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    
    const { overview, users, aiModels, systemHealth, auditLogs, growth, notifications } = mockAdminDashboard;

    return (
        <div className="flex bg-slate-50 min-h-screen font-sans">
            <AdminSidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* ADMIN TOP NAVBAR */}
                <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0 relative z-30">
                    <div className="flex items-center gap-2">
                        <div className="p-1 px-2 bg-slate-900 text-white rounded text-[10px] font-black uppercase tracking-widest">
                            Super Admin
                        </div>
                        <div className="h-4 w-[1px] bg-slate-200 mx-2" />
                        <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 uppercase tracking-tighter">
                            <ShieldToggle size={14} className="text-primary" />
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
                            <SearchCode size={24} className="text-slate-300" />
                            <div>
                                <h1 className="text-xl font-black text-slate-950 tracking-tight">Platform Command Console</h1>
                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Version 2.4.0-Stable • {new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-900 rounded-lg text-xs font-black hover:bg-slate-50 transition-all shadow-sm">View Cluster</button>
                            <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-black shadow-lg shadow-slate-900/10 hover:scale-105 transition-all">Console Actions</button>
                        </div>
                    </div>

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
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
