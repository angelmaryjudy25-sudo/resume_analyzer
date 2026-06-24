import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

const RecruiterMetrics = ({ metrics }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {metrics.map((metric, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="premium-card p-6 bg-white border border-slate-100 flex flex-col justify-between"
                >
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{metric.label}</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-3xl font-black text-slate-800">
                                <AnimatedCounter value={metric.value} />
                                {metric.label.includes('Score') && '%'}
                            </h3>
                        </div>
                    </div>
                    
                    <div className="mt-4 flex items-center gap-2">
                        <div className={`flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-black ${
                            metric.type === 'up' ? 'bg-success/10 text-success' : 
                            metric.type === 'down' ? 'bg-danger/10 text-danger' : 
                            'bg-slate-100 text-slate-400'
                        }`}>
                            {metric.type === 'up' && <ArrowUpRight size={10} />}
                            {metric.type === 'down' && <ArrowDownRight size={10} />}
                            {metric.type === 'neutral' && <Minus size={10} />}
                            {metric.change}
                        </div>
                        <span className="text-[10px] font-bold text-slate-400">vs last month</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default RecruiterMetrics;
