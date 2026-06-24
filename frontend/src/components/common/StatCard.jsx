import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const StatCard = ({ icon: Icon, label, value, suffix = "", trend, color = "primary" }) => {
    const isPositive = trend?.startsWith('+');
    
    return (
        <motion.div 
            whileHover={{ y: -4 }}
            className="premium-card premium-card-hover p-6 bg-white"
            aria-label={`${label}: ${value}${suffix}`}
        >
            <div className="flex justify-between items-start mb-4">
                <div className={`p-2.5 rounded-lg bg-${color}/10 text-${color}`}>
                    <Icon size={22} />
                </div>
                {trend && (
                    <div className={`flex items-center gap-1 text-xs font-bold ${isPositive ? 'text-success' : 'text-danger'}`}>
                        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {trend}
                    </div>
                )}
            </div>
            
            <h4 className="text-slate-500 font-medium text-sm mb-1">{label}</h4>
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-slate-800">
                    <AnimatedCounter value={value} />
                </span>
                <span className="text-lg font-medium text-slate-400">{suffix}</span>
            </div>
        </motion.div>
    );
};

export default StatCard;
