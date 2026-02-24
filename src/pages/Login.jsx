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
            <div className="login-main-content">
                <div className="login-image-section">
                    <div className="image-overlay">
                        <div className="image-content">
                            <h1>🍽️ Feed Hope</h1>
                            <h2>Together Against Hunger</h2>
                            <p>Join thousands of donors and NGOs making a real difference in the fight against food waste and hunger.</p>
                            <div className="image-features">
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span>Connect donors with those in need</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span>Reduce food waste sustainably</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span>Track your impact in real-time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="login-form-container">
                    <div className="login-form-card">
                    <div className="login-header">
                        <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                        <p>{isLogin ? 'Log in to continue your impact' : 'Start your journey to zero waste'}</p>
                        <div className="login-icon-wrapper">
                            <HeartHandshake size={36} />
                        </div>
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

            {/* Food Donation Information Section */}
            <div className="food-donation-info-section">
                <div className="info-container">
                    <div className="info-header">
                        <h2>Why Food Donation Matters</h2>
                        <p>Join us in the fight against hunger and food waste</p>
                    </div>

                    <div className="info-cards-grid">
                        <div className="info-card">
                            <div className="info-card-icon">🌍</div>
                            <h3>Global Impact</h3>
                            <p>
                                Over 828 million people face hunger worldwide, while 1.3 billion tons of food 
                                is wasted annually. Your donation can bridge this gap and save lives.
                            </p>
                        </div>

                        <div className="info-card">
                            <div className="info-card-icon">🍽️</div>
                            <h3>Reduce Food Waste</h3>
                            <p>
                                Every year, approximately 30-40% of food supply goes to waste. By donating 
                                surplus food, we can redirect it to those in need instead of landfills.
                            </p>
                        </div>

                        <div className="info-card">
                            <div className="info-card-icon">❤️</div>
                            <h3>Community Support</h3>
                            <p>
                                Food donation strengthens communities by ensuring no one goes hungry. Your 
                                contribution provides nutritious meals to children, elderly, and families in need.
                            </p>
                        </div>

                        <div className="info-card">
                            <div className="info-card-icon">♻️</div>
                            <h3>Environmental Benefits</h3>
                            <p>
                                Donating food reduces greenhouse gas emissions from decomposing waste. It's 
                                an eco-friendly way to make a difference and protect our planet.
                            </p>
                        </div>
                    </div>

                    <div className="impact-stats">
                        <div className="stat-item">
                            <h3>10M+</h3>
                            <p>Meals Donated</p>
                        </div>
                        <div className="stat-item">
                            <h3>5,000+</h3>
                            <p>Active Donors</p>
                        </div>
                        <div className="stat-item">
                            <h3>500+</h3>
                            <p>NGO Partners</p>
                        </div>
                        <div className="stat-item">
                            <h3>100+</h3>
                            <p>Cities Covered</p>
                        </div>
                    </div>

                    <div className="how-it-works">
                        <h2>How Food Donation Works</h2>
                        <div className="steps-grid">
                            <div className="step-card">
                                <div className="step-number">1</div>
                                <h4>Donors Register</h4>
                                <p>Restaurants, hotels, and individuals sign up to donate surplus food</p>
                            </div>
                            <div className="step-card">
                                <div className="step-number">2</div>
                                <h4>NGOs Connect</h4>
                                <p>Verified NGOs receive notifications about available donations</p>
                            </div>
                            <div className="step-card">
                                <div className="step-number">3</div>
                                <h4>Food Collection</h4>
                                <p>NGOs coordinate pickup and ensure food safety standards</p>
                            </div>
                            <div className="step-card">
                                <div className="step-number">4</div>
                                <h4>Distribution</h4>
                                <p>Meals reach hungry families and individuals in your community</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-banner">
                        <h2>Ready to Make a Difference?</h2>
                        <p>Join thousands of donors and NGOs working together to end hunger and reduce waste</p>
                        <button 
                            className="btn btn-primary" 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
