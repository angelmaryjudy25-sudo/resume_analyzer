import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    LayoutDashboard, 
    FileText, 
    Briefcase, 
    Map, 
    MessageSquare, 
    Settings, 
    Menu, 
    X,
    LogOut,
    Target
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, label, path, active, onClick }) => (
    <motion.div 
        whileHover={{ x: 4 }}
        onClick={onClick}
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'}`}
    >
        <Icon size={20} />
        <span className="font-semibold text-sm">{label}</span>
    </motion.div>
);

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: FileText, label: 'Resume Analysis', path: '/candidate/resume-analysis' },
        { icon: Briefcase, label: 'Job Matching', path: '/candidate/job-match' },
        { icon: Target, label: 'Job Ranking', path: '/candidate/job-ranking' },
        { icon: Map, label: 'Career Roadmap', path: '/candidate/career-roadmap' },
        { icon: MessageSquare, label: 'AI Assistant', path: '/candidate/ai-assistant' },
    ];

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <>
            {/* Mobile Toggle */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-premium border border-slate-200"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Content */}
            <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-8 pb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-primary/30">RA</div>
                            <span className="text-xl font-black text-slate-800 tracking-tight">Analyst</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-4 space-y-1">
                        {menuItems.map((item) => (
                            <SidebarItem 
                                key={item.path} 
                                {...item} 
                                active={location.pathname === item.path}
                                onClick={() => {
                                    setIsOpen(false);
                                    navigate(item.path);
                                }}
                            />
                        ))}
                    </nav>

                    {/* Footer / User */}
                    <div className="p-4 border-t border-slate-100">
                        <div className="flex items-center gap-3 p-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-primary font-bold">
                                {user?.username?.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-sm font-bold text-slate-800 truncate">{user?.username || 'Candidate'}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{user?.role}</p>
                            </div>
                        </div>
                        <button 
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 p-3 rounded-lg text-danger font-bold hover:bg-danger/5 transition-colors"
                        >
                            <LogOut size={20} />
                            <span className="text-sm">Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
