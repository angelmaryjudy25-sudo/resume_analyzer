import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Target, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

export const AIRecruiterInsights = ({ insights }) => (
    <div className="premium-card p-6 bg-white h-full">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6 px-2">AI Recruiter Insights</h3>
        <div className="space-y-4">
            {insights.map((insight, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-start gap-4 p-4 rounded-2xl border ${
                        insight.type === 'critical' ? 'bg-danger/5 border-danger/10' : 
                        insight.type === 'trend' ? 'bg-primary/5 border-primary/10' : 'bg-success/5 border-success/10'
                    }`}
                >
                    <div className="mt-1 shrink-0">
                        {insight.type === 'critical' ? <AlertTriangle size={16} className="text-danger" /> :
                         insight.type === 'trend' ? <TrendingUp size={16} className="text-primary" /> : <Lightbulb size={16} className="text-success" />}
                    </div>
                    <p className="text-xs font-bold text-slate-700 leading-relaxed">{insight.text}</p>
                </motion.div>
            ))}
        </div>
    </div>
);

export const HiringRecommendations = ({ recommendations }) => (
    <div className="premium-card p-8 bg-slate-900 text-white h-full relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles size={120} />
        </div>
        <div className="relative z-10">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Executive Recommendations</h3>
            <div className="space-y-8">
                {recommendations.map((rec, i) => (
                    <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                            <Zap size={14} className="text-primary" />
                        </div>
                        <div>
                            <h4 className="text-sm font-black mb-1">{rec.type === 'strategy' ? 'Recruitment Strategy' : rec.type === 'training' ? 'Upskilling Plan' : 'Talent Sourcing'}</h4>
                            <p className="text-xs text-slate-400 font-medium leading-relaxed">{rec.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-10 py-3 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                Generate Strategy Report
            </button>
        </div>
    </div>
);

export const DepartmentAnalytics = ({ departments }) => (
    <div className="premium-card p-6 bg-white overflow-hidden">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-8">Departmental Performance</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="text-[10px] font-black text-slate-400 uppercase border-b border-slate-50">
                        <th className="px-6 py-4">Department</th>
                        <th className="px-6 py-4">Avg Match Score</th>
                        <th className="px-6 py-4">Hires YTD</th>
                        <th className="px-6 py-4">Efficiency</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    {departments.map((dept, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 text-xs font-black text-slate-700">{dept.name}</td>
                            <td className="px-6 py-4 text-xs font-bold text-slate-600">{dept.matches}%</td>
                            <td className="px-6 py-4 text-xs font-bold text-slate-600">{dept.hires}</td>
                            <td className="px-6 py-4">
                                <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full" style={{ width: `${dept.matches}%` }} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
