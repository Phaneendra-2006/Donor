import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartHandshake, ShieldCheck, UserCircle2, Building, LineChart, Sparkles, CheckCircle, Users, TrendingUp, Heart, Award, Globe } from 'lucide-react';
import BrightAnimatedBackground from '../components/BrightAnimatedBackground';
import '../BrightTheme.css';
import './LoginBright.css';

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
        { id: 'donor', title: 'Donor', icon: <UserCircle2 size={24} />, color: '#3b82f6' },
        { id: 'ngo', title: 'NGO', icon: <Building size={24} />, color: '#10b981' },
        { id: 'admin', title: 'Admin', icon: <ShieldCheck size={24} />, color: '#8b5cf6' },
        { id: 'analyst', title: 'Analyst', icon: <LineChart size={24} />, color: '#ec4899' }
    ];

    return (
        <>
            <BrightAnimatedBackground />
            
            <div className="login-bright-container">
                {/* Login Form Section */}
                <div className="login-form-section">
                    <div className="login-bright-card">
                        <div className="login-brand">
                            <div className="brand-icon-wrapper">
                                <HeartHandshake size={42} />
                            </div>
                            <h1 className="brand-name">FeedHope</h1>
                            <p className="brand-slogan">Connecting Hearts, Feeding Communities</p>
                        </div>

                        <div className="login-header-bright">
                            <Sparkles className="sparkle-icon-bright" size={28} />
                            <h2 className="login-title-bright">
                                {isLogin ? 'Welcome Back!' : 'Join FeedHope'}
                            </h2>
                            <p className="login-subtitle-bright">
                                {isLogin ? 'Continue making a difference today' : 'Start your journey to zero waste'}
                            </p>
                        </div>

                        {errorMsg && (
                            <div className="error-message-bright">
                                {errorMsg}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="login-form-bright">
                            {!isLogin && (
                                <div className="form-group-bright">
                                    <label className="label-bright">Full Name / Organization</label>
                                    <input
                                        type="text"
                                        className="input-bright"
                                        placeholder="Enter your name"
                                        required={!isLogin}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            )}

                            <div className="form-group-bright">
                                <label className="label-bright">Email Address</label>
                                <input
                                    type="email"
                                    className="input-bright"
                                    placeholder="you@example.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="form-group-bright">
                                <label className="label-bright">Password</label>
                                <input
                                    type="password"
                                    className="input-bright"
                                    placeholder="••••••••"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>

                            <div className="form-group-bright">
                                <label className="label-bright">Select Your Role</label>
                                <div className="role-grid-bright">
                                    {roleCards.map(r => (
                                        <div
                                            key={r.id}
                                            onClick={() => setRole(r.id)}
                                            className={`role-card-bright ${role === r.id ? 'active' : ''}`}
                                            style={{ '--role-color': r.color }}
                                        >
                                            <div className="role-icon-bright">
                                                {r.icon}
                                            </div>
                                            <span className="role-label-bright">{r.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button type="submit" className="btn-bright btn-submit-bright">
                                {isLogin ? 'Sign In' : 'Create Account'}
                            </button>
                        </form>

                        <div className="login-footer-bright">
                            <span className="footer-text-bright">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                            </span>
                            <button
                                className="toggle-link-bright"
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

                {/* Scrollable Project Info Section */}
                <div className="project-info-section">
                    <div className="info-hero">
                        <h2 className="info-hero-title">
                            <span className="gradient-text">Transform Lives</span> Through Food Donation
                        </h2>
                        <p className="info-hero-subtitle">
                            Join thousands of changemakers reducing food waste and fighting hunger
                        </p>
                    </div>

                    {/* Statistics Cards */}
                    <div className="stats-grid-bright">
                        <div className="stat-card-bright slide-up" style={{ animationDelay: '0s' }}>
                            <div className="stat-icon-bright blue">
                                <Users size={32} />
                            </div>
                            <h3 className="stat-number-bright">5,500+</h3>
                            <p className="stat-label-bright">Active Members</p>
                        </div>

                        <div className="stat-card-bright slide-up" style={{ animationDelay: '0.1s' }}>
                            <div className="stat-icon-bright green">
                                <Heart size={32} />
                            </div>
                            <h3 className="stat-number-bright">10M+</h3>
                            <p className="stat-label-bright">Meals Donated</p>
                        </div>

                        <div className="stat-card-bright slide-up" style={{ animationDelay: '0.2s' }}>
                            <div className="stat-icon-bright purple">
                                <Globe size={32} />
                            </div>
                            <h3 className="stat-number-bright">100+</h3>
                            <p className="stat-label-bright">Cities</p>
                        </div>

                        <div className="stat-card-bright slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="stat-icon-bright pink">
                                <Award size={32} />
                            </div>
                            <h3 className="stat-number-bright">95%</h3>
                            <p className="stat-label-bright">Success Rate</p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="features-grid-bright">
                        <div className="feature-card-bright" style={{ '--feature-color': '#3b82f6' }}>
                            <div className="feature-icon-bright">
                                <CheckCircle size={28} />
                            </div>
                            <h3 className="feature-title-bright">Easy Donation</h3>
                            <p className="feature-desc-bright">
                                Donate surplus food with just a few clicks. Our platform makes it simple and efficient.
                            </p>
                        </div>

                        <div className="feature-card-bright" style={{ '--feature-color': '#10b981' }}>
                            <div className="feature-icon-bright">
                                <TrendingUp size={28} />
                            </div>
                            <h3 className="feature-title-bright">Track Impact</h3>
                            <p className="feature-desc-bright">
                                Monitor your contributions in real-time and see the difference you're making.
                            </p>
                        </div>

                        <div className="feature-card-bright" style={{ '--feature-color': '#8b5cf6' }}>
                            <div className="feature-icon-bright">
                                <Users size={28} />
                            </div>
                            <h3 className="feature-title-bright">Verified NGOs</h3>
                            <p className="feature-desc-bright">
                                Connect with trusted, verified NGOs ensuring your donations reach those in need.
                            </p>
                        </div>

                        <div className="feature-card-bright" style={{ '--feature-color': '#ec4899' }}>
                            <div className="feature-icon-bright">
                                <Globe size={28} />
                            </div>
                            <h3 className="feature-title-bright">Global Network</h3>
                            <p className="feature-desc-bright">
                                Join a worldwide community committed to ending hunger and reducing waste.
                            </p>
                        </div>
                    </div>

                    {/* How It Works */}
                    <div className="how-it-works-bright">
                        <h2 className="section-title-bright">How It Works</h2>
                        <div className="steps-container-bright">
                            <div className="step-card-bright">
                                <div className="step-number-bright" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>1</div>
                                <h4 className="step-title-bright">Sign Up</h4>
                                <p className="step-desc-bright">Create your account as a donor, NGO, or volunteer</p>
                            </div>

                            <div className="step-arrow-bright">→</div>

                            <div className="step-card-bright">
                                <div className="step-number-bright" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>2</div>
                                <h4 className="step-title-bright">Post/Browse</h4>
                                <p className="step-desc-bright">Donors post food, NGOs browse available donations</p>
                            </div>

                            <div className="step-arrow-bright">→</div>

                            <div className="step-card-bright">
                                <div className="step-number-bright" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>3</div>
                                <h4 className="step-title-bright">Connect</h4>
                                <p className="step-desc-bright">Match made! Coordinate pickup and delivery</p>
                            </div>

                            <div className="step-arrow-bright">→</div>

                            <div className="step-card-bright">
                                <div className="step-number-bright" style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}>4</div>
                                <h4 className="step-title-bright">Impact</h4>
                                <p className="step-desc-bright">Meals reach families, impact tracked in real-time</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="cta-section-bright">
                        <h2 className="cta-title-bright">Ready to Make a Difference?</h2>
                        <p className="cta-subtitle-bright">
                            Join our community today and be part of the solution to end hunger and food waste
                        </p>
                        <button 
                            className="btn-bright btn-cta-bright"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
