import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Database, HardDrive, BarChart3, AlertCircle, CheckCircle2 } from 'lucide-react';

export const AIModelMonitor = ({ models }) => (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 shrink-0 h-full">
        <div className="flex items-center gap-2 mb-6">
            <Cpu size={18} className="text-indigo-600" />
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">AI Cluster Health</h3>
        </div>
        <div className="space-y-4">
            {models.map((model, i) => (
                <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between">
                    <div>
                        <h4 className="text-xs font-black text-slate-800">{model.name}</h4>
                        <div className="flex items-center gap-4 mt-2">
                            <div className="text-[10px] font-bold text-slate-400">Latency: <span className="text-slate-700">{model.latency}</span></div>
                            <div className="text-[10px] font-bold text-slate-400">Errors: <span className={parseFloat(model.errorRate) > 1 ? 'text-danger' : 'text-success'}>{model.errorRate}</span></div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className={`flex items-center gap-1.5 text-[9px] font-black uppercase ${
                            model.status === 'Healthy' ? 'text-success' : 'text-warning'
                        }`}>
                            {model.status === 'Healthy' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                            {model.status}
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 mt-1">{model.requests} req/24h</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const SystemHealthPanel = ({ health }) => {
    const metrics = [
        { label: 'CPU Usage', value: health.cpu, icon: Activity, color: health.cpu > 80 ? 'bg-danger' : 'bg-success' },
        { label: 'Memory', value: health.memory, icon: Database, color: health.memory > 80 ? 'bg-danger' : 'bg-primary' },
        { label: 'Storage', value: health.storage, icon: HardDrive, color: 'bg-slate-700' },
    ];

    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 h-full">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-2">Core Infrastructure</h3>
            <div className="grid grid-cols-1 gap-6">
                {metrics.map((metric, i) => (
                    <div key={i}>
                        <div className="flex justify-between items-center mb-2 px-1">
                            <div className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase">
                                <metric.icon size={14} className="text-slate-400" />
                                {metric.label}
                            </div>
                            <span className="text-xs font-black text-slate-800">{metric.value}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${metric.value}%` }}
                                transition={{ duration: 1 }}
                                className={`h-full rounded-full ${metric.color}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between px-2">
                <span className="text-[10px] font-black text-slate-400 uppercase">DB Status:</span>
                <span className="text-[10px] font-black text-success uppercase">● {health.dbStatus}</span>
            </div>
        </div>
    );
};
