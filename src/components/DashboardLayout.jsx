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
import BrightAnimatedBackground from './BrightAnimatedBackground';
import '../BrightTheme.css';
import './DashboardLayout.css';

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
        <>
            <BrightAnimatedBackground />
            <div className="dashboard-container-bright">
                <nav className="navbar-bright">
                    <div className="navbar-brand-bright">
                        <HeartHandshake size={32} className="brand-icon-nav" />
                        <span className="brand-text">FeedHope</span>
                    </div>
                    <div className="navbar-actions-bright">
                        <div className="user-badge-bright">
                            <UserCircle size={22} />
                            <div className="user-details">
                                <span className="user-name">{user.name}</span>
                                <span className="user-role">{user.role.toUpperCase()}</span>
                            </div>
                        </div>
                        <button className="logout-btn-bright" onClick={handleLogout}>
                            <LogOut size={18} />
                            <span>Logout</span>
                        </button>
                    </div>
                </nav>

                <div className="dashboard-layout-bright">
                    <aside className="sidebar-bright">
                        <div className="sidebar-menu">
                            {links.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    end={link.path.split('/').length <= 2}
                                    className={({ isActive }) => `nav-item-bright ${isActive ? 'active' : ''}`}
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    </aside>

                    <main className="main-content-bright">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
