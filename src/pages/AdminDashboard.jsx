import React, { useState } from 'react';
import { Users, AlertTriangle, ShieldCheck, Activity, TrendingUp, Download, RefreshCw, CheckCircle2, XCircle } from 'lucide-react';

const AdminDashboard = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 1000);
    };

    return (
        <div className="dashboard-page">
            <div className="page-header enhanced">
                <div>
                    <h1 className="page-title gradient-text">Admin Dashboard</h1>
                    <p className="page-subtitle">Monitor and manage your platform</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button 
                        className="btn btn-secondary-outline" 
                        style={{ width: 'auto', padding: '10px 20px' }}
                        onClick={handleRefresh}
                    >
                        <RefreshCw size={18} className={isRefreshing ? 'spinning' : ''} />
                        Refresh
                    </button>
                    <button className="btn btn-primary" style={{ width: 'auto', padding: '10px 24px' }}>
                        <Download size={18} />
                        Generate Report
                    </button>
                </div>
            </div>

            <div className="card-grid enhanced">
                <div className="stat-card modern">
                    <div className="stat-icon purple pulse-animation">
                        <Users size={28} />
                    </div>
                    <div className="stat-details">
                        <div className="stat-header">
                            <h3 className="counter-number">452</h3>
                            <span className="stat-badge positive">+12</span>
                        </div>
                        <p>Total Users Managed</p>
                        <div className="stat-progress">
                            <div className="progress-bar purple" style={{ width: '78%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="stat-card modern">
                    <div className="stat-icon orange pulse-animation">
                        <AlertTriangle size={28} />
                    </div>
                    <div className="stat-details">
                        <div className="stat-header">
                            <h3 className="counter-number">12</h3>
                            <span className="stat-badge warning">Urgent</span>
                        </div>
                        <p>Pending Verifications</p>
                        <div className="stat-progress">
                            <div className="progress-bar orange" style={{ width: '35%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="stat-card modern">
                    <div className="stat-icon green pulse-animation">
                        <ShieldCheck size={28} />
                    </div>
                    <div className="stat-details">
                        <div className="stat-header">
                            <h3 className="counter-number">99.9%</h3>
                            <span className="stat-badge positive">
                                <TrendingUp size={14} />
                            </span>
                        </div>
                        <p>System Uptime</p>
                        <div className="stat-progress">
                            <div className="progress-bar green" style={{ width: '99%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="stat-card modern">
                    <div className="stat-icon blue pulse-animation">
                        <Activity size={28} />
                    </div>
                    <div className="stat-details">
                        <div className="stat-header">
                            <h3 className="counter-number">1,247</h3>
                            <span className="stat-badge positive">+5.3%</span>
                        </div>
                        <p>Active Sessions Today</p>
                        <div className="stat-progress">
                            <div className="progress-bar blue" style={{ width: '92%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-card elevated">
                <div className="card-header-actions">
                    <div>
                        <h2 className="card-title">Recent Verifications & Audits</h2>
                        <p className="card-subtitle">Latest system activities and reviews</p>
                    </div>
                    <div className="filter-tabs">
                        <button className="filter-tab active">All</button>
                        <button className="filter-tab">Pending</button>
                        <button className="filter-tab">Approved</button>
                    </div>
                </div>
                <div className="table-responsive enhanced">
                    <table className="modern-table">
                        <thead>
                            <tr>
                                <th>User / Org</th>
                                <th>Type</th>
                                <th>Request Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-row-hover">
                                <td>
                                    <div className="user-cell">
                                        <div className="user-avatar purple">CF</div>
                                        <div>
                                            <div className="user-name">City Shelter Foundation</div>
                                            <div className="user-meta">ID: NGO-2024-001</div>
                                        </div>
                                    </div>
                                </td>
                                <td><span className="type-badge ngo">NGO Registration</span></td>
                                <td>
                                    <div className="date-cell">
                                        <div>Today, 10:20 AM</div>
                                        <div className="date-relative">2 hours ago</div>
                                    </div>
                                </td>
                                <td><span className="status-badge status-pending"><AlertTriangle size={14} /> Needs Review</span></td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon success" title="Approve">
                                            <CheckCircle2 size={18} />
                                        </button>
                                        <button className="btn-icon danger" title="Reject">
                                            <XCircle size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table-row-hover">
                                <td>
                                    <div className="user-cell">
                                        <div className="user-avatar orange">BH</div>
                                        <div>
                                            <div className="user-name">BakeHouse Pvt Ltd</div>
                                            <div className="user-meta">ID: DNR-2024-087</div>
                                        </div>
                                    </div>
                                </td>
                                <td><span className="type-badge donor">Donor Registration</span></td>
                                <td>
                                    <div className="date-cell">
                                        <div>Yesterday, 2:15 PM</div>
                                        <div className="date-relative">1 day ago</div>
                                    </div>
                                </td>
                                <td><span className="status-badge status-approved"><CheckCircle2 size={14} /> Approved</span></td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-text-link">View Details</button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table-row-hover">
                                <td>
                                    <div className="user-cell">
                                        <div className="user-avatar red">SA</div>
                                        <div>
                                            <div className="user-name">SpamAccount123</div>
                                            <div className="user-meta">ID: USR-2024-445</div>
                                        </div>
                                    </div>
                                </td>
                                <td><span className="type-badge flag">Security Flag</span></td>
                                <td>
                                    <div className="date-cell">
                                        <div>12 Oct 2023</div>
                                        <div className="date-relative">4 months ago</div>
                                    </div>
                                </td>
                                <td><span className="status-badge status-rejected"><XCircle size={14} /> Suspended</span></td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-text-link">View Log</button>
                                    </div>
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
