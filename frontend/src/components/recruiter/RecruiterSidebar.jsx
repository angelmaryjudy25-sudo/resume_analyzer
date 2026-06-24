import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    LayoutDashboard, Users, FileText, BarChart3, 
    Sparkles, Settings, LogOut, Search, UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const RecruiterSidebar = () => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/recruiter/dashboard' },
        { icon: Users, label: 'Candidates', path: '/recruiter/candidates' },
        { icon: FileText, label: 'Job Descriptions', path: '/recruiter/jd' },
        { icon: UserCheck, label: 'Candidate Ranking', path: '/recruiter/ranking' },
        { icon: BarChart3, label: 'Analytics', path: '/recruiter/analytics' },
        { icon: Sparkles, label: 'AI Insights', path: '/recruiter/ai-insights' },
    ];

    return (
        <aside className="w-72 shrink-0 flex flex-col bg-slate-900 min-h-screen text-slate-300">
            <div className="p-8">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                        <Sparkles size={24} />
                    </div>
                    <span className="text-xl font-black text-white tracking-tight">RESUME<span className="text-primary">AI</span></span>
                </div>

                <nav className="space-y-2">
                    {menuItems.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.path}
                            className={({ isActive }) => 
                                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                                    isActive ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-slate-800 hover:text-white'
                                }`
                            }
                        >
                            <item.icon size={20} className="shrink-0" />
                            <span className="font-bold text-sm">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className="mt-auto p-8 space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Hiring Plan</p>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-white">Enterprise</span>
                        <span className="text-[10px] font-black text-primary">80% used</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '80%' }}
                            className="h-full bg-primary"
                        />
                    </div>
                </div>

                <NavLink to="/settings" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition-all group">
                    <Settings size={20} />
                    <span className="font-bold text-sm">Settings</span>
                </NavLink>
                <button className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-500 transition-all w-full group">
                    <LogOut size={20} />
                    <span className="font-bold text-sm">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default RecruiterSidebar;
