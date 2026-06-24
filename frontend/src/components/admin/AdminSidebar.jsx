import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    LayoutDashboard, Users, UserRound, Globe, FileStack, 
    Cpu, BarChart, Activity, Settings, ShieldCheck, LogOut,
    Bell, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const AdminSidebar = () => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
        { icon: Users, label: 'User Control', path: '/admin/users' },
        { icon: UserRound, label: 'Candidates', path: '/admin/candidates' },
        { icon: Globe, label: 'Recruiters', path: '/admin/recruiters' },
        { icon: FileStack, label: 'Job Pool', path: '/admin/jobs' },
        { icon: Cpu, label: 'AI Models', path: '/admin/models' },
        { icon: BarChart, label: 'Platform Analytics', path: '/admin/analytics' },
        { icon: Activity, label: 'System Health', path: '/admin/health' },
        { icon: ShieldCheck, label: 'Audit Logs', path: '/admin/audit' },
    ];

    return (
        <aside className="w-64 bg-slate-950 min-h-screen flex flex-col text-slate-400 border-r border-slate-800">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-10 overflow-hidden">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-950 shrink-0">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <span className="text-lg font-black text-white tracking-widest uppercase">Admin<span className="text-slate-500 font-medium lowercase">Center</span></span>
                </div>

                <nav className="space-y-1">
                    {menuItems.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.path}
                            className={({ isActive }) => 
                                `flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-xs font-bold ${
                                    isActive ? 'bg-slate-800 text-white shadow-sm' : 'hover:bg-slate-900 hover:text-slate-200'
                                }`
                            }
                        >
                            <item.icon size={18} className="shrink-0" />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className="mt-auto p-6 space-y-4">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 text-xs font-black text-white uppercase">
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        System: Healthy
                    </div>
                    <p className="text-[10px] text-slate-500 leading-tight">All systems are operational. No critical alerts.</p>
                </div>

                <NavLink to="/admin/settings" className="flex items-center gap-3 px-3 py-2 text-xs font-bold hover:text-white transition-all">
                    <Settings size={18} />
                    <span>Admin Settings</span>
                </NavLink>
                <button className="flex items-center gap-3 px-3 py-2 text-xs font-bold hover:text-danger transition-all w-full text-left">
                    <LogOut size={18} />
                    <span>Sign Out</span>
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
