import React from 'react';

const PageHeader = ({ title, subtitle, action }) => (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">{title}</h1>
            {subtitle && <p className="text-slate-500 font-medium">{subtitle}</p>}
        </div>
        {action && (
            <div className="flex-shrink-0">
                {action}
            </div>
        )}
    </div>
);

export default PageHeader;
