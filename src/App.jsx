import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import DonorDashboard from './pages/DonorDashboard';
import NGODashboard from './pages/NGODashboard';
import AdminDashboard from './pages/AdminDashboard';
import AnalystDashboard from './pages/AnalystDashboard';

import { DonateFood, DonationHistory, DonorSettings } from './pages/DonorSubPages';
import { AvailableFood, MyRequests, TrackDelivery } from './pages/NGOSubPages';
import { ManageUsers, VerifyEntries, SystemLogs } from './pages/AdminSubPages';
import { WasteReports, ImpactAnalysis, Trends } from './pages/AnalystSubPages';
import './index.css';

// A simple layout wrapper that handles navbar & sidebar structure
import DashboardLayout from './components/DashboardLayout';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Protected Route Wrapper
  const ProtectedRoute = ({ children, allowedRoles }) => {
    if (!user) {
      return <Navigate to="/" replace />;
    }
    if (!allowedRoles.includes(user.role)) {
      return <Navigate to={`/${user.role}`} replace />;
    }
    return <DashboardLayout user={user} onLogout={handleLogout}>{children}</DashboardLayout>;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} user={user} />} />

        <Route
          path="/donor/*"
          element={
            <ProtectedRoute allowedRoles={['donor']}>
              <Routes>
                <Route path="/" element={<DonorDashboard />} />
                <Route path="donate" element={<DonateFood />} />
                <Route path="history" element={<DonationHistory />} />
                <Route path="settings" element={<DonorSettings />} />
              </Routes>
            </ProtectedRoute>
          }
        />

        <Route
          path="/ngo/*"
          element={
            <ProtectedRoute allowedRoles={['ngo']}>
              <Routes>
                <Route path="/" element={<NGODashboard />} />
                <Route path="food" element={<AvailableFood />} />
                <Route path="requests" element={<MyRequests />} />
                <Route path="delivery" element={<TrackDelivery />} />
              </Routes>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="users" element={<ManageUsers />} />
                <Route path="entries" element={<VerifyEntries />} />
                <Route path="logs" element={<SystemLogs />} />
              </Routes>
            </ProtectedRoute>
          }
        />

        <Route
          path="/analyst/*"
          element={
            <ProtectedRoute allowedRoles={['analyst']}>
              <Routes>
                <Route path="/" element={<AnalystDashboard />} />
                <Route path="reports" element={<WasteReports />} />
                <Route path="impact" element={<ImpactAnalysis />} />
                <Route path="trends" element={<Trends />} />
              </Routes>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
