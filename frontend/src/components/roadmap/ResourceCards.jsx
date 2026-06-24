import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, BarChart } from 'lucide-react';

export const CourseCard = ({ course }) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className="premium-card p-6 bg-white border border-slate-100 flex flex-col justify-between"
    >
        <div>
            <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black text-slate-400 uppercase bg-slate-50 px-2 py-1 rounded">{course.provider}</span>
                <span className="text-[10px] font-black text-primary uppercase">{course.difficulty}</span>
            </div>
            <h4 className="text-sm font-black text-slate-800 leading-snug mb-4">{course.name}</h4>
        </div>
        
        <div className="space-y-4">
            <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500">
                <div className="flex items-center gap-1.5"><Clock size={12} /> {course.duration}</div>
                <div className="flex items-center gap-1.5"><BarChart size={12} /> {course.difficulty}</div>
            </div>
            <button className="w-full py-2 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2">
                Enrol Now <ExternalLink size={12} />
            </button>
        </div>
    </motion.div>
);

export const ProjectRecommendationCard = ({ project }) => (
    <motion.div 
        whileHover={{ scale: 1.02 }}
        className="premium-card p-6 bg-white border border-slate-100 relative group overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <div className="w-24 h-24 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-black text-slate-800">{project.name}</h4>
                <span className="text-[10px] font-black uppercase text-accent bg-accent/10 px-2 py-1 rounded">{project.difficulty}</span>
            </div>
            <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">{project.description}</p>
            
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-50 text-slate-400 text-[10px] font-black rounded border border-slate-100">{t}</span>
                    ))}
                </div>
                <button className="w-full py-3 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest hover:shadow-lg hover:shadow-primary/30 transition-all">
                    View Project Brief
                </button>
            </div>
        </div>
    </motion.div>
);
