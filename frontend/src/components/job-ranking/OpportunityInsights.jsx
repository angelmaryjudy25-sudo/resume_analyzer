import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Target } from 'lucide-react';

const OpportunityInsights = ({ insights }) => {
    const getIcon = (type) => {
        if (type === 'positive') return <Target size={18} className="text-success" />;
        if (type === 'opportunity') return <TrendingUp size={18} className="text-warning" />;
        return <Lightbulb size={18} className="text-primary" />;
    };

    const getBg = (type) => {
        if (type === 'positive') return 'bg-success/5 border-success/10';
        if (type === 'opportunity') return 'bg-warning/5 border-warning/10';
        return 'bg-primary/5 border-primary/10';
    };

    return (
        <div className="premium-card p-6 bg-white shrink-0 h-full">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Career Insights</h3>
            <div className="space-y-4">
                {insights.map((insight, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className={`flex items-start gap-4 p-4 rounded-2xl border ${getBg(insight.type)}`}
                    >
                        <div className="mt-1 shrink-0">{getIcon(insight.type)}</div>
                        <p className="text-xs font-bold text-slate-700 leading-relaxed">{insight.text}</p>
                    </motion.div>
                ))}
            </div>
            <div className="mt-8">
                <button className="w-full py-3 border border-slate-200 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
                    Generate More Insights
                </button>
            </div>
        </div>
    );
};

export default OpportunityInsights;
