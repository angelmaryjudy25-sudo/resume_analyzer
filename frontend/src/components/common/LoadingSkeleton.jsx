import React from 'react';

const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
    const SkeletonItem = () => {
        if (type === 'card') {
            return (
                <div className="premium-card p-6 space-y-4">
                    <div className="flex justify-between">
                        <div className="w-10 h-10 skeleton" />
                        <div className="w-16 h-4 skeleton" />
                    </div>
                    <div className="w-1/2 h-4 skeleton" />
                    <div className="w-3/4 h-8 skeleton" />
                </div>
            );
        }
        if (type === 'list') {
            return (
                <div className="flex items-center gap-4 py-4">
                    <div className="w-10 h-10 skeleton rounded-lg" />
                    <div className="flex-1 space-y-2">
                        <div className="w-1/4 h-4 skeleton" />
                        <div className="w-1/2 h-3 skeleton" />
                    </div>
                </div>
            );
        }
        return <div className="w-full h-32 skeleton" />;
    };

    return (
        <div className={type === 'card' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' : 'space-y-2'}>
            {Array.from({ length: count }).map((_, i) => <SkeletonItem key={i} />)}
        </div>
    );
};

export default LoadingSkeleton;
