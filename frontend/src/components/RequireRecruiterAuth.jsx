import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RequireRecruiterAuth = ({ children, roles = ['recruiter', 'admin'] }) => {
    const { user, loading, initAuth, authInitialized } = useAuth();
    const location = useLocation();

    useEffect(() => {
        if (!authInitialized) {
            initAuth();
        }
    }, [authInitialized, initAuth]);

    if (!authInitialized || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
                Loading...
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    if (!roles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RequireRecruiterAuth;
