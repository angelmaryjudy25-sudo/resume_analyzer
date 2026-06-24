import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

const ExecutiveSummary = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {data.map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="premium-card p-5 bg-white border border-slate-100 flex flex-col justify-between group hover:border-primary/20 transition-all"
                >
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{item.label}</p>
                        <div className="flex items-baseline gap-1">
                            <h3 className="text-2xl font-black text-slate-800">
                                <AnimatedCounter value={item.value} />
                                {item.suffix}
                            </h3>
                        </div>
                    </div>
                    
                    <div className="mt-3 flex items-center gap-1.5">
                        <div className={`flex items-center text-[9px] font-black ${
                            item.change.startsWith('+') ? 'text-success' : item.change.startsWith('-') ? 'text-danger' : 'text-slate-400'
                        }`}>
                            {item.change.startsWith('+') ? <TrendingUp size={10} /> : item.change.startsWith('-') ? <TrendingDown size={10} /> : <Minus size={10} />}
                            <span className="ml-0.5">{item.change}</span>
                        </div>
                        <span className="text-[8px] font-bold text-slate-400 uppercase">Growth</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ExecutiveSummary;
