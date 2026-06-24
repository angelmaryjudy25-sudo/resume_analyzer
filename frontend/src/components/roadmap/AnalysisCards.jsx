import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export const ProgressTracker = ({ progress }) => {
    const data = [
        { name: 'Completed', value: progress.completed, color: '#10B981' },
        { name: 'In Progress', value: progress.inProgress, color: '#4F46E5' },
        { name: 'Remaining', value: progress.remaining, color: '#E2E8F0' },
    ];

    return (
        <div className="premium-card p-6 bg-white shrink-0">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Course Progress</h3>
            <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-black text-slate-800">{progress.completed}%</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase">Overall</span>
                </div>
            </div>
            <div className="mt-4 space-y-2">
                {data.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-[10px] font-bold text-slate-500 uppercase">{item.name}</span>
                        </div>
                        <span className="text-[10px] font-black text-slate-800">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const CareerImpactAnalysis = ({ impact }) => (
    <div className="premium-card p-6 bg-white overflow-hidden">
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8">Career Match Impact</h3>
        <div className="flex flex-col md:flex-row items-center gap-4 relative">
            {impact.map((step, i) => (
                <React.Fragment key={i}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-1 text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 relative z-10 w-full"
                    >
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 leading-tight h-8 flex items-center justify-center">
                            {step.step}
                        </p>
                        <div className={`text-2xl font-black ${
                            step.color === 'success' ? 'text-success' : 'text-primary'
                        }`}>
                            {step.match}%
                        </div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase mt-1">Match Rate</p>
                    </motion.div>
                    {i < impact.length - 1 && (
                        <div className="hidden md:block text-slate-300">
                            <div className="w-4 h-0.5 bg-slate-100" />
                        </div>
                    )}
                </React.Fragment>
            ))}
            {/* Background progress arrow */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-50 -translate-y-1/2 hidden md:block" />
        </div>
    </div>
);
