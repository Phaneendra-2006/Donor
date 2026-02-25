import React from 'react';
import { PackageSearch, Clock, MapPin, Search } from 'lucide-react';

export const AvailableFood = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">Available Food Listings</h1>
        </div>
        <div className="content-card" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
                <input type="text" className="form-control" placeholder="Search by location or food type..." style={{ flex: 1 }} />
                <button className="btn btn-primary" style={{ width: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Search size={18} /> Search
                </button>
            </div>
        </div>

        <div className="card-grid">
            {[1, 2, 3, 4].map(item => (
                <div key={item} className="content-card" style={{ marginTop: 0, transition: 'all 0.3s ease' }}>
                    <h3 style={{ marginBottom: '10px', color: '#00e5ff', fontWeight: '800', textShadow: '0 0 15px rgba(0, 229, 255, 0.4)' }}>Fresh Bakery Items</h3>
                    <p style={{ color: '#b3b3b3', marginBottom: '5px', fontWeight: '600' }}><strong>Donor:</strong> Sunshine Bakery</p>
                    <p style={{ color: '#b3b3b3', marginBottom: '5px', fontWeight: '600' }}><strong>Quantity:</strong> 50+ Servings</p>
                    <p style={{ color: '#b3b3b3', marginBottom: '15px', fontWeight: '600' }}><strong>Distance:</strong> 2.{item} km away</p>
                    <button className="btn btn-primary">Request Food</button>
                </div>
            ))}
        </div>
    </div>
);

export const MyRequests = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">My Accepted Requests</h1>
        </div>
        <div className="content-card">
            <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Request ID</th>
                            <th>Food Type</th>
                            <th>Donor</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#REQ-8291</td>
                            <td>Rice & Curries</td>
                            <td>Grand Palace Hotel</td>
                            <td><span className="status-badge status-approved">Approved</span></td>
                            <td><button className="btn btn-secondary" style={{ padding: '6px 12px' }}>View Details</button></td>
                        </tr>
                        <tr>
                            <td>#REQ-8290</td>
                            <td>Vegetable Stew</td>
                            <td>City Caterers</td>
                            <td><span className="status-badge status-pending">Awaiting Donor</span></td>
                            <td><button className="btn btn-secondary" style={{ padding: '6px 12px' }}>Cancel</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export const TrackDelivery = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">Active Deliveries</h1>
        </div>
        <div className="content-card">
            <h3 style={{ marginBottom: '20px', color: '#b370ff', fontWeight: '800', textShadow: '0 0 20px rgba(179, 112, 255, 0.4)' }}>Tracking: #REQ-8291 (Grand Palace Hotel)</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', paddingLeft: '30px', borderLeft: '2px solid var(--primary-color)' }}>
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-39px', top: '0', background: 'var(--primary-color)', color: 'white', padding: '5px', borderRadius: '50%' }}><Clock size={16} /></div>
                    <h4>Request Accepted</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Today, 10:30 AM</p>
                </div>
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-39px', top: '0', background: 'var(--primary-color)', color: 'white', padding: '5px', borderRadius: '50%' }}><PackageSearch size={16} /></div>
                    <h4>Food Packed & Ready</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Today, 11:15 AM</p>
                </div>
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-39px', top: '0', background: 'var(--background)', border: '2px solid var(--primary-color)', color: 'var(--primary-color)', padding: '5px', borderRadius: '50%' }}><MapPin size={16} /></div>
                    <h4>Out for Delivery</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Waiting for driver...</p>
                </div>
            </div>
        </div>
    </div>
);
