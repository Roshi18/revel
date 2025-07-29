import React from 'react';
import { useHistory } from 'react-router-dom';
import './home.css';

const Home = () => {
  const history = useHistory();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userEmail');
    history.push('/login');
  };

  if (!currentUser) {
    history.push('/login');
    return null;
  }

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Your Dashboard</h1>
        <div className="user-info">
          <p>Logged in as: {currentUser.email}</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
