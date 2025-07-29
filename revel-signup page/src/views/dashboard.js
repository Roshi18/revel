import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Profile Information</h3>
          <div className="profile-info">
            <p><strong>Email:</strong> {user?.email}</p>
            <button className="edit-button">Edit Profile</button>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <p>No recent activity</p>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Quick Actions</h3>
          <div className="quick-actions">
            <button className="action-button">View Orders</button>
            <button className="action-button">Saved Items</button>
            <button className="action-button">Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;