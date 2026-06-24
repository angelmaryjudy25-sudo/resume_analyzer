import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorState = ({ message = "Something went wrong", onRetry }) => (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-danger/5 border border-danger/20 rounded-xl">
        <AlertCircle size={40} className="text-danger mb-4" />
        <h3 className="text-lg font-bold text-slate-800">{message}</h3>
        {onRetry && (
            <button 
                onClick={onRetry}
                className="mt-4 flex items-center gap-2 text-primary font-bold hover:underline"
            >
                <RefreshCw size={16} /> Try Again
            </button>
        )}
    </div>
);

export default ErrorState;
