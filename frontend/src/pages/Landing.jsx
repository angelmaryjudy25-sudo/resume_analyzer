import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                    AI Resume Analyzer
                </h1>
                <p className="text-slate-400 text-xl max-w-2xl mb-10 leading-relaxed">
                    Elevate your career with AI-driven insights. Perfect your resume, 
                    match with ideal jobs, and follow a personalized roadmap to success.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/register" className="btn-saas bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 text-lg">
                        Get Started for Free
                    </Link>
                    <Link to="/login" className="btn-saas border border-slate-700 hover:bg-slate-800 text-slate-200 px-8 py-4 text-lg">
                        Login to Dashboard
                    </Link>
                </div>
            </motion.div>
            
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                {[
                    { title: 'AI Scoring', desc: 'Instant ATS-driven resume scoring' },
                    { title: 'Job Matching', desc: 'Find your perfect role algorithmically' },
                    { title: 'Career Roadmap', desc: 'Milestones tailored to your skill gaps' }
                ].map((feature, i) => (
                    <div key={i} className="glass-card p-6 border-slate-800">
                        <h3 className="font-bold text-slate-100 mb-2">{feature.title}</h3>
                        <p className="text-slate-500 text-sm">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Landing;
