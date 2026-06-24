import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const WelcomeSection = () => {
    const { user } = useAuth();

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-8 glass-card bg-gradient-to-br from-primary-600/20 to-transparent flex justify-between items-center overflow-hidden relative"
        >
            <div className="z-10">
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">Welcome Back, {user?.username || 'Candidate'}</span>
                    <motion.span 
                        animate={{ rotate: [0, 20, 0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                        className="text-3xl"
                    >
                        👋
                    </motion.span>
                </div>
                <p className="text-slate-400 text-lg">Track your career growth and discover matching opportunities.</p>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle cx="150" cy="50" r="100" fill="currentColor" className="text-primary-500" />
                </svg>
            </div>
        </motion.div>
    );
};

export default WelcomeSection;
