import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const SuitabilityCard = ({ title, items, type = 'success' }) => {
    const isSuccess = type === 'success';
    const Icon = isSuccess ? CheckCircle2 : AlertCircle;
    const colorClass = isSuccess ? 'text-success' : 'text-warning';
    const bgClass = isSuccess ? 'bg-success/5' : 'bg-warning/5';

    return (
        <div className={`premium-card p-6 h-full ${bgClass} border-${isSuccess ? 'success' : 'warning'}/20`}>
            <div className="flex items-center gap-3 mb-6">
                <Icon size={20} className={colorClass} />
                <h3 className={`text-sm font-black uppercase tracking-widest ${colorClass}`}>{title}</h3>
            </div>
            <ul className="space-y-4">
                {items.map((item, i) => (
                    <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-3 text-sm font-bold text-slate-700 leading-relaxed"
                    >
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${isSuccess ? 'bg-success' : 'bg-warning'}`} />
                        {item}
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default SuitabilityCard;
