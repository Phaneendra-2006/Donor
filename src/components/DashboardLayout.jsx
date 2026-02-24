import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    HeartHandshake,
    LogOut,
    LayoutDashboard,
    PlusCircle,
    Clock,
    Settings,
    List,
    CheckCircle,
    Truck,
    Users,
    ShieldAlert,
    BarChart,
    PieChart,
    TrendingUp,
    UserCircle
} from 'lucide-react';

const DashboardLayout = ({ user, onLogout, children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    const getSidebarLinks = (role) => {
        switch (role) {
            case 'donor':
                return [
                    { name: 'Dashboard', path: '/donor', icon: <LayoutDashboard size={20} /> },
                    { name: 'Donate Food', path: '/donor/donate', icon: <PlusCircle size={20} /> },
                    { name: 'My Donations', path: '/donor/history', icon: <Clock size={20} /> },
                    { name: 'Settings', path: '/donor/settings', icon: <Settings size={20} /> },
                ];
            case 'ngo':
                return [
                    { name: 'Dashboard', path: '/ngo', icon: <LayoutDashboard size={20} /> },
                    { name: 'Available Food', path: '/ngo/food', icon: <List size={20} /> },
                    { name: 'My Requests', path: '/ngo/requests', icon: <CheckCircle size={20} /> },
                    { name: 'Track Delivery', path: '/ngo/delivery', icon: <Truck size={20} /> },
                ];
            case 'admin':
                return [
                    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
                    { name: 'Manage Users', path: '/admin/users', icon: <Users size={20} /> },
                    { name: 'Verify Entries', path: '/admin/entries', icon: <ShieldAlert size={20} /> },
                    { name: 'System Logs', path: '/admin/logs', icon: <List size={20} /> },
                ];
            case 'analyst':
                return [
                    { name: 'Dashboard', path: '/analyst', icon: <LayoutDashboard size={20} /> },
                    { name: 'Waste Reports', path: '/analyst/reports', icon: <BarChart size={20} /> },
                    { name: 'Impact Analysis', path: '/analyst/impact', icon: <PieChart size={20} /> },
                    { name: 'Trends', path: '/analyst/trends', icon: <TrendingUp size={20} /> },
                ];
            default:
                return [];
        }
    };

    const links = getSidebarLinks(user.role);

    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <div className="navbar-brand">
                    <HeartHandshake size={28} />
                    FeedHope
                </div>
                <div className="navbar-user">
                    <div className="user-info">
                        <UserCircle size={24} color="var(--primary-color)" />
                        <span>{user.name} ({user.role.toUpperCase()})</span>
                    </div>
                    <button className="logout-btn" onClick={handleLogout}>
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </nav>

            <div className="dashboard-layout">
                <aside className="sidebar">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path.split('/').length <= 2}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            {link.icon}
                            {link.name}
                        </NavLink>
                    ))}
                </aside>

                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
