import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Lightbulb } from 'lucide-react';

const AnalysisCard = ({ title, items, type = 'strength' }) => {
    const Icon = type === 'strength' ? Check : type === 'weakness' ? X : Lightbulb;
    const colorClass = type === 'strength' ? 'text-success bg-success/10' : type === 'weakness' ? 'text-danger bg-danger/10' : 'text-warning bg-warning/10';

    return (
        <div className="premium-card p-6 h-full">
            <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${colorClass}`}>
                    <Icon size={18} />
                </div>
                <h3 className="font-bold text-slate-800 uppercase tracking-wider text-xs">{title}</h3>
            </div>
            <ul className="space-y-4">
                {items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed font-medium">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${type === 'strength' ? 'bg-success' : type === 'weakness' ? 'bg-danger' : 'bg-warning'}`} />
                        {typeof item === 'string' ? item : item.text}
                        {item.priority && (
                             <span className={`ml-auto text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                                item.priority === 'high' ? 'bg-danger/10 text-danger' : 
                                item.priority === 'medium' ? 'bg-warning/10 text-warning' : 'bg-primary/10 text-primary'
                            }`}>
                                {item.priority}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnalysisCard;
