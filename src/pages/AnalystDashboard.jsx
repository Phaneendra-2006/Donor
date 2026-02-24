import React from 'react';
import { TrendingUp, PieChart, Activity, Download } from 'lucide-react';

const AnalystDashboard = () => {
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Data Insights & Reports</h1>
                <button className="btn btn-primary" style={{ width: 'auto', display: 'flex', gap: '8px' }}>
                    <Download size={18} /> Export CSV
                </button>
            </div>

            <div className="card-grid">
                <div className="stat-card">
                    <div className="stat-icon purple">
                        <PieChart size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>4.2 Tons</h3>
                        <p>Food Saved This Month</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon green">
                        <TrendingUp size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>+ 15%</h3>
                        <p>Donation Increase vs Last Mo</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon blue">
                        <Activity size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>12,400</h3>
                        <p>Total Meals Distributed</p>
                    </div>
                </div>
            </div>

            <div className="content-card">
                <h2 style={{ marginBottom: '20px' }}>Food Waste vs Savings Trends (Mock Data)</h2>
                <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '20px', padding: '20px', borderBottom: '1px solid var(--border-color)', borderLeft: '1px solid var(--border-color)' }}>
                    {[60, 80, 45, 90, 120, 150].map((height, i) => (
                        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '100%', height: `${height}px`, background: 'var(--primary-color)', borderRadius: '4px 4px 0 0', opacity: 0.8, transition: 'all 0.3s', cursor: 'pointer' }}
                                className="bar-hover"
                            ></div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Month {i + 1}</span>
                        </div>
                    ))}
                </div>
                <style>{`
          .bar-hover:hover { opacity: 1 !important; transform: scaleY(1.05); }
        `}</style>
            </div>

            <div className="content-card" style={{ marginTop: '30px' }}>
                <h2 style={{ marginBottom: '20px' }}>Top Contributors</h2>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Donor Name</th>
                                <th>Total Donated Volume</th>
                                <th>Meals Enabled</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>Marriot Hotel City Center</td>
                                <td>1.2 Tons</td>
                                <td>~3,500 meals</td>
                            </tr>
                            <tr>
                                <td>#2</td>
                                <td>Corporate Cafeteria Co.</td>
                                <td>800 Kgs</td>
                                <td>~2,200 meals</td>
                            </tr>
                            <tr>
                                <td>#3</td>
                                <td>Wedding Hall 'Elegance'</td>
                                <td>500 Kgs</td>
                                <td>~1,400 meals</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AnalystDashboard;
