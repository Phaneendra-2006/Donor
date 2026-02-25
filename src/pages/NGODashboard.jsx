import React from 'react';
import { PackageSearch, CalendarCheck, UtensilsCrossed } from 'lucide-react';

const NGODashboard = () => {
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">NGO Dashboard</h1>
                <button className="btn btn-primary" style={{ width: 'auto' }}>Browse Available Food</button>
            </div>

            <div className="card-grid">
                <div className="stat-card">
                    <div className="stat-icon blue">
                        <PackageSearch size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>45</h3>
                        <p>Active Food Listings</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon green">
                        <CalendarCheck size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>8</h3>
                        <p>My Accepted Requests</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon purple">
                        <UtensilsCrossed size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>1.2k</h3>
                        <p>People Fed This Month</p>
                    </div>
                </div>
            </div>

            <div className="content-card">
                <h2 style={{ marginBottom: '20px', color: '#00e5ff', fontWeight: '800', textShadow: '0 0 20px rgba(0, 229, 255, 0.5)' }}>Available Donations Near You</h2>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Donor</th>
                                <th>Food Type</th>
                                <th>Quantity</th>
                                <th>Distance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Grand Palace Hotel</td>
                                <td>Rice & Curries</td>
                                <td>~100 Servings</td>
                                <td>2.4 km</td>
                                <td><button className="btn btn-primary" style={{ padding: '8px 16px' }}>Request</button></td>
                            </tr>
                            <tr>
                                <td>FreshBake Bakery</td>
                                <td>Breads & Cakes</td>
                                <td>~30 Servings</td>
                                <td>4.1 km</td>
                                <td><button className="btn btn-primary" style={{ padding: '8px 16px' }}>Request</button></td>
                            </tr>
                            <tr>
                                <td>Green Valley Farm</td>
                                <td>Fresh Vegetables</td>
                                <td>50 kg</td>
                                <td>6.5 km</td>
                                <td><button className="btn btn-primary" style={{ padding: '8px 16px' }}>Request</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NGODashboard;
