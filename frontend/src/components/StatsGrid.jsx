import React from 'react';
import { motion } from 'framer-motion';
import { mockStats } from '../mocks/candidateData';
import { TrendingUp, Award, Target, Cpu, MousePointerClick } from 'lucide-react';

const icons = [Award, Target, TrendingUp, Cpu, MousePointerClick];

const StatCard = ({ stat, index }) => {
    const Icon = icons[index % icons.length];

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ translateY: -5 }}
            className="glass-card p-6 flex flex-col justify-between group cursor-default"
        >
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-slate-800 border border-slate-700 transition-colors group-hover:border-primary-500/50`}>
                    <Icon size={24} className={stat.color} />
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-800 text-slate-400">
                    {stat.trend}
                </span>
            </div>
            
            <div>
                <h4 className="text-slate-400 font-medium text-sm mb-1">{stat.label}</h4>
                <div className="flex items-baseline gap-1">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-3xl font-bold"
                    >
                        {stat.value}
                    </motion.span>
                    <span className="text-xl font-medium text-slate-400">{stat.suffix}</span>
                </div>
            </div>
        </motion.div>
    );
};

const StatsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {mockStats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
            ))}
        </div>
    );
};

export default StatsGrid;
