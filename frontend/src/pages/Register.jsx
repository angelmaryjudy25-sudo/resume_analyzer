import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, UserPlus, User, Briefcase } from 'lucide-react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'candidate',
        company_name: ''
    });
    const { register, login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            await login(formData.username, formData.password);
            navigate('/');
        } catch (err) {
            setError(err?.response?.data?.message || 'Registration failed. Try another username.');
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center p-6 bg-slate-950 relative overflow-hidden min-h-[calc(100vh-80px)]">
            {/* Glowing background circles */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl shadow-2xl relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 border border-primary/20">
                        <ShieldCheck size={24} />
                    </div>
                    <h2 className="text-2xl font-black text-white tracking-tight">Create Account</h2>
                    <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-black">Join Resume AI Platform</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-danger/10 border border-danger/20 text-danger rounded-xl text-xs font-bold flex items-center gap-2">
                        <span>⚠️</span> {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <label className="block text-xs font-black text-slate-300 uppercase tracking-widest">Username</label>
                        <div className="relative">
                            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input 
                                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                                placeholder="Choose a username"
                                value={formData.username} 
                                onChange={e => setFormData({...formData, username: e.target.value})} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-black text-slate-300 uppercase tracking-widest">Email Address</label>
                        <div className="relative">
                            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input 
                                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                                type="email"
                                placeholder="name@company.com"
                                value={formData.email} 
                                onChange={e => setFormData({...formData, email: e.target.value})} 
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
                                value={formData.password} 
                                onChange={e => setFormData({...formData, password: e.target.value})} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-black text-slate-300 uppercase tracking-widest">I am a...</label>
                        <select 
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-medium text-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                            value={formData.role} 
                            onChange={e => setFormData({...formData, role: e.target.value})}
                        >
                            <option value="candidate" className="bg-slate-950 text-white">Candidate</option>
                            <option value="recruiter" className="bg-slate-950 text-white">Recruiter</option>
                        </select>
                    </div>

                    {formData.role === 'recruiter' && (
                        <div className="space-y-2">
                            <label className="block text-xs font-black text-slate-300 uppercase tracking-widest">Company Name</label>
                            <div className="relative">
                                <Briefcase size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input 
                                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                                    placeholder="Enter your company name"
                                    value={formData.company_name} 
                                    onChange={e => setFormData({...formData, company_name: e.target.value})} 
                                    required 
                                />
                            </div>
                        </div>
                    )}

                    <button 
                        type="submit"
                        className="w-full btn-saas bg-primary hover:bg-primary/90 text-white py-3 text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        <UserPlus size={16} />
                        Create Free Account
                    </button>
                </form>

                <p className="mt-8 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Already have an account? <Link to="/login" className="text-primary hover:underline ml-1">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
