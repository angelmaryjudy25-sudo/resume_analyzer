import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Clock, Award } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

const RoadmapHero = ({ data }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="premium-card bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Target size={180} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary/20 text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20">
                            Personalized Path
                        </span>
                    </div>
                    <h1 className="text-4xl font-black mb-2">AI Career Roadmap</h1>
                    <p className="text-slate-400 text-lg font-medium">Targeting <span className="text-white font-bold">{data.targetJob}</span> Role</p>
                    
                    <div className="mt-8 flex flex-wrap gap-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/10 rounded-lg text-blue-400"><Clock size={20} /></div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-slate-500">Duration</p>
                                <p className="text-sm font-bold">{data.estimatedTime}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/10 rounded-lg text-success"><Award size={20} /></div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-slate-500">Goal Match</p>
                                <p className="text-sm font-bold">{data.targetMatch}%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-125 group-hover:scale-150 transition-transform duration-700" />
                        <div className="relative w-48 h-48 rounded-full border-8 border-white/5 flex flex-col items-center justify-center bg-slate-800 shadow-2xl">
                            <div className="text-5xl font-black flex items-baseline">
                                <AnimatedCounter value={data.currentMatch} />
                                <span className="text-xl text-slate-400">%</span>
                            </div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">Current Match</p>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 }}
                                className="absolute -bottom-2 -right-2 bg-success text-white p-2 rounded-xl shadow-lg border-2 border-slate-900"
                            >
                                <TrendingUp size={16} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default RoadmapHero;
