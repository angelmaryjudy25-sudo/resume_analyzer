import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ShieldAlert, UserPlus, Ghost, Database, Download, HardDriveUpload, ChevronRight } from 'lucide-react';

export const AdminActionsPanel = () => {
    const actions = [
        { label: 'Register Recruiter', icon: UserPlus, color: 'bg-indigo-600' },
        { label: 'Disable User Account', icon: Ghost, color: 'bg-slate-700' },
        { label: 'Export Global Data', icon: Download, color: 'bg-slate-900' },
        { label: 'Trigger AWS Backup', icon: HardDriveUpload, color: 'bg-primary' },
    ];

    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 h-full">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-6">Quick Admin Actions</h3>
            <div className="grid grid-cols-1 gap-3">
                {actions.map((action, i) => (
                    <button 
                        key={i}
                        className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-300 transition-all group"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-2 ${action.color} text-white rounded-lg`}>
                                <action.icon size={14} />
                            </div>
                            <span className="text-xs font-bold text-slate-700">{action.label}</span>
                        </div>
                        <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-950 transition-colors" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export const NotificationCenter = ({ notifications, isOpen }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="absolute right-0 top-14 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl z-[200] overflow-hidden"
            >
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest">Platform Alerts</h4>
                    <span className="text-[10px] font-black text-white bg-danger px-1.5 py-0.5 rounded-full">{notifications.length}</span>
                </div>
                <div className="max-h-[400px] overflow-y-auto">
                    {notifications.map((notif, i) => (
                        <div key={notif.id} className="p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer last:border-0 group">
                            <div className="flex gap-4">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                    notif.type === 'danger' ? 'bg-danger/10 text-danger' : 
                                    notif.type === 'warning' ? 'bg-warning/10 text-warning' : 'bg-primary/10 text-primary'
                                }`}>
                                    <ShieldAlert size={16} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-bold text-slate-700 leading-snug group-hover:text-slate-950">{notif.text}</p>
                                    <p className="text-[9px] font-black uppercase text-slate-400 mt-1">Just Now</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="w-full py-3 text-[10px] font-black text-primary uppercase bg-slate-50 hover:bg-slate-100 border-t border-slate-100">Clear All Alerts</button>
            </motion.div>
        )}
    </AnimatePresence>
);
