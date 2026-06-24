import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Crosshair } from 'lucide-react';

const AIRecommendationCard = ({ recommendations }) => {
    const getIcon = (type) => {
        if (type === 'strategy') return <Crosshair size={18} className="text-secondary" />;
        if (type === 'efficiency') return <Zap size={18} className="text-accent" />;
        return <Lightbulb size={18} className="text-warning" />;
    };

    const getBg = (type) => {
        if (type === 'strategy') return 'bg-secondary/5 border-secondary/10';
        if (type === 'efficiency') return 'bg-accent/5 border-accent/10';
        return 'bg-warning/5 border-warning/10';
    };

    return (
        <div className="premium-card p-6 bg-white shrink-0 h-full">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Execution Strategy</h3>
            <div className="space-y-4">
                {recommendations.map((rec, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className={`flex items-start gap-4 p-4 rounded-2xl border ${getBg(rec.type)}`}
                    >
                        <div className="mt-1 shrink-0">{getIcon(rec.type)}</div>
                        <p className="text-xs font-bold text-slate-700 leading-relaxed">{rec.text}</p>
                    </motion.div>
                ))}
            </div>
            <div className="mt-8">
                <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all">
                    Update Strategy
                </button>
            </div>
        </div>
    );
};

export default AIRecommendationCard;
