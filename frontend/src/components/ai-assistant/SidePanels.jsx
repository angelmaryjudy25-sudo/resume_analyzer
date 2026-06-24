import React from 'react';
import { motion } from 'framer-motion';
import { Search, Trash2, Zap, History, MousePointer2, ChevronRight, Star, TrendingUp } from 'lucide-react';


export const PromptSuggestions = ({ suggestions, onSelect }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
        {suggestions.map((prompt, i) => (
            <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => onSelect(prompt)}
                className="p-4 bg-white border border-slate-100 rounded-2xl text-left hover:border-primary/30 hover:shadow-premium transition-all group"
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-slate-50 text-slate-400 group-hover:text-primary rounded-lg transition-colors">
                        <MousePointer2 size={14} />
                    </div>
                </div>
                <p className="text-xs font-bold text-slate-700 leading-relaxed">{prompt}</p>
            </motion.button>
        ))}
    </div>
);

export const ChatHistoryPanel = ({ history }) => (
    <div className="premium-card bg-white h-full flex flex-col p-6 overflow-hidden">
        <div className="flex items-center gap-2 mb-8 px-2">
            <History size={18} className="text-primary" />
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Chat History</h3>
        </div>
        
        <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <input 
                type="text" 
                placeholder="Search chats..." 
                className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-9 pr-4 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
            />
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
            {history.map((chat) => (
                <div key={chat.id} className="p-3 hover:bg-slate-50 rounded-xl group cursor-pointer transition-colors border border-transparent hover:border-slate-100">
                    <div className="flex justify-between items-start gap-2">
                        <div className="min-w-0">
                            <h4 className="text-xs font-bold text-slate-700 truncate">{chat.title}</h4>
                            <p className="text-[10px] font-medium text-slate-400 mt-1">{chat.date}</p>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 p-1 text-slate-300 hover:text-danger transition-all">
                            <Trash2 size={12} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const QuickActions = ({ actions, onSelect }) => (
    <div className="space-y-3">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Quick AI Commands</h3>
        {actions.map((action, i) => (
            <button
                key={i}
                onClick={() => onSelect(action.prompt)}
                className="w-full flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-primary/20 hover:shadow-sm transition-all group"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/5 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                        <Zap size={14} />
                    </div>
                    <span className="text-xs font-black text-slate-800">{action.label}</span>
                </div>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-primary" />
            </button>
        ))}
    </div>
);

export const AIInsightsPanel = ({ insights }) => {
    const getIcon = (type) => {
        if (type === 'positive') return <Star size={14} className="text-success" />;
        return <TrendingUp size={14} className="text-primary" />;
    };

    return (
        <div className="premium-card p-6 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Star size={60} />
            </div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-2">Contextual AI Insights</h3>
            <div className="space-y-4">
                {insights.map((insight, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                    >
                        <div className="mt-1">{getIcon(insight.type)}</div>
                        <p className="text-[11px] font-bold text-slate-700 leading-relaxed">{insight.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

