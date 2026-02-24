import React from 'react';
import { Users, AlertTriangle, ShieldCheck } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Admin Dashboard</h1>
                <button className="btn btn-primary" style={{ width: 'auto' }}>Generate System Report</button>
            </div>

            <div className="card-grid">
                <div className="stat-card">
                    <div className="stat-icon purple">
                        <Users size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>452</h3>
                        <p>Total Users Managed</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon orange">
                        <AlertTriangle size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>12</h3>
                        <p>Pending Verifications</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon green">
                        <ShieldCheck size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>99.9%</h3>
                        <p>System Uptime</p>
                    </div>
                </div>
            </div>

            <div className="content-card">
                <h2 style={{ marginBottom: '20px' }}>Recent Verifications & Audits</h2>
                <div className="table-responsive">
                    <table>
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
                            <tr>
                                <td>City Shelter Foundation</td>
                                <td>NGO Registration</td>
                                <td>Today, 10:20 AM</td>
                                <td><span className="status-badge status-pending">Needs Review</span></td>
                                <td><button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>Review Doc</button></td>
                            </tr>
                            <tr>
                                <td>BakeHouse Pvt Ltd</td>
                                <td>Donor Registration</td>
                                <td>Yesterday, 2:15 PM</td>
                                <td><span className="status-badge status-approved">Approved</span></td>
                                <td><button disabled className="btn btn-secondary" style={{ opacity: 0.5, cursor: 'not-allowed', padding: '6px 12px', fontSize: '0.8rem' }}>Actioned</button></td>
                            </tr>
                            <tr>
                                <td>SpamAccount123</td>
                                <td>Donor Flag</td>
                                <td>12 Oct 2023</td>
                                <td><span className="status-badge status-rejected">Suspended</span></td>
                                <td><button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>View Log</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
