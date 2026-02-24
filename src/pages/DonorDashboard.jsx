import React from 'react';
import { Package, CheckCircle, Clock, MapPin } from 'lucide-react';

const DonorDashboard = () => {
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Donor Dashboard</h1>
                <button className="btn btn-primary" style={{ width: 'auto' }}>+ Donate Food</button>
            </div>

            <div className="card-grid">
                <div className="stat-card">
                    <div className="stat-icon green">
                        <Package size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>24</h3>
                        <p>Total Donations</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon blue">
                        <CheckCircle size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>18</h3>
                        <p>Completed Deliveries</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon orange">
                        <Clock size={28} />
                    </div>
                    <div className="stat-details">
                        <h3>2</h3>
                        <p>Pending Pickup</p>
                    </div>
                </div>
            </div>

            <div className="content-card">
                <h2 style={{ marginBottom: '20px' }}>Recent Donations</h2>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Food Item</th>
                                <th>Quantity</th>
                                <th>Date / Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Vegetable Biryani</td>
                                <td>20 Servings</td>
                                <td>Today, 2:30 PM</td>
                                <td><span className="status-badge status-pending">Pending Pickup</span></td>
                            </tr>
                            <tr>
                                <td>Assorted Breads & Pastries</td>
                                <td>50 Pcs</td>
                                <td>Yesterday, 5:00 PM</td>
                                <td><span className="status-badge status-completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>Leftover Buffet Items</td>
                                <td>35 Servings</td>
                                <td>12 Oct 2023</td>
                                <td><span className="status-badge status-completed">Completed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DonorDashboard;
