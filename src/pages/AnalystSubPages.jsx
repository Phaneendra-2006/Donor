import React from 'react';
import { PieChart, TrendingUp, BarChart2, CheckCircle } from 'lucide-react';

export const WasteReports = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">Waste Reduction Reports</h1>
            <button className="btn btn-primary" style={{ width: 'auto' }}>Download PDF</button>
        </div>
        <div className="content-card">
            <h3 style={{ marginBottom: '20px', color: '#b370ff', fontWeight: '800', textShadow: '0 0 20px rgba(179, 112, 255, 0.4)' }}>Monthly Waste vs Saved Food (Tons)</h3>
            <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '30px', padding: '20px', borderBottom: '1px solid var(--border-color)', borderLeft: '1px solid var(--border-color)' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ height: '200px', background: 'var(--error)', opacity: 0.8, borderRadius: '4px' }}></div>
                    <span style={{ fontSize: '0.8rem', textAlign: 'center' }}>Wasted</span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ height: '140px', background: 'var(--primary-color)', opacity: 0.8, borderRadius: '4px' }}></div>
                    <span style={{ fontSize: '0.8rem', textAlign: 'center' }}>Saved</span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ height: '180px', background: 'var(--error)', opacity: 0.8, borderRadius: '4px' }}></div>
                    <span style={{ fontSize: '0.8rem', textAlign: 'center' }}>Wasted</span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ height: '210px', background: 'var(--primary-color)', opacity: 0.8, borderRadius: '4px' }}></div>
                    <span style={{ fontSize: '0.8rem', textAlign: 'center' }}>Saved</span>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
                <div><span style={{ display: 'inline-block', width: '12px', height: '12px', background: 'var(--error)', marginRight: '5px' }}></span> Previous Month</div>
                <div><span style={{ display: 'inline-block', width: '12px', height: '12px', background: 'var(--primary-color)', marginRight: '5px' }}></span> Current Month</div>
            </div>
        </div>
    </div>
);

export const ImpactAnalysis = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">Ecological & Social Impact</h1>
        </div>
        <div className="card-grid">
            <div className="stat-card">
                <div className="stat-icon purple">
                    <PieChart size={28} />
                </div>
                <div className="stat-details">
                    <h3>2,400 kg</h3>
                    <p>CO2 Emissions Prevented</p>
                </div>
            </div>
            <div className="stat-card">
                <div className="stat-icon green">
                    <CheckCircle size={28} />
                </div>
                <div className="stat-details">
                    <h3>120</h3>
                    <p>Active Verified NGOs</p>
                </div>
            </div>
            <div className="stat-card">
                <div className="stat-icon blue">
                    <TrendingUp size={28} />
                </div>
                <div className="stat-details">
                    <h3>4.5 Tons</h3>
                    <p>Monthly Savings Goal</p>
                </div>
            </div>
        </div>

        <div className="content-card">
            <h3 style={{ marginBottom: '20px', color: '#b370ff', fontWeight: '800', textShadow: '0 0 20px rgba(179, 112, 255, 0.4)' }}>Distribution by Food Categories</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                <div style={{ width: '200px', height: '200px', borderRadius: '50%', background: 'conic-gradient(var(--primary-color) 0% 45%, var(--secondary-color) 45% 75%, var(--warning) 75% 90%, var(--error) 90% 100%)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}></div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <li><span style={{ color: 'var(--primary-color)', marginRight: '10px' }}>●</span> Cooked Meals (45%)</li>
                    <li><span style={{ color: 'var(--secondary-color)', marginRight: '10px' }}>●</span> Baked Goods (30%)</li>
                    <li><span style={{ color: 'var(--warning)', marginRight: '10px' }}>●</span> Fresh Produce (15%)</li>
                    <li><span style={{ color: 'var(--error)', marginRight: '10px' }}>●</span> Packaged Items (10%)</li>
                </ul>
            </div>
        </div>
    </div>
);

export const Trends = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">Historical Trends</h1>
        </div>
        <div className="content-card">
            <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)' }}>
                <BarChart2 size={64} style={{ marginBottom: '20px', opacity: 0.5 }} />
                <h2>Growth in Platform Adoption</h2>
                <p style={{ marginTop: '10px', maxWidth: '600px', margin: '10px auto' }}>The number of active donors has increased by 30% over the past 6 months. NGOs successfully claim 85% of listings within the first hour of posting.</p>
                <button className="btn btn-secondary" style={{ marginTop: '20px', width: 'auto' }}>View Full Dataset</button>
            </div>
        </div>
    </div>
);
