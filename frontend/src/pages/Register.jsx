import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            await login(formData.username, formData.password);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="auth-card">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-input" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-input" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-input" type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>I am a...</label>
                    <select className="form-input" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}>
                        <option value="candidate">Candidate</option>
                        <option value="recruiter">Recruiter</option>
                    </select>
                </div>
                {formData.role === 'recruiter' && (
                    <div className="form-group">
                        <label>Company Name</label>
                        <input className="form-input" value={formData.company_name} onChange={e => setFormData({...formData, company_name: e.target.value})} required />
                    </div>
                )}
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Register</button>
            </form>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                Already have an account? <Link to="/login" style={{ color: 'var(--primary)' }}>Login</Link>
            </p>
        </div>
    );
};

export default Register;
