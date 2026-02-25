import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartHandshake, ShieldCheck, UserCircle2, Building, LineChart, Sparkles } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import PeopleIllustration from '../components/PeopleIllustration';
import '../DarkTheme.css';
import './LoginDark.css';

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
        { id: 'donor', title: 'Donor', icon: <UserCircle2 size={24} /> },
        { id: 'ngo', title: 'NGO', icon: <Building size={24} /> },
        { id: 'admin', title: 'Admin', icon: <ShieldCheck size={24} /> },
        { id: 'analyst', title: 'Analyst', icon: <LineChart size={24} /> }
    ];

    return (
        <>
            <AnimatedBackground />
            
            <div className="login-dark-container">
                <div className="login-content-wrapper">
                    {/* Left side - Illustration */}
                    <div className="login-illustration-side">
                        <div className="brand-header">
                            <HeartHandshake size={48} className="brand-icon" />
                            <h1 className="brand-title">FeedHope</h1>
                            <p className="brand-tagline">Connecting Hearts, Feeding Communities</p>
                        </div>
                        <PeopleIllustration />
                    </div>

                    {/* Right side - Form */}
                    <div className="login-form-side">
                        <div className="login-glass-card">
                            <div className="login-card-header">
                                <div className="sparkle-icon">
                                    <Sparkles size={32} />
                                </div>
                                <h2 className="login-title">
                                    {isLogin ? 'Welcome Back' : 'Join FeedHope'}
                                </h2>
                                <p className="login-subtitle">
                                    {isLogin ? 'Continue making a difference' : 'Start your journey to zero waste'}
                                </p>
                            </div>

                            {errorMsg && (
                                <div className="error-message-dark">
                                    {errorMsg}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="login-form-dark">
                                {!isLogin && (
                                    <div className="form-group-dark">
                                        <label className="label-dark">Full Name or Organization</label>
                                        <input
                                            type="text"
                                            className="input-dark"
                                            placeholder="Enter your name"
                                            required={!isLogin}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                )}

                                <div className="form-group-dark">
                                    <label className="label-dark">Email Address</label>
                                    <input
                                        type="email"
                                        className="input-dark"
                                        placeholder="you@example.com"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="form-group-dark">
                                    <label className="label-dark">Password</label>
                                    <input
                                        type="password"
                                        className="input-dark"
                                        placeholder="••••••••"
                                        required
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>

                                <div className="form-group-dark">
                                    <label className="label-dark">Select Your Role</label>
                                    <div className="role-grid-dark">
                                        {roleCards.map(r => (
                                            <div
                                                key={r.id}
                                                onClick={() => setRole(r.id)}
                                                className={`role-card-dark ${role === r.id ? 'active' : ''}`}
                                            >
                                                <div className="role-icon-dark">
                                                    {r.icon}
                                                </div>
                                                <span className="role-label-dark">{r.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button type="submit" className="btn-dark login-submit-btn">
                                    {isLogin ? 'Sign In' : 'Create Account'}
                                </button>
                            </form>

                            <div className="login-footer-dark">
                                <span className="footer-text">
                                    {isLogin ? "Don't have an account? " : "Already registered? "}
                                </span>
                                <button
                                    className="toggle-link-dark"
                                    onClick={() => {
                                        setIsLogin(!isLogin);
                                        setErrorMsg('');
                                    }}
                                >
                                    {isLogin ? 'Sign Up' : 'Sign In'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
