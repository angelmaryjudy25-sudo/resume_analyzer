import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MatchScoreRing = ({ score = 82 }) => {
    const [displayScore, setDisplayScore] = useState(0);
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (displayScore / 100) * circumference;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplayScore(score);
        }, 500);
        return () => clearTimeout(timeout);
    }, [score]);

    return (
        <div className="glass-card p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <h3 className="text-lg font-bold mb-6 self-start">Match Score</h3>
            
            <div className="relative flex items-center justify-center">
                <svg width="180" height="180" className="rotate-[-90deg]">
                    {/* Background Track */}
                    <circle
                        cx="90"
                        cy="90"
                        r={radius}
                        fill="transparent"
                        stroke="rgba(51, 65, 85, 0.5)"
                        strokeWidth="12"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        cx="90"
                        cy="90"
                        r={radius}
                        fill="transparent"
                        stroke="url(#scoreGradient)"
                        strokeWidth="12"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Score Text */}
                <div className="absolute flex flex-col items-center">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-4xl font-black bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent"
                    >
                        {displayScore}%
                    </motion.span>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Ready</span>
                </div>
            </div>

            <div className="mt-6 flex gap-4 w-full">
                <div className="flex-1 text-center">
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Status</p>
                    <p className="text-emerald-400 font-bold text-sm">Strong</p>
                </div>
                <div className="w-[1px] bg-slate-700 h-8 self-center" />
                <div className="flex-1 text-center">
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Position</p>
                    <p className="text-slate-100 font-bold text-sm">Top 5%</p>
                </div>
            </div>
        </div>
    );
};

export default MatchScoreRing;
