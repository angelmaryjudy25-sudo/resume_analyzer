import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <nav className="border-b border-slate-800 bg-slate-950 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
            <Link to="/" className="text-2xl font-black bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                Analyst
            </Link>
            <div className="flex gap-6 items-center">
                {user ? (
                    <>
                        <span className="text-slate-400 text-sm font-medium">Logged in as <b className="text-slate-100">{user.username}</b></span>
                        <button onClick={handleLogout} className="btn-saas bg-slate-800 text-slate-100 hover:bg-slate-700">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="text-slate-300 hover:text-white transition-colors">Login</Link>
                        <Link to="/register" className="btn-saas bg-primary hover:bg-primary/90 text-white">I'm Hiring</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
