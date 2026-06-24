import React from 'react';
import { Search, Bell, User, MessageCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const TopNavbar = () => {
    const { user } = useAuth();

    return (
        <header className="h-20 bg-white border-b border-slate-200 sticky top-0 z-30 px-4 md:px-8 flex items-center justify-between">
            {/* Left Space for Mobile Toggle */}
            <div className="w-12 lg:hidden" />

            {/* Search */}
            <div className="hidden md:flex relative w-96 max-w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search resumes, jobs, or guidance..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
            </div>
            
            {/* Right Icons */}
            <div className="flex items-center gap-2 md:gap-4">
                <button className="p-2.5 text-slate-500 hover:bg-slate-50 rounded-xl transition-all relative">
                    <MessageCircle size={20} />
                </button>
                
                <button className="p-2.5 text-slate-500 hover:bg-slate-50 rounded-xl transition-all relative">
                    <Bell size={20} />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-danger rounded-full border-2 border-white"></span>
                </button>
                
                <div className="flex items-center gap-3 pl-4 ml-2 border-l border-slate-200">
                    <div className="hidden sm:block text-right leading-none">
                        <p className="text-sm font-bold text-slate-800">{user?.username || 'Candidate'}</p>
                        <span className="text-[10px] text-primary font-black uppercase tracking-widest">Premium Plan</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold overflow-hidden shadow-inner font-inter">
                        {user?.username?.charAt(0).toUpperCase()}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopNavbar;
