import React from 'react';
import { 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis 
} from 'recharts';
import { motion } from 'framer-motion';

const JobComparisonChart = ({ jobs }) => {
    // Data for Bar Chart
    const barData = jobs.map(job => ({
        name: job.title.length > 15 ? job.title.substring(0, 15) + '...' : job.title,
        Skills: job.comparisonData.skills,
        Experience: job.comparisonData.experience,
        Education: job.comparisonData.education,
        Certifications: job.comparisonData.certification
    }));

    // Data for Radar Chart (Top 3 jobs)
    const top3 = jobs.slice(0, 3);
    const radarData = [
        { subject: 'Skills', ...Object.fromEntries(top3.map(j => [j.title, j.comparisonData.skills])) },
        { subject: 'Experience', ...Object.fromEntries(top3.map(j => [j.title, j.comparisonData.experience])) },
        { subject: 'Education', ...Object.fromEntries(top3.map(j => [j.title, j.comparisonData.education])) },
        { subject: 'Certifications', ...Object.fromEntries(top3.map(j => [j.title, j.comparisonData.certification])) },
    ];

    const colors = ['#4F46E5', '#10B981', '#F59E0B'];

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* BAR CHART */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="premium-card p-6 bg-white"
            >
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8">Category Comparison</h3>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#64748B' }} />
                            <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#64748B' }} />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                cursor={{ fill: '#F8FAFC' }}
                            />
                            <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }} />
                            <Bar dataKey="Skills" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="Experience" fill="#10B981" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="Education" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="Certifications" fill="#06B6D4" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>

            {/* RADAR CHART */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="premium-card p-6 bg-white"
            >
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8">Match Intensity (Top 3)</h3>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={radarData}>
                            <PolarGrid stroke="#E2E8F0" />
                            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fontWeight: 700, fill: '#64748B' }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} axisLine={false} tick={false} />
                            {top3.map((job, idx) => (
                                <Radar
                                    key={job.id}
                                    name={job.title}
                                    dataKey={job.title}
                                    stroke={colors[idx]}
                                    fill={colors[idx]}
                                    fillOpacity={0.4}
                                />
                            ))}
                            <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                            <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>
        </div>
    );
};

export default JobComparisonChart;
