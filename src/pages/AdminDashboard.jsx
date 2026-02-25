import React, { useState, useEffect } from 'react';
import { Users, AlertTriangle, ShieldCheck, Activity, TrendingUp, Download, RefreshCw, CheckCircle2, XCircle, Eye } from 'lucide-react';
import '../DarkTheme.css';

const AdminDashboard = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [stats, setStats] = useState({
        users: 452,
        pending: 12,
        uptime: 99.9,
        sessions: 1247
    });

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 1000);
    };

    {/* Counter animation */}
    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = duration / steps;
        
        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            if (currentStep >= steps) {
                clearInterval(interval);
            }
        }, increment);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fade-in">
            {/* Page Header */}
            <div className="glass-card" style={{ marginBottom: '30px', padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <h1 className="text-gradient" style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
                            Admin Dashboard
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                            Monitor and manage your platform
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button 
                            className="btn-outline-dark" 
                            onClick={handleRefresh}
                            style={{ padding: '12px 24px' }}
                        >
                            <RefreshCw size={18} className={isRefreshing ? 'spinning' : ''} />
                            Refresh
                        </button>
                        <button className="btn-dark" style={{ padding: '12px 28px' }}>
                            <Download size={18} />
                            Generate Report
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid-dark" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: '30px' }}>
                <div className="stat-card-dark slide-up">
                    <div className="stat-icon-dark purple">
                        <Users size={28} />
                    </div>
                    <h3 className="stat-number">{stats.users}</h3>
                    <p className="stat-label">Total Users</p>
                    <div className="progress-dark">
                        <div className="progress-bar-dark" style={{ width: '78%' }}></div>
                    </div>
                    <span className="badge-dark badge-success" style={{ marginTop: '12px' }}>+12 this week</span>
                </div>

                <div className="stat-card-dark slide-up" style={{ animationDelay: '0.1s' }}>
                    <div className="stat-icon-dark pink">
                        <AlertTriangle size={28} />
                    </div>
                    <h3 className="stat-number">{stats.pending}</h3>
                    <p className="stat-label">Pending Reviews</p>
                    <div className="progress-dark">
                        <div className="progress-bar-dark" style={{ width: '35%', background: 'linear-gradient(90deg, #ec4899, #f43f5e)' }}></div>
                    </div>
                    <span className="badge-dark badge-warning" style={{ marginTop: '12px' }}>Urgent</span>
                </div>

                <div className="stat-card-dark slide-up" style={{ animationDelay: '0.2s' }}>
                    <div className="stat-icon-dark blue">
                        <ShieldCheck size={28} />
                    </div>
                    <h3 className="stat-number">{stats.uptime}%</h3>
                    <p className="stat-label">System Uptime</p>
                    <div className="progress-dark">
                        <div className="progress-bar-dark" style={{ width: '99%' }}></div>
                    </div>
                    <span className="badge-dark badge-success" style={{ marginTop: '12px' }}>
                        <TrendingUp size={14} /> Excellent
                    </span>
                </div>

                <div className="stat-card-dark slide-up" style={{ animationDelay: '0.3s' }}>
                    <div className="stat-icon-dark blue">
                        <Activity size={28} />
                    </div>
                    <h3 className="stat-number">{stats.sessions.toLocaleString()}</h3>
                    <p className="stat-label">Active Sessions</p>
                    <div className="progress-dark">
                        <div className="progress-bar-dark" style={{ width: '92%' }}></div>
                    </div>
                    <span className="badge-dark badge-info" style={{ marginTop: '12px' }}>+5.3% today</span>
                </div>
            </div>

            {/* Recent Activities Table */}
            <div className="glass-card-glow" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '28px 30px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <h2 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
                        Recent Verifications & Audits
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        Latest system activities and reviews
                    </p>
                </div>
                
                <div style={{ overflowX: 'auto' }}>
                    <table className="table-dark">
                        <thead>
                            <tr>
                                <th>User / Organization</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ 
                                            width: '40px', 
                                            height: '40px', 
                                            borderRadius: '10px', 
                                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: '700',
                                            fontSize: '0.9rem'
                                        }}>
                                            CF
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                                                City Shelter Foundation
                                            </div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                                ID: NGO-2024-001
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge-dark badge-info">NGO Registration</span>
                                </td>
                                <td>
                                    <div>Today, 10:20 AM</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>2 hours ago</div>
                                </td>
                                <td>
                                    <span className="badge-dark badge-warning">
                                        <AlertTriangle size={14} /> Needs Review
                                    </span>
                                </td>
                                <td>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button 
                                            className="btn-dark" 
                                            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                                            title="Approve"
                                        >
                                            <CheckCircle2 size={16} />
                                        </button>
                                        <button 
                                            className="btn-outline-dark" 
                                            style={{ padding: '8px 16px', fontSize: '0.85rem', borderColor: '#ef4444', color: '#ef4444' }}
                                            title="Reject"
                                        >
                                            <XCircle size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ 
                                            width: '40px', 
                                            height: '40px', 
                                            borderRadius: '10px', 
                                            background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: '700',
                                            fontSize: '0.9rem'
                                        }}>
                                            BH
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                                                BakeHouse Pvt Ltd
                                            </div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                                ID: DNR-2024-087
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge-dark badge-success">Donor Registration</span>
                                </td>
                                <td>
                                    <div>Yesterday, 2:15 PM</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>1 day ago</div>
                                </td>
                                <td>
                                    <span className="badge-dark badge-success">
                                        <CheckCircle2 size={14} /> Approved
                                    </span>
                                </td>
                                <td>
                                    <button 
                                        className="btn-outline-dark" 
                                        style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                                    >
                                        <Eye size={16} /> View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ 
                                            width: '40px', 
                                            height: '40px', 
                                            borderRadius: '10px', 
                                            background: 'linear-gradient(135deg, #fa709a, #fee140)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: '700',
                                            fontSize: '0.9rem'
                                        }}>
                                            SA
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                                                SpamAccount123
                                            </div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                                ID: USR-2024-445
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge-dark badge-danger">Security Flag</span>
                                </td>
                                <td>
                                    <div>12 Oct 2023</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>4 months ago</div>
                                </td>
                                <td>
                                    <span className="badge-dark badge-danger">
                                        <XCircle size={14} /> Suspended
                                    </span>
                                </td>
                                <td>
                                    <button 
                                        className="btn-outline-dark" 
                                        style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                                    >
                                        <Eye size={16} /> View Log
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
