import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate('/');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="auth-card">
            <h2>Login</h2>
            {error && <p style={{ color: '#ef4444' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-input" value={username} onChange={e => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Login</button>
            </form>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                Don't have an account? <Link to="/register" style={{ color: 'var(--primary)' }}>Register</Link>
            </p>
        </div>
    );
};

export default Login;
