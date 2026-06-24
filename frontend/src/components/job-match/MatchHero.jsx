import React from 'react';
import { motion } from 'framer-motion';
import ScoreRing from '../common/ScoreRing';

const MatchHero = ({ score, label, color }) => {
    const colorMap = {
        success: '#10B981',
        primary: '#4F46E5',
        warning: '#F59E0B',
        danger: '#EF4444'
    };

    const textColorClass = {
        success: 'text-success',
        primary: 'text-primary',
        warning: 'text-warning',
        danger: 'text-danger'
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="premium-card bg-gradient-to-br from-white to-slate-50 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
            
            <ScoreRing score={score} size={220} aria-label="Match Score" color={colorMap[color]} />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="mt-6"
            >
                <h2 className={`text-4xl font-black ${textColorClass[color]} mb-2`}>{label}</h2>
                <p className="text-slate-400 font-medium max-w-md">
                    Based on your resume and the job description, you have a {score}% score.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default MatchHero;
