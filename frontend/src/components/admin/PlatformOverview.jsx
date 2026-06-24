import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

const PlatformOverview = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-all cursor-default"
                >
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</p>
                        <div className={`p-1 rounded bg-slate-50 text-[10px] font-black flex items-center gap-0.5 ${
                            item.type === 'up' ? 'text-success' : 'text-danger'
                        }`}>
                            {item.type === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                            {item.change}
                        </div>
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-black text-slate-900 leading-none tracking-tight">
                            <AnimatedCounter value={item.value} />
                        </h3>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default PlatformOverview;
