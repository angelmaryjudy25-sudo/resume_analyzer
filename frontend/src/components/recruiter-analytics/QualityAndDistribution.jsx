import React from 'react';
import { 
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, 
    PieChart, Pie, Cell, Legend
} from 'recharts';

export const MatchScoreDistribution = ({ distribution }) => (
    <div className="premium-card p-6 bg-white h-[400px]">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-8">Match Score Distribution</h3>
        <ResponsiveContainer width="100%" height="90%">
            <BarChart data={distribution}>
                <XAxis dataKey="range" tick={{ fontSize: 10, fontWeight: 'bold' }} />
                <YAxis hide />
                <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="count" fill="#4F46E5" radius={[6, 6, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export const CandidateQualityAnalytics = ({ quality }) => {
    const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b'];

    return (
        <div className="premium-card p-6 bg-white h-[400px]">
            <div className="flex justify-between items-start mb-8">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Candidate Quality Index</h3>
                <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase">Avg ATS Score</p>
                    <p className="text-lg font-black text-primary">{quality.avgAtsScore}/100</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="h-48 md:h-full">
                    <ResponsiveContainer width="100%" height="90%">
                        <PieChart>
                            <Pie
                                data={quality.education}
                                innerRadius={40}
                                outerRadius={60}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {quality.education.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ borderRadius: '10px', fontSize: '10px' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <p className="text-center text-[10px] font-black text-slate-400 uppercase -mt-4">Education Level</p>
                </div>
                <div className="h-48 md:h-full">
                    <ResponsiveContainer width="100%" height="90%">
                        <BarChart data={quality.experience} layout="vertical">
                            <XAxis type="number" hide />
                            <YAxis dataKey="range" type="category" width={60} tick={{ fontSize: 9, fontWeight: 'bold' }} />
                            <Bar dataKey="count" fill="#cbd5e1" radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                    <p className="text-center text-[10px] font-black text-slate-400 uppercase -mt-4">Experience Range</p>
                </div>
            </div>
        </div>
    );
};
