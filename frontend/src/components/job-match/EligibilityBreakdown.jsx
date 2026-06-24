import React from 'react';
import { motion } from 'framer-motion';

const EligibilityBreakdown = ({ eligibility }) => {
    const colorMap = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        success: 'bg-success',
        warning: 'bg-warning',
        accent: 'bg-accent',
        danger: 'bg-danger'
    };

    return (
        <div className="premium-card p-6 bg-white h-full">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Eligibility Breakdown</h3>
            <div className="space-y-6">
                {eligibility.map((item, i) => (
                    <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-bold text-slate-700">{item.label}</span>
                            <span className="text-xs font-black text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                                {item.value}%
                            </span>
                        </div>
                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${item.value}%` }}
                                transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                                className={`h-full ${colorMap[item.color] || 'bg-primary'} shadow-sm relative`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                    * Scores are weighted based on JD importance rankings and industry benchmarks.
                </p>
            </div>
        </div>
    );
};

export default EligibilityBreakdown;

