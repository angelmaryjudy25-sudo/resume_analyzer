import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, user, authInitialized } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (authInitialized && user) {
            const destination = user.role === 'admin'
                ? '/admin/dashboard'
                : '/recruiter/dashboard';
            navigate(destination, { replace: true });
        }
    }, [authInitialized, user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const profile = await login(username, password);
            const defaultDestination = profile.role === 'admin'
                ? '/admin/dashboard'
                : '/recruiter/dashboard';
            navigate(location.state?.from || defaultDestination);
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center p-6 bg-slate-950 relative overflow-hidden min-h-[calc(100vh-80px)]">
            {/* Glowing background circles */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl shadow-2xl relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 border border-primary/20">
                        <ShieldCheck size={24} />
                    </div>
                    <h2 className="text-2xl font-black text-white tracking-tight">Welcome Back</h2>
                    <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-black">Resume AI Platform</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-danger/10 border border-danger/20 text-danger rounded-xl text-xs font-bold flex items-center gap-2">
                        <span>⚠️</span> {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-xs font-black text-slate-300 uppercase tracking-widest">Username</label>
                        <div className="relative">
                            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input 
                                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                                placeholder="Enter your username"
                                value={username} 
                                onChange={e => setUsername(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-black text-slate-300 uppercase tracking-widest">Password</label>
                        <div className="relative">
                            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input 
                                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                                type="password" 
                                placeholder="••••••••"
                                value={password} 
                                onChange={e => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full btn-saas bg-primary hover:bg-primary/90 text-white py-3 text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        <LogIn size={16} />
                        Login to Dashboard
                    </button>
                </form>

                <p className="mt-8 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Don't have an account? <Link to="/register" className="text-primary hover:underline ml-1">Register</Link>
                </p>
                <p className="mt-4 text-center text-xs text-slate-600">
                    Looking to analyze your resume?{' '}
                    <Link to="/candidate/job-match" className="text-cyan-400 hover:underline">Start as a candidate</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
