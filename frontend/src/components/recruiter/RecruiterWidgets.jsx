import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Upload, FileText, BarChart3, Sparkles } from 'lucide-react';

export const TaskWidget = ({ tasks }) => (
    <div className="premium-card p-6 bg-white shrink-0">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">Execution Tasks</h3>
        <div className="space-y-4">
            {tasks.map((task) => (
                <div key={task.id} className="flex items-center gap-4 transition-all hover:bg-slate-50 p-2 rounded-xl group cursor-pointer">
                    <div className="text-slate-200 group-hover:text-primary transition-colors">
                        <Circle size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-700 leading-tight">{task.text}</p>
                        <span className={`text-[8px] font-black uppercase mt-1 inline-block ${
                            task.priority === 'High' ? 'text-danger' : 
                            task.priority === 'Medium' ? 'text-warning' : 'text-slate-400'
                        }`}>{task.priority} Priority</span>
                    </div>
                </div>
            ))}
        </div>
        <button className="w-full mt-6 py-2.5 border border-slate-200 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
            Manage All Tasks
        </button>
    </div>
);

export const ActivityTimeline = ({ activity }) => (
    <div className="premium-card p-6 bg-white shrink-0">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">Recent Activity</h3>
        <div className="space-y-6">
            {activity.map((item, i) => (
                <div key={item.id} className="relative flex gap-4">
                    {i !== activity.length - 1 && (
                        <div className="absolute left-[15px] top-8 bottom-[-24px] w-0.5 bg-slate-100" />
                    )}
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs font-medium text-slate-700 leading-snug">
                            <span className="font-black">{item.user}</span> {item.action}
                        </p>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.time}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const QuickActionsPanel = ({ onAction }) => {
    const actions = [
        { icon: Upload, label: 'Upload Resumes', color: 'bg-primary' },
        { icon: FileText, label: 'Post New Job', color: 'bg-indigo-600' },
        { icon: BarChart3, label: 'View Rankings', color: 'bg-accent' },
        { icon: Sparkles, label: 'AI Insights', color: 'bg-secondary' },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {actions.map((action, i) => (
                <motion.button 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-premium transition-all flex flex-col items-center gap-3 group"
                >
                    <div className={`p-3 ${action.color} text-white rounded-xl shadow-lg ring-4 ring-white`}>
                        <action.icon size={20} />
                    </div>
                    <span className="text-xs font-black text-slate-700 group-hover:text-primary">{action.label}</span>
                </motion.button>
            ))}
        </div>
    );
};
