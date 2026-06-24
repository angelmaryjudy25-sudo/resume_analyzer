import React from 'react';

/**
 * Dashboard shell: sidebar + main content in a flex row so content never sits
 * under a fixed sidebar. Sidebar components must use shrink-0 + fixed width.
 */
const AppShell = ({ sidebar, children, className = 'bg-background' }) => (
    <div className={`flex min-h-screen w-full ${className}`}>
        {sidebar}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            {children}
        </div>
    </div>
);

export default AppShell;
