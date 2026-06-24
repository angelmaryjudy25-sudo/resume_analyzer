import React from 'react';
import { PackageOpen } from 'lucide-react';

const EmptyState = ({ title = "No data found", message = "There is nothing here yet." }) => (
    <div className="flex flex-col items-center justify-center p-12 text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-300">
            <PackageOpen size={32} />
        </div>
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        <p className="text-slate-400 max-w-xs">{message}</p>
    </div>
);

export default EmptyState;
