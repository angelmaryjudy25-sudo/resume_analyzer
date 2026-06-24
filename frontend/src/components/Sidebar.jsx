import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FileText, 
    Briefcase, 
    Map, 
    MessageSquare, 
    Menu, 
    X,
    LogOut,
    Target,
    Home,
    Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, label, path, active, onClick }) => (
    <motion.div 
        whileHover={{ x: 4 }}
        onClick={onClick}
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'}`}
    >
        <Icon size={20} className="shrink-0" />
        <span className="font-semibold text-sm">{label}</span>
    </motion.div>
);

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: FileText, label: 'Resume Analysis', path: '/candidate/resume-analysis' },
        { icon: Briefcase, label: 'Job Matching', path: '/candidate/job-match' },
        { icon: Target, label: 'Job Ranking', path: '/candidate/job-ranking' },
        { icon: Map, label: 'Career Roadmap', path: '/candidate/career-roadmap' },
        { icon: MessageSquare, label: 'AI Assistant', path: '/candidate/ai-assistant' },
    ];

    const handleSignOut = async () => {
        if (user) {
            await logout();
            navigate('/login');
        } else {
            navigate('/');
        }
    };

    const sidebarContent = (
        <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-primary/30">
                        <Sparkles size={16} />
                    </div>
                    <span className="text-lg font-black text-slate-800 tracking-tight">ResumeAI</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
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
                <div className="flex items-center gap-3 p-2 mb-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                        {(user?.username?.charAt(0) || 'G').toUpperCase()}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-bold text-slate-800 truncate">{user?.username || 'Guest'}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                            {user?.role || 'Candidate session'}
                        </p>
                    </div>
                </div>
                <button 
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 p-3 rounded-lg text-slate-600 font-bold hover:bg-slate-100 transition-colors"
                >
                    {user ? <LogOut size={18} /> : <Home size={18} />}
                    <span className="text-sm">{user ? 'Sign Out' : 'Back to Home'}</span>
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* ── DESKTOP: in-flow sidebar (w-64, shrink-0) ── */}
            <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-white border-r border-slate-200 min-h-screen">
                {sidebarContent}
            </aside>

            {/* ── MOBILE: fixed overlay sidebar ── */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
                        />
                        {/* Slide-in panel */}
                        <motion.aside
                            initial={{ x: -256 }}
                            animate={{ x: 0 }}
                            exit={{ x: -256 }}
                            transition={{ type: 'tween', duration: 0.25 }}
                            className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 lg:hidden"
                        >
                            {sidebarContent}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Mobile toggle button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-slate-200"
            >
                <Menu size={22} />
            </button>
        </>
    );
};

export default Sidebar;
