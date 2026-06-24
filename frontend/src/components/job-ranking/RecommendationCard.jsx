import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const RecommendationCard = ({ recommendation }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="premium-card bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-white relative overflow-hidden shadow-xl shadow-indigo-200"
        >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Sparkles size={120} />
            </div>

            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/20 rounded-lg">
                    <Sparkles size={20} className="text-white" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-indigo-100">AI Career Recommendation</h3>
            </div>

            <div className="mb-8">
                <p className="text-indigo-100 text-sm font-medium mb-1">Recommended Best-Fit Path:</p>
                <h2 className="text-3xl font-black">{recommendation.title}</h2>
            </div>

            <div className="space-y-4 mb-8">
                {recommendation.reasoning.map((reason, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10"
                    >
                        <CheckCircle2 size={16} className="text-indigo-200 mt-0.5 shrink-0" />
                        <p className="text-xs font-bold leading-relaxed">{reason}</p>
                    </motion.div>
                ))}
            </div>

            <button className="w-full py-4 bg-white text-indigo-600 rounded-xl text-sm font-black flex items-center justify-center gap-2 hover:bg-indigo-50 transition-all group">
                Apply for this matched role <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    );
};

export default RecommendationCard;
