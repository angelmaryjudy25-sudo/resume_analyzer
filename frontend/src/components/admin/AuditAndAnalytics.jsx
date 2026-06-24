import React from 'react';
import { 
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, 
    BarChart, Bar
} from 'recharts';

export const AuditLogsTable = ({ logs }) => (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 overflow-hidden h-full">
        <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-6">Security & Audit Logs</h3>
        <div className="space-y-4">
            {logs.map((log, i) => (
                <div key={i} className="flex gap-4 p-3 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 group">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all">
                        <span className="text-[10px] font-black">{log.user.slice(0, 2)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold text-slate-700 leading-snug">
                            <span className="text-slate-950 font-black">{log.user}</span>: {log.action}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-[9px] font-black uppercase text-primary bg-primary/5 px-1.5 py-0.5 rounded">{log.category}</span>
                            <span className="text-[10px] font-medium text-slate-400">{log.time}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <button className="w-full mt-6 py-2 text-[10px] font-black text-slate-500 uppercase tracking-widest border border-slate-100 rounded hover:bg-slate-50">View Stream</button>
    </div>
);

export const PlatformAnalytics = ({ growth }) => (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 shrink-0 h-full">
        <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-10">Usage & Growth Trends</h3>
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growth}>
                    <XAxis dataKey="month" tick={{ fontSize: 9, fontWeight: 'bold' }} stroke="#e2e8f0" />
                    <YAxis tick={{ fontSize: 9, fontWeight: 'bold' }} stroke="#e2e8f0" />
                    <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', fontSize: '10px' }}
                    />
                    <Area type="stepAfter" dataKey="users" stroke="#6366f1" fill="#6366f1" fillOpacity={0.05} strokeWidth={2} />
                    <Area type="stepAfter" dataKey="jobs" stroke="#ec4899" fill="#ec4899" fillOpacity={0.05} strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
);
