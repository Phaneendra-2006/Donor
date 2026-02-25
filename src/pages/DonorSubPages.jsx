import React from 'react';
import { Leaf, Clock, Settings, Save, MapPin } from 'lucide-react';

export const DonateFood = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">Donate Food</h1>
        </div>
        <div className="content-card">
            <h2 style={{ marginBottom: '20px', color: '#00e5ff', fontWeight: '800', textShadow: '0 0 20px rgba(0, 229, 255, 0.5)' }}>Food Details</h2>
            <form style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)' }}>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.8px', textShadow: '0 0 10px rgba(0, 229, 255, 0.3)' }}>Food Items Description</label>
                    <input type="text" className="form-control" placeholder="e.g. 50 Servings of Veg Biryani" />
                </div>
                <div className="form-group">
                    <label style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.8px', textShadow: '0 0 10px rgba(0, 229, 255, 0.3)' }}>Food Category</label>
                    <select className="form-control" style={{ WebkitAppearance: 'none' }}>
                        <option>Cooked Food</option>
                        <option>Raw Ingredients</option>
                        <option>Packaged Food</option>
                        <option>Fruits & Vegetables</option>
                    </select>
                </div>
                <div className="form-group">
                    <label style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.8px', textShadow: '0 0 10px rgba(0, 229, 255, 0.3)' }}>Approximate Weight / Servings</label>
                    <input type="text" className="form-control" placeholder="e.g. 15 kg" />
                </div>
                <div className="form-group">
                    <label style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.8px', textShadow: '0 0 10px rgba(0, 229, 255, 0.3)' }}>Expiry Time limit</label>
                    <input type="time" className="form-control" />
                </div>
                <div className="form-group">
                    <label style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.8px', textShadow: '0 0 10px rgba(0, 229, 255, 0.3)' }}>Pickup Location</label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input type="text" className="form-control" placeholder="Search address..." defaultValue="My Default Address" />
                        <button type="button" className="btn btn-secondary" style={{ width: 'auto', padding: '10px' }}><MapPin size={20} /></button>
                    </div>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.8px', textShadow: '0 0 10px rgba(0, 229, 255, 0.3)' }}>Additional Notes</label>
                    <textarea className="form-control" rows="3" placeholder="Contains nuts, best served hot, etc."></textarea>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                    <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Leaf size={18} /> Submit Donation
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export const DonationHistory = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">My Donations History</h1>
        </div>
        <div className="content-card">
            <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Food Item</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>NGO Assisting</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Oct 24, 2023</td>
                            <td>Vegetable Biryani</td>
                            <td>20 Servings</td>
                            <td><span className="status-badge status-completed">Completed</span></td>
                            <td>City Hope Foundation</td>
                        </tr>
                        <tr>
                            <td>Oct 15, 2023</td>
                            <td>Assorted Breads</td>
                            <td>15 Kg</td>
                            <td><span className="status-badge status-completed">Completed</span></td>
                            <td>Green Earth Shelter</td>
                        </tr>
                        <tr>
                            <td>Oct 10, 2023</td>
                            <td>Leftover Buffet</td>
                            <td>35 Servings</td>
                            <td><span className="status-badge status-completed">Completed</span></td>
                            <td>Food for All</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export const DonorSettings = () => (
    <div>
        <div className="page-header">
            <h1 className="page-title">Account Settings</h1>
        </div>
        <div className="content-card">
            <h2 style={{ marginBottom: '20px', color: '#00e5ff', fontWeight: '800', textShadow: '0 0 20px rgba(0, 229, 255, 0.5)' }}>Profile Information</h2>
            <form style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)' }}>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.8px', textShadow: '0 0 10px rgba(0, 229, 255, 0.3)' }}>Organization / User Name</label>
                    <input type="text" className="form-control" defaultValue="Grand Palace Hotel" />
                </div>
                <div className="form-group">
                    <label style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.8px', textShadow: '0 0 10px rgba(0, 229, 255, 0.3)' }}>Email Address</label>
                    <input type="email" className="form-control" defaultValue="donor@test.com" readOnly />
                </div>
                <div className="form-group">
                    <label style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.8px', textShadow: '0 0 10px rgba(0, 229, 255, 0.3)' }}>Phone Number</label>
                    <input type="tel" className="form-control" defaultValue="+91 9876543210" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.8px', textShadow: '0 0 10px rgba(0, 229, 255, 0.3)' }}>Default Pickup Address</label>
                    <textarea className="form-control" rows="2" defaultValue="12 Grand Avenue, Tech Park Phase 2, City"></textarea>
                </div>

                <div style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
                    <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Save size={18} /> Save Settings
                    </button>
                </div>
            </form>
        </div>
    </div>
);
