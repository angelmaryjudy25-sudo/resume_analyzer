import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Info, Star } from 'lucide-react';

const AIInsightCard = ({ insights }) => {
    const icons = {
        strength: <Star size={18} className="text-primary" />,
        opportunity: <Lightbulb size={18} className="text-warning" />,
        ranking: <Info size={18} className="text-accent" />
    };

    const bgColors = {
        strength: 'bg-primary/5',
        opportunity: 'bg-warning/5',
        ranking: 'bg-accent/5'
    };

    return (
        <div className="premium-card p-6 bg-white shrink-0">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">AI Insights</h3>
            <div className="space-y-4">
                {insights.map((insight, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className={`flex items-start gap-4 p-4 rounded-2xl ${bgColors[insight.type]}`}
                    >
                        <div className="mt-1">{icons[insight.type]}</div>
                        <p className="text-xs font-bold text-slate-700 leading-relaxed">{insight.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AIInsightCard;
