import React from 'react';
import { 
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, 
    AreaChart, Area
} from 'recharts';

export const SkillGapAnalytics = ({ gaps }) => (
    <div className="premium-card p-6 bg-white h-[400px]">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-8">Supply vs Demand Skill Gap</h3>
        <ResponsiveContainer width="100%" height="90%">
            <BarChart data={gaps}>
                <XAxis dataKey="skill" tick={{ fontSize: 10, fontWeight: 'bold' }} />
                <YAxis hide />
                <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }} />
                <Bar dataKey="requested" name="Demand" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                <Bar dataKey="available" name="Supply" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export const JobDemandAnalytics = ({ demand }) => (
    <div className="premium-card p-6 bg-white h-[400px]">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-8">Job Category Demand Trends</h3>
        <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={demand}>
                <XAxis dataKey="month" tick={{ fontSize: 10, fontWeight: 'bold' }} />
                <YAxis tick={{ fontSize: 10, fontWeight: 'bold' }} />
                <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="frontend" stackId="1" stroke="#6366f1" fill="#6366f1" fillOpacity={0.1} />
                <Area type="monotone" dataKey="backend" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} />
                <Area type="monotone" dataKey="devops" stackId="1" stroke="#ec4899" fill="#ec4899" fillOpacity={0.1} />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);
