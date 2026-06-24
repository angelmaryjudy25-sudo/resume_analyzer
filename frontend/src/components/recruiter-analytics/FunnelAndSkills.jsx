import React from 'react';
import { motion } from 'framer-motion';
import { 
    ResponsiveContainer, FunnelChart, Funnel, LabelList, 
    BarChart, Bar, XAxis, YAxis, Tooltip, Cell, 
    PieChart, Pie
} from 'recharts';

export const HiringFunnelChart = ({ data }) => (
    <div className="premium-card p-6 bg-white h-[400px]">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-8">Recruitment Funnel</h3>
        <ResponsiveContainer width="100%" height="90%">
            <FunnelChart>
                <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold' }}
                />
                <Funnel
                    dataKey="value"
                    data={data}
                    isAnimationActive
                >
                    <LabelList position="right" fill="#64748b" stroke="none" dataKey="name" />
                </Funnel>
            </FunnelChart>
        </ResponsiveContainer>
    </div>
);

export const SkillAnalytics = ({ topSkills }) => (
    <div className="premium-card p-6 bg-white h-[400px]">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-8">Top Talent Skills</h3>
        <ResponsiveContainer width="100%" height="90%">
            <BarChart data={topSkills} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                <Tooltip 
                    cursor={{ fill: 'rgba(99, 102, 241, 0.05)' }} 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {topSkills.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index < 3 ? '#6366f1' : '#cbd5e1'} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
);
