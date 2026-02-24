import React from 'react';
import { UserCheck, UserX, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

export const ManageUsers = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">Manage Users</h1>
        </div>
        <div className="content-card">
            <div className="table-responsive">
                <table>
                    <thead>
                        {/* hrllo */}
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>U-1029</td>
                            <td>City Caterers</td>
                            <td>Donor</td>
                            <td><span className="status-badge status-approved">Active</span></td>
                            <td>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button className="btn btn-secondary" style={{ padding: '6px 12px' }}><UserX size={16} /></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>U-1030</td>
                            <td>FakeShelter Org</td>
                            <td>NGO</td>
                            <td><span className="status-badge status-rejected">Suspended</span></td>
                            <td>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button className="btn btn-primary" style={{ padding: '6px 12px' }}><UserCheck size={16} /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export const VerifyEntries = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">Verify Entries</h1>
        </div>
        <div className="content-card">
            <h3 style={{ marginBottom: '20px' }}>Pending NGO/Donor Verifications</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ padding: '20px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ color: 'var(--primary-color)' }}>Shelter Home Foundation</h4>
                        <span className="status-badge status-pending">Pending</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '10px 0' }}>Role: NGO</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '15px' }}>Submitted License: <FileText size={16} style={{ verticalAlign: 'middle', cursor: 'pointer', color: 'var(--secondary-color)' }} /> <strong>doc_license_v2.pdf</strong></p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button className="btn btn-primary" style={{ flex: 1, padding: '10px', display: 'flex', gap: '5px', justifyContent: 'center' }}><CheckCircle2 size={18} /> Approve</button>
                        <button className="btn btn-secondary" style={{ flex: 1, padding: '10px', background: 'var(--error)' }}>Reject</button>
                    </div>
                </div>
                <div style={{ padding: '20px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ color: 'var(--primary-color)' }}>Happy Baker's Shop</h4>
                        <span className="status-badge status-pending">Pending</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '10px 0' }}>Role: Donor</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '15px' }}>Submitted GST: <FileText size={16} style={{ verticalAlign: 'middle', cursor: 'pointer', color: 'var(--secondary-color)' }} /> <strong>gst_certificate.pdf</strong></p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button className="btn btn-primary" style={{ flex: 1, padding: '10px', display: 'flex', gap: '5px', justifyContent: 'center' }}><CheckCircle2 size={18} /> Approve</button>
                        <button className="btn btn-secondary" style={{ flex: 1, padding: '10px', background: 'var(--error)' }}>Reject</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const SystemLogs = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">System Logs</h1>
        </div>
        <div className="content-card" style={{ background: '#1e293b', color: '#a5b4fc', fontFamily: 'monospace' }}>
            <div style={{ padding: '20px', maxHeight: '400px', overflowY: 'auto' }}>
                <p>[10:45:02 INFO] User login successful - IP: 192.168.1.1 (U-1029)</p>
                <p>[10:45:10 WARN] Failed login attempt for user 'admin' from IP: 45.33.22.1</p>
                <p>[10:48:33 INFO] New food donation entry created (Donation ID: D-9921)</p>
                <p style={{ color: '#ef4444' }}>[10:50:01 ERROR] Database query timeout on table 'requests_log'</p>
                <p>[10:50:05 INFO] DB reconnect successful</p>
                <p>[10:52:12 INFO] NGO Request #REQ-8291 created successfully</p>
                <p>[10:52:15 INFO] Notification sent to Donor 'Grand Palace Hotel'</p>
            </div>
        </div>
    </div>
);
