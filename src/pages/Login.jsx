import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartHandshake, ShieldCheck, UserCircle2, Building, LineChart } from 'lucide-react';

const Login = ({ onLogin, user }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [role, setRole] = useState('donor');
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    // If already logged in, redirect them
    useEffect(() => {
        if (user) {
            navigate(`/${user.role}`);
        }
    }, [user, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMsg('');

        // Fetch existing users from local storage
        const storedUsers = JSON.parse(localStorage.getItem('feedHopeUsers')) || [];

        if (!isLogin) {
            // Registration Logic
            const userExists = storedUsers.find(u => u.email === formData.email);
            if (userExists) {
                setErrorMsg('An account with this email already exists.');
                return;
            }

            const newUser = {
                id: Math.random().toString(36).substr(2, 9),
                name: formData.name,
                email: formData.email,
                password: formData.password, // In a real app, never store plain text passwords!
                role: role
            };

            storedUsers.push(newUser);
            localStorage.setItem('feedHopeUsers', JSON.stringify(storedUsers));

            // Log them in automatically after registration
            onLogin(newUser);
        } else {
            // Login Logic
            const userMatch = storedUsers.find(u =>
                u.email === formData.email && u.password === formData.password && u.role === role
            );

            if (userMatch) {
                onLogin(userMatch);
            } else {
                setErrorMsg('Invalid email, password, or role. Please try again or register.');
            }
        }
    };

    const roleCards = [
        { id: 'donor', title: 'Donor', icon: <UserCircle2 size={32} /> },
        { id: 'ngo', title: 'NGO', icon: <Building size={32} /> },
        { id: 'admin', title: 'Admin', icon: <ShieldCheck size={32} /> },
        { id: 'analyst', title: 'Analyst', icon: <LineChart size={32} /> }
    ];

    return (
        <div className="login-page-wrapper">
            <div className="login-form-container">
                <div className="login-form-card">
                    <div className="login-header">
                        <div className="login-icon-wrapper">
                            <HeartHandshake size={36} />
                        </div>
                        <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                        <p>{isLogin ? 'Log in to continue your impact' : 'Start your journey to zero waste'}</p>
                    </div>

                    {errorMsg && (
                        <div style={{ background: '#fef2f2', color: '#dc2626', padding: '12px', borderRadius: 'var(--radius-sm)', marginBottom: '25px', fontSize: '0.9rem', border: '1px solid #f87171', textAlign: 'center' }}>
                            {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="form-group">
                                <label>Full Name or Organization</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    required={!isLogin}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="you@example.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="••••••••"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label>I am a...</label>
                            <div className="role-selector">
                                {roleCards.map(r => (
                                    <div
                                        key={r.id}
                                        onClick={() => setRole(r.id)}
                                        className={`role-card ${role === r.id ? 'active' : ''}`}
                                    >
                                        <div className="role-icon">
                                            {r.icon}
                                        </div>
                                        <span className="role-title">{r.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '25px', width: '100%' }}>
                            {isLogin ? 'Log In to Dashboard' : 'Register Account'}
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <span
                            style={{ color: 'var(--primary-color)', cursor: 'pointer', fontWeight: '600', transition: 'color 0.2s' }}
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setErrorMsg('');
                            }}
                        >
                            {isLogin ? 'Register here' : 'Log in instead'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
