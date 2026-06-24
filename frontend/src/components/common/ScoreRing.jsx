import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const ScoreRing = ({ score, label, size = 160, color = "#4F46E5" }) => {
    const radius = (size / 2) - 10;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-center" style={{ width: size, height: size + 40 }}>
            <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
                <svg width={size} height={size} className="rotate-[-90deg]">
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        stroke="#E2E8F0"
                        strokeWidth="8"
                    />
                    <motion.circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        stroke={color}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute flex flex-col items-center">
                    <span className="text-3xl font-bold text-slate-800">
                        <AnimatedCounter value={score} />%
                    </span>
                </div>
            </div>
            {label && <span className="mt-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">{label}</span>}
        </div>
    );
};

export default ScoreRing;
